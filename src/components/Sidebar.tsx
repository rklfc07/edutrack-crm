import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  MessageSquare, 
  UserCog, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Phone,
  Calendar,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PageType } from '@/App';

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

interface NavItem {
  id: PageType;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

const navItems: NavItem[] = [
  { id: 'dashboard',  label: 'Dashboard',  icon: LayoutDashboard },
  { id: 'leads',      label: 'Leads',      icon: Users,        badge: 21 },
  { id: 'admissions', label: 'Admissions', icon: UserCheck },
  { id: 'enquiries',  label: 'Enquiries',  icon: MessageSquare, badge: 8 },
  { id: 'counselors', label: 'Counselors', icon: UserCog },
  { id: 'analytics',  label: 'Analytics',  icon: BarChart3 },
  { id: 'settings',   label: 'Settings',   icon: Settings },
];

export function Sidebar({ currentPage, onPageChange, collapsed, onToggleCollapse, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <aside
      className={cn(
        // Base styles
        "fixed left-0 top-0 h-full bg-white border-r border-border z-50 transition-all duration-300 flex flex-col",
        // Desktop: always visible, collapsible width
        "md:translate-x-0",
        collapsed ? "md:w-16" : "md:w-64",
        // Mobile: full width drawer, slides in/out
        "w-72",
        mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center px-4 border-b border-border flex-shrink-0">
        <div className={cn(
          "flex items-center gap-3 transition-all duration-300 flex-1",
          collapsed && "md:justify-center"
        )}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className={cn("animate-slide-in", collapsed && "md:hidden")}>
            <h1 className="font-bold text-lg text-foreground">EduTrack</h1>
            <p className="text-[10px] text-muted-foreground -mt-0.5">Education CRM</p>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onMobileClose}
          className="md:hidden p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Actions */}
      <div className={cn("p-3 grid grid-cols-3 gap-2 border-b border-border", collapsed && "md:hidden")}>
        <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-secondary transition-colors">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <Phone className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-[10px] text-muted-foreground">Call</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-secondary transition-colors">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-[10px] text-muted-foreground">Message</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-secondary transition-colors">
          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
            <Calendar className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-[10px] text-muted-foreground">Schedule</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                collapsed && "md:justify-center md:px-2"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 flex-shrink-0 transition-colors",
                isActive ? "text-indigo-600" : "text-muted-foreground group-hover:text-foreground"
              )} />

              <span className={cn("flex-1 text-left animate-slide-in", collapsed && "md:hidden")}>
                {item.label}
              </span>

              {item.badge && (
                <>
                  {/* Badge — full sidebar */}
                  <span className={cn("animate-fade-in-up px-2 py-0.5 text-[10px] font-semibold bg-indigo-100 text-indigo-700 rounded-full", collapsed && "md:hidden")}>
                    {item.badge}
                  </span>
                  {/* Badge — collapsed desktop */}
                  <span className={cn("hidden absolute -top-0.5 -right-0.5 w-4 h-4 text-[9px] font-semibold bg-indigo-500 text-white rounded-full items-center justify-center", collapsed && "md:flex")}>
                    {item.badge}
                  </span>
                </>
              )}

              {isActive && (
                <div className={cn("absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full", collapsed && "md:hidden")} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Collapse Toggle — desktop only */}
      <div className="hidden md:block p-3 border-t border-border">
        <button
          onClick={onToggleCollapse}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary transition-all duration-200",
            collapsed && "justify-center px-2"
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-xs">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
