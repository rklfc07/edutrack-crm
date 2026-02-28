import { useState } from 'react';
import { 
  Search, 
  MoreHorizontal, 
  TrendingUp,
  Users,
  Target,
  Star,
  Award,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const counselorsData = [
  {
    id: 1,
    name: 'Anita Desai',
    email: 'anita@edutrack.com',
    phone: '+91 98765 43210',
    role: 'Senior Counselor',
    department: 'Management',
    leads: 156,
    admissions: 42,
    target: 50,
    conversionRate: 26.9,
    performance: 'excellent',
    status: 'active',
    avatar: '',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    email: 'rajesh@edutrack.com',
    phone: '+91 98765 43211',
    role: 'Counselor',
    department: 'Engineering',
    leads: 134,
    admissions: 35,
    target: 45,
    conversionRate: 26.1,
    performance: 'good',
    status: 'active',
    avatar: '',
  },
  {
    id: 3,
    name: 'Meena Shah',
    email: 'meena@edutrack.com',
    phone: '+91 98765 43212',
    role: 'Senior Counselor',
    department: 'Computer Science',
    leads: 178,
    admissions: 48,
    target: 50,
    conversionRate: 27.0,
    performance: 'excellent',
    status: 'active',
    avatar: '',
  },
  {
    id: 4,
    name: 'Sanjay Patel',
    email: 'sanjay@edutrack.com',
    phone: '+91 98765 43213',
    role: 'Counselor',
    department: 'Business',
    leads: 112,
    admissions: 28,
    target: 40,
    conversionRate: 25.0,
    performance: 'average',
    status: 'active',
    avatar: '',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    email: 'priya@edutrack.com',
    phone: '+91 98765 43214',
    role: 'Counselor',
    department: 'Management',
    leads: 98,
    admissions: 22,
    target: 35,
    conversionRate: 22.4,
    performance: 'average',
    status: 'on-leave',
    avatar: '',
  },
];

const topPerformers = [
  { name: 'Meena Shah', admissions: 48, target: 95, trend: 'up' },
  { name: 'Anita Desai', admissions: 42, target: 84, trend: 'up' },
  { name: 'Rajesh Kumar', admissions: 35, target: 78, trend: 'stable' },
];

const departmentStats = [
  { name: 'Management', counselors: 2, leads: 254, admissions: 64 },
  { name: 'Engineering', counselors: 1, leads: 134, admissions: 35 },
  { name: 'Computer Science', counselors: 1, leads: 178, admissions: 48 },
  { name: 'Business', counselors: 1, leads: 112, admissions: 28 },
];

export function Counselors() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCounselors = counselorsData.filter(counselor => 
    counselor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    counselor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    counselor.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'excellent':
        return <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200 gap-1"><Award className="w-3 h-3" /> Excellent</Badge>;
      case 'good':
        return <Badge className="bg-blue-50 text-blue-600 border-blue-200 gap-1"><Star className="w-3 h-3" /> Good</Badge>;
      case 'average':
        return <Badge variant="outline" className="text-amber-600 border-amber-200">Average</Badge>;
      default:
        return <Badge variant="outline">{performance}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="w-2 h-2 rounded-full bg-emerald-500" />;
      case 'on-leave':
        return <span className="w-2 h-2 rounded-full bg-amber-500" />;
      case 'inactive':
        return <span className="w-2 h-2 rounded-full bg-slate-400" />;
      default:
        return <span className="w-2 h-2 rounded-full bg-slate-400" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Counselors</h1>
          <p className="text-muted-foreground">Manage your counseling team</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Plus className="w-4 h-4" />
          Add Counselor
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Total Counselors</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">678</p>
                <p className="text-sm text-muted-foreground">Total Leads</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">175</p>
                <p className="text-sm text-muted-foreground">Total Admissions</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">25.8%</p>
                <p className="text-sm text-muted-foreground">Avg Conversion</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Counselors List */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Counselor List</CardTitle>
                <CardDescription>View and manage counselors</CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search counselors..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b">
                  <tr>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Counselor</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden md:table-cell">Department</th>
                    <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase">Leads</th>
                    <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase">Admissions</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden lg:table-cell">Target</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Performance</th>
                    <th className="w-16 p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredCounselors.map((counselor) => (
                    <tr 
                      key={counselor.id} 
                      className="hover:bg-secondary/30 transition-colors group"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={counselor.avatar} />
                              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-medium">
                                {counselor.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute bottom-0 right-0">
                              {getStatusBadge(counselor.status)}
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{counselor.name}</p>
                            <p className="text-xs text-muted-foreground">{counselor.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <span className="text-sm">{counselor.department}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-sm font-medium">{counselor.leads}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-sm font-medium">{counselor.admissions}</span>
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        <div className="w-24">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{counselor.admissions}/{counselor.target}</span>
                            <span>{Math.round((counselor.admissions / counselor.target) * 100)}%</span>
                          </div>
                          <Progress value={(counselor.admissions / counselor.target) * 100} className="h-2" />
                        </div>
                      </td>
                      <td className="p-4">
                        {getPerformanceBadge(counselor.performance)}
                      </td>
                      <td className="p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-8 h-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>View Leads</DropdownMenuItem>
                            <DropdownMenuItem>Performance Report</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Top Performers</CardTitle>
              <CardDescription>This month's best counselors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-amber-100 text-amber-600' :
                      index === 1 ? 'bg-slate-100 text-slate-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{performer.name}</p>
                      <p className="text-xs text-muted-foreground">{performer.admissions} admissions</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{performer.target}%</p>
                      <p className="text-xs text-muted-foreground">of target</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Department Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Department Overview</CardTitle>
              <CardDescription>Performance by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="p-3 rounded-lg bg-secondary/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{dept.name}</span>
                      <span className="text-xs text-muted-foreground">{dept.counselors} counselors</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{dept.leads} leads</span>
                      <span>{dept.admissions} admissions</span>
                    </div>
                    <Progress 
                      value={(dept.admissions / dept.leads) * 100} 
                      className="h-1.5 mt-2" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
