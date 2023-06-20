import React from 'react';

const HomePost = (props) => {

    console.log('asdasdsadsad', props.posts)
    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <div>
                            <p>{post.name}</p>
                            <p>{post.imageURL}</p>
                            <p>{post.date}</p>
                            <p>{post.bio}</p>


                            <p>HOMEPOST</p>
                        </div>
                    )
                })
            }
        </div>


    );
};
export default HomePost;
