import Logo_2 from "../../assets/images/Logo_2.png";
import LOGO_principal from "../../assets/images/LOGO_principal.png";
import PORTADA_PRINCIPAL from "../../assets/images/PORTADA_PRINCIPAL.png";
import mascota_1 from "../../assets/images/mascota_1.png";
import mascota_122 from "../../assets/images/mascota_122.png";
import footer_img from "../../assets/images/footer.jpg";
import { BsTiktok, BsFacebook, BsInstagram } from "react-icons/bs";
// import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import "./Home.styles.css";
const Home = () => {
  return (
    <div className="home-view">
      <header className="header-home">
        <div className="encabezado">
          <img src={Logo_2} alt="" className="logo2" />
          <img src={LOGO_principal} alt="" className="logoprincipal" />
        </div>
      </header>
      <main className="main-home">
        <div className="main-box">
          <div className="container-main__mesagge">
            <img src={PORTADA_PRINCIPAL} alt="" className="logofondo" />
            <div className="text-main">
              <span className="lightgreen-text">ME QUIERO</span>
              <span className="darkgreen-text">, ME CUIDO </span>
              es un programa gratuito para aprender a conocernos y reconocernos
            </div>
            <span className="text-welcome darkgreen-text ">¡BIENVENID@S!</span>
          </div>
          <div className="container-main__buttons">
            <div className="botones">
              <Link to="/login">
                <button className="button-ingresar">Ingresar</button>
              </Link>
              <a href="https://mqmc.org/#/register">
                <button className="button-ingresar crear-cuenta">
                  Crear una Cuenta
                </button>
              </a>
            </div>
            <p className="terminos-condiciones">Términos y condiciones</p>
            <img src={footer_img} alt="" className="footer-img" />
            <button
              className="sticky-button__chatbot"
              onClick={() => {
                window.open(
                  "http://localhost:4000",
                  "_blank",
                  "width=650,height=540,scrollbars=yes,top=150, left=420 ",
                );
              }}
            >
              {/* <Player
                autoplay
                loop
                
                src={"https://lottie.host/8abe799d-00ab-4d82-9360-8b77a971dbd6/PxHAP7vElj.json"}
                style={{ height: "100px", width: "100px", background: "none" }}
              ></Player> */}
              <img
                src={mascota_122}
                alt=""
                style={{ height: "120px", width: "120px", background: "none" }}
              />
            </button>
            <button className="sticky-button__mascota">
              <img
                src={mascota_1}
                alt=""
                style={{ height: "110px", width: "110px", background: "none" }}
              />
            </button>
          </div>
        </div>
      </main>

      <footer className="footer-home">
        <div className="redes-sociales__footer">
          <BsTiktok />
          <BsFacebook />
          <BsInstagram />
        </div>
        <p>Me quiero, Me cuido 2022</p>
      </footer>
    </div>
  );
};

export default Home;
