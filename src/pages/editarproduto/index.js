import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import { FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';

export default function Editarproduto() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estoque_minimo, setEstoque_minimo] = useState(0);
    const [estoque_maximo, setEstoque_maximo] = useState(10);


    const produto = {
        id,
        status,
        descricao,
        estoque_minimo,
        estoque_maximo
    }
    useEffect(() => {

        mostrardados(id);
    }, [])

    async function mostrardados(idu) {
        // let listaUser = JSON.parse(localStorage.getItem("cd-produto"));
        // listaUser
        //     .filter(value => value.id == idu)
        //     .map(value => {
        //         setStatus(value.status);
        //         setDescricao(value.descricao);
        //         setEstoque_minimo(value.estoque_minimo);
        //         setEstoque_maximo(value.estoque_maximo);
        //     });
        // if (listaUser) {
            api.get(`/produto/${idu}`)
                .then(res => {
                    if (res.status === 200) {
                        setStatus(res.data.produto[0].status);
                        setDescricao(res.data.produto[0].descricao);
                        setEstoque_minimo(res.data.produto[0].estoque_minimo);
                        setEstoque_maximo(res.data.produto[0].estoque_maximo);
                    }
                })
       
    }


    // ..........................................................................................
    //{ codigo errado
    // async function mostrardados(idu) {
    //     let listaUser = JSON.parse(localStorage.getItem("cd-produto"));

    //     listaUser.
    //         filter(value => value.id == idu).
    //         map(value => {

    //             setStatus(value.status);
    //             setDescricao(value.descricao);
    //             setEstoque_minimo(value.estoque_minimo);
    //             setEstoque_maximo(value.estoque_maximo);



    //         })
    // }
    // ...........................................................................................


    function salvardados(e) {
        e.preventDefault();
        if (status && descricao && estoque_minimo && estoque_maximo) {
             // Verifica se os campos não estão vazios
            // const usuario = { id, nome, email, senha };
            // let listaUser = JSON.parse(localStorage.getItem("cd-usuarios")) || [];
            // const index = listaUser.findIndex(user => user.id === id);
            // if (index !== -1) {
            //     listaUser[index] = usuario;
            //     localStorage.setItem("cd-usuarios", JSON.stringify(listaUser));
            //     alert("Usuário salvo com sucesso");
            api.put('/produto', produto,
                { headers: { "Content-Type": "application/json" } })

                .then(function (response) {
                    console.log(response.data)
                    alert(response.data.mensagem);
                    navigate('/listarproduto');
                })

        } else {
            alert("Produto não encontrado");
        }

    }
    

    return (
        <div className="dashboard-container">

            <div className='menu'>

                <Menu />

            </div>
            <div className='principal'>
                <Head title="Editar Produto" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados} >
                        <input
                            type='text'
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            placeholder='Digite o nome do Produto'
                        />
                        <input
                            type='text'
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                            placeholder='Digite a Descrição'
                        />
                        <input
                            type='number'
                            value={estoque_minimo}
                            onChange={e => setEstoque_minimo(e.target.value)}
                            placeholder='Estoque minimo'
                        />
                        <input
                            type='number'
                            value={estoque_maximo}
                            onChange={e => setEstoque_maximo(e.target.value)}
                            placeholder='Estoque maximo'

                        />


                        <div className='acao' >
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>
                            <button className='btn-cancel'>
                                <MdCancel />
                                Cancelar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )

}