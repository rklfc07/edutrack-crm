import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  MessageSquare,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const enquiryStats = [
  {
    title: 'Total Enquiries',
    value: '456',
    change: '+32',
    trend: 'up',
    icon: MessageSquare,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Active',
    value: '89',
    change: '12',
    trend: 'neutral',
    icon: Clock,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Converted',
    value: '234',
    change: '+18',
    trend: 'up',
    icon: CheckCircle2,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Conversion Rate',
    value: '51.3%',
    change: '+3.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-purple-50 text-purple-600',
  },
];

const enquiriesData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul@email.com',
    phone: '+91 98765 43210',
    course: 'MBA',
    source: 'Website',
    status: 'active',
    priority: 'high',
    lastContact: '2 hours ago',
    nextFollowup: 'Today, 4:00 PM',
    assignedTo: 'Anita Desai',
    notes: 'Interested in 2-year program',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya@email.com',
    phone: '+91 98765 43211',
    course: 'B.Tech',
    source: 'Facebook',
    status: 'active',
    priority: 'medium',
    lastContact: '5 hours ago',
    nextFollowup: 'Tomorrow, 10:00 AM',
    assignedTo: 'Rajesh Kumar',
    notes: 'Comparing with other colleges',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    email: 'amit@email.com',
    phone: '+91 98765 43212',
    course: 'MCA',
    source: 'Google Ads',
    status: 'converted',
    priority: 'high',
    lastContact: '1 day ago',
    nextFollowup: 'Completed',
    assignedTo: 'Meena Shah',
    notes: 'Admission confirmed',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    email: 'sneha@email.com',
    phone: '+91 98765 43213',
    course: 'BCA',
    source: 'Referral',
    status: 'active',
    priority: 'low',
    lastContact: '2 days ago',
    nextFollowup: 'Jan 20, 2:00 PM',
    assignedTo: 'Sanjay Patel',
    notes: 'Waiting for exam results',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram@email.com',
    phone: '+91 98765 43214',
    course: 'BBA',
    source: 'Instagram',
    status: 'closed',
    priority: 'medium',
    lastContact: '3 days ago',
    nextFollowup: 'Not interested',
    assignedTo: 'Anita Desai',
    notes: 'Chose another institution',
  },
];

const sourceBreakdown = [
  { source: 'Website', count: 156, percentage: 34 },
  { source: 'Facebook', count: 98, percentage: 21 },
  { source: 'Google Ads', count: 87, percentage: 19 },
  { source: 'Referral', count: 65, percentage: 14 },
  { source: 'Instagram', count: 50, percentage: 11 },
];

export function Enquiries() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEnquiries = enquiriesData.filter(enquiry => 
    enquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    enquiry.phone.includes(searchQuery) ||
    enquiry.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="status-followup">Active</Badge>;
      case 'converted':
        return <Badge className="status-admitted">Converted</Badge>;
      case 'closed':
        return <Badge variant="outline" className="text-slate-600 border-slate-200">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      case 'low':
        return 'bg-emerald-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Enquiries</h1>
          <p className="text-muted-foreground">Manage and track all enquiries</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <MessageSquare className="w-4 h-4" />
          New Enquiry
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {enquiryStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {stat.trend === 'up' && (
                    <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </div>
                  )}
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
        {/* Enquiries List */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Enquiry List</CardTitle>
                <CardDescription>View and manage all enquiries</CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search enquiries..."
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
                <TabsTrigger value="active" className="data-[state=active]:bg-white">Active</TabsTrigger>
                <TabsTrigger value="converted" className="data-[state=active]:bg-white">Converted</TabsTrigger>
                <TabsTrigger value="closed" className="data-[state=active]:bg-white">Closed</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent className="p-0">
            <div className="space-y-3 p-4">
              {filteredEnquiries.map((enquiry) => (
                <div 
                  key={enquiry.id} 
                  className="p-4 rounded-xl border hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-indigo-100 text-indigo-600 text-sm font-medium">
                            {enquiry.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${getPriorityColor(enquiry.priority)}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{enquiry.name}</h3>
                          {getStatusBadge(enquiry.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{enquiry.phone}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs bg-secondary px-2 py-0.5 rounded">{enquiry.course}</span>
                          <span className="text-xs text-muted-foreground">via {enquiry.source}</span>
                        </div>
                        {enquiry.notes && (
                          <p className="text-xs text-muted-foreground mt-2 italic">"{enquiry.notes}"</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Assigned to</p>
                      <p className="text-sm font-medium">{enquiry.assignedTo}</p>
                      <div className="mt-2">
                        <p className="text-xs text-muted-foreground">Next follow-up</p>
                        <p className={`text-sm ${enquiry.status === 'active' ? 'text-amber-600 font-medium' : 'text-muted-foreground'}`}>
                          {enquiry.nextFollowup}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-3 border-t">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Last contact: {enquiry.lastContact}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Enquiry</DropdownMenuItem>
                          <DropdownMenuItem>Schedule Follow-up</DropdownMenuItem>
                          <DropdownMenuItem>Mark as Converted</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Close Enquiry</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Source Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Source Breakdown</CardTitle>
              <CardDescription>Enquiries by source</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sourceBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.source}</span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={item.percentage} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground w-10">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call pending enquiries
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Send bulk message
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Update follow-ups
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
