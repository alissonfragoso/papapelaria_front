import './styles.css';
import { useState } from 'react';
import Logo from '../../assets/img/logo.jpg';
import {  useNavigate } from 'react-router-dom';
import api from '../../server/api';





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
   <div className='logo'>
      <img src={Logo} />
   </div>
   <section className="form">
       <h1 className='l1'>Faça seu login</h1>
       <form onSubmit={logar} >
           <input placeholder="Email" 
           value={email}
           onChange={e=>setEmail(e.target.value)}
           />
           <input placeholder="Senha" type='password' 
           value={senha}
           onChange={e=>setSenha(e.target.value)}
           />
            
            
           <button className='entrar' type="submit">Entrar</button>
           <a className='novo' href="/cadastroUsuario">Novo Cadastro</a>
       </form>
   </section>
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