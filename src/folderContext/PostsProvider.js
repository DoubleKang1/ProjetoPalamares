import React, { useState, useEffect, useContext } from 'react';
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
import { UsersContext } from './UsersProvider';



export const PostContext = React.createContext();

const PostsProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [favorites, setFavoritesPosts] = useState([]);
    const { userId } = useContext(UsersContext);

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
        if (userId) {
            loadUserFavorites();
        }
    }, [userId]);

    const loadUserFavorites = async () => {
        try {
            const userRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                const userFavoritesData = userDoc.data().favorites;
                setFavoritesPosts(userFavoritesData);
            }
        } catch (error) {
            console.error('Erro ao carregar os favoritos do usuário: ', error);
        }
    };

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


    const searchPostsByName = async (name) => {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('name', '==', name));

        try {
            const querySnapshot = await getDocs(q);
            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            return posts;
        } catch (error) {
            console.error('Error searching posts by name:', error);
            return [];
        }
    };

    const addFavorite = async (postId) => {
        setFavoritesPosts((prevFavorites) => [...prevFavorites, postId]);

        try {
            const userRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                // Atualiza a lista de favoritos do usuário
                await setDoc(
                    userRef,
                    { favorites: [...userDoc.data().favorites, postId] },
                    { merge: true }
                );
            } else {
                // Cria um novo documento para o usuário com o post favoritado
                await setDoc(userRef, { favorites: [postId] });
            }
        } catch (error) {
            console.error('Erro ao adicionar o post aos favoritos: ', error);
        }
    };

    const removeFavorite = async (postId) => {
        setFavoritesPosts((prevFavorites) => prevFavorites.filter((id) => id !== postId));

        try {
            const userRef = doc(db, 'users', userId); // Acessa o documento do usuário logado
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                const updatedFavorites = userDoc.data().favorites.filter(
                    (id) => id !== postId
                );

                // Atualiza a lista de favoritos do usuário
                await updateDoc(userRef, { favorites: updatedFavorites });
            }
        } catch (error) {
            console.error('Erro ao remover o post dos favoritos: ', error);
        }
    };

    return (
        <PostContext.Provider
            value={{
                userId: userId,
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