import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Phone, 
  MessageSquare, 
  Mail,
  Download,
  Upload,
  Plus,
  ArrowUpDown
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const statusTabs = [
  { id: 'all', label: 'All', count: 21 },
  { id: 'new', label: 'New Lead', count: 21 },
  { id: 'not-connected', label: 'Not Connected', count: 0 },
  { id: 'interested', label: 'Interested', count: 0 },
  { id: 'walkin-scheduled', label: 'Walk-in Scheduled', count: 0 },
  { id: 'walkin-done', label: 'Walk-in Done', count: 0 },
  { id: 'admitted', label: 'Admitted', count: 0 },
  { id: 'not-interested', label: 'Not Interested', count: 0 },
];

const leadsData = [
  { 
    id: 1,
    name: 'Pranav Kumar', 
    phone: '+91 99679 12662', 
    email: 'pranav@email.com',
    status: 'new', 
    subStatus: 'Untouched',
    course: 'MBA',
    source: 'Website',
    counselor: 'Anita Desai',
    lastActivity: '2 hours ago',
    calls: 0,
    messages: 0,
    emails: 0,
    meetings: 0,
    isHot: true
  },
  { 
    id: 2,
    name: 'Reshma Khan', 
    phone: '+91 90224 18221', 
    email: 'reshma@email.com',
    status: 'new', 
    subStatus: 'Untouched',
    course: 'B.Tech',
    source: 'Facebook',
    counselor: 'Rajesh Kumar',
    lastActivity: '3 hours ago',
    calls: 0,
    messages: 0,
    emails: 0,
    meetings: 0,
    isHot: false
  },
  { 
    id: 3,
    name: 'Akshaya Reddy', 
    phone: '+91 93261 29046', 
    email: 'akshaya@email.com',
    status: 'new', 
    subStatus: 'Untouched',
    course: 'MCA',
    source: 'Google Ads',
    counselor: 'Meena Shah',
    lastActivity: '5 hours ago',
    calls: 0,
    messages: 0,
    emails: 0,
    meetings: 0,
    isHot: true
  },
  { 
    id: 4,
    name: 'Mohd Islam', 
    phone: '+91 98765 43210', 
    email: 'mohd@email.com',
    status: 'new', 
    subStatus: 'Untouched',
    course: 'BBA',
    source: 'Referral',
    counselor: 'Sanjay Patel',
    lastActivity: '1 day ago',
    calls: 0,
    messages: 0,
    emails: 0,
    meetings: 0,
    isHot: false
  },
  { 
    id: 5,
    name: 'Sneha Gupta', 
    phone: '+91 98765 43211', 
    email: 'sneha@email.com',
    status: 'interested', 
    subStatus: 'Follow-up',
    course: 'BCA',
    source: 'Website',
    counselor: 'Anita Desai',
    lastActivity: '2 days ago',
    calls: 2,
    messages: 1,
    emails: 1,
    meetings: 0,
    isHot: true
  },
  { 
    id: 6,
    name: 'Vikram Singh', 
    phone: '+91 98765 43212', 
    email: 'vikram@email.com',
    status: 'walkin-scheduled', 
    subStatus: 'Confirmed',
    course: 'MBA',
    source: 'Instagram',
    counselor: 'Rajesh Kumar',
    lastActivity: '3 days ago',
    calls: 3,
    messages: 2,
    emails: 1,
    meetings: 1,
    isHot: false
  },
];

export function Leads() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLeadSelection = (id: number) => {
    setSelectedLeads(prev => 
      prev.includes(id) 
        ? prev.filter(leadId => leadId !== id)
        : [...prev, id]
    );
  };

  const selectAllLeads = () => {
    if (selectedLeads.length === leadsData.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leadsData.map(lead => lead.id));
    }
  };

  const filteredLeads = leadsData.filter(lead => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phone.includes(searchQuery) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Leads</h1>
          <p className="text-muted-foreground">Manage and track all your leads</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Import
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
            <Plus className="w-4 h-4" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Status Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="w-full justify-start h-auto p-1 bg-white border flex-wrap gap-1">
          {statusTabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600 px-3 py-1.5 text-xs"
            >
              {tab.label}
              <span className="ml-1.5 text-[10px] text-muted-foreground">({tab.count})</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Action Bar */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, phone, or email..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="mba">MBA</SelectItem>
                  <SelectItem value="btech">B.Tech</SelectItem>
                  <SelectItem value="mca">MCA</SelectItem>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="bba">BBA</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="w-4 h-4" />
                Sort
              </Button>
              {selectedLeads.length > 0 && (
                <Badge variant="secondary" className="gap-2">
                  {selectedLeads.length} selected
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Leads Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b">
                <tr>
                  <th className="w-12 p-4">
                    <Checkbox 
                      checked={selectedLeads.length === leadsData.length && leadsData.length > 0}
                      onCheckedChange={selectAllLeads}
                    />
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Lead</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden md:table-cell">Course</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden lg:table-cell">Source</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase hidden lg:table-cell">Counselor</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase">Activity</th>
                  <th className="w-16 p-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredLeads.map((lead, index) => (
                  <tr 
                    key={lead.id} 
                    className="hover:bg-secondary/30 transition-colors group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="p-4">
                      <Checkbox 
                        checked={selectedLeads.includes(lead.id)}
                        onCheckedChange={() => toggleLeadSelection(lead.id)}
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-9 h-9">
                          <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs font-medium">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{lead.name}</span>
                            {lead.isHot && (
                              <Badge className="bg-red-50 text-red-600 border-red-200 text-[10px]">Hot</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{lead.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <Badge variant="outline" className={`status-${lead.status} text-[10px]`}>
                          {lead.status.replace('-', ' ')}
                        </Badge>
                        <p className="text-[10px] text-muted-foreground">{lead.subStatus}</p>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-sm">{lead.course}</span>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <span className="text-sm text-muted-foreground">{lead.source}</span>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <span className="text-sm">{lead.counselor}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          {lead.calls}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MessageSquare className="w-3 h-3" />
                          {lead.messages}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Mail className="w-3 h-3" />
                          {lead.emails}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Phone className="w-4 h-4 text-emerald-600" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-8 h-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                            <DropdownMenuItem>Assign Counselor</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Follow-up</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t">
            <p className="text-sm text-muted-foreground">
              Showing {filteredLeads.length} of {leadsData.length} leads
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
