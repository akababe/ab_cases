import React, { useEffect, useState } from 'react';
import Case01 from './components/cases/Case01';
import Case02 from './components/cases/Case02';
import Case03 from './components/cases/Case03';
import Case04 from './components/cases/Case04';
import Case05 from './components/cases/Case05';
import Case06 from './components/cases/Case06';
import Case07 from './components/cases/Case07';
import Case08 from './components/cases/Case08';
import Case09 from './components/cases/Case09';
import Case10 from './components/cases/Case10';

const cases = [
  { id: 'case01', title: '01. Subscription Retention', component: <Case01 /> },
  { id: 'case02', title: '02. Credit Risk & Fraud', component: <Case02 /> },
  { id: 'case03', title: '03. Inventory Optimization', component: <Case03 /> },
  { id: 'case04', title: '04. Customer Segmentation', component: <Case04 /> },
  { id: 'case05', title: '05. Dynamic Pricing', component: <Case05 /> },
  { id: 'case06', title: '06. Supply Chain Logistics', component: <Case06 /> },
  { id: 'case07', title: '07. Healthcare Outcomes', component: <Case07 /> },
  { id: 'case08', title: '08. Marketing Mix Modeling', component: <Case08 /> },
  { id: 'case09', title: '09. SaaS Churn Prediction', component: <Case09 /> },
  { id: 'case10', title: '10. Retail Basket Analysis', component: <Case10 /> },
];

function App() {
  const [activeCaseId, setActiveCaseId] = useState('case01');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeCase = cases.find(c => c.id === activeCaseId);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCaseSelect = (id) => {
    setActiveCaseId(id);
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <header className="mobile-topbar">
        <div>
          <p className="mobile-topbar-label">Analytics Hub</p>
          <h2>{activeCase?.title || 'Cases'}</h2>
        </div>
        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={isSidebarOpen}
          aria-controls="case-navigation"
          onClick={() => setIsSidebarOpen((open) => !open)}
        >
          Menu
        </button>
      </header>

      <div className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`} onClick={() => setIsSidebarOpen(false)} />

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="case-navigation">
        <h2>Analytics Hub</h2>
        <ul className="nav-list">
          {cases.map((c) => (
            <li
              key={c.id}
              className={`nav-item ${activeCaseId === c.id ? 'active' : ''}`}
              onClick={() => handleCaseSelect(c.id)}
            >
              {c.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        {activeCase.component}
      </main>
    </div>
  );
}

export default App;
