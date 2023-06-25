import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Contato from './components/Contato';
import Favoritos from './components/Favoritos';
import Home from './components/Home';
import Login from './components/Login';
import Pesquisa from './components/Pesquisa'; // Importe o componente Pesquisa
import { UsersContext } from './folderContext/UsersProvider';

const SysRoutes = () => {
    const { autenticado } = useContext(UsersContext);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            {autenticado && <Route path="/contato" element={<Contato />} />}
            {autenticado && <Route path="/home" element={<Home />} />}
            {autenticado && <Route path="/favoritos" element={<Favoritos />} />}
            {autenticado && <Route path="/pesquisa" element={<Pesquisa />} />}
        </Routes>
    )
}

export default SysRoutes;
