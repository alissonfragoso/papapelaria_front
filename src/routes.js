import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Logon from './pages/logon';


import Dashboard from './pages/dashboard';
import Cadastrousuario from './pages/cadastroUsuario';
import CadastroProduto from './pages/cadastroProduto';

import Cadastrosaida from './pages/cadastrosaida';

import Editarusuario from './pages/editarUsuario';
import Editarproduto from './pages/editarproduto';

import Listausuario from './pages/listarUsuario';
import Listarproduto from './pages/listarproduto';

import Listarentrada from './pages/listarentrada';
import Entradaproduto from './pages/entradaproduto';
import Listarestoque from './pages/listarestoque';
import Listarsaida from './pages/listarsaida';



export default function Rotas(){
    return(
        <BrowserRouter>

            <Routes>
                
                <Route path="/" exact element={<Logon/>} />
                <Route path="/dashboard" element={<Dashboard/>} />

                <Route path="/listausuario" element={<Listausuario/>} />
                <Route path="/editarusuario/:id"element={<Editarusuario/>} />
                <Route path="/cadastrousuario"element={<Cadastrousuario/>} />
                <Route path="/cadastrosaida"element={<Cadastrosaida/>} />


                <Route path="/cadastroproduto" element={<CadastroProduto/>} />
                <Route path="/listarproduto"element={<Listarproduto/>} />
                <Route path="/editarproduto/:id"element={<Editarproduto/>} />


                <Route path="/listarentrada"element={<Listarentrada/>} />
                <Route path="/entradaproduto"element={<Entradaproduto/>} />
                <Route path="/listarestoque"element={<Listarestoque/>} />
                <Route path="/listarsaida"element={<Listarsaida/>} />
               


            </Routes>
        
        </BrowserRouter>
    )
}