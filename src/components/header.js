function Header(){
    return <>
            <header style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                <img style={{width: '100px'}} src="img/logo-unic.jpg" alt="Logo Unic" />
                <div>
                    <h1 class="text-white fs-36 text-center">SISTEMA DE RECEPCIÓN UNIC</h1>
                    <h3 class="text-orange text-center">CENTRO INTEGRAL DE ESTUDIOS SUPERIORES</h3>
                </div>
            </header>
        </>;
}

export default Header;