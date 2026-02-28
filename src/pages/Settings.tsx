import { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Mail,
  Smartphone,
  Globe,
  Database,
  Key,
  Users,
  ChevronRight,
  Check
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const notificationSettings = [
  { id: 'new-lead', label: 'New Lead Assigned', description: 'Get notified when a new lead is assigned to you', email: true, push: true },
  { id: 'followup', label: 'Follow-up Reminders', description: 'Reminders for upcoming follow-ups', email: true, push: true },
  { id: 'admission', label: 'Admission Updates', description: 'Notifications about admission status changes', email: true, push: false },
  { id: 'enquiry', label: 'Enquiry Responses', description: 'When a student responds to your enquiry', email: false, push: true },
  { id: 'target', label: 'Target Alerts', description: 'Weekly target achievement updates', email: true, push: false },
];

const teamMembers = [
  { name: 'Anita Desai', role: 'Senior Counselor', email: 'anita@edutrack.com', status: 'active' },
  { name: 'Rajesh Kumar', role: 'Counselor', email: 'rajesh@edutrack.com', status: 'active' },
  { name: 'Meena Shah', role: 'Senior Counselor', email: 'meena@edutrack.com', status: 'active' },
  { name: 'Sanjay Patel', role: 'Counselor', email: 'sanjay@edutrack.com', status: 'active' },
];

export function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <TabsList className="flex flex-col w-full h-auto gap-1 bg-transparent">
                  <TabsTrigger 
                    value="profile" 
                    className="justify-start gap-3 w-full data-[state=active]:bg-secondary"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notifications" 
                    className="justify-start gap-3 w-full data-[state=active]:bg-secondary"
                  >
                    <Bell className="w-4 h-4" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger 
                    value="security" 
                    className="justify-start gap-3 w-full data-[state=active]:bg-secondary"
                  >
                    <Shield className="w-4 h-4" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger 
                    value="team" 
                    className="justify-start gap-3 w-full data-[state=active]:bg-secondary"
                  >
                    <Users className="w-4 h-4" />
                    Team
                  </TabsTrigger>
                  <TabsTrigger 
                    value="integrations" 
                    className="justify-start gap-3 w-full data-[state=active]:bg-secondary"
                  >
                    <Database className="w-4 h-4" />
                    Integrations
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            <TabsContent value="profile" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-medium">
                        AD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" className="mb-2">Change Photo</Button>
                      <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Admin" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="User" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="admin@edutrack.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio" 
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to be notified</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                      </div>
                      <Switch />
                    </div>

                    <div className="pt-4">
                      <h4 className="font-medium mb-4">Notification Types</h4>
                      <div className="space-y-4">
                        {notificationSettings.map((setting) => (
                          <div key={setting.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                            <div>
                              <p className="font-medium text-sm">{setting.label}</p>
                              <p className="text-xs text-muted-foreground">{setting.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <Switch defaultChecked={setting.email} />
                              </div>
                              <div className="flex items-center gap-2">
                                <Smartphone className="w-4 h-4 text-muted-foreground" />
                                <Switch defaultChecked={setting.push} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                        </div>
                      </div>
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                          <Key className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                        </div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Active Sessions</p>
                          <p className="text-sm text-muted-foreground">2 active sessions</p>
                        </div>
                      </div>
                      <Button variant="outline" className="text-red-600">Logout All</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="mt-0">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>Manage your counseling team</CardDescription>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">Add Member</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="capitalize">{member.role}</Badge>
                          <div className="flex items-center gap-1 text-emerald-600">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-xs">Active</span>
                          </div>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Integrations</CardTitle>
                  <CardDescription>Connect with third-party services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'WhatsApp Business', description: 'Send messages via WhatsApp', connected: true, icon: '💬' },
                      { name: 'Google Calendar', description: 'Sync your calendar events', connected: true, icon: '📅' },
                      { name: 'Zapier', description: 'Automate workflows', connected: false, icon: '⚡' },
                      { name: 'Slack', description: 'Team notifications', connected: false, icon: '💬' },
                      { name: 'Mailchimp', description: 'Email marketing', connected: true, icon: '📧' },
                    ].map((integration, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-xl">
                            {integration.icon}
                          </div>
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">{integration.description}</p>
                          </div>
                        </div>
                        {integration.connected ? (
                          <Button variant="outline" className="gap-2 text-emerald-600">
                            <Check className="w-4 h-4" />
                            Connected
                          </Button>
                        ) : (
                          <Button className="bg-indigo-600 hover:bg-indigo-700">Connect</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
