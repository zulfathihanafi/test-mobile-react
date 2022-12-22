import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Aurat from './pages/Aurat';
import Bersuci from './pages/Bersuci';
import Pemakanan from './pages/Pemakanan';
import Puasa from './pages/Puasa';
import Solat from './pages/Solat';
import Zakat from './pages/Zakat';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/aurat" element={<Aurat />} />
          <Route path="/bersuci" element={<Bersuci />} />
          <Route path="/pemakanan" element={<Pemakanan />} />
          <Route path="/puasa" element={<Puasa/>} />
          <Route path="/solat" element={<Solat/>} />
          <Route path="/zakat" element={<Zakat/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                <Link to="/">Back home!</Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);