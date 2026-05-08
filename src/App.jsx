import { useCallback, useEffect, useState } from 'react';
import './App.css';
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
import Case11 from './components/cases/Case11';
import Case12 from './components/cases/Case12';
import Case13 from './components/cases/Case13';
import Case14 from './components/cases/Case14';
import Case15 from './components/cases/Case15';
import Case16 from './components/cases/Case16';
import Case17 from './components/cases/Case17';
import Case18 from './components/cases/Case18';

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
  { id: 'case11', title: '11. Inventory Optimization(indo)', component: <Case11 /> },
  { id: 'case12', title: '12. Why Traditional Metrics Lie', component: <Case12 /> },
  { id: 'case13', title: '13. The Freemium Whale Trap', component: <Case13 /> },
  { id: 'case14', title: '14. The Loyalty Illusion', component: <Case14 /> },
  { id: 'case15', title: '15. The $2B Portfolio Pivot', component: <Case15 /> },
  { id: 'case16', title: '16. The Margin Collapse at NovaCPG', component: <Case16/> },
  { id: 'case17', title: '17. The Profitable Customer Exodus', component: <Case17 /> },
  { id: 'case18', title: '18. The Last Decade of Coal', component: <Case18 /> },
];

function App() {
  const [activeCaseId, setActiveCaseId] = useState('case01');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const filteredCases = cases.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentIndex = cases.findIndex((c) => c.id === activeCaseId);

  const handleCaseSelect = useCallback((id) => {
    setIsAnimating(true);
    setActiveCaseId(id);
    setIsDropdownOpen(false);
    setSearchQuery('');
    setScrollProgress(0);
    window.scrollTo(0, 0);
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target === document.body || e.target === document.documentElement) {
        if (e.key === 'ArrowRight' || e.key === 'j') {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % cases.length;
          handleCaseSelect(cases[nextIndex].id);
        } else if (e.key === 'ArrowLeft' || e.key === 'k') {
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? cases.length - 1 : currentIndex - 1;
          handleCaseSelect(cases[prevIndex].id);
        } else if (e.key === '?' && e.shiftKey) {
          e.preventDefault();
          alert('⌨️ Keyboard Shortcuts:\n\n→ or j: Next case\n← or k: Previous case\n/ or Ctrl+K: Open case search\nCtrl+D: Toggle dark mode');
        } else if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
          e.preventDefault();
          setIsDropdownOpen(true);
        } else if (e.key === 'd' && e.ctrlKey) {
          setIsDarkMode((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handleCaseSelect]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Scroll reveal observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeCaseId]);

  const activeCase = cases.find(c => c.id === activeCaseId);
  const activeCaseLabel = activeCase
    ? activeCase.title.split('. ').slice(1).join('. ')
    : 'Cases';

  return (
    <div className="app-container" data-animating={isAnimating}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Top navigation */}
      <header className="topnav">
        <div className="topnav-inner">
          <span className="brand">Analytics Hub</span>

          <div className="cases-menu">
            <button
              className={`cases-trigger ${isDropdownOpen ? 'open' : ''}`}
              onClick={() => setIsDropdownOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              title="Browse cases (/ or Ctrl+K)"
            >
              {activeCaseLabel}
              <span className="trigger-chevron" aria-hidden="true">▾</span>
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="dropdown-overlay"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="cases-dropdown" role="listbox">
                  <input
                    type="text"
                    className="dropdown-search"
                    placeholder="Search cases..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    aria-label="Search cases"
                  />
                  {filteredCases.map((c) => {
                    const isActive = activeCaseId === c.id;
                    const [num, ...rest] = c.title.split('. ');
                    return (
                      <div
                        key={c.id}
                        className={`dropdown-item ${isActive ? 'active' : ''}`}
                        onClick={() => handleCaseSelect(c.id)}
                        role="option"
                        aria-selected={isActive}
                      >
                        <span className="dropdown-num">{num}</span>
                        <span className="dropdown-label">{rest.join('. ')}</span>
                      </div>
                    );
                  })}
                  {filteredCases.length === 0 && (
                    <p className="dropdown-empty">No cases found</p>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="nav-controls">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode (Ctrl+D)`}
              title="Toggle dark mode (Ctrl+D)"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Reading column */}
      <main className="main-content" role="main">
        <div className="case-transition-wrapper" key={activeCaseId}>
          {activeCase?.component}
        </div>
        {/* <footer className="app-footer">
          <p className="footer-quote">"Manjadda Wajadda"</p>
        </footer> */}
      </main>
    </div>
  );
}

export default App;
