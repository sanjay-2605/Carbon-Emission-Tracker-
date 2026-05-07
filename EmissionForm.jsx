import { useState } from 'react';
import { API } from '../api';

function EmissionForm({ refresh }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [scope, setScope] = useState('Scope 1');

  const submitEmission = async () => {
    await API.post('/', {
      category,
      amount,
      scope,
    });

    setCategory('');
    setAmount('');
    refresh();
  };

  return (
    <div>
      <h2>Add Emission</h2>

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Emission Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={scope} onChange={(e) => setScope(e.target.value)}>
        <option>Scope 1</option>
        <option>Scope 2</option>
        <option>Scope 3</option>
      </select>

      <button onClick={submitEmission}>Add</button>
    </div>
  );
}

export default EmissionForm;
