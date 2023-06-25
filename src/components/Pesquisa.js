import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import './Pesquisa.css'
import { PostContext } from '../folderContext/PostsProvider';

const Pesquisa = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { posts } = useContext(PostContext);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchValue = searchParams.get('name');

        if (searchValue) {
            const lowercaseSearchValue = searchValue.toLowerCase();

            const filteredPosts = posts.filter((post) =>
                post.name.toLowerCase().includes(lowercaseSearchValue)
            );

            setSearchResults(filteredPosts);
        } else {
            setSearchResults([]);
        }
    }, [location.search, posts]);

    return (
        <div>
            <span className='center'><h2 className='titulo'>Resultados da Pesquisa:</h2></span>
            <div className='center'>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((post) => (
                            <div className='card'>
                                <div key={post.id}>
                                    <h2>{post.name}</h2>
                                    <img src={post.imageUrl} alt="Imagem da postagem" className="post-image" />
                                    <h3 className="subtitle">{post.date} | {post.dateDeath} </h3>
                                    <p className="bio">{post.bio}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <div className='void'>
                        <p>Nenhum resultado encontrado.</p>
                    </div>

                )}
            </div>
        </div>
    );
};

export default Pesquisa;
