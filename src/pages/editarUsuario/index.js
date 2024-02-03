
import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu';
import { FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componentes/Head';

export default function Editarusuario() {
    const { id } = useParams(); // Correção aqui
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
        mostrardados(id); // Correção aqui
    }, [id]); // Correção aqui

    async function mostrardados(idu) {
        let listaUser = JSON.parse(localStorage.getItem("cd-usuarios"));
        const usuario = listaUser.find(user => user.id === idu); // Encontra o usuário pelo ID
        if (usuario) {
            setNome(usuario.nome);
            setEmail(usuario.email);
            setSenha(usuario.senha);
        }
    }

    function salvardados(e) {
        e.preventDefault();
        if (nome && email && senha) { // Verifica se os campos não estão vazios
            const usuario = { id, nome, email, senha };
            let listaUser = JSON.parse(localStorage.getItem("cd-usuarios")) || [];
            const index = listaUser.findIndex(user => user.id === id);
            if (index !== -1) {
                listaUser[index] = usuario;
                localStorage.setItem("cd-usuarios", JSON.stringify(listaUser));
                alert("Usuário salvo com sucesso");
                navigate('/listausuario');
            } else {
                alert("Usuário não encontrado");
            }
        } else {
            alert("Verifique! Há campos vazios!");
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
                        <div className='acao'>
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
