// import React, { useState, useEffect } from 'react';
// import Menu from '../../componentes/menu';
// import api from '../../server/api';

// export default function Listarestoque() {
//     const [estoque, setEstoque] = useState([]);

//     useEffect(() => {
//         mostrarDados();
//     }, []);

//     function mostrarDados() {
//         api.get('/estoque')
//             .then(res => {
//                 console.log(res.data.estoque);
//                 setEstoque(res.data.estoque);
//             })
//             .catch(error => {
//                 console.error("Erro ao buscar dados de estoque:", error);
//             });
//     }

//     return (
//         <div className="dashboard-container">
//             <div className='menu'>
//                 <h1>Menu</h1>
//                 <Menu />
//             </div>

//             <div className='principal'>
//                 <h1>Lista de Estoque</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Produto</th>
//                             <th>Quantidade</th>
//                             <th>Valor unitário</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {estoque.map(item => (
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.produto}</td>
//                                 <td>{item.qtde}</td>
//                                 <td>{item.valor_unitario}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


// import React, { useState, useEffect } from 'react';
// import Menu from '../../componentes/menu';
// import api from '../../server/api';
import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu';
import 'react-confirm-alert/src/react-confirm-alert.css';
import api from '../../server/api';

export default function Listarestoque() {
    const [banco, setBanco] = useState([]);

    useEffect(() => {
        mostrarDados();
    }, []);

    function mostrarDados() {
        api.get('/estoque')
        .then(res=>{
            console.log(res.data.estoque)
            setBanco(res.data.estoque)
        })
    }
    
    // function mostrarnome(idproduto) {
    //     let nome = "";
    //     const Listarproduto = JSON.parse(localStorage.getItem("cd-produtos") || "[]");

    //     Listarproduto.
    //         filter(value => value.id == idproduto).
    //         map(value => {


    //             nome = value.descricao;


    //         })
    //     return nome;
    // }

    return (
        <div className="dashboard-container">
            
            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>

            <div className='principal'>
                <h1>Lista de Estoque</h1>
               
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>id produto</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor unitário</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                       
                        banco.map((usu) => (
                            <tr key={usu.id}>
                                <td>{usu.id}</td>
                                <td>{usu.id_produto}</td>
                                <td>{usu.descricao}</td>
                                <td>{usu.quantidade}</td>
                                <td>{usu.valor_unitario}</td>
                                
                            </tr>
                        ))
                        }
                    


                    </tbody>
                </table>
            </div>
        </div>
    )
}
