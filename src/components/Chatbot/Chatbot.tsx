import "./Chatbot.styles.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { data_train } from "../../data/q_pairs";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";



// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "utiliza esta informacion para responder los mensajes de loos usuarios de manera estricta , solo ve si la pregunta se parece" +
    " a alguna de las preguntas y responde especificamente con las respuestas del esta data:"+
    data_train + ".Si es que la pregunta no se parece a ninguna de las preguntas de la data, entonces responde con un mensaje generico"+
    "como 'No entiendo la pregunta, por favor intenta de nuevo'."+
    "Si la pregunta es muy similar a una pregunta de la data , trata de buscar una respuesta mesclando las respuestas , pero dale logica"+
    "si la pregunta tiene el enalce a un video agrega esta a la respuesta, "+
    "si la pregunta no es similar a la data pero tienes en la data la suficiente informacion para responderla"+
    "entonces respode ,pero si no trata de preguntar al usuario si es que puede pregutar de nuevo"
};
const Chatbot = ({ openChat, onCloseChat }) => {
  if (!openChat) return null;

  const [messages, setMessages] = useState([
    {
      message:
        "Hola soy el asistente de Me Quiero, Me Cuido, ¿en qué puedo ayudarte?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
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
        Authorization: "Bearer "+import.meta.env.VITE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data);
        // setMessages([
        //   ...chatMessages,
        //   {
        //     message: data.choices[0].message.content,
        //     sender: "ChatGPT",
        //   },
        // ]);
        // setIsTyping(false);
        console.log(data);
        // Verificar si 'choices' está definido en la respuesta de la API
        if (data.choices && data.choices.length > 0) {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "ChatGPT",
            },
          ]);
        } else {
          console.error("No choices found in API response.");
        }
        setIsTyping(false);
      });
  }
  return (
    <div className="modal">
      <div className="chatbot-container">
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator /> : null}
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Escriba su pregunta"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chatbot;
