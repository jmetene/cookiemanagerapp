import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar módulos necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export const CookieStats = ({ aceptadas = 0, rechazadas = 0 }) => {
  const data = {
    labels: ["Aceptadas", "Rechazadas"],
    datasets: [
      {
        label: `${
          aceptadas === 0 && rechazadas === 0 ? "" : "Estadísticas de Cookies"
        }`,
        data: [aceptadas, rechazadas], // Datos de ejemplo
        backgroundColor: ["#4caf50", "#f44336"], // Colores de las secciones
        hoverBackgroundColor: ["#66bb6a", "#ef5350"], // Colores al pasar el ratón
      },
    ],
  };
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Pie data={data} />
    </div>
  );
};

CookieStats.propTypes = {
  aceptadas: PropTypes.number,
  rechazadas: PropTypes.number,
};
