import { useContext } from 'react';
import './Home.css';
import { PostContext } from '../folderContext/PostsProvider';
import HomePost from '../components/HomePost'
const Home = () => {

    const postsCtx = useContext(PostContext);
    console.log(postsCtx.posts);

    return (
        <div>
            <form onSubmit={postsCtx.onPostSubmit}>
                <div className="linha-horizontal">
                    <input type="text" name="name" placeholder='Nome do homenageado' />
                    <input type="text" name="imageUrl" placeholder='Link da foto' />
                    <input type="date" name="date" placeholder='Data de nascimento' />
                    <input type="date" name="dateDeath" placeholder='Data de falecimento' />
                </div>
                <div className='textArea'>
                    <textarea rows="5" cols="60" name="bio" placeholder='Biografia'>asasa</textarea>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            <center><h1>Home</h1></center>
            <div>
                {<HomePost posts={postsCtx.posts} />}
            </div>
        </div>
    )
}

export default Home;