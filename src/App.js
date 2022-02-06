import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';

import About from './pages/About';
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
      </Routes>
    </Layout>
  );
};

export default App;
