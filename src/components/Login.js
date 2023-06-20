import './Login.css'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UsersProvider, { UsersContext } from '../folderContext/UsersProvider';

const Login = () => {

    const { authUser } = useContext(UsersContext);

    return (
        <div>
            <section className="area-login">
                <div className="login">
                    <div>
                        <h1>Login</h1>
                    </div>

                    <form onSubmit={authUser}>
                        <input type="email" id="email" placeholder="email" autoFocus />
                        <input type="password" id="password" placeholder="Senha" />
                        <input type="submit" value="Entrar" />
                    </form>
                    <p>Não tem uma conta?<NavLink to="/cadastro"> Cadastre-se aqui</NavLink></p>
                </div>
            </section>
        </div>
    )
}

export default Login;