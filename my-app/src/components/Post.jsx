import React from 'react';

const Post = ({posts}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{posts.id}. {posts.title}</strong>
                <div>{posts.body}</div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Post;