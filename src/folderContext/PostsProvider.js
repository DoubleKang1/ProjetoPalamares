import React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
    getDoc,
    query,
    where,
} from 'firebase/firestore';
import { db } from '../FirebaseConfig';

export const PostContext = React.createContext();

const PostsProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const fetchPosts = async () => {
        const postsAux = [];
        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            querySnapshot.forEach((doc) => {
                postsAux.push({ id: doc.id, ...doc.data() });
            });
            setPosts(postsAux);
        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const onPostSubmit = async (event) => {
        event.preventDefault();
        if (event.target.name.value.length > 100 || event.target.name.value.length < 1) {
            console.log('No No')
        } else {
            const newPost = {
                name: event.target.name.value,
                imageUrl: event.target.imageUrl.value,
                date: event.target.date.value,
                dateDeath: event.target.dateDeath.value,
                bio: event.target.bio.value,
            };
            try {
                const docRef = await addDoc(collection(db, 'posts'), newPost);
                fetchPosts();
            } catch (error) {
                console.error('Error fetching collection: ', error);
            }
        }
    };

    const addFavorite = (postId) => {
        setFavorites((prevFavorites) => [...prevFavorites, postId]);
    };

    const removeFavorite = (postId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== postId));
    };

    return (
        <PostContext.Provider
            value={{
                posts: posts,
                favorites: favorites,
                onPostSubmit: onPostSubmit,
                addFavorite: addFavorite,
                removeFavorite: removeFavorite,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};

export default PostsProvider;