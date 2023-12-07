import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import Logo from '../../assets/img/logo.jpg';
import Menu from '../../componentes/menu';
import '../../pages/global.css';
import { FiEdit, FiTrash, FiDelete, FiFilePlus, FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom'
import Head from '../../componentes/Head';

export default function Listausuario() {

    // const dados = [
    //     { id: 1, nome: "Carlos", email: "carlos@gmail.com.", senha: "123" },
    //     { id: 2, nome: "Felipe", email: "carlos@gmail.com.", senha: "321" },
    //     { id: 3, nome: "Nilson", email: "carlos@gmail.com.", senha: "321" },
    // ]
    
    const banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
    const apagar = (id) => {
        confirmAlert({
            title: 'Excluir usuário',
            message: 'Deseja  realmente excluir esse usuário.',
            buttons: [
                {
                    label: 'sim',
                    onClick: () => alert(`Você apagou o usuário id: ${id}`)
                },
                {
                    label: 'Não',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    return (
        <div className="dashboard-container">


            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>

                <Head title="Lista Usuário" />

                <Link to="/cadastrousuario" className='btn-novo'> Novo Cadastro</Link>

                <table >
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        banco.map((usu) => {
                            return (
                                <tr key={usu.toString()}>
                                    <td>{usu.id}</td>
                                    <td>{usu.nome}</td>
                                    <td>{usu.email}</td>
                                    <td className='botoes'>

                                        <FiEdit
                                            size={18}
                                            color=' #007bff'
                                            cursor="pointer"
                                        />

                                    </td>

                                    <td className='botoes'>

                                        <FiTrash
                                            size={18}
                                            color='red'
                                            cursor="pointer"
                                            onClick={(e) => apagar(usu.id)}
                                        />

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