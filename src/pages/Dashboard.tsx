import { 
  Users, 
  UserCheck, 
  MessageSquare, 
  TrendingUp, 
  Phone,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const stats = [
  {
    title: 'Total Leads',
    value: '1,284',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Admissions',
    value: '342',
    change: '+8.2%',
    trend: 'up',
    icon: UserCheck,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Active Enquiries',
    value: '89',
    change: '-3.1%',
    trend: 'down',
    icon: MessageSquare,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Conversion Rate',
    value: '26.6%',
    change: '+2.4%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-purple-50 text-purple-600',
  },
];

const recentLeads = [
  { name: 'Rahul Sharma', phone: '+91 98765 43210', status: 'hot', course: 'MBA', time: '2 min ago' },
  { name: 'Priya Patel', phone: '+91 98765 43211', status: 'warm', course: 'B.Tech', time: '15 min ago' },
  { name: 'Amit Kumar', phone: '+91 98765 43212', status: 'new', course: 'BCA', time: '1 hour ago' },
  { name: 'Sneha Gupta', phone: '+91 98765 43213', status: 'hot', course: 'MCA', time: '2 hours ago' },
  { name: 'Vikram Singh', phone: '+91 98765 43214', status: 'cold', course: 'BBA', time: '3 hours ago' },
];

const upcomingTasks = [
  { title: 'Follow-up call with Rahul', time: '10:00 AM', type: 'call', priority: 'high' },
  { title: 'Schedule walk-in for Priya', time: '11:30 AM', type: 'meeting', priority: 'medium' },
  { title: 'Send fee structure to Amit', time: '2:00 PM', type: 'email', priority: 'low' },
  { title: 'Counselor meeting', time: '4:00 PM', type: 'meeting', priority: 'high' },
];

const counselorPerformance = [
  { name: 'Anita Desai', leads: 45, admissions: 18, target: 80 },
  { name: 'Rajesh Kumar', leads: 38, admissions: 15, target: 75 },
  { name: 'Meena Shah', leads: 52, admissions: 22, target: 85 },
  { name: 'Sanjay Patel', leads: 41, admissions: 16, target: 70 },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Today
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
            <Phone className="w-4 h-4" />
            Quick Call
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${
                    stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle>Recent Leads</CardTitle>
              <CardDescription>Latest leads that need your attention</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-indigo-600">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentLeads.map((lead, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-indigo-100 text-indigo-600 text-sm font-medium">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-muted-foreground">{lead.course}</p>
                      <p className="text-xs text-muted-foreground">{lead.time}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`status-${lead.status} capitalize`}
                    >
                      {lead.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.time}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px] capitalize">
                    {task.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 gap-2">
              <Calendar className="w-4 h-4" />
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Counselor Performance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle>Counselor Performance</CardTitle>
            <CardDescription>Monthly target achievement</CardDescription>
          </div>
          <Button variant="outline" size="sm">View Report</Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counselorPerformance.map((counselor, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs">
                        {counselor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{counselor.name}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{counselor.admissions} admissions</span>
                    <span className="font-medium">{counselor.target}%</span>
                  </div>
                  <Progress value={counselor.target} className="h-2" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{counselor.leads} leads</span>
                  <span>Target: 25</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
