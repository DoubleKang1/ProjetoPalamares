import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa';
import './HomePost.css';
import { useState } from 'react';
import { PostContext } from '../folderContext/PostsProvider';

const HomePost = (props) => {


    const [likedPosts, setLikedPosts] = useState([]);
    const postsCtx = useContext(PostContext);

    // Função para alternar o estado do coração
    const toggleLike = (postId) => {
        if (likedPosts.includes(postId)) {
            setLikedPosts(likedPosts.filter((id) => id !== postId));
            postsCtx.removeFavorite(postId);
        } else {
            setLikedPosts([...likedPosts, postId]);
            postsCtx.addFavorite(postId);
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
