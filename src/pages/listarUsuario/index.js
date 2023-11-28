import './styles.css';
import Logo from '../../assets/img/logo.jpg';
import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";


export default function Listausuario() {
    const dados = [
        { id: 1, nome: "Carlos", email: "carlos@gmail.com.", senha: "123" },
        { id: 2, nome: "Felipe", email: "carlos@gmail.com.", senha: "321" },
        { id: 3, nome: "Nilson", email: "carlos@gmail.com.", senha: "321" },
    ]

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <h1>Lista Usuário</h1>
                
                <button className='btn-novo'> Novo Cadastro</button>

                <table >
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        dados.map((usu) => {
                            return (
                                <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    <td className='botoes'>
                                        <FiEdit  size={18} color='#3a5795' cursor="pointer"/>
                                    </td>
                                    <td className='botoes'>
                                        <FiTrash size={18} color='red'  cursor="pointer" />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>

        </div>

    )

}