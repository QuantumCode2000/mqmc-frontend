import { headersPreguntasRespuestas } from "../../data/headersTables"
import CustomTNR  from "../customs/CustomTablanNuevoRegistro/CustomTNR"
import { q_pairs } from "../../data/q_pairs"
import NuevoRegistroPregunta from "../NuevoRegistroPregunta/NuevoRegistroPregunta"

const Preguntas = () => {
  return (
    <main className=' window-content '>
      {
        q_pairs.length > 0 ? (
           <CustomTNR headers={headersPreguntasRespuestas} users={q_pairs}  placeholder="Buscar por ID"/>
        ) : (
          <p>Loading personal...</p>
        )
      }
      <NuevoRegistroPregunta/>
      
    </main>
  )
}

export default Preguntas
