import './styles.css';
import {Link} from'react-router-dom';
import { FaUser } from "react-icons/fa";
import { SiProtondrive } from "react-icons/si";
import { IoEnter } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { IoIosExit } from "react-icons/io";

export default function Menu(){
    return(
        <div>
           <nav>
                <Link to="/listausuario" className='link'><FaUser /> Usuário</Link>
                <Link to="/listarproduto" className='link'><SiProtondrive /> Produto</Link>
                <Link to="/listarentrada"className='link'><IoEnter /> Entrada</Link>
                <Link to="/listarestoque"className='link'><AiOutlineStock /> Estoque</Link>
                <Link to="/listarsaida"className='link'><IoIosExit /> Saida</Link>
           </nav>
        </div>
    )
}