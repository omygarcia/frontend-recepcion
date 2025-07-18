import { Link } from "react-router-dom";


function Header(){
    return <>
            <header style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
                <div>
                    <img style={{width: '200px'}} src="img/log-unic.png" alt="Logo Unic" />
                </div>
                <div>
                    <Link to="/">Inicio</Link>
                    <Link to="/login">Login</Link> 
                </div>
            </header>
        </>;
}

export default Header;