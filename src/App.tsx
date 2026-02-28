import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Dashboard } from './pages/Dashboard';
import { Leads } from './pages/Leads';
import { Admissions } from './pages/Admissions';
import { Enquiries } from './pages/Enquiries';
import { Counselors } from './pages/Counselors';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';

export type PageType = 'dashboard' | 'leads' | 'admissions' | 'enquiries' | 'counselors' | 'analytics' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // close drawer on nav
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':   return <Dashboard />;
      case 'leads':       return <Leads />;
      case 'admissions':  return <Admissions />;
      case 'enquiries':   return <Enquiries />;
      case 'counselors':  return <Counselors />;
      case 'analytics':   return <Analytics />;
      case 'settings':    return <Settings />;
      default:            return <Dashboard />;
    }
  };

  return (
    <div className="flex h-[100dvh] bg-background overflow-hidden">
      {/* Mobile backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <Sidebar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div
        className={[
          'flex-1 flex flex-col transition-all duration-300 min-w-0',
          sidebarCollapsed ? 'md:ml-16' : 'md:ml-64',
        ].join(' ')}
      >
        <Header onMenuToggle={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6">
          {renderPage()}
        </main>
      </div>

      {/* Bottom nav — mobile only */}
      <BottomNav currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
