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

    const fetchPosts = async () => {
        const postsAux = [];
        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
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
        console.log(event.target.name.value);
        const newPost = {
            name: event.target.name.value,
            imageUrl: event.target.imageUrl.value,
            date: event.target.date.value,
            bio: event.target.bio.value,
        };
        try {
            const docRef = await addDoc(collection(db, "posts"), newPost);
            console.log(docRef);
            fetchPosts();
        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };


    return (
        <PostContext.Provider value={{ posts: posts, onPostSubmit: onPostSubmit }}>
            {props.children}
        </PostContext.Provider>
    );
};

export default PostsProvider;