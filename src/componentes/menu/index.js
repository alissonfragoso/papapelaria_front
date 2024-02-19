import './styles.css';
import {Link} from'react-router-dom';
export default function Menu(){
    return(
        <div>
           <nav>
                <Link to="/listausuario" className='link'>Usuário</Link>
                <Link to="/listarproduto" className='link'>Produto</Link>
                <Link to="/listarentrada"className='link'>Entrada</Link>
                <Link to="/listarestoque"className='link'>Estoque</Link>
                <Link to="/listarsaida"className='link'>Saida</Link>
           </nav>
        </div>
    )
}