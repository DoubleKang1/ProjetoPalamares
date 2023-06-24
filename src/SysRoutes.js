import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Contato from './components/Contato';
import Favoritos from './components/Favoritos';
import Home from './components/Home';
import Login from './components/Login';
import Pesquisa from './components/Pesquisa'; // Importe o componente Pesquisa

const SysRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
    )
}

export default SysRoutes;
