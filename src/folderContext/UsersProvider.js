import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, confirmPasswordReset } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig";

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [autenticado, setAutenticado] = useState(false);
    const [senhaInvalida, setSenhaInvalida] = useState(false);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();


    const authUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Usuário logado com sucesso', user);
                setAutenticado(true);
                setUserId(user.uid);
                navigate("/home");
            })
            .catch((error) => {
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
                    navigate("/login");
                    alert('Usuário cadastrado com sucesso!')
                })
                .catch(function (error) {
                    console.log('Não foi')
                })
        } else {
            setSenhaInvalida(true);
            console.log('Não foi não')
        }
    }

    return (
        <UsersContext.Provider value={{ autenticado: autenticado, authUser: authUser, createUser: createUser, userId: userId }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;