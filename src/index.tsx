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
import QuestionsPages from './pages/QuestionAnswersPage';

import { auratData } from './data';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/aurat" element={<QuestionsPages data={auratData} title={'Aurat'} />} />
          <Route path="/bersuci" element={<QuestionsPages data={auratData} title={'Bersuci'} />} />
          <Route path="/pemakanan" element={<QuestionsPages data={auratData} title={'Pemakanan'} />} />
          <Route path="/puasa" element={<QuestionsPages data={auratData} title={'Puasa'} />} />
          <Route path="/solat" element={<QuestionsPages data={auratData} title={'Solat'} />} />
          <Route path="/zakat" element={<QuestionsPages data={auratData} title={'Zakat'} />} />
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