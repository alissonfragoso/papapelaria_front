import './styles.css';
import Logo from '../../assets/img/logo.jpg';
import Menu from '../../componentes/menu';
import '../../pages/global.css';


export default function Listausuario(){
   return(
    <div className="dashboard-container">
        <div className='menu'>
            <h1>Menu</h1>
            <Menu />
        </div>
        <div className='principal'>
        <h1>Lista Usuário</h1>
        </div>
        
    </div>

   )

}