import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Documentos(){
    return <>
        <div class="contenido-unic">
            <Header />
            <div className="contenido" >
                <div className="uk-container uk-margin-top">
                    <h1>Documentos</h1>
                    <a className="pdf-icon" href="https://drive.google.com/file/d/13yPFC3p67q_9QO-nnIg_naeRKL_sv1ra/view?usp=sharing" target="_blank">
                        Cartel Informativo
                    </a>
                    <a className="pdf-icon" href="https://drive.google.com/file/d/1HoB1dXYDEAKoFTTpLpW3MBGbswRhVZPT/view?usp=sharing" target="_blank">
                        Solicitud de Servicios
                    </a>
                    <a className="word-icon" href="https://docs.google.com/document/d/1yCtUoWzyFqmc2SsG7XpPro2M4jApi9dL/edit?usp=sharing&ouid=112692167205747745358&rtpof=true&sd=true" target="_blank">
                        Modulos detallados
                    </a>
                    <a className="word-icon" href="https://docs.google.com/document/d/11tZ25v3C979IlmoXngTKLRt8sRlv89B3/edit?usp=sharing&ouid=112692167205747745358&rtpof=true&sd=true" target="_blank">
                        Convenio a marzo 2025
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    </>;
}

export default Documentos;