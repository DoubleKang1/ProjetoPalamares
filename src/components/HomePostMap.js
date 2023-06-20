import React, { useContext } from 'react';
import { BooksContext } from '../context/PostsProvider';
import HomePost from './HomePost';

const HomePostMap = () => {

    const { posts } = useContext(BooksContext);

    return (
        <>
            {posts.map((post) => {
                return (
                    <HomePost key={book.id} book={book}>
                        Esse livro é muito bom
                    </HomePost>
                );
            })}
        </>
    );
};
export default HomePostMap;
