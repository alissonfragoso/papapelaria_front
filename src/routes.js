import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Logon from './pages/logon';
import Dashboard from './pages/dashboard';
import Listausuario from './pages/listarUsuario';
import Cadastrousuario from './pages/cadastroUsuario';
import Editarusuario from './pages/editarUsuario';
import Cadastroproduto from './pages/cadastroproduto';


export default function Rotas(){
    return(
        <BrowserRouter>

            <Routes>
                
                <Route path="/" exact element={<Logon/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/listausuario" element={<Listausuario/>} />
                <Route path="/cadastrousuario"element={<Cadastrousuario/>} />
                <Route path="/editarusuario/:id"element={<Editarusuario/>} />
                <Route path="/cadastroproduto/:id" element={<Cadastroproduto/>} />


            </Routes>
        
        </BrowserRouter>
    )
}