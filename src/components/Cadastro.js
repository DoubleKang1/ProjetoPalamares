import { NavLink } from "react-router-dom";
import './Cadastro.css'
import { useContext } from 'react';
import { useState } from 'react';
import { UsersContext } from "../folderContext/UsersProvider";


const Cadastro = () => {
    const [senhaInvalida, setSenhaInvalida] = useState(false);
    const { createUser } = useContext(UsersContext);

    return (
        <section className="area-cadastro">
            <div className="cadastro">
                <div>
                    <h1>Cadastro</h1>
                </div>

                <form onSubmit={createUser}>
                    <input type="email" id="email" placeholder="E-mail" autoFocus />
                    <input type="password" id="password" placeholder="Senha" />
                    <input type="password" id="confirmPassword" placeholder="Confirme a senha" />
                    {senhaInvalida && <div>As senhas não coincidem!</div>}
                    <input type="submit" value="Cadastrar" />
                </form>
                <p>Registrar-se como administrador?<input type="checkbox" id="adm" /></p>
                <p>Já possui uma conta?<NavLink to="/login"> Pode entrar!</NavLink></p>
            </div>
        </section>
    )
}

export default Cadastro;
