import "./Login.styles.css";
import Logo_2 from "../../assets/images/Logo_2.png";
import LOGO_principal from "../../assets/images/LOGO_principal.png";
import footer_img from "../../assets/images/footer.jpg";
import { BsTiktok, BsFacebook, BsInstagram } from "react-icons/bs";
import CustomInput from "../../components/customs/CustomInput/CustomInput";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import UsersContext from "../../context/UsersContext";

const Login = () => {
  const { Login, updateCurrentUserInformation } = useContext(AuthContext);
  const { updateUserList } = useContext(UsersContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUser();
  };

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const verifyUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error de autenticación:", errorData);
        alert("Credenciales incorrectas");
        return;
      }

      const data = await response.json();
      const token = data.token;
      const email = data.email;

      // Guardar el token y el email en el localStorage
      Login(token, email);

      // Obtener y guardar la información del usuario actual
      const currentUser = await getCurrentUser(token);
      updateCurrentUserInformation(currentUser);

      // Obtener y actualizar la lista de usuarios
      const users = await fetchUsers(token);
      updateUserList(users);
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      alert("Error durante el inicio de sesión");
    }
  };

  const getCurrentUser = async (token) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error obteniendo el usuario actual:", errorData);
        throw new Error("Error obteniendo el usuario actual");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en getCurrentUser:", error);
      throw error;
    }
  };

  const fetchUsers = async (token) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error obteniendo los usuarios:", errorData);
        throw new Error("Error obteniendo los usuarios");
      }
      return await response.json();
    } catch (error) {
      console.error("Error en fetchUsers:", error);
      throw error;
    }
  };

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
              <form onSubmit={handleSubmit} className="login-container">
                <h1 className="login-title">BIENVENIDO AL SISTEMA DE MQMC</h1>
                <CustomInput
                  label="Correo"
                  type="email"
                  placeholder="Correo"
                  value={loginData.email}
                  onChange={handleInputChange}
                  name="email"
                />
                <CustomInput
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  value={loginData.password}
                  onChange={handleInputChange}
                  name="password"
                />
                <CustomButton type="submit" content="Iniciar Sesion" />
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

// import "./Login.styles.css";
// import Logo_2 from "../../assets/images/Logo_2.png";
// import LOGO_principal from "../../assets/images/LOGO_principal.png";
// import footer_img from "../../assets/images/footer.jpg";
// import { BsTiktok, BsFacebook, BsInstagram } from "react-icons/bs";
// import CustomInput from "../../components/customs/CustomInput/CustomInput";
// import CustomButton from "../../components/customs/CustomButton/CustomButton";
// import { useState, useContext } from "react";
// import AuthContext from "../../context/AuthContext";
// import UsersContext from "../../context/UsersContext";

// const Login = () => {
//   // Afirmar que el contexto no es nulo y desestructurar las funciones necesarias.
//   const { Login, updateCurrentUserInformation } = useContext(AuthContext)!;
//   const { updateUserList } = useContext(UsersContext)!;

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     verifyUser();
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const verifyUser = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/v1/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: loginData.email,
//           password: loginData.password,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error de autenticación:", errorData);
//         alert("Credenciales incorrectas");
//         return;
//       }

//       const data = await response.json();
//       const token = data.token;
//       const email = data.email;

//       // Guardar el token y el email en el localStorage
//       Login(token, email);

//       // Obtener y guardar la información del usuario actual
//       const currentUser = await getCurrentUser(token);
//       updateCurrentUserInformation(currentUser);

//       // Obtener y actualizar la lista de usuarios
//       const users = await fetchUsers(token);
//       updateUserList(users);
//     } catch (error) {
//       console.error("Error durante el inicio de sesión:", error);
//       alert("Error durante el inicio de sesión");
//     }
//   };

//   const getCurrentUser = async (token: string) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/v1/auth/profile`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error obteniendo el usuario actual:", errorData);
//         throw new Error("Error obteniendo el usuario actual");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error en getCurrentUser:", error);
//       throw error;
//     }
//   };

//   const fetchUsers = async (token: string) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/v1/users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error obteniendo los usuarios:", errorData);
//         throw new Error("Error obteniendo los usuarios");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error en fetchUsers:", error);
//       throw error;
//     }
//   };

//   return (
//     <div className="home-view">
//       <header className="header-home">
//         <div className="encabezado">
//           <img src={Logo_2} alt="" className="logo2" />
//           <img src={LOGO_principal} alt="" className="logoprincipal" />
//         </div>
//       </header>
//       <main className="main-home">
//         <div className="main-box__login">
//           <div className="container-main__mesagge">
//             <h1></h1>
//             <main className="container-without_sidebar">
//               <br />
//               <br />
//               <br />
//               <br />
//               <form onSubmit={handleSubmit} className="login-container">
//                 <h1 className="login-title">BIENVENIDO AL SISTEMA DE MQMC</h1>
//                 <CustomInput
//                   label="Correo"
//                   type="email"
//                   placeholder="Correo"
//                   value={loginData.email}
//                   onChange={handleInputChange}
//                   name="email"
//                 />
//                 <CustomInput
//                   label="Contraseña"
//                   type="password"
//                   placeholder="Contraseña"
//                   value={loginData.password}
//                   onChange={handleInputChange}
//                   name="password"
//                 />
//                 <CustomButton type="submit" content="Iniciar Sesion" />
//               </form>
//             </main>
//           </div>
//           <div className="container-main__buttons">
//             <img src={footer_img} alt="" className="footer-img" />
//           </div>
//         </div>
//       </main>
//       <footer className="footer-home">
//         <div className="redes-sociales__footer">
//           <BsTiktok />
//           <BsFacebook />
//           <BsInstagram />
//         </div>
//         <p>Me quiero, Me cuido 2022</p>
//       </footer>
//     </div>
//   );
// };

// export default Login;
