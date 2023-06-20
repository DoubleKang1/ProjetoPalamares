import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Contato from './components/Contato';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SysRoutes from './SysRoutes';
import UsersProvider from './folderContext/UsersProvider';
import PostsProvider from './folderContext/PostsProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsersProvider>
          <PostsProvider>
          <Header />
          <SysRoutes />
          </PostsProvider>
        </UsersProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
