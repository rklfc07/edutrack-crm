import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
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

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'leads':
        return <Leads />;
      case 'admissions':
        return <Admissions />;
      case 'enquiries':
        return <Enquiries />;
      case 'counselors':
        return <Counselors />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header />
        <main className="flex-1 overflow-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
