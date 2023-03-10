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

import { bersuciData, puasaData, solatData, zakatData, pemakananData } from './data';
import AboutUs from './pages/About';
import Admin from './pages/Admin';
import AnswerForm from './pages/AnswerForm';
import Protected from './components/Protected';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/aurat" element={<QuestionsPages data={bersuciData} title={'Penjagaan Aurat'} />} />
          <Route path="/bersuci" element={<QuestionsPages data={bersuciData} title={'Bersuci'} />} />
          <Route path="/pemakanan" element={<QuestionsPages data={pemakananData} title={'Pemakanan'} />} />
          <Route path="/puasa" element={<QuestionsPages data={puasaData} title={'Puasa'} />} />
          <Route path="/solat" element={<QuestionsPages data={solatData} title={'Solat'} />} />
          <Route path="/zakat" element={<QuestionsPages data={zakatData} title={'Zakat'} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Protected><Admin /></Protected>} />
          {/* <Route path="/admin/answerform/:id" element={<AnswerForm />} /> */}
          
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