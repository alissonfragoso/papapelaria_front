
import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu';
import { FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Editarusuario() {
    const { id } = useParams(); // Correção aqui
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const usuario={
        id,
        nome,
        email,
        senha
    }
    useEffect(() => {
        mostrardados(id); // Correção aqui
    }, []); // Correção aqui

    async function mostrardados(idu) {
        // let listaUser = JSON.parse(localStorage.getItem("cd-usuarios"));
        // const usuario = listaUser.find(user => user.id === idu); // Encontra o usuário pelo ID
        // if (usuario) {
        //     setNome(usuario.nome);
        //     setEmail(usuario.email);
        //     setSenha(usuario.senha);
        // }
        api.get(`/usuario/${idu}`)
            .then(res => {
                if (res.status === 200) {
                    setNome(res.data.usuario[0].nome);
                    setEmail(res.data.usuario[0].email);
                    setSenha(res.data.usuario[0].senha);
                }
            })
    }

    function salvardados(e) {
        e.preventDefault();
        if (nome && email && senha) { // Verifica se os campos não estão vazios
            // const usuario = { id, nome, email, senha };
            // let listaUser = JSON.parse(localStorage.getItem("cd-usuarios")) || [];
            // const index = listaUser.findIndex(user => user.id === id);
            // if (index !== -1) {
            //     listaUser[index] = usuario;
            //     localStorage.setItem("cd-usuarios", JSON.stringify(listaUser));
            //     alert("Usuário salvo com sucesso");
            api.put('/usuario', usuario,
                { headers: { "Content-Type": "application/json" } })

                .then(function (response) {
                    console.log(response.data)
                    alert(response.data.mensagem);
                    navigate('/listausuario');
                })

        } else {
            alert("Usuário não encontrado");
        }

    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Editar Usuário" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>
                        <input
                            type='text'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do usuário'
                        />
                        <input
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Digite o email'
                        />
                        <input
                            type='password'
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            placeholder='Digite a senha'
                        />
                        <div className='acao' >
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>
                            <button className='btn-cancel'>
                                <MdCancel />
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
