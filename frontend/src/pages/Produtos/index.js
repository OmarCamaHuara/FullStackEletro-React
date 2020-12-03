import React, {useState, useEffect} from 'react';

const Produtos = () => {

        const [produ, setProdu] = useState([]);

        useEffect(async () => {
            const url ="http://localhost/proyectoFullStack/Backend/";
            const resp = await fetch(url);
            setProdu(await resp.json()); 
        }, [])

        return(
            <>
            <section className="container  produtos bg-info">
                {
                    
                    produ.map(row => {
                            return(
                            <div className="row justify-content-center">

                                <div key={row.idproduct} className="box_produto card col-3 bg-danger" style={{width:"14rem"}} id={row.categoria}>
                                    <img className="card-img-top" src={row.imagen} alt="imagem" img-fluid/>
                                    <br />
                                    <div className="card-body">
                                        <p className="card-text">{row.descripcao}</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="card-text" style={{textDecoration: "line-yhough"}}>R${row.preco}</p>
                                    </div>
                                    <div>
                                        <p className="card-text"> R${row.precoFinal} </p>
                                    </div>
                                    <a className="btn btn-dark" role="button">Comprar</a>
                                </div>
                                
                             </div>    
                            )
                        }
                   
                    )
                }
            </section>
            </>
        );
}

export default Produtos;