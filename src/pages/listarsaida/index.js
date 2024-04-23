import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import api from '../../server/api';
import moment from 'moment';

export default function Listarsaida() {
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        mostrardados();
    }, []);

    function mostrardados() {
        // setBanco(JSON.parse(localStorage.getItem("cd-saida") || "[]"));

        api.get('/saida')
            .then(res => {
                console.log(res.data.saida)
                setBanco(res.data.saida)
            })
    }

    function formatarData(data){
        return moment(data).format('DD/MM/YYYY');
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
                        // localStorage.setItem("cd-saida", JSON.stringify(dadosnovos));
                        // setBanco(dadosnovos);
                        // alert(`Você apagou o produto id:${id}`);
                        api.delete(`/saida/${id}`)
                            .then(res => {
                                if (res.status == 200) {
                                    alert(`Você apagou o produto id:${id}`);
                                    mostrardados();
                                } else {
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



    // function mostrarnome(idproduto) {
    //     let nome = "";
    //     const Listarproduto = JSON.parse(localStorage.getItem("cd-produtos") || "[]");

    //     Listarproduto.
    //         filter(value => value.id == idproduto).
    //         map(value => {


    //             nome = value.descricao;


    //         })
    //     return nome;
    // }

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
                                    <td>{usu.id_produto}</td>
                                    <td>{usu.quantidade}</td>
                                    <td>{usu.valor_unitario}</td>
                                    <td>{formatarData(usu.data_saida)}</td>

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
