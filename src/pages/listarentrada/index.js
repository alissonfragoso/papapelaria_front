// import React, { useState, useEffect } from 'react';
// import Menu from '../../componentes/menu';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { FiEdit, FiTrash } from "react-icons/fi";
// import { Link } from 'react-router-dom';
// import api from '../../server/api';


// export default function Listarentrada() {
//     const [banco, setBanco] = useState([]);

//     useEffect(() => {
//         mostrardados();
//     }, []);

//     function mostrardados() {
//         setBanco(JSON.parse(localStorage.getItem("cd-entradas") || "[]"));
     
        
//     }

//     const apagar = (id) => {
//         confirmAlert({
//             title: 'Excluir Produto',
//             message: 'Deseja realmente excluir esse Produto?',
//             buttons: [
//                 {
//                     label: 'Sim',
//                     onClick: () => {
//                         // let dadosnovos = banco.filter(item => item.id !== id);
//                         // localStorage.setItem("cd-entradas", JSON.stringify(dadosnovos));
//                         // setBanco(dadosnovos);
//                         // alert(`Você apagou o produto id:${id}`);
//                         api.delete(`/entrada/${id}`)
//                         .then(res=>{
//                             if(res.status==200){
//                                 alert(`Você apagou o entrada id:${id}`);
//                                 mostrardados();
//                             }else{
//                                 alert("vish  deu B.O no servidor")
//                             }
//                         })
//                     }
//                 },
//                 {
//                     label: 'Não',
//                     onClick: () => alert('Click No')
//                 }
//             ]
//         });
//     };
    


//     function mostrarnome(id_produto) {
//                 let nome = "";
//                 const Listarproduto = JSON.parse(localStorage.getItem("cd-produtos") || "[]");
        
//                 Listarproduto.
//                     filter(value => value.id == idproduto).
//                     map(value => {
        
        
//                         nome = value.descricao;
        
        
//                     })
//                 return nome;
//             }

//     return (
//         <div className="dashboard-container">
            
//             <div className='menu'>
//                 <h1>Menu</h1>
//                 <Menu />
//             </div>

//             <div className='principal'>
//                 <h1>Lista de Estoques</h1>
//                 <Link to="/entradaproduto" className='btn-novo'>Novo Cadastro</Link>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>id_produto</th>
//                             <th>produto</th>
//                             <th>quantidade</th>
//                             <th>valor unitário</th>
//                             <th>entrada</th>
//                             <th></th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
                       
//                         banco.map((usu) => (
//                             <tr key={usu.id}>
//                                 <td>{usu.id}</td>
//                                 <td>{(mostrarnome)(usu.id_produto)}</td>
//                                 <td>{usu.qtde}</td>
//                                 <td>{usu.valor_unitario}</td>
//                                 <td>{usu.data_entrada}</td>
                                
//                                 <td className='botoes'>
//                                     <FiTrash
//                                         size={18}
//                                         color='red'
//                                         cursor="pointer"
//                                         onClick={(e) => apagar(usu.id)}
//                                     />
//                                 </td>
//                             </tr>
//                         ))
//                         }
                    


//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import moment from 'moment';

import api from '../../server/api';


export default function Listarentrada() {
 
    
    const [entrada, setEntrada] = useState([]);


    useEffect(() => {
        mostrarDados();
    }, []);

    function mostrarDados() {

        api.get(`/entrada`)
            .then(res => {
                setEntrada(res.data.entrada);
                console.log(res.data.entrada)
            })
            .catch(error => {
                console.error("Erro ao buscar entradas:", error);
                // Tratar o erro de acordo com a necessidade
            });

    }

    function formatarData(data){
        return moment(data).format('DD/MM/YYYY');
    }

    const apagarEntrada = (id) => {
        confirmAlert({
            title: 'Excluir Entrada',
            message: 'Deseja realmente excluir esta entrada?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        api.delete(`/entrada/${id}`)
                            .then(res => {
                                if (res.status === 200) {
                                    alert(`Você apagou a entrada com o ID: ${id}`);
                                    mostrarDados();
                                } else {
                                    alert("Houve um problema ao excluir a entrada");
                                }
                            })
                            .catch(error => {
                                console.error("Erro ao excluir a entrada:", error);
                                alert("Houve um problema ao excluir a entrada");
                            });
                    }
                },
                {
                    label: 'Não',
                    onClick: () => console.log('Click No')
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
                <h1>Lista de Entrada</h1>
                <Link to="/entradaproduto" className='btn-novo'>Novo Cadastro</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>descrição</th>
                            <th>produto</th>
                            <th>quantidade</th>
                            <th>valor unitário</th>
                            <th>entrada</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {entrada.map(entrada => (
                            <tr key={entrada.id}>
                                <td>{entrada.id}</td>
                                <td>{entrada.descricao}</td>
                                <td>{entrada.descricao}</td>
                                <td>{entrada.quantidade}</td>
                                <td>{entrada.valor_unitario}</td>
                                <td>{formatarData(entrada.data_entrada)}</td>
                                <td className='botoes'>
                                    <FiTrash
                                        size={18}
                                        color='red'
                                        cursor="pointer"
                                        onClick={() => apagarEntrada(entrada.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
