import React from 'react'
import './HomePost.css';

const HomePost = (props) => {

    console.log('asdasdsadsad', props.posts)
    console.log('asdasdsadsad', props.imageURL)


    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <div className='center'>
                            <div className="card">
                                <h2>{post.name}</h2>
                                <img src={post.imageUrl} alt="Imagem da postagem" className="post-image" />
                                <h3 className="subtitle">{post.date}</h3>
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
