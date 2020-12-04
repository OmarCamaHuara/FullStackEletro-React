import './style.css';

export default function Lojas(props){
    return (
    <div className="container mt-5">
        <header>
            <h2 className="text-info">Nossas Lojas!</h2>
        </header>
        <hr />
        <section className="container filiais">
                <div className="filiais-box">
                    <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Varga, 5000</p>
                        <p>10 &ordm : andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                </div>
                <div className="filiais-box">
                    <h3>Sao Paulo</h3>
                        <p>Avenida Paulista, 6000</p>
                        <p>10 &ordm : andar</p>
                        <p>Centro</p>
                        <p>(21) 4444-4443</p>
                </div>
                <div className="filiais-box">
                    <h3>Santa Catalina</h3>
                        <p>Avenida Presidente Varga, 5000</p>
                        <p>10 &ordm : andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                </div>
            
        </section>
    </div>
    );
}