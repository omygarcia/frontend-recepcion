import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";


function Dashboard(){
    return <>
        <div class="contenido-unic">
            <Header />
            <div className="contenido">
              <h1>Panel</h1>
            </div>
            <Footer />
        </div>
    </>;
}

export default Dashboard;