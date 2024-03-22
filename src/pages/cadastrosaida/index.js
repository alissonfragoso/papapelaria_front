
import React,{useEffect, useState} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import Head from '../../componentes/Head';
import api from '../../server/api';



export default function Cadastrosaida(){
  const navigate =useNavigate();
  const [id_produto,setId_produto]  = useState("");
  const [qtde,setQtde]  = useState("");
  const [valor_unitario,setValor_unitario]  = useState("");
  const [data_saida,setData_saida]  = useState("");
  const [produto,setProdutos] = useState([]);

  
  const saida={
      id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
      id_produto,
      qtde,
      valor_unitario,
      data_saida
  }



  // function atualizarEstoque(id_Produto, quantidade, valor) {
  //   const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
  
  //   if (Array.isArray(estoque)) { // Verifica se estoque é um array
  //     const produtoExistente = estoque.find(item => item.id_produto === id_Produto);
  
  //     if (produtoExistente) {
  //       const soma = parseFloat(produtoExistente.qtde) + parseFloat(quantidade);
  //       const dadosNovos = estoque.map(item => {
  //         if (item.id_produto === id_Produto) {
  //           return {
  //             id: item.id,
  //             id_produto: item.id_produto,
  //             qtde: soma,
  //             valor_unitario: valor
  //           };
  //         } else {
  //           return item;
  //         }
  //       });
  //       localStorage.setItem("cd-estoques", JSON.stringify(dadosNovos));
  //     } else {
  //       const dadosEstoque = {
  //         id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
  //         id_produto,
  //         qtde: parseFloat(quantidade),
  //         valor_unitario: valor
  //       };
  //       estoque.push(dadosEstoque);
  //       localStorage.setItem("cd-estoques", JSON.stringify(estoque));
  //     }
  //   } else {
  //     // Handle caso estoque não seja um array (pode ser null ou undefined)
  //     console.error("O localStorage não contém um array válido para cd-estoques.");
  //   }
  // }
  
  
  
useEffect(()=>{
  mostrarproduto();
},[])

  function salvardados(e){
    e.preventDefault();
   
    if (!id_produto || !qtde || !valor_unitario || !data_saida) {
      alert("Todos os campos são obrigatórios");
      return;
    }

    api.post('/saida', saida,
      { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        console.log(response.data)
        alert(response.data.mensagem);
        navigate('/listarsaida');
      }
      )
  }
  function mostrarproduto(){
   
    api.get(`/produto`,
    { headers: { "Content-Type": "application/json" } })
    .then(function (response) {
      setProdutos(response.data.produto);
    })

 
    }
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Saída" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
              <select value={id_produto} onChange={e=>setId_produto(e.target.value)}  >
                <option>Selecione um produto</option>
                {
                  produto.map((linha)=>{
                    return(
                      <option value={linha.id}>{linha.descricao}</option>
                    )
                  })
                }
              </select>
            <input 
            type='text'
            value={id_produto}
            onChange={e=>setId_produto(e.target.value)}
             placeholder='Digite o id do produto'
              />
            <input 
                type='number' 
                value={qtde}
                onChange={e=>setQtde(e.target.value)}
                placeholder='Digite a quantidade'
             />
         
            <input 
                    type='number' 
                    value={valor_unitario}
                    onChange={e=>setValor_unitario(e.target.value)}
                    placeholder='Digite o valor unitário' 
            />
            <input 
                    type='date' 
                    value={data_saida}
                    onChange={e=>setData_saida(e.target.value)}
                    placeholder='Data de saida' 
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