import React from 'react'
import './HomePost.css';

const HomePost = (props) => {


    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <div className='center'>
                            <div className="card">
                                <h2>{post.name}</h2>
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
