import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Contato from './components/Contato';
import Home from './components/Home';
import Login from './components/Login';

const SysRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default SysRoutes;