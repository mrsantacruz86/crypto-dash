import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import { Routes, Route } from 'react-router';

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(20);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error('Failes to fetch data');
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            coins={coins}
            loading={loading}
            error={error}
            limit={limit}
            filter={filter}
            sortBy={sortBy}
            setCoins={setCoins}
            setLoading={setLoading}
            setError={setError}
            setLimit={setLimit}
            setFilter={setFilter}
            setSortBy={setSortBy}
          />
        }
      />
    </Routes>
  );
};

export default App;
