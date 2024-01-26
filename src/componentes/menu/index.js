import './styles.css';
import {Link} from'react-router-dom';
export default function Menu(){
    return(
        <div>
           <nav>
                <Link to="/listausuario" className='link'>Usuário</Link>
                <Link to="/cadastroproduto" className='link'>Produto</Link>
           </nav>
        </div>
    )
}