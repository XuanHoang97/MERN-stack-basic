import React from 'react';
import UpdateTwitter from './UpdateTwitter';

function PostItem({post}) {
    let date = new Date(post.createdAt);
    return (
        <div>
            <div className='content-twitter'>{post?.content ? post.content : 'test'}</div>

            <div className='action-twitter'>
                <div className='info-twitter'>
                    <span>{post?.author.name ? post.author.name : 'hoang97'}</span>
                    <span>date: {date}</span>
                </div>
                {
                    post?.isEditable &&
                    <div className='action-twitter'>
                        <span>Edit</span>
                        <span>Delete</span>
                    </div>
                }
            </div>
            <UpdateTwitter />
        </div>
    );
}

export default PostItem;