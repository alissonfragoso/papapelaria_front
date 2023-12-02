import React,{useState} from 'react';
import Head from '../../componentes/Head';
import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { Link } from 'react-router-dom';
import { FiFilePlus } from "react-icons/fi";
import { RiSave3Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";


export default function Cadastrousuario() {
    const[nome,setNome] = useState("");


    return (
        <div className="dashboard-container">


            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>

                <Head title="Cadastro de Usuário" />

                <div className='form-container'>
                    <form className='form-cadastro'>
                        <input type="text" value={nome} onChange={e=>setNome(e.target.value)} placeholder='Digite o nome do usuário' />
                        <input type="email" placeholder='Digite o seu email' />
                        <input type="password" placeholder='Digite a senha' />
                        <div className='acao'>
                            <button className='btn-save'> <RiSave3Fill /> Salvar</button>
                            <button className='btn-cancel'> <MdCancel /> Cancelar</button>
                        </div>
                    </form>
                    
                </div>


            </div>

        </div>

    )

}