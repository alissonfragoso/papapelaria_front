import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Listarestoque() {
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        mostrardados();
    }, []);

    function mostrardados() {
        const dadosLocalStorage = JSON.parse(localStorage.getItem("cd-estoques")) || [];
        setBanco(dadosLocalStorage);
       
    }
    
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
                <h1>Lista de Estoque</h1>
               
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor unitário</th>
                           
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
                                
                            </tr>
                        ))
                        }
                    


                    </tbody>
                </table>
            </div>
        </div>
    )
}
