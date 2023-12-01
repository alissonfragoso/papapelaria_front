

import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { FiFilePlus } from "react-icons/fi";
import { Link } from 'react-router-dom'
import Head from '../../componentes/Head';


export default function Cadastrousuario() {


    return (
        <div className="dashboard-container">


            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>

                <Head title="Cadastro de Usuário" />

                <form>
                    <input type="text" placeholder='Digite o nome do usuário' />
                    <input type="email" placeholder='Digite o seu email' />
                    <input type="password" placeholder='Digite a senha' />
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </form>
            </div>

        </div>

    )

}