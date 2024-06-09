import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Reportes.styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Cantidad de usuarios por rol",
    },
  },
};

const labels = ["Coordinadores", "Administradores", "Investigadores"]; // Corregido el typo

const Reportes = () => {
  const [userData, setUserData] = useState({
    coordinadores: 0,
    administradores: 0,
    investigadores: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        const coordinadores = data.filter((user) => user.role === "Coordinador")
          .length;
        const administradores = data.filter(
          (user) => user.role === "Administrador",
        ).length;
        const investigadores = data.filter(
          (user) => user.role === "Investigador",
        ).length;
        setUserData({ coordinadores, administradores, investigadores });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cantidad de usuarios",
        data: [
          userData.coordinadores,
          userData.administradores,
          userData.investigadores,
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando los datos: {error.message}</p>;

  return (
    <main className="window-content">
      <div className="container-reportes">
        <Bar options={options} data={chartData} />
      </div>
    </main>
  );
};

export default Reportes;
