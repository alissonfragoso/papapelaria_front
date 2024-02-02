import './styles.css';
import {Link} from'react-router-dom';
export default function Menu(){
    return(
        <div>
           <nav>
                <Link to="/listausuario" className='link'>Usuário</Link>
                <Link to="/listarproduto" className='link'>Produto</Link>
                <Link to="/entradaproduto"className='link'>Entrada_Produto </Link>
           </nav>
        </div>
    )
}