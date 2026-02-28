import { Search, Bell, Plus, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-border px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 flex-shrink-0">
      
      {/* Left: Hamburger (mobile) + Search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search leads, students..."
              className="pl-10 pr-4 h-10 bg-secondary/50 border-0 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-3">
        {/* Add Lead — hidden on small mobile, shows sm+ */}
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 hidden sm:flex">
          <Plus className="w-4 h-4" />
          Add Lead
        </Button>

        {/* Add Lead icon-only — xs mobile */}
        <Button
          size="icon"
          className="bg-indigo-600 hover:bg-indigo-700 text-white sm:hidden w-9 h-9"
        >
          <Plus className="w-4 h-4" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              <Badge variant="secondary" className="text-xs">3 new</Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-64 overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  <span className="text-sm font-medium">New lead assigned</span>
                  <span className="text-xs text-muted-foreground ml-auto">2m</span>
                </div>
                <p className="text-xs text-muted-foreground pl-4">Rahul Sharma has been assigned to you</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm font-medium">Admission confirmed</span>
                  <span className="text-xs text-muted-foreground ml-auto">1h</span>
                </div>
                <p className="text-xs text-muted-foreground pl-4">Priya Patel has been admitted</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="text-sm font-medium">Follow-up reminder</span>
                  <span className="text-xs text-muted-foreground ml-auto">3h</span>
                </div>
                <p className="text-xs text-muted-foreground pl-4">Call Amit Kumar at 4:00 PM</p>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-indigo-600 cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 md:gap-3 p-1.5 rounded-lg hover:bg-secondary transition-colors">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-medium">
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">Super Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
