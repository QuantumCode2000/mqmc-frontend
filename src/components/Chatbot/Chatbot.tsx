// import "./Chatbot.styles.css";
// import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import { data_train } from "../../data/q_pairs";
// import { FaMicrophone } from "react-icons/fa";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from "@chatscope/chat-ui-kit-react";
// import { useState } from "react";

// const systemMessage = {
//   role: "system",
//   content:
//     "utiliza esta informacion para responder los mensajes de loos usuarios de manera estricta , solo ve si la pregunta se parece" +
//     " a alguna de las preguntas y responde especificamente con las respuestas del esta data:" +
//     data_train +
//     ".Si es que la pregunta no se parece a ninguna de las preguntas de la data, entonces responde con un mensaje generico" +
//     "como 'No entiendo la pregunta, por favor intenta de nuevo'." +
//     "Si la pregunta es muy similar a una pregunta de la data , trata de buscar una respuesta mesclando las respuestas , pero dale logica" +
//     "si la pregunta tiene el enalce a un video agrega esta a la respuesta, " +
//     "si la pregunta no es similar a la data pero tienes en la data la suficiente informacion para responderla" +
//     "entonces respode ,pero si no trata de preguntar al usuario si es que puede pregutar de nuevo",
// };
// const Chatbot = ({ openChat, onCloseChat }) => {
//   if (!openChat) return null;
//   const [respuestas, setRespuestas] = useState({
//     redSocial: "",
//     pelicula: "",
//     musica: "",
//     actividad: "",
//     contenidoInternet: "",
//     serieTV: "",
//     comunicacionAmigos: "",
//     videojuegos: "",
//   });
//   const [isJoven, setIsJoven] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       message:
//         "Hola soy el asistente de Me Quiero, Me Cuido, ¿en qué puedo ayudarte?",
//       sentTime: "just now",
//       sender: "botMQMC",
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: "outgoing",
//       sender: "user",
//     };
//     const newMessages = [...messages, newMessage];
//     setMessages(newMessages);
//     setIsTyping(true);
//     await processMessage(newMessages);
//   };

//   async function processMessage(chatMessages) {
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "botMQMC") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message };
//     });

//     const apiRequestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [systemMessage, ...apiMessages],
//     };

//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization:
//           "Bearer " + import.meta.env.VITE_MQMC_FUNCTION_PROJECT_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiRequestBody),
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         if (data.choices && data.choices.length > 0) {
//           setMessages([
//             ...chatMessages,
//             {
//               message: data.choices[0].message.content,
//               sender: "botMQMC",
//             },
//           ]);
//         } else {
//           console.error("No existe respuesta.");
//         }
//         setIsTyping(false);
//       });
//   }
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRespuestas({ ...respuestas, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(respuestas);
//     // si hay mas b en las respuestas entonces es joven
//     const values = Object.values(respuestas);
//     const joven = values.filter((value) => value === "b").length;
//     if (joven > 4) {
//       setIsJoven(true);
//     } else {
//       setIsJoven(false);
//       alert("Gracias por llenar el formulario");
//     }

//     setRespuestas({
//       redSocial: "",
//       pelicula: "",
//       musica: "",
//       actividad: "",
//       contenidoInternet: "",
//       serieTV: "",
//       comunicacionAmigos: "",
//       videojuegos: "",
//     });
//   };

//   return (
//     <div className="modal">
//       <div className="chatbot-container">
//         {isJoven === false ? (
//           <div className="questions-filter">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>
//                   ¿Cuál de estas redes sociales prefieres?
//                   <br />
//                   <select
//                     name="redSocial"
//                     value={respuestas.redSocial}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">Tik Tok</option>
//                     <option value="b">Facebook</option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Cuál de estas películas te llama más la atención?
//                   <br />
//                   <select
//                     name="pelicula"
//                     value={respuestas.pelicula}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">Spider-Man: Homecoming</option>
//                     <option value="b">El Padrino</option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Qué tipo de música sueles escuchar más?
//                   <br />
//                   <select
//                     name="musica"
//                     value={respuestas.musica}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">Pop y música electrónica</option>
//                     <option value="b">Reguetón actual</option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Cuál de estas actividades prefieres hacer en tu tiempo libre?
//                   <br />
//                   <select
//                     name="actividad"
//                     value={respuestas.actividad}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">Salir con amigos</option>
//                     <option value="b">Ver películas en casa</option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Qué tipo de contenido consumes más en internet?
//                   <br />
//                   <select
//                     name="contenidoInternet"
//                     value={respuestas.contenidoInternet}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">
//                       Videos de YouTubers famosos y/o videos musicales
//                     </option>
//                     <option value="b">
//                       Videos en los que los jugadores narran y comentan mientras
//                       juegan
//                     </option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Cuál de estas series de televisión te gusta más?
//                   <br />
//                   <select
//                     name="serieTV"
//                     value={respuestas.serieTV}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">Stranger Things</option>
//                     <option value="b">Juego de tronos</option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Cómo prefieres comunicarte con tus amigos?
//                   <br />
//                   <select
//                     name="comunicacionAmigos"
//                     value={respuestas.comunicacionAmigos}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">
//                       Mensajes de texto y redes sociales
//                     </option>
//                     <option value="b">
//                       Llamadas telefónicas y encuentros en persona
//                     </option>
//                   </select>
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   ¿Qué tipo de videojuegos prefieres jugar?
//                   <br />
//                   <select
//                     name="videojuegos"
//                     value={respuestas.videojuegos}
//                     onChange={handleChange}
//                   >
//                     <option value="">Selecciona una opción</option>
//                     <option value="a">Fortnite y Minecraft</option>
//                     <option value="b">Super Mario, Ajedrez</option>
//                   </select>
//                 </label>
//               </div>
//               <button type="submit">Enviar</button>
//             </form>
//           </div>
//         ) : null}
//         {isJoven === true ? (
//           <MainContainer>
//             <ChatContainer>
//               <MessageList
//                 scrollBehavior="smooth"
//                 typingIndicator={isTyping ? <TypingIndicator /> : null}
//               >
//                 {messages.map((message, i) => {
//                   return <Message key={i} model={message} />;
//                 })}
//               </MessageList>

//               <MessageInput
//                 placeholder="Escriba su pregunta"
//                 onSend={handleSend}
//               />
//             </ChatContainer>
//           </MainContainer>
//         ) : null}
//         <div className="footer-chat">
//           <button className="close-chat" onClick={onCloseChat}>
//             Cerrar
//           </button>
//           <button className="microfone">
//             <FaMicrophone />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import React, { useState, useEffect } from "react";
import "./Chatbot.styles.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { data_train } from "../../data/q_pairs";
import { FaMicrophone } from "react-icons/fa";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const systemMessage = {
  role: "system",
  content:
    "utiliza esta informacion para responder los mensajes de loos usuarios de manera estricta , solo ve si la pregunta se parece" +
    " a alguna de las preguntas y responde especificamente con las respuestas del esta data:" +
    data_train +
    ".Si es que la pregunta no se parece a ninguna de las preguntas de la data, entonces responde con un mensaje generico" +
    "como 'No entiendo la pregunta, por favor intenta de nuevo'." +
    "Si la pregunta es muy similar a una pregunta de la data , trata de buscar una respuesta mesclando las respuestas , pero dale logica" +
    "si la pregunta tiene el enalce a un video agrega esta a la respuesta, " +
    "si la pregunta no es similar a la data pero tienes en la data la suficiente informacion para responderla" +
    "entonces respode ,pero si no trata de preguntar al usuario si es que puede pregutar de nuevo",
};

const Chatbot = ({ openChat, onCloseChat }) => {
  if (!openChat) return null;
  const [respuestas, setRespuestas] = useState({
    redSocial: "",
    pelicula: "",
    musica: "",
    actividad: "",
    contenidoInternet: "",
    serieTV: "",
    comunicacionAmigos: "",
    videojuegos: "",
  });
  const [isJoven, setIsJoven] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Hola soy el asistente de Me Quiero, Me Cuido, ¿en qué puedo ayudarte?",
      sentTime: "just now",
      sender: "botMQMC",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [recording, setRecording] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-ES";

    recognition.onresult = (event) => {
      const resultIndex = event.resultIndex;
      const transcript = event.results[resultIndex][0].transcript;
      const newMessage = {
        message: transcript,
        direction: "outgoing",
        sender: "user",
      };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      setIsTyping(true);
      processMessage(newMessages);
    };

    setSpeechRecognition(recognition);

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [messages]);

  const handleStartRecording = () => {
    if (speechRecognition) {
      speechRecognition.start();
      setRecording(true);
    }
  };

  const handleStopRecording = () => {
    if (speechRecognition) {
      speechRecognition.stop();
      setRecording(false);
    }
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessage(newMessages);
  };

  async function processMessage(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "botMQMC") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " + import.meta.env.VITE_MQMC_FUNCTION_PROJECT_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.choices && data.choices.length > 0) {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "botMQMC",
            },
          ]);
        } else {
          console.error("No existe respuesta.");
        }
        setIsTyping(false);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRespuestas({ ...respuestas, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(respuestas);
    // si hay mas b en las respuestas entonces es joven
    const values = Object.values(respuestas);
    const joven = values.filter((value) => value === "b").length;
    if (joven > 4) {
      setIsJoven(true);
    } else {
      setIsJoven(false);
      alert("Gracias por llenar el formulario");
    }

    setRespuestas({
      redSocial: "",
      pelicula: "",
      musica: "",
      actividad: "",
      contenidoInternet: "",
      serieTV: "",
      comunicacionAmigos: "",
      videojuegos: "",
    });
  };

  return (
    <div className="modal">
      <div className="chatbot-container">
        {isJoven === false ? (
          <div className="questions-filter">
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  ¿Cuál de estas redes sociales prefieres?
                  <br />
                  <select
                    name="redSocial"
                    value={respuestas.redSocial}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">Tik Tok</option>
                    <option value="b">Facebook</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Cuál de estas películas te llama más la atención?
                  <br />
                  <select
                    name="pelicula"
                    value={respuestas.pelicula}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">Spider-Man: Homecoming</option>
                    <option value="b">El Padrino</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Qué tipo de música sueles escuchar más?
                  <br />
                  <select
                    name="musica"
                    value={respuestas.musica}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">Pop y música electrónica</option>
                    <option value="b">Reguetón actual</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Cuál de estas actividades prefieres hacer en tu tiempo libre?
                  <br />
                  <select
                    name="actividad"
                    value={respuestas.actividad}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">Salir con amigos</option>
                    <option value="b">Ver películas en casa</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Qué tipo de contenido consumes más en internet?
                  <br />
                  <select
                    name="contenidoInternet"
                    value={respuestas.contenidoInternet}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">
                      Videos de YouTubers famosos y/o videos musicales
                    </option>
                    <option value="b">
                      Videos en los que los jugadores narran y comentan mientras
                      juegan
                    </option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Cuál de estas series de televisión te gusta más?
                  <br />
                  <select
                    name="serieTV"
                    value={respuestas.serieTV}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">Stranger Things</option>
                    <option value="b">Juego de tronos</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Cómo prefieres comunicarte con tus amigos?
                  <br />
                  <select
                    name="comunicacionAmigos"
                    value={respuestas.comunicacionAmigos}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">
                      Mensajes de texto y redes sociales
                    </option>
                    <option value="b">
                      Llamadas telefónicas y encuentros en persona
                    </option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  ¿Qué tipo de videojuegos prefieres jugar?
                  <br />
                  <select
                    name="videojuegos"
                    value={respuestas.videojuegos}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="a">Fortnite y Minecraft</option>
                    <option value="b">Super Mario, Ajedrez</option>
                  </select>
                </label>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        ) : null}
        {isJoven === true ? (
          <>
            <MainContainer>
              <ChatContainer>
                <MessageList
                  scrollBehavior="smooth"
                  typingIndicator={isTyping ? <TypingIndicator /> : null}
                >
                  {messages.map((message, i) => {
                    return <Message key={i} model={message} />;
                  })}
                </MessageList>

                <MessageInput
                  placeholder="Escriba su pregunta"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
            <div className="footer-chat">
              <button className="close-chat" onClick={onCloseChat}>
                Cerrar
              </button>
              <button
                className="microfone"
                onClick={recording ? handleStopRecording : handleStartRecording}
              >
                <FaMicrophone />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Chatbot;
