import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import api from '../../server/api';


export default function Listarproduto() {
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        mostrardados();
    }, []);

    function mostrardados(){
        api.get('/produto')
        .then(res=>{
          console.log(res.data.produto)
          setBanco(res.data.produto)
        })
     
        
    }

    const apagar = (id) => {
        confirmAlert({
            title: 'Excluir Produto',
            message: 'Deseja realmente excluir esse Produto?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        // let dadosnovos = banco.filter(item => item.id !== id);
                        // localStorage.setItem("cd-produtos", JSON.stringify(dadosnovos));
                        // setBanco(dadosnovos);
                        // alert(`Você apagou o produto id:${id}`);

                        api.delete(`/produto/${id}`)
                        .then(res=>{
                            if(res.status==200){
                                alert(`Você apagou o produto id:${id}`);
                                mostrardados();
                            }else{
                                alert("vish  deu B.O no servidor")
                            }
                        })
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
                <h1>Lista de Produtos</h1>
                <Link to="/cadastroproduto" className='btn-novo'>Novo Cadastro</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Estoque Mínimo</th>
                            <th>Estoque Máximo</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                       
                        banco.map((usu) => (
                            <tr key={usu.id}>
                                <td>{usu.id}</td>
                                <td>{usu.status}</td>
                                <td>{usu.descricao}</td>
                                <td>{usu.estoque_minimo}</td>
                                <td>{usu.estoque_maximo}</td>
                                <td className='botoes'>
                                    <Link to={`/editarproduto/${usu.id}`}>
                                        <FiEdit size={18} color='#007bff' cursor="pointer" />
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
                        ))
                        }
                    


                    </tbody>
                </table>
            </div>
        </div>
    )
}
