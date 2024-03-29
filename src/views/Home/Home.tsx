import Logo_2 from "../../assets/images/Logo_2.png";
import LOGO_principal from "../../assets/images/LOGO_principal.png";
import PORTADA_PRINCIPAL from "../../assets/images/PORTADA_PRINCIPAL.png";
import { BsTiktok, BsFacebook, BsInstagram } from "react-icons/bs";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./Home.styles.css";
const Home = () => {
  return (
    <div className="container-without_sidebar">
      <header style={{ background: "red" }} className="header-home">
        <div>
          <img src={Logo_2} alt="" />
          <img src={LOGO_principal} alt="" />
        </div>
      </header>
      <main className="main-home">
        <div className="container-main__mesagge">
          <img src={PORTADA_PRINCIPAL} alt="" />
          <div className="text-main">
            <p className="lightgreen-text">ME QUIERO</p>
            <p className="darkgreen-text">, ME CUIDO</p>
            <p className="normal-text">
              es un programa gratuito para aprender a conocernos y reconocernos.
            </p>
            <p className="darkgreen-tex">¡BIENVENID@S!</p>
          </div>
          <div className="container-main__buttons">
            <button className="button-ingresar">Ingresar</button>
            <button 
            style={{background: "none"

        }}
            className="button-chatboot sticky-button">
              
              <Player
                autoplay
                loop
                src="https://lottie.host/94444b37-849b-4c20-b3ce-a91268d430b3/t4HglhDnG6.json"
                style={{ height: "100px", width: "100px",background: "none"
             }}
              >
               
              </Player>
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
