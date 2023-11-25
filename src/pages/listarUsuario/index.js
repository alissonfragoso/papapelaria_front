import './styles.css';
import Logo from '../../assets/img/logo.jpg';
import Menu from '../../componentes/menu';
import '../../pages/global.css';


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

                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {
               dados.map((usu)=>{
                return(
                  <tr key={usu.toString()}>
                    <td>{usu.id}</td>    
                    <td>{usu.nome}</td>    
                    <td>{usu.email}</td>    
                  </tr>  
                )
               }) 
            }
                
                </table>
            </div>

        </div>

    )

}