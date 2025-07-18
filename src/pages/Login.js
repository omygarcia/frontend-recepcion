import Header from "../components/header";
import Footer from "../components/footer";


function Login(){
        return <>
        <div class="contenido-unic">
        <Header />
                <div className="contenido" style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
                    <div className="content-login">
                        <form class="uk-form-stacked uk-padding">
                            <h3>Acceso al Sistema</h3>
                            <div>
                                <label class="uk-form-label">Correo:</label>
                                <input type="text" className="uk-input uk-form-width-large" />
                            </div>
                            <div>
                                <label class="uk-form-label">Password:</label>
                                <input type="password" className="uk-input uk-form-width-large" />
                            </div>
                            <button className="uk-button uk-button-primary" type="button">Ingresar</button>

                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    </>;
}

export default Login;