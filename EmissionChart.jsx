import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function EmissionChart({ emissions }) {
  const data = {
    labels: emissions.map((e) => e.category),
    datasets: [
      {
        label: 'Carbon Emissions',
        data: emissions.map((e) => e.amount),
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default EmissionChart;
