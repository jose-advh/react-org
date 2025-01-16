import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/imgs/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/imgs/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/imgs/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/imgs/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/imgs/Logo.png' alt='org' />
        <strong>Desarrollado por Jose</strong>
    </footer>
}

export default Footer