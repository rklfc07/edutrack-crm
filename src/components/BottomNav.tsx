import { LayoutDashboard, Users, UserCheck, MessageSquare, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PageType } from '@/App';

interface BottomNavProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const bottomNavItems = [
  { id: 'dashboard'  as PageType, label: 'Home',      icon: LayoutDashboard },
  { id: 'leads'      as PageType, label: 'Leads',     icon: Users },
  { id: 'admissions' as PageType, label: 'Admits',    icon: UserCheck },
  { id: 'enquiries'  as PageType, label: 'Enquiries', icon: MessageSquare },
  { id: 'analytics'  as PageType, label: 'Analytics', icon: BarChart3 },
];

export function BottomNav({ currentPage, onPageChange }: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-30"
         style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="flex items-center justify-around py-1">
        {bottomNavItems.map(({ id, label, icon: Icon }) => {
          const isActive = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => onPageChange(id)}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-colors min-w-0 flex-1",
                isActive ? "text-indigo-600" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-indigo-600")} />
              <span className={cn("text-[10px] font-medium truncate", isActive && "text-indigo-600")}>
                {label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-indigo-500 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
