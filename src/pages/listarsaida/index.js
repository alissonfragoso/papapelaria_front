import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Listarsaida() {
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        mostrardados();
    }, []);

    function mostrardados() {
        setBanco(JSON.parse(localStorage.getItem("cd-saida") || "[]"));
     
        
    }

    const apagar = (id) => {
        confirmAlert({
            title: 'Excluir Produto',
            message: 'Deseja realmente excluir esse Produto?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        let dadosnovos = banco.filter(item => item.id !== id);
                        localStorage.setItem("cd-saida", JSON.stringify(dadosnovos));
                        setBanco(dadosnovos);
                        alert(`Você apagou o produto id:${id}`);
                    }
                },
                {
                    label: 'Não',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };
    


    function mostrarnome(idproduto) {
                let nome = "";
                const Listarproduto = JSON.parse(localStorage.getItem("cd-produtos") || "[]");
        
                Listarproduto.
                    filter(value => value.id == idproduto).
                    map(value => {
        
        
                        nome = value.descricao;
        
        
                    })
                return nome;
            }

    return (
        <div className="dashboard-container">
            
            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>
                <h1>Lista de Saída</h1>
                <Link to="/cadastrosaida" className='btn-novo'>Novo Cadastro</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>produto</th>
                            <th>quantidade</th>
                            <th>valor unitário</th>
                            <th>saída</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                       
                        banco.map((usu) => (
                            <tr key={usu.id}>
                                <td>{usu.id}</td>
                                <td>{(mostrarnome)(usu.id_produto)}</td>
                                <td>{usu.qtde}</td>
                                <td>{usu.valor_unitario}</td>
                                <td>{usu.data_saida}</td>
                                
                                <td className='botoes'>
                                    <FiTrash
                                        size={18}
                                        color='red'
                                        cursor="pointer"
                                        onClick={(e) => apagar(usu.id)}
                                    />
                                </td>
                            </tr>
                        ))
                        }
                    


                    </tbody>
                </table>
            </div>
        </div>
    )
}
