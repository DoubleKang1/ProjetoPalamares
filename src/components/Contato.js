import React, { useState } from 'react';
import './Contato.css';

const Contato = () => {

    return (
        <div>
            <center> <h1>Contato</h1></center>
            <section className="area-contato">
                <div className="contato">

                    <form method="POST">
                        <input type="text" id="nome" placeholder="Nome" autofocus />
                        <input type="email" id="email" placeholder="Email" />
                        <input className="comentario" type="text" id="comentario" placeholder="Comentário..." />
                        <input onClick="authUser()" type="submit" value="Enviar" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contato;