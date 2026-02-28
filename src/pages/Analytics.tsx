import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Download,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const monthlyData = [
  { month: 'Jan', leads: 120, admissions: 32, enquiries: 45 },
  { month: 'Feb', leads: 135, admissions: 38, enquiries: 52 },
  { month: 'Mar', leads: 148, admissions: 42, enquiries: 48 },
  { month: 'Apr', leads: 162, admissions: 45, enquiries: 58 },
  { month: 'May', leads: 178, admissions: 51, enquiries: 62 },
  { month: 'Jun', leads: 195, admissions: 58, enquiries: 71 },
];

const sourceData = [
  { source: 'Website', leads: 312, percentage: 35, color: 'bg-blue-500' },
  { source: 'Social Media', leads: 198, percentage: 22, color: 'bg-purple-500' },
  { source: 'Referrals', leads: 156, percentage: 18, color: 'bg-emerald-500' },
  { source: 'Google Ads', leads: 134, percentage: 15, color: 'bg-amber-500' },
  { source: 'Direct', leads: 89, percentage: 10, color: 'bg-slate-500' },
];

const courseData = [
  { course: 'MBA', leads: 245, admissions: 68, conversion: 27.8 },
  { course: 'B.Tech', leads: 198, admissions: 52, conversion: 26.3 },
  { course: 'MCA', leads: 156, admissions: 42, conversion: 26.9 },
  { course: 'BCA', leads: 134, admissions: 35, conversion: 26.1 },
  { course: 'BBA', leads: 112, admissions: 28, conversion: 25.0 },
];

const targetData = {
  monthly: {
    leads: { current: 195, target: 250, percentage: 78 },
    admissions: { current: 58, target: 75, percentage: 77 },
    enquiries: { current: 71, target: 80, percentage: 89 },
    calls: { current: 423, target: 500, percentage: 85 },
  },
  quarterly: {
    leads: { current: 528, target: 750, percentage: 70 },
    admissions: { current: 156, target: 225, percentage: 69 },
    enquiries: { current: 198, target: 240, percentage: 83 },
    calls: { current: 1156, target: 1500, percentage: 77 },
  },
};

const counselorComparison = [
  { name: 'Anita Desai', leads: 156, admissions: 42, conversion: 26.9, trend: 'up' },
  { name: 'Meena Shah', leads: 178, admissions: 48, conversion: 27.0, trend: 'up' },
  { name: 'Rajesh Kumar', leads: 134, admissions: 35, conversion: 26.1, trend: 'stable' },
  { name: 'Sanjay Patel', leads: 112, admissions: 28, conversion: 25.0, trend: 'down' },
];

export function Analytics() {
  const [period, setPeriod] = useState('monthly');
  const targets = period === 'monthly' ? targetData.monthly : targetData.quarterly;

  const maxLeads = Math.max(...monthlyData.map(d => d.leads));

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track performance and targets</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">This Month</SelectItem>
              <SelectItem value="quarterly">This Quarter</SelectItem>
              <SelectItem value="yearly">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Targets Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Targets Overview</CardTitle>
          <CardDescription>Progress towards monthly goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(targets).map(([key, data]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium capitalize">{key}</span>
                  <Badge variant={data.percentage >= 80 ? 'default' : 'secondary'} className="text-xs">
                    {data.percentage}%
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{data.current}</span>
                    <span>Target: {data.target}</span>
                  </div>
                  <Progress value={data.percentage} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>Leads, admissions & enquiries over time</CardDescription>
              </div>
              <Tabs defaultValue="leads" className="w-auto">
                <TabsList className="bg-secondary/50">
                  <TabsTrigger value="leads" className="data-[state=active]:bg-white text-xs">Leads</TabsTrigger>
                  <TabsTrigger value="admissions" className="data-[state=active]:bg-white text-xs">Admissions</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end gap-3">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex gap-1 items-end" style={{ height: '200px' }}>
                    <div 
                      className="flex-1 bg-indigo-500 rounded-t-sm transition-all duration-500 hover:bg-indigo-600"
                      style={{ height: `${(data.leads / maxLeads) * 100}%` }}
                    />
                    <div 
                      className="flex-1 bg-emerald-500 rounded-t-sm transition-all duration-500 hover:bg-emerald-600"
                      style={{ height: `${(data.admissions / maxLeads) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm" />
                <span className="text-xs text-muted-foreground">Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                <span className="text-xs text-muted-foreground">Admissions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Source Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sourceData.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-sm ${source.color}`} />
                      {source.source}
                    </span>
                    <span className="font-medium">{source.leads} ({source.percentage}%)</span>
                  </div>
                  <Progress value={source.percentage} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-secondary/30">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Leads</span>
                <span className="text-xl font-bold">889</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Course Performance</CardTitle>
          <CardDescription>Conversion rates by course</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b">
                <tr>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Course</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase">Leads</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase">Admissions</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase">Conversion</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {courseData.map((course, index) => (
                  <tr key={index} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="font-medium">{course.course}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium">{course.leads}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium">{course.admissions}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium">{course.conversion}%</span>
                    </td>
                    <td className="p-4">
                      <div className="w-32">
                        <Progress value={course.conversion * 3} className="h-2" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Counselor Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Counselor Performance</CardTitle>
          <CardDescription>Compare counselor metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counselorComparison.map((counselor, index) => (
              <div key={index} className="p-4 rounded-xl border hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{counselor.name}</span>
                  {counselor.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  ) : counselor.trend === 'down' ? (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold">{counselor.leads}</p>
                    <p className="text-[10px] text-muted-foreground">Leads</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{counselor.admissions}</p>
                    <p className="text-[10px] text-muted-foreground">Admissions</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{counselor.conversion}%</p>
                    <p className="text-[10px] text-muted-foreground">Conv.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
