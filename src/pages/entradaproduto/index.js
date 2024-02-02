import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Entradaproduto() {
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        mostrardados();
    }, []);

    function mostrardados() {
        setBanco(JSON.parse(localStorage.getItem("cd-produto") || "[]"));
     
        
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
                        localStorage.setItem("cd-produto", JSON.stringify(dadosnovos));
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

    return (
        <div className="dashboard-container">
            
            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>
                <h1>Entrada de Produto</h1>
                <Link to="/Produtoscadastrados" className='btn-novo'>produtos</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>id_produto</th>
                            <th>Quantidade</th>
                            <th>Valor_unitario</th>
                            <th>Data_entrada</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                       
                        banco.map((usu) => (
                            <tr key={usu.id}>
                                <td>{usu.id}</td>
                                <td>{usu.id_produto}</td>
                                <td>{usu.quantidade}</td>
                                <td>{usu.valor_unitario}</td>
                                <td>{usu.Data_entrada}</td>
                               
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
