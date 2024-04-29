import "./Login.styles.css";
import Logo_2 from "../../assets/images/Logo_2.png";
import LOGO_principal from "../../assets/images/LOGO_principal.png";
import footer_img from "../../assets/images/footer.jpg";
import { BsTiktok, BsFacebook, BsInstagram } from "react-icons/bs";
import CustomInput from "../../components/customs/CustomInput/CustomInput";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import UsersContext from "../../context/UsersContext";
import listUsers from "../../data/listUsers.ts";
import { q_pairs } from "../../data/q_pairs.ts";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
let clave = "";

const Login = () => {
  const { Login, updateCurrentUserInformation } = useContext(AuthContext);
  const { updateUserList } = useContext(UsersContext);

  const [loginDate, setLoginDate] = useState({
    username: "",
    password: "",
    codigo: "",
  });

  const user_list =
    JSON.parse(window.localStorage.getItem("user_list")) || listUsers.personal;

  const user = user_list.find(
    (user) =>
      user.nombreUsuario === loginDate.username &&
      user.password === loginDate.password &&
      user.estado === true
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUser();
  };
  const handleInputChange = (e) => {
    setLoginDate({
      ...loginDate,
      [e.target.name]: e.target.value,
    });
  };

  const verifyUser = () => {
    if (user !== undefined && clave === parseInt(loginDate.codigo)) {
      Login();
      updateCurrentUserInformation(user);
      if (!window.localStorage.getItem("user_list")) {
        updateUserList(listUsers.personal);
      }
      if (!window.localStorage.getItem("qa")) {
        window.localStorage.setItem("qa", JSON.stringify(q_pairs));
      }
      
    } else {
      alert("Usuario incorrecto");
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0j4u4x1", "template_dzqcj7w", form.current, {
        publicKey: "BpgnWhXIUSQikI48e",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          alert("Codigo enviado a su correo");
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    // Genera un número aleatorio solo una vez, al renderizar el componente por primera vez
    clave = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }, []);
  if (user !== undefined) {
    form.current.user_name.value = user.nombreUsuario;
    form.current.user_email.value = user.correo;
    // quiero que mesaggue sea un numero de 4 digitos aleatorio
    form.current.message.value = clave;
  }

  return (
    <div className="home-view">
      <header className="header-home">
        <div className="encabezado">
          <img src={Logo_2} alt="" className="logo2" />
          <img src={LOGO_principal} alt="" className="logoprincipal" />
        </div>
      </header>
      <main className="main-home">
        <div className="main-box__login">
          <div className="container-main__mesagge">
            <h1></h1>
            <main className="container-without_sidebar">
              <br />
              <br />
              <br />
              <br />
              <form
                action=""
                onSubmit={handleSubmit}
                className="login-container"
              >
                <h1 className="login-title">BIENVENIDO AL SISTEMA DE MQMC</h1>

                <CustomInput
                  label="Usuario"
                  type="text"
                  placeholder="Usuario"
                  value={loginDate.username}
                  onChange={handleInputChange}
                  name="username"
                />
                <CustomInput
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  value={loginDate.password}
                  onChange={handleInputChange}
                  name="password"
                />
                {user !== undefined ? (
                  <CustomInput
                    type="text"
                    placeholder="Codigo"
                    value={loginDate.codigo}
                    onChange={handleInputChange}
                    name="codigo"
                  />
                ) : null}
                <CustomButton type="submit" content="Iniciar Sesion" />
              </form>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  className="user_name"
                  name="user_name"
                  style={{ display: "none" }}
                />
                <input
                  type="email"
                  className="user_email"
                  name="user_email"
                  style={{ display: "none" }}
                />
                <textarea
                  className="message"
                  name="message"
                  style={{ display: "none" }}
                />

                {user !== undefined ? (
                  <CustomButton
                    type="submit"
                    content="Enviar codigo de verificacion"
                  />
                ) : null}
              </form>
            </main>
          </div>

          <div className="container-main__buttons">
            <img src={footer_img} alt="" className="footer-img" />
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

export default Login;
