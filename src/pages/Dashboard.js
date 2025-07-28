import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Dashboard(){
    return <>
        <div class="contenido-unic">
            <Header />
            <div className="contenido">
                <div className="container">
                    <h1>Panel</h1>
                    <div className="uk-grid" uk-grid="true">
                        <div class="uk-card uk-card-primary uk-width-1-4@s">
                            <div class="uk-card-header">
                                <h3 class="uk-card-title">Numero de visistas</h3>
                            </div>
                            <div class="uk-card-body">
                                <h3>15</h3>
                            </div>
                        </div>
                        <div class="uk-card uk-card-secondary uk-width-1-4@s">
                            <div class="uk-card-header">
                                <h3 class="uk-card-title">Areas</h3>
                            </div>
                            <div class="uk-card-body">
                                <h3>5</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>;
}

export default Dashboard;