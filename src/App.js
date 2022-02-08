import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';

import About from './pages/About';
import Connect from './pages/Connect';
import Gallery from './pages/Gallery';
import MarketPlace from './pages/MarketPlace';
import Vault from './pages/Vault';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Layout>
  );
};

export default App;
