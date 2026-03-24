/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EssaysCoursePage from './pages/EssaysCoursePage';
import MethodPage from './pages/MethodPage';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/101-essays" element={<EssaysCoursePage />} />
        <Route path="/method" element={<MethodPage />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  );
}
