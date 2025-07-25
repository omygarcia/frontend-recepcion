import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Documentos(){
    return <>
        <div class="contenido-unic">
            <Header />
            <div className="contenido" >
                <div className="uk-container">
                    <h1>Documentos</h1>
                    <a className="btn btn-primary" href="https://drive.google.com/file/d/13yPFC3p67q_9QO-nnIg_naeRKL_sv1ra/view?usp=sharing" target="_blank">
                        Cartel Informativo
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    </>;
}

export default Documentos;