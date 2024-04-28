import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./Reportes.styles.css"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Cantidad de usuarios por rol',
    },
  },
};
const labels = ["Coordinadores", "Administradores", "Coordinadores"];
const Reportes = () => {

  const user_list = JSON.parse(window.localStorage.getItem("user_list")) || listUsers.personal;
  const coordinadores = user_list.filter((user) => user.rol === "Coordinador");
  const administradores = user_list.filter((user) => user.rol === "Administrador");
  const insvestigadores = user_list.filter((user) => user.rol === "Investigador");


  const data = {
    labels,
    datasets: [
      {
        label: 'Cantidad de usuarios',
        data:[coordinadores.length,administradores.length, insvestigadores.length],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <main className=' window-content '>
      
        <div className="container-reportes">
        <div className="subtitulo">
        <h1 >Reportes</h1>
        <hr />
        </div>
        <Bar options={options} data={data} />
      
        </div>
                
    </main>
  )
}

export default Reportes