import { useCallback, useEffect, useState } from 'react';
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
    setIsSidebarOpen(false);
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
        // Arrow keys: left/right to navigate
        if (e.key === 'ArrowRight' || e.key === 'j') {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % cases.length;
          handleCaseSelect(cases[nextIndex].id);
        } else if (e.key === 'ArrowLeft' || e.key === 'k') {
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? cases.length - 1 : currentIndex - 1;
          handleCaseSelect(cases[prevIndex].id);
        }
        // ? key for help
        else if (e.key === '?' && e.shiftKey) {
          e.preventDefault();
          alert('⌨️ Keyboard Shortcuts:\n\n→ or j: Next case\n← or k: Previous case\n/ or Ctrl+K: Search\n\nTry them out!');
        }
        // Slash for search focus
        else if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !isSidebarOpen) {
          e.preventDefault();
          document.getElementById('case-search')?.focus();
        }
        // d key for dark mode toggle
        else if (e.key === 'd' && e.ctrlKey && !isSidebarOpen) {
          setIsDarkMode((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handleCaseSelect, isSidebarOpen]);

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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const activeCase = cases.find(c => c.id === activeCaseId);

  return (
    <div className="app-container" data-animating={isAnimating}>
      <div className="scroll-progress-bar" style={{width: `${scrollProgress}%`}} />

      <header className="mobile-topbar">
        <div style={{flex: 1}}>
          <p className="mobile-topbar-label">Analytics Hub</p>
          <h2>{activeCase?.title || 'Cases'}</h2>
        </div>
        <div className="topbar-controls">
          <input
            id="case-search"
            type="text"
            placeholder="Search cases... (/ or Ctrl+K)"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search cases"
          />
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode (Ctrl+D)`}
            title="Toggle dark mode (Ctrl+D)"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={isSidebarOpen}
            aria-controls="case-navigation"
            onClick={() => setIsSidebarOpen((open) => !open)}
            title="Toggle navigation (or use ← → keys)"
          >
            Menu
          </button>
        </div>
      </header>

      <div className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`} onClick={() => setIsSidebarOpen(false)} />

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="case-navigation">
        <h2>Analytics Hub</h2>
        <div className="sidebar-search">
          <input
            type="text"
            placeholder="Filter cases..."
            className="search-input-sidebar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filter cases"
          />
        </div>
        <ul className="nav-list" role="listbox">
          {filteredCases.map((c) => {
            const isActive = activeCaseId === c.id;
            return (
              <li
                key={c.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleCaseSelect(c.id)}
                role="option"
                aria-selected={isActive}
              >
                {c.title}
                {isActive && <span className="nav-item-indicator" aria-hidden="true">→</span>}
              </li>
            );
          })}
        </ul>
        {filteredCases.length === 0 && (
          <p className="sidebar-empty">No cases found</p>
        )}
      </aside>

      <main className="main-content" role="main">
        <div className="case-transition-wrapper">
          {activeCase.component}
        </div>
        <div className="keyboard-hint">
          <kbd>←</kbd> <kbd>→</kbd> or <kbd>k</kbd> <kbd>j</kbd> to navigate · <kbd>Ctrl+D</kbd> for dark mode · <kbd>?</kbd> for help
        </div>
      </main>
    </div>
  );
}

export default App;
