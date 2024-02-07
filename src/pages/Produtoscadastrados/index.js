import React, { useEffect, useState } from 'react';
import Head from '../../componentes/Head';
import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { useNavigate } from 'react-router-dom';
import { FiFilePlus } from "react-icons/fi";
import { RiSave3Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";



export default function Produtoscadastrados() {
    const navigate = useNavigate();

    const [id_produto, setId_produto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor_unitario, setValor_unitario] = useState(0);
    const [Data_entrada, setData_entrada] = useState(10);
    const [produto, setProduto] = useState([]);

    const entrada = {
        id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
        id_produto,
        quantidade,
        valor_unitario,
        Data_entrada
    }

useEffect(()=>{
    mostrarproduto();
},[])

    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        if (id_produto === "")
            i++;
        else if (quantidade === "")
            i++;
        else if (valor_unitario === "" || valor_unitario === 0)
            i++;
        else if (Data_entrada === "" || Data_entrada === 0)
            i++;
        if (i === 0) {
            const banco = JSON.parse(localStorage.getItem("cd-entradas") || "[]");
            banco.push(entrada);
            localStorage.setItem("cd-entradas", JSON.stringify(banco));
            alert("Entrada salvo com sucesso");
            navigate('/entradaproduto');
        } else {
            alert("Verifique! Há campos vazios!")
        }
    }

    function mostrarproduto() {

        setProduto(JSON.parse(localStorage.getItem("cd-produtos") || "[]"));

    }


    return (
        <div className="dashboard-container">


            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>

                <Head title="Cadastro de Produto" />

                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>


                        <select value={id_produto} onChange={e => setId_produto(e.target.value)}>
                            <option className='opp'>Selecionar Produto</option>
                            {
                                produto.map((linha)=>{
                                    return(
                                        <option value={linha.id}>{linha.descricao}</option>
                                    )
                                })
                            }
                        </select>

                        <input type="text" value={id_produto} onChange={e => setId_produto(e.target.value)} placeholder='Nome/id do produto' />
                        
                        
                        <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} placeholder='Digite a quantidade' />
                        <input type="number" value={valor_unitario} onChange={e => setValor_unitario(e.target.value)} placeholder='valor' />
                        <input type="date" value={Data_entrada} onChange={e => setData_entrada(e.target.value)} placeholder='XX/XX/XXXX' />

                        <div className='acao'>
                            <button className='btn-save'> <RiSave3Fill /> Salvar</button>
                            <button className='btn-cancel'> <MdCancel /> Cancelar</button>
                        </div>

                    </form>

                </div>


            </div>

        </div>

    )
}
