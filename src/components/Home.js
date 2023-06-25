import { useContext, useState } from 'react';
import './Home.css';
import { PostContext } from '../folderContext/PostsProvider';
import HomePost from '../components/HomePost'
const Home = () => {

    const postsCtx = useContext(PostContext);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleForm = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <div>
            <span className='center'>
                <button onClick={toggleForm}>Cadastrar post</button></span>
            {isExpanded && (
                <section className="area-post">
                    <div className="post">
                        <form onSubmit={postsCtx.onPostSubmit}>
                            <input type="text" name="name" placeholder='Nome do homenageado' />
                            <input type="text" name="imageUrl" placeholder='Link da foto' />
                            <input type="date" name="date" placeholder='Data de nascimento' />
                            <input type="date" name="dateDeath" placeholder='Data de falecimento' />
                            <textarea rows="5" cols="60" name="bio" placeholder='Biografia'></textarea>
                            <input type="submit" value="Cadastrar" />
                        </form>
                    </div>
                </section>
            )}

            <center><h1>Home</h1></center>
            <div>
                {<HomePost posts={postsCtx.posts} />}
            </div>
        </div>
    )
}

export default Home;