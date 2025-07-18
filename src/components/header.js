import { Link } from "react-router-dom";


function Header(){
    return <>
            <header style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
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
                        </ul>
                    </nav>
                </div>
            </header>
        </>;
}

export default Header;