import './styles.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import { CiMenuBurger } from "react-icons/ci";
import { GrSystem } from "react-icons/gr";


export default function Dashboard(){
   return(
    <div className="dashboard-container">
        <div className='menu'>
            <h1> Menu  </h1>
            <Menu />
        </div>
        <div className='principal'>
        <h1>Stationery  System <GrSystem /></h1>
        </div>
        <div >
            
        </div>
        
    </div>

   )

}