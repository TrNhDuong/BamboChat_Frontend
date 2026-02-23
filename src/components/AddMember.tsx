import { useState, useEffect } from 'react';
import { friendAPI, conversationAPI } from '../services/api';
import type { User } from '../types';
import './CreateGroup.css'; // Reuse modal styles

interface AddMemberProps {
    conversationId: string;
    existingParticipantIds: string[];
    onClose: () => void;
    onSuccess: () => void;
}

const AddMember = ({ conversationId, existingParticipantIds, onClose, onSuccess }: AddMemberProps) => {
    const [friends, setFriends] = useState<User[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadFriends = async () => {
            try {
                const { data } = await friendAPI.getFriends();
                // Filter out friends already in the group
                const availableFriends = data.filter((friend: User) => !existingParticipantIds.includes(friend._id));
                setFriends(availableFriends);
            } catch (err) {
                console.error('Failed to load friends:', err);
                setError('Không thể tải danh sách bạn bè');
            }
        };
        loadFriends();
    }, [existingParticipantIds]);

    const handleToggleMember = (userId: string) => {
        setSelectedIds(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const handleAdd = async () => {
        if (selectedIds.length === 0) {
            setError('Vui lòng chọn ít nhất một thành viên');
            return;
        }

        setLoading(true);
        setError('');
        try {
            await conversationAPI.addParticipants(conversationId, selectedIds);
            onSuccess();
            onClose();
        } catch (err: any) {
            setError(err.response?.data?.message || 'Thêm thành viên thất bại');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-group-overlay">
            <div className="create-group-card fade-in">
                <div className="modal-header">
                    <h3>Thêm thành viên</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="form-group member-selection-group">
                    <label>Chọn bạn bè để thêm ({selectedIds.length})</label>
                    <div className="friend-selection-list">
                        {friends.length === 0 ? (
                            <p className="no-friends">Tất cả bạn bè đã có mặt trong nhóm hoặc bạn chưa có bạn bè nào.</p>
                        ) : (
                            friends.map(friend => (
                                <label key={friend._id} className="friend-selection-item">
                                    <div className="friend-checkbox-wrapper">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(friend._id)}
                                            onChange={() => handleToggleMember(friend._id)}
                                        />
                                    </div>
                                    <div className="friend-small-avatar">
                                        {(friend.displayName || friend._id).charAt(0).toUpperCase()}
                                    </div>
                                    <span className="friend-id">{friend.displayName || friend._id}</span>
                                </label>
                            ))
                        )}
                    </div>
                </div>

                <div className="modal-actions">
                    <button className="btn btn-ghost" onClick={onClose} disabled={loading}>Hủy</button>
                    <button
                        className="btn btn-primary"
                        onClick={handleAdd}
                        disabled={loading || selectedIds.length === 0}
                    >
                        {loading ? 'Đang thêm...' : 'Thêm vào nhóm'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddMember;
