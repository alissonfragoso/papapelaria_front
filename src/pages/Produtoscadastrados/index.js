import React, { useEffect, useState } from 'react';
import Head from '../../componentes/Head';
import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { useNavigate } from 'react-router-dom';
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


export default function Produtocadastrados(){
  const navigate =useNavigate();
  const [id_produto,setId_produto]  = useState("");
  const [quantidade,setQuantidade]  = useState("");
  const [valor_unitario,setValor_unitario]  = useState("");
  const [data_entrada,setData_entrada]  = useState("");
  const [produto,setProduto] = useState([]);
  
  const entrada={
      id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
      id_produto,
      quantidade,
      valor_unitario,
      data_entrada
  }
  const dadosestoque={
    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
    id_produto,
    quantidade,
    valor_unitario
  }


  function alterarEstoque(id_produto, quantidade, valor) {
    const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
  
 
    const produtoExistente = estoque.find(item => item.id_produto === id_produto);
  
    if (produtoExistente) {

      let dadosnovos = estoque.filter(item => item.id_produto !== id_produto);
      const updateestoque={
                    id:produtoExistente.id,
                    id_produto:produtoExistente.id_produto,
                    quantidade:produtoExistente.quantidade+quantidade,
                    valor_unitario:produtoExistente.valor_unitario=valor
         }
         dadosnovos.push(updateestoque);
         localStorage.setItem("cd-estoques", JSON.stringify(dadosnovos));
    } else {
    

      estoque.push(dadosestoque);
    }
  
    // Atualizar o localStorage com os novos dados do estoque
    localStorage.setItem("cd-estoques", JSON.stringify(estoque));
  }
  
useEffect(()=>{
  mostrarproduto();
},[])

  function salvardados(e){
    e.preventDefault();

  let i=0;
  if(id_produto=="")
  i++;
 else if(quantidade=="" || quantidade==0)
  i++;
 else if(valor_unitario=="" || valor_unitario==0)
 i++;
 else if(data_entrada=="")
 i++;
if(i==0)
 {
   const  banco =JSON.parse(localStorage.getItem("cd-entradas"));
  
   banco.push(entrada);
   localStorage.setItem("cd-entradas",JSON.stringify(banco));
   alterarEstoque(id_produto,quantidade,valor_unitario) 
   alert("Entrada salvo com sucesso");
   navigate('/Entradaproduto');
 }else{
  alert("Verifique! Há campos vazios!")
 }
  }
  function mostrarproduto(){
   
     setProduto(JSON.parse(localStorage.getItem("cd-produto") || "[]"));
 
    }
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Entrada" />
        <div className='form-container'>
        <form className='form-cadastro' onSubmit={salvardados} >
            <input 
            type="text"
            value={id_produto}
            onChange={e=>setId_produto(e.target.value)}
             placeholder="Digite o id do produto"
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
                value={quantidade}
                onChange={e=>setQuantidade(e.target.value)}
                placeholder="Digite a quantidade"
             />
            <input 
                    type="number"
                    value={valor_unitario}
                    onChange={e=>setValor_unitario(e.target.value)}
                    placeholder="Digite o valor unitário"
            />
            <input 
                    type="date" 
                    value={data_entrada}
                    onChange={e=>setData_entrada(e.target.value)}
                    placeholder="Data da Entrada" 
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