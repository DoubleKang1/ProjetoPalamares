import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, confirmPasswordReset } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [autenticado, setAutenticado] = useState(false);
    const [senhaInvalida, setSenhaInvalida] = useState(false);
    const navigate = useNavigate();


    const authUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Usuário logado com sucesso', user);
                setAutenticado(true);
                navigate("/home");
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log('Problemas ao logar usuário', error);
                setAutenticado(false);

            });

    }

    const createUser = (event) => {
        event.preventDefault();
        console.log('Opa')
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(function () {
                    console.log('Criou!');
                })
                .catch(function (error) {
                    console.log('Não foi')
                })
        } else {
            setSenhaInvalida(true);
        }
    }

    return (
        <UsersContext.Provider value={{ autenticado: autenticado, authUser: authUser, createUser: createUser }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;