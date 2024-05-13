import BtnLogin from './BtnLogin';


export default function Main() {
    return (
      
      <div className="Container">
        <nav>
          <div className="NavLogo">
              <img src='./trueno.png' alt="" />
              <h1>NOMBRE</h1>
          </div>
          <div className="NavOptions">
            <a href="">Donaciones</a>
            <a href="">Sobre CashierPro</a>
            <a href="">Nuestras Redes</a>
            <a href="">Contactanos</a>
          </div>
          <div className="NavRegister">
              <a href="">Resgistrarse</a>
              
              <BtnLogin/>
          </div>
        </nav>
      </div>
    );
  }