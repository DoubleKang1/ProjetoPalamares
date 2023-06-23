import React from 'react'
import { FaHeart } from 'react-icons/fa';
import './HomePost.css';
import { useState } from 'react';

const HomePost = (props) => {


    const [likedPosts, setLikedPosts] = useState([]);

    // Função para alternar o estado do coração
    const toggleLike = (postId) => {
        if (likedPosts.includes(postId)) {
            setLikedPosts(likedPosts.filter((id) => id !== postId));
        } else {
            setLikedPosts([...likedPosts, postId]);
        }
    };

    return (
        <div>
            {
                props.posts.map((post) => {

                    const isPostLiked = likedPosts.includes(post.id);

                    return (
                        <div className='center'>
                            <div className="card">
                                <h2>{post.name}</h2>
                                <FaHeart
                                    className={`heart-icon ${isPostLiked ? 'liked' : ''}`}
                                    onClick={() => toggleLike(post.id)}
                                />
                                <img src={post.imageUrl} alt="Imagem da postagem" className="post-image" />
                                <h3 className="subtitle">{post.date} | {post.dateDeath} </h3>
                                <p className="bio">{post.bio}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>


    );
};
export default HomePost;
