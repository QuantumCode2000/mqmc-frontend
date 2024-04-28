import { headersPreguntasRespuestas } from "../../data/headersTables";
import CustomTNR from "../customs/CustomTablanNuevoRegistro/CustomTNR";
import { q_pairs } from "../../data/q_pairs";
import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta";
import "./Preguntas.styles.css";
import { useState } from "react";
const Preguntas = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const preguntas = JSON.parse(localStorage.getItem("qa")) || q_pairs;

  return (
    <main className=" window-content ">
      <div className="container-preguntas">
        <div className="subtitulo">
          <h1>Preguntas</h1>
          <hr />
        </div>

        {preguntas.length > 0 ? (
          <CustomTNR
            headers={headersPreguntasRespuestas}
            users={preguntas}
            placeholder="Buscar por ID"
          />
        ) : (
          <p>Loading preguntas...</p>
        )}
        {currentUser.rol === "Coordinador" ? <NuevoRegistroPregunta /> : null}
      </div>
    </main>
  );
};

export default Preguntas;

