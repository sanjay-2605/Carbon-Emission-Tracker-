import { useEffect, useState } from 'react';
import { API } from './api';

import Dashboard from './components/Dashboard';
import EmissionForm from './components/EmissionForm';
import EmissionChart from './components/EmissionChart';

function App() {
  const [emissions, setEmissions] = useState([]);

  const fetchEmissions = async () => {
    const res = await API.get('/');
    setEmissions(res.data);
  };

  useEffect(() => {
    fetchEmissions();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carbon Emission Tracker Dashboard</h1>

      <EmissionForm refresh={fetchEmissions} />

      <Dashboard emissions={emissions} />

      <EmissionChart emissions={emissions} />
    </div>
  );
}

export default App;
