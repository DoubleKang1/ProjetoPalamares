import React, { useContext, useState } from 'react';
import { PostContext } from '../folderContext/PostsProvider';
import './Favoritos.css';
import { FaHeart } from 'react-icons/fa';

const Favoritos = () => {
    const { favorites, posts } = useContext(PostContext);

    const [likedPosts, setLikedPosts] = useState([]);
    const postsCtx = useContext(PostContext);

    // Função para alternar o estado do coração
    const toggleLike = (postId) => {
        if (likedPosts.includes(postId)) {
            setLikedPosts([...likedPosts, postId]);
            postsCtx.addFavorite(postId);
        } else {
            setLikedPosts(likedPosts.filter((id) => id !== postId));
            postsCtx.removeFavorite(postId);
        }
    };

    // Filtra os posts favoritos com base nos IDs
    const favoritePosts = posts.filter((post) => favorites.includes(post.id));

    return (
        <div>
            <span className='center'><h1>Favoritos</h1></span>
            {
                favoritePosts.map((post) => {

                    const isPostLiked = likedPosts.includes(post.id);

                    return (
                        <div className='center'>
                            <div className='card'>
                                <div key={post.id}>
                                    <h2>{post.name}</h2>
                                    <FaHeart
                                        className={`heart-icon ${!isPostLiked ? 'liked' : ''}`}
                                        onClick={() => toggleLike(post.id)}
                                    />
                                    <img src={post.imageUrl} alt="Imagem da postagem" className="post-image" />
                                    <h3 className="subtitle">{post.date} | {post.dateDeath} </h3>
                                    <p className="bio">{post.bio}</p>
                                </div>
                            </div>

                        </div>

                    )
                }

                )}
            <div className='void'></div>
        </div>
    );
};

export default Favoritos;