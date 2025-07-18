import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Home(){
    return <>
        <div class="contenido-unic">
            <Header />
            <div className="contenido">
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="ratio: 5:2" >
                <div className="uk-slideshow-items">
                    <div>
                        <img src="img/banner-unic1.jpeg" alt="" uk-cover="true" />
                        <div className="uk-position-center uk-position-small uk-text-center uk-light">
                            <Link to="/login" className="uk-button uk-button-primary">Ir al Login</Link> 
                        </div>
                    </div>
                    <div>
                        <img src="img/banner-unic2.jpeg" alt="" uk-cover="true" />
                    </div>
                </div>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>

            </div>
            </div>
            <Footer />
        </div>
    </>;
}

export default Home;