import ClaudeLanding from './components/ClaudeLanding';
import ClaudeLandingm from './components/ClaudeLandingm';
import Formmain from './components/Formmain';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClaudeLandingm />} />
        <Route path="/form" element={<Formmain />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/Faq" element={<Faq />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;