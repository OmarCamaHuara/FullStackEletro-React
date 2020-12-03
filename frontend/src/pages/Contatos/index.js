import Gmail from '../../img/gmail.png';
import Whatsapp from '../../img/whatsapp.png';
import './styles.css';

export default function Contatos(props){
    return (
    <div class="container mt-5">
        <header>
            <h2 class="text-info">Contato!</h2>
        </header>
        <hr />
        <section class="filiais">
            <div class="contacto">
                <img src={Gmail} />
                contacto@fullstackeletro
            </div>
            <div class="contacto">
                <img src={Whatsapp} />
                (11) 980808286
            </div>
        </section>

        
        <section class="formulario">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nome:</label>
                    <input type="email" class="form-control"  name="nome" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Mensaje:</label>
                    <textarea class="form-control" name="msg" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
            </form>
        </section>

            <h2>Comentarios</h2>
            <section class="comen">

                
            </section>
    </div>
    );
}