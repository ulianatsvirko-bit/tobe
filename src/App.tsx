/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EssaysCoursePage from './pages/EssaysCoursePage';
import MethodPage from './pages/MethodPage';
import LeadForm, { LeadFormState } from './components/LeadForm';
import TelegramButton from './components/TelegramButton';
import { LEAD_FORM_EVENT } from './lead-form';

export default function App() {
  const [leadForm, setLeadForm] = useState<LeadFormState>({ open: false, format: '' });

  useEffect(() => {
    const openForm = (event: Event) => {
      const detail = (event as CustomEvent<{ format?: string }>).detail;
      setLeadForm({ open: true, format: detail?.format || '' });
    };
    window.addEventListener(LEAD_FORM_EVENT, openForm);
    return () => window.removeEventListener(LEAD_FORM_EVENT, openForm);
  }, []);

  return (
    <MotionConfig reducedMotion="always" transition={{ duration: 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/101-essays" element={<EssaysCoursePage />} />
          <Route path="/method" element={<MethodPage />} />
        </Routes>
        <LeadForm {...leadForm} onClose={() => setLeadForm({ open: false, format: '' })} />
        <TelegramButton />
      </BrowserRouter>
    </MotionConfig>
  );
}
