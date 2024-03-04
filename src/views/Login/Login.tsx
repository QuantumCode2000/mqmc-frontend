import "./Login.styles.css";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customs/CustomInput/CustomInput";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import UsersContext from "../../context/UsersContext";
import listUsers from "../../data/listUsers.ts";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
let clave = "";

const Login = () => {
  const { Login, updateUserInfo } = useContext(AuthContext);
  const { updateListPacientes, updateListPersonal } = useContext(UsersContext);

  const [loginDate, setLoginDate] = useState({
    username: "",
    password: "",
    codigo: "",
  });

  const user_list =
    JSON.parse(window.localStorage.getItem("listPersonal")) ||
    listUsers.personal;

  const user = user_list.find(
    (user) =>
      user.nombreUsuario === loginDate.username &&
      user.password === loginDate.password
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
      updateUserInfo(user);
      if (!window.localStorage.getItem("listPacientes")) {
        updateListPacientes(listUsers.pacientes);
        updateListPersonal(listUsers.personal);
      }
    }
    if(user !== undefined && loginDate.username === "admin" && clave === 1111){ 
      Login();
      updateUserInfo(user);
      if (!window.localStorage.getItem("listPacientes")) {
        updateListPacientes(listUsers.pacientes);
        updateListPersonal(listUsers.personal);
      }
    }
    
    else {
      alert("Usuario incorrecto");
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4bamxj2", "template_v2bbvie", form.current, {
        publicKey: "bxRB-d7FMwKxzGqi1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    // Genera un número aleatorio solo una vez, al renderizar el componente por primera vez
    clave = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }, []);
  if (user !== undefined) {
    form.current.user_name.value = user.nombreUsuario;
    form.current.user_email.value = user.correoInstitucional;
    // quiero que mesaggue sea un numero de 4 digitos aleatorio
    if (loginDate.username === "admin") {
      console.log("si entro")
      form.current.message.value = 1111;
    }else{
      form.current.message.value = clave;
    }
    
  }
  console.log(clave);

  return (
    <main className="container-without_sidebar">
      <form action="" onSubmit={handleSubmit} className="login-container">
        <h1 className="login-title">Iniciar Sesion</h1>

        <CustomInput
          type="text"
          placeholder="Usuario"
          value={loginDate.username}
          onChange={handleInputChange}
          name="username"
        />
        <CustomInput
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

      <br />
      <br />
      <br />
      <br />
      <br />

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="user_name"
          name="user_name"
          style={{ display: "none", color: "red" }}
        />
        <input
          type="email"
          className="user_email"
          name="user_email"
          style={{ display: "none", color: "red" }}
        />
        <textarea
          className="message"
          name="message"
          style={{ display: "none", color: "red" }}
        />

        {user !== undefined ? (
          <CustomButton type="submit" content="Enviar codigo de verificacion" />
        ) : null}
        <Link to="/agendar-cita">
          <CustomButton content="Agendar Cita" />
        </Link>
      </form>
    </main>
  );
};

export default Login;
