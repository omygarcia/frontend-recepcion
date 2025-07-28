import { Link } from "react-router-dom";


function Header(){
    return <>
            {/*<header style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
                <div>
                    <img style={{width: '200px'}} src="img/log-unic.png" alt="Logo Unic" />
                </div>
                <div>
                    <nav className="miNavegacion">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/login">Login</Link></li> 
                            <li><Link to="/dashboard">Dashboard</Link></li> 
                            <li><Link to="/empleados">Empleados</Link></li> 
                            <li><Link to="/areas">Areas</Link></li> 
                            <li><Link to="/documentos">Documentos</Link></li> 
                        </ul>
                    </nav>
                </div>
            </header>*/}

                <header>
                    <div class="logo">
                        <img src="img/institucional uso formal.png" alt="Logo UNIC" />
                    </div>
                    <nav>
                        <Link to="/">Inicio</Link>
                        <Link to="/login">Login</Link> 
                        <Link to="/dashboard">Panel</Link> 
                        <Link to="/visitas">Visitas</Link> 
                        <Link to="/empleados">Empleados</Link> 
                        <Link to="/areas">Areas</Link> 
                        <Link to="/documentos">Documentos</Link> 
                    </nav>
                </header>
        </>;
}

export default Header;