import React, { useState, useEffect } from 'react';
import { getAllCommentComics } from '../custom/service/CommentComicService';

function CommentList({comicId}) {
    const [comment, setComment] = useState(); 
        
    useEffect(() => {
        const getAllCommentComic = async () => {
            try {
                const res = await getAllCommentComics(comicId);
                setComment(res); 
            } catch (error) {
                console.log('Lỗi khi fetch comment:', error);
            }
        };
        getAllCommentComic();
    }, [comicId]);

    if (comment) {
        return (
            <div className="space-y-6">
                {comment.data.map((cm) => (
                    <div key={cm.id} className="p-4 bg-white shadow-lg rounded-lg">
                        <p className="text-lg font-medium">{cm.user.username}</p>
                        <p className="mt-2 text-gray-700">{cm.content || 'Nội dung bình luận chưa có'}</p>
                        
                        {/* Nếu có replies thì map ra luôn */}
                        {cm.replies && cm.replies.length > 0 && (
                            <div className="mt-4 pl-6 border-l-2 border-gray-200">
                                <p className="text-sm font-semibold text-gray-600">Phản hồi:</p>
                                {cm.replies.map((reply) => (
                                    <div key={reply.id} className="mt-3">
                                        <p className="font-medium text-blue-500">{reply.user.username}:</p>
                                        <p className="text-gray-700">{reply.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-4 flex justify-between items-center text-sm">
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-1 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                    </svg>
                                    <p>Like</p>
                                </button>
                                <button className="flex items-center gap-1 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                    </svg>
                                    <p>Trả lời</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="text-center text-gray-500">Không có bình luận nào.</div>
    );
}

export default CommentList;
