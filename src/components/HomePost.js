import React from 'react'
import { FaHeart } from 'react-icons/fa';
import './HomePost.css';
import { useState } from 'react';

const HomePost = (props) => {


    const [isLiked, setIsLiked] = useState(false);

    // Função para alternar o estado do coração
    const toggleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <div className='center'>
                            <div className="card">
                                <h2>{post.name}</h2>
                                <FaHeart
                                    className={`heart-icon ${isLiked ? 'liked' : ''}`}
                                    onClick={toggleLike}
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
