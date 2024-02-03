import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Logo from '../../assets/img/logo.jpg';
import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { FiEdit, FiTrash, FiDelete, FiFilePlus, FiArrowLeft } from "react-icons/fi";

import Head from '../../componentes/Head';
import { useNavigate, Link } from 'react-router-dom';

export default function Listausuario() {
    const [dados, setDados] = useState([]);
    const [banco, setBanco] = useState([]);
    const navigate = useNavigate();

    // const dados = [
    //     { id: 1, nome: "Carlos", email: "carlos@gmail.com.", senha: "123" },
    //     { id: 2, nome: "Felipe", email: "carlos@gmail.com.", senha: "321" },
    //     { id: 3, nome: "Nilson", email: "carlos@gmail.com.", senha: "321" },
    // ]

    useEffect(() => {
        mostrardados();
    }, [])


    function mostrardados() {
        setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
    }

    const apagar = (id) => {
        confirmAlert({
            title: 'Excluir Usuário',
            message: 'Deseja realmente excluir esse usuário?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        let dadosnovos = banco.filter(item => item.id !== id);
                        localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
                        setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
                        alert(`Você apagou o usuário id:${id}`);
                    }

                },
                {
                    label: 'Não',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    return (
        <div className="dashboard-container">


            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>

                <Head title="Lista Usuário" />

                <Link to="/cadastrousuario" className='btn-novo'> Novo Cadastro</Link>

                <table >
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        banco.map((usu) => {
                            return (
                                <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    <td className='botoes'>
                                        <Link to={`/editarusuario/${usu.id}`}>

                                            <FiEdit
                                                size={18}
                                                color=' #007bff'
                                                cursor="pointer"
                                            />

                                        </Link>

                                    </td>

                                    <td className='botoes'>

                                        <FiTrash
                                            size={18}
                                            color='red'
                                            cursor="pointer"
                                            onClick={(e) => apagar(usu.id)}
                                        />

                                    </td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>

        </div>

    )

}