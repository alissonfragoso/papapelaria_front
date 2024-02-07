import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Logon from './pages/logon';
import Dashboard from './pages/dashboard';
import Cadastrousuario from './pages/cadastroUsuario';
import Cadastroproduto from './pages/cadastroproduto';

import Editarusuario from './pages/editarUsuario';
import Editarproduto from './pages/editarproduto';

import Listausuario from './pages/listarUsuario';
import Listarproduto from './pages/listarproduto';

import Produtoscadastrados from './pages/produtoscadastrados';
import Entradaproduto from './pages/entradaproduto';



export default function Rotas(){
    return(
        <BrowserRouter>

            <Routes>
                
                <Route path="/" exact element={<Logon/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/listausuario" element={<Listausuario/>} />
                <Route path="/cadastrousuario"element={<Cadastrousuario/>} />
                <Route path="/cadastroproduto" element={<Cadastroproduto/>} />
                <Route path="/editarusuario/:id"element={<Editarusuario/>} />
                <Route path="/listarproduto"element={<Listarproduto/>} />
                <Route path="/editarproduto/:id"element={<Editarproduto/>} />
                <Route path="/entradaproduto"element={<Entradaproduto/>} />
                <Route path="/produtoscadastrados"element={<Produtoscadastrados/>}/>
             


            </Routes>
        
        </BrowserRouter>
    )
}