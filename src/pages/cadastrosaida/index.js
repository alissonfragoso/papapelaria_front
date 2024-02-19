
import React,{useEffect, useState} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import Head from '../../componentes/Head';




export default function Cadastrosaida(){
  const navigate =useNavigate();
  const [id_produto,setId_produto]  = useState("");
  const [qtde,setQtde]  = useState("");
  const [valor_unitario,setValor_unitario]  = useState("");
  const [data_saida,setData_saida]  = useState("");
  const [produto,setProduto] = useState([]);

  
  const entrada={
      id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
      id_produto,
      qtde,
      valor_unitario,
      data_saida
  }



  // function atualizarEstoque(idProduto, quantidade, valor) {
  //   const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
  //   const produtoExistente = estoque.find(item => item.id_produto === idProduto);

  //   if (produtoExistente) {
  //     produtoExistente.qtde += Number(quantidade);
  //   } else {
  //     estoque.push({
  //       id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
  //       id_produto,
  //       qtde: quantidade,
  //       valor
  //     });
  //   }

  //   localStorage.setItem("cd-estoques", JSON.stringify(estoque));
  // }

  function atualizarEstoque(id_Produto, quantidade, valor) {
    const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
  
    if (Array.isArray(estoque)) { // Verifica se estoque é um array
      const produtoExistente = estoque.find(item => item.id_produto === id_Produto);
  
      if (produtoExistente) {
        const soma = parseFloat(produtoExistente.qtde) + parseFloat(quantidade);
        const dadosNovos = estoque.map(item => {
          if (item.id_produto === id_Produto) {
            return {
              id: item.id,
              id_produto: item.id_produto,
              qtde: soma,
              valor_unitario: valor
            };
          } else {
            return item;
          }
        });
        localStorage.setItem("cd-estoques", JSON.stringify(dadosNovos));
      } else {
        const dadosEstoque = {
          id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
          id_produto,
          qtde: parseFloat(quantidade),
          valor_unitario: valor
        };
        estoque.push(dadosEstoque);
        localStorage.setItem("cd-estoques", JSON.stringify(estoque));
      }
    } else {
      // Handle caso estoque não seja um array (pode ser null ou undefined)
      console.error("O localStorage não contém um array válido para cd-estoques.");
    }
  }
  
  
  
useEffect(()=>{
  mostrarproduto();
},[])

  function salvardados(e){
    e.preventDefault();

  let i=0;
  if(id_produto==="")
  i++;
 else if(qtde==="" || qtde===0)
  i++;
 else if(valor_unitario==="" || valor_unitario===0)
 i++;
 else if(data_saida==="")
 i++;
if(i===0)
 {
   const  banco =JSON.parse(localStorage.getItem("cd-saida")|| "[]");
  
   banco.push(entrada);
 
    localStorage.setItem("cd-saida",JSON.stringify(banco));
   
    atualizarEstoque(id_produto,qtde,valor_unitario) 
 
    alert("Sainda salvo com sucesso");
    navigate('/listarsaida');

 }else{
  alert("Verifique! Há campos vazios!")
 }
  }
  function mostrarproduto(){
   
     setProduto(JSON.parse(localStorage.getItem("cd-produtos") || "[]"));
 
    }
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Sainda" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type='text'
            value={id_produto}
            onChange={e=>setId_produto(e.target.value)}
             placeholder='Digite o id do produto'
              />
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