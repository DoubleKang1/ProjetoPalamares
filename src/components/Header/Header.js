import { NavLink } from 'react-router-dom';
import './Header.css';
import { UsersContext } from '../../folderContext/UsersProvider';
import { useContext } from 'react';

const Header = () => {

    const { autenticado } = useContext(UsersContext)

    let ul = document.querySelector('nav ul');
    let menuBtn = document.querySelector('.menu-btn i');

    function menuShow() {
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        } else {
            ul.classList.add('open');
        }
    }

    if (!autenticado) {
        return;
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/home" id="home">HOME</NavLink></li>
                <li><NavLink to="/contato" id="contato">FALE CONOSCO</NavLink></li>
                <li><NavLink to="/favoritos" id="favoritos" >FAVORITOS</NavLink>
                </li>
            </ul>

            <div className=" menu-btn">
                <i className="fa fa-bars fa-2x" onClick=" menuShow()"></i>
            </div>

            <div className="pesquisa">
                <input type="search" id="pesquisa" placeholder="Pesquise um homenageado..." />
                <p><NavLink to="/login" id="login" >login</NavLink></p>
            </div>
        </nav>
    )
}

export default Header;