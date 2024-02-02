import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu'
import { FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componentes/Head';

export default function Editarusuario() {
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
        let listaUser = JSON.parse(localStorage.getItem("cd-produto"));

        listaUser.
            filter(value => value.id == idu).
            map(value => {
                
                setStatus(value.status);
                setDescricao(value.descricao);
                setEstoque_minimo(value.estoque_minimo);
                setEstoque_maximo(value.estoque_maximo);
               


            })
    }



    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        if (status === "")
            i++;
        else if (descricao === "")
            i++;
        else if (estoque_minimo === "" || estoque_minimo === 0)
            i++;
        else if (estoque_maximo === "" || estoque_maximo === 0)
            i++;
        if (i === 0) {
            const banco = JSON.parse(localStorage.getItem("cd-produtos") || "[]");
            banco.push(produto);
            localStorage.setItem("cd-produto", JSON.stringify(banco));
            alert("Produto salvo com sucesso");
            navigate('/listarproduto');
        } else {
            alert("Verifique! Há campos vazios!")
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
                       

                        <div className='acao'>
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