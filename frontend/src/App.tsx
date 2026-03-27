import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Albums, Singles, Single, Contact, NotFound } from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/singles" element={<Singles />} />
        <Route path="/single" element={<Single />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
