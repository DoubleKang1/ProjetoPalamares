import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { UsersContext } from '../../folderContext/UsersProvider';
import { useContext } from 'react';

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const { autenticado } = useContext(UsersContext);
    const { disconnect } = useContext(UsersContext);

    if (!autenticado) {
        return null; // Retorna nulo se o usuário não estiver autenticado
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/home" id="home">HOME</NavLink></li>
                <li><NavLink to="/contato" id="contato">FALE CONOSCO</NavLink></li>
                <li><NavLink to="/favoritos" id="favoritos" >FAVORITOS</NavLink>
                </li>
            </ul>

            <div className="pesquisa">
                <input
                    type="search"
                    id="pesquisa"
                    placeholder="Pesquise um homenageado..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Link to={`/pesquisa?name=${searchValue}`} className="pesquisa_link"><button>Pesquisar</button></Link>

                <div className='logoff'>
                    <p><NavLink to="/" id="logoff" onClick={disconnect}>Logoff</NavLink></p>
                </div>
            </div>


        </nav>
    )
}

export default Header;
