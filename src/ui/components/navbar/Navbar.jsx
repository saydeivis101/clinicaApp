
export const Navbar = () => {
  return (
    <header className="hero">
        <div className="hero__support">
            <div className="main-text">
                <p><b>Trabajamos las 24 Horas, los 365 días del año</b></p>
            </div>
            <div className="phone-text">
                <p><b>Comuníquese al +58 261-8000-429</b></p>
            </div>
        </div>
        <div className="nav__main">
            <img src="https://www.clinicazulia.com/img/logoccmpz.jpg" alt="logo centro clínico materno pediatrico zulia" />
            <ul className="nav__menu">
                <li><a href="">Inicio</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Médicos</a></li>
                <li><a href="">Especialidades</a></li>
                <li><a href="">Aliado</a></li>
                <li><a href="">Contacto</a></li>
                <i class="fa-solid fa-circle-xmark"></i>
                <i class="fa-solid fa-bars-staggered"></i>
            </ul>
        </div>
    </header>
  )
}
