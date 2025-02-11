import ClaudeLanding from './components/ClaudeLanding';
import ClaudeLandingm from './components/ClaudeLandingm';
import Formmain from './components/Formmain';
import Pricing from './components/Pricing';
import Getaccessform from './components/Getaccessform';
import Faq from './components/Faq';
import Textscrlrevl from './components/Textscrlrevl';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClaudeLandingm />} />
        <Route path="/form" element={<Formmain />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/tr" element={<Textscrlrevl />} />
        <Route path="/apply" element={<Getaccessform />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;