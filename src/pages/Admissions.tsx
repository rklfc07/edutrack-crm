import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Download,
  GraduationCap,
  Calendar,
  CheckCircle2,
  FileText,
  CreditCard
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const admissionStats = [
  {
    title: 'Total Admissions',
    value: '342',
    change: '+28',
    period: 'this month',
    icon: GraduationCap,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Pending Documents',
    value: '45',
    change: '12',
    period: 'need review',
    icon: FileText,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Fee Pending',
    value: '₹12.5L',
    change: '23',
    period: 'students',
    icon: CreditCard,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Upcoming Intake',
    value: '156',
    change: 'Jan 2026',
    period: 'batch',
    icon: Calendar,
    color: 'bg-blue-50 text-blue-600',
  },
];

const admissionsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul@email.com',
    phone: '+91 98765 43210',
    course: 'MBA',
    batch: 'Jan 2026',
    admissionDate: '2025-01-15',
    feeStatus: 'paid',
    documentStatus: 'complete',
    progress: 100,
    counselor: 'Anita Desai',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya@email.com',
    phone: '+91 98765 43211',
    course: 'B.Tech',
    batch: 'Jan 2026',
    admissionDate: '2025-01-14',
    feeStatus: 'partial',
    documentStatus: 'pending',
    progress: 75,
    counselor: 'Rajesh Kumar',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    email: 'amit@email.com',
    phone: '+91 98765 43212',
    course: 'MCA',
    batch: 'Feb 2026',
    admissionDate: '2025-01-12',
    feeStatus: 'pending',
    documentStatus: 'complete',
    progress: 60,
    counselor: 'Meena Shah',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    email: 'sneha@email.com',
    phone: '+91 98765 43213',
    course: 'BCA',
    batch: 'Jan 2026',
    admissionDate: '2025-01-10',
    feeStatus: 'paid',
    documentStatus: 'complete',
    progress: 100,
    counselor: 'Sanjay Patel',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram@email.com',
    phone: '+91 98765 43214',
    course: 'BBA',
    batch: 'Mar 2026',
    admissionDate: '2025-01-08',
    feeStatus: 'partial',
    documentStatus: 'in-review',
    progress: 50,
    counselor: 'Anita Desai',
  },
];

const recentActivity = [
  { student: 'Rahul Sharma', action: 'Fee payment received', amount: '₹1,50,000', time: '2 hours ago' },
  { student: 'Priya Patel', action: 'Documents uploaded', time: '4 hours ago' },
  { student: 'Amit Kumar', action: 'Admission confirmed', time: '6 hours ago' },
  { student: 'Sneha Gupta', action: 'Fee payment received', amount: '₹75,000', time: '1 day ago' },
];

export function Admissions() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAdmissions = admissionsData.filter(admission => 
    admission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    admission.phone.includes(searchQuery) ||
    admission.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admissions</h1>
          <p className="text-muted-foreground">Track and manage student admissions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
            <GraduationCap className="w-4 h-4" />
            New Admission
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {admissionStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{stat.change}</p>
                    <p className="text-xs text-muted-foreground">{stat.period}</p>
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admissions List */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Admission List</CardTitle>
                <CardDescription>View and manage all admissions</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search admissions..."
                    className="pl-10 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full mt-4">
              <TabsList className="bg-secondary/50">
                <TabsTrigger value="all" className="data-[state=active]:bg-white">All</TabsTrigger>
                <TabsTrigger value="complete" className="data-[state=active]:bg-white">Complete</TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-white">Pending</TabsTrigger>
                <TabsTrigger value="upcoming" className="data-[state=active]:bg-white">Upcoming</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b">
                  <tr>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Student</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Course</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden md:table-cell">Batch</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Status</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden lg:table-cell">Progress</th>
                    <th className="w-16 p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredAdmissions.map((admission) => (
                    <tr 
                      key={admission.id} 
                      className="hover:bg-secondary/30 transition-colors group"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-9 h-9">
                            <AvatarFallback className="bg-emerald-100 text-emerald-600 text-xs font-medium">
                              {admission.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{admission.name}</p>
                            <p className="text-xs text-muted-foreground">{admission.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{admission.course}</span>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <span className="text-sm text-muted-foreground">{admission.batch}</span>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <Badge 
                            variant="outline" 
                            className={admission.feeStatus === 'paid' ? 'status-admitted' : 'status-warm'}
                          >
                            {admission.feeStatus === 'paid' ? 'Fee Paid' : 'Fee Pending'}
                          </Badge>
                          {admission.documentStatus !== 'complete' && (
                            <p className="text-[10px] text-amber-600">Docs {admission.documentStatus}</p>
                          )}
                        </div>
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        <div className="w-24">
                          <Progress value={admission.progress} className="h-2" />
                          <p className="text-[10px] text-muted-foreground mt-1">{admission.progress}%</p>
                        </div>
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
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>Fee Details</DropdownMenuItem>
                            <DropdownMenuItem>Documents</DropdownMenuItem>
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
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Activity</CardTitle>
              <CardDescription>Latest admission updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.student}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                      {activity.amount && (
                        <p className="text-xs font-medium text-emerald-600">{activity.amount}</p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Batches */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Upcoming Batches</CardTitle>
              <CardDescription>Next intake schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { batch: 'Jan 2026', course: 'MBA', count: 45, date: '15 Jan 2026' },
                  { batch: 'Feb 2026', course: 'B.Tech', count: 78, date: '01 Feb 2026' },
                  { batch: 'Mar 2026', course: 'MCA', count: 32, date: '10 Mar 2026' },
                ].map((batch, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div>
                      <p className="font-medium text-sm">{batch.batch}</p>
                      <p className="text-xs text-muted-foreground">{batch.course}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{batch.count}</p>
                      <p className="text-xs text-muted-foreground">students</p>
                    </div>
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
