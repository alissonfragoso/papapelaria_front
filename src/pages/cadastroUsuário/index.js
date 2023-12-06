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
    const[email,setEmail] = useState("");
    const[senha,setSenha] = useState("");
    //const usuarios = ["carlos","carlos@gmail.com","123"]
    const usuario={
        nome,
        email,
        senha
    }

    function salvardados(e){
        e.preventDefault();
       // console.log(usuario);
       const banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
       banco.push(usuario);
       localStorage.setItem("cd-usuario",JSON.stringify(banco));
       alert("Usuário salvo com sucesso");
    }

    return (
        <div className="dashboard-container">


            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>

                <Head title="Cadastro de Usuário" />

                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>
                        <input type="text" value={nome} onChange={e=>setNome(e.target.value)} placeholder='Digite o nome do usuário' />
                        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Digite o seu email' />
                        <input type="password" value={senha} onChange={e=>setSenha(e.target.value)}placeholder='Digite a senha' />
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