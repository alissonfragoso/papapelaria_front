import React, { useEffect, useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu';
import { FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Head from '../../componentes/Head';

import api from '../../server/api';


export default function Cadastroentrada() {
  const navigate = useNavigate();
  const [id_produto, setId_produto] = useState("");
  const [qtde, setQtde] = useState("");
  const [valor_unitario, setValor_unitario] = useState("");
  const [data_entrada, setData_entrada] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    mostrarDados();
  }, []);

  const entrada = {
    id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
    id_produto,
    qtde,
    valor_unitario,
    data_entrada
  }





  function mostrarDados() {

    api.get(`/produto`,
      { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        setProdutos(response.data.produto);
      })

  }

  function salvardados(e) {
    e.preventDefault();

    if (!id_produto || !qtde || !valor_unitario || !data_entrada) {
      alert("Todos os campos são obrigatórios");
      return;
    }

    api.post('/entrada', entrada,
      { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        console.log(response.data)
        alert(response.data.mensagem);
        navigate('/listarentrada');
      }
      )

  }




  return (
    <div className="dashboard-container">
      <div className='menu'>
        <h1>Menu</h1>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Cadastro de Entrada" />
        <div className='form-container'>
          <form className='form-cadastro' onSubmit={salvardados}>

            <select value={id_produto} onChange={e => setId_produto(e.target.value)}>

              <option>Selecione um produto</option>

              {produtos.map(linha => {
                return (
                  <option value={linha.id}>{linha.descricao}</option>
                )
              })}

            </select>

            <input type='number' value={qtde} onChange={e => setQtde(e.target.value)} placeholder='Digite a quantidade' />

            <input type='number' value={valor_unitario} onChange={e => setValor_unitario(e.target.value)} placeholder='Digite o valor unitário' />

            <input type='date' value={data_entrada} onChange={e => setData_entrada(e.target.value)} placeholder='Data da Entrada' />

            <div className='acao'>
              <button className='btn-save'>
                <FaSave />
                Salvar
              </button>
              <button className='btn-cancel'>
                <MdCancel />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
