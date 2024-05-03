import './styles.css';
import { useState } from 'react';
import Logo from '../../assets/img/capa.png';
import {  useNavigate } from 'react-router-dom';
import api from '../../server/api'





export default function Logon(){

    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[senha,setSenha]=useState("");
    
   

    const logar =(e)=>{
        e.preventDefault();
        // let banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
        // let dadosnovos = banco.filter(item => item.email === email && item.senha === senha);
        
        
        api.post("usuario/login",{email,senha})
   
            .then(response=>{
            
                if(response.status==200){
                    alert(response.data.mensagem)
                    navigate('/dashboard');
                }
                if(response.status===500){
                    alert(response.data.mensagem) 
                }
                
            })
    
       
        
    }
   

   return(
   <div className="logon-container">

             <div className='capa-fundo'>
                {/* <img src={Logo} /> */}
             </div>

  <div className='form-pai'>
        <section className="form">
            <form onSubmit={logar} >
            <h1 className='l1'>Faça seu login</h1>
                <input placeholder="Email" 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <input placeholder="Senha" type='password' 
                value={senha}
                onChange={e=>setSenha(e.target.value)}
                />
                    
                    
                <button className='entrar' type="submit">Entrar</button>
                
                <a className='tx' href="/cadastroUsuario"><span class="texto">Faça o cadastro</span> aqui</a>
            </form>
        </section>
    </div>

    </div>

   )

}

    // <div className="logon-container">
        
    //     <div className='logo'>
    //        <img src={Logo}/>
    //     </div>

    //     <section className="form">
    //         <h1>Faça seu login</h1>
    //         <form onSubmit={logar} >
    //             <input placeholder="Email" value={email}onChange={e => setEmail(e.target.value)}/>
    //             <input placeholder="Senha" type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
    //             <button type="submit">Entrar</button>
    //             <a href="/cadastroUsuario">Novo Cadastro</a>
    //         </form>
    //     </section>
    // </div>