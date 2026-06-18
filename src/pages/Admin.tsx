import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { 
  LayoutDashboard, 
  Users, 
  Beaker, 
  FileText, 
  Newspaper, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit,
  LogIn,
  Image as ImageIcon,
  Upload,
  Loader2
} from 'lucide-react';
import { mockService } from '@/lib/mockDataService';
import { Member, ResearchArea, Publication, News, LabInfo, GalleryImage } from '@/types';

import Logo from '@/components/Logo';

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock auth check
    const storedUser = localStorage.getItem('nabid_admin_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = async () => {
    // Mock login
    const mockUser = {
      displayName: 'Admin User',
      email: 'navid203ljw@gmail.com',
      photoURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin'
    };
    setUser(mockUser);
    localStorage.setItem('nabid_admin_user', JSON.stringify(mockUser));
    toast.success('Successfully logged in (Demo Mode)');
  };

  const handleLogout = async () => {
    setUser(null);
    localStorage.removeItem('nabid_admin_user');
    toast.success('Logged out');
    navigate('/');
  };

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <Card className="w-full max-w-md shadow-2xl border-none overflow-hidden rounded-3xl">
          <CardHeader className="text-center space-y-6 pt-12">
            <Logo className="w-20 h-20 mx-auto" />
            <div>
              <CardTitle className="text-4xl font-black tracking-tighter">Admin Login</CardTitle>
              <CardDescription className="font-medium">NABID Lab Management System</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pb-12 px-10">
            <p className="text-center text-slate-500 text-sm leading-relaxed">
              관리자 권한이 필요합니다. <br /> 구글 계정으로 로그인하여 연구실 콘텐츠를 관리하세요.
            </p>
            <Button onClick={handleLogin} className="w-full h-14 bg-ku-red hover:bg-ku-red/90 text-white font-bold rounded-xl shadow-lg shadow-ku-red/20 transition-all active:scale-95">
              <LogIn className="mr-2" size={20} /> Sign in with Google
            </Button>
            <Link to="/" className="block text-center text-sm font-bold text-slate-400 hover:text-ku-red transition-colors">
              Back to Website
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 text-white p-6 flex flex-col">
        <div className="mb-12">
          <Logo />
        </div>

        <nav className="flex-grow space-y-1">
          <AdminNavLink to="/admin" icon={LayoutDashboard} label="Dashboard" />
          <AdminNavLink to="/admin/members" icon={Users} label="Members" />
          <AdminNavLink to="/admin/research" icon={Beaker} label="Research" />
          <AdminNavLink to="/admin/publications" icon={FileText} label="Publications" />
          <AdminNavLink to="/admin/news" icon={Newspaper} label="News" />
          <AdminNavLink to="/admin/gallery" icon={ImageIcon} label="Gallery" />
          <AdminNavLink to="/admin/theme" icon={Settings} label="Theme" />
          <AdminNavLink to="/admin/settings" icon={Settings} label="Settings" />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800">
          <div className="flex items-center space-x-3 mb-6">
            <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full" />
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate">{user.displayName}</p>
              <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800 p-2 h-auto">
            <LogOut size={18} className="mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/members" element={<MembersManagement />} />
          <Route path="/research" element={<ResearchManagement />} />
          <Route path="/publications" element={<PublicationsManagement />} />
          <Route path="/news" element={<NewsManagement />} />
          <Route path="/gallery" element={<GalleryManagement />} />
          <Route path="/theme" element={<ThemeManagement />} />
          <Route path="/settings" element={<SettingsManagement />} />
        </Routes>
      </main>
    </div>
  );
}

function ThemeManagement() {
  const [labInfo, setLabInfo] = useState<LabInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    mockService.getLabInfo().then((data) => {
      if (data) setLabInfo(data);
      setLoading(false);
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!labInfo) return;
    setSaving(true);
    try {
      await mockService.updateLabInfo(labInfo);
      toast.success('Theme updated successfully');
      // In a real app, we might want to update CSS variables globally
      document.documentElement.style.setProperty('--ku-red', labInfo.primaryColor || '#8B0029');
    } catch (error) {
      toast.error('Failed to update theme');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Theme & Design</h2>
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Primary Brand Color</label>
              <div className="flex space-x-4 items-center">
                <Input 
                  type="color" 
                  className="w-16 h-10 p-1" 
                  value={labInfo?.primaryColor || '#8B0029'} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, primaryColor: e.target.value} : null)}
                />
                <Input 
                  value={labInfo?.primaryColor || '#8B0029'} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, primaryColor: e.target.value} : null)}
                  placeholder="#8B0029"
                />
              </div>
              <p className="text-xs text-slate-500">This color will be used for buttons, links, and accents across the site.</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Lab Logo URL</label>
              <Input 
                value={labInfo?.logoUrl || ''} 
                onChange={(e) => setLabInfo(prev => prev ? {...prev, logoUrl: e.target.value} : null)}
                placeholder="https://example.com/logo.png"
              />
            </div>
            <Button type="submit" disabled={saving} className="bg-ku-red text-white">
              {saving ? 'Saving...' : 'Save Theme Settings'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminNavLink({ to, icon: Icon, label }: { to: string, icon: any, label: string }) {
  return (
    <Link to={to} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Welcome to the NABID Lab management system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 uppercase">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 uppercase">Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">54</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 uppercase">News Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">28</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates from the lab</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-ku-red">
                    <Newspaper size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">New publication added</p>
                    <p className="text-xs text-slate-500">2 hours ago by Admin</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Placeholder management components (would be fully implemented with forms and firestore calls)
function MembersManagement() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Partial<Member> | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  useEffect(() => {
    mockService.getMembers().then(setMembers);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent) => {
    let file: File | null = null;
    
    if ('files' in e.target && e.target.files) {
      file = e.target.files[0];
    } else if ('dataTransfer' in e && e.dataTransfer.files) {
      e.preventDefault();
      file = e.dataTransfer.files[0];
    }

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingMember(prev => prev ? { ...prev, imageUrl: reader.result as string } : null);
      setIsUploading(false);
      toast.success('Member image prepared');
    };
    reader.onerror = () => {
      toast.error('Failed to read image');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember?.name || !editingMember?.role) return;

    try {
      if (editingMember.id) {
        await mockService.updateMember(editingMember.id, editingMember);
        toast.success('Member updated');
      } else {
        await mockService.addMember({
          name: editingMember.name,
          role: editingMember.role as any,
          bio: editingMember.bio || '',
          email: editingMember.email || '',
          imageUrl: editingMember.imageUrl || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + editingMember.name,
          order: members.length + 1
        });
        toast.success('Member added');
      }
      setIsDialogOpen(false);
      setEditingMember(null);
      mockService.getMembers().then(setMembers);
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockService.deleteMember(id);
      toast.success('Member deleted');
      setMembers(members.filter(m => m.id !== id));
    } catch (error) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Members</h2>
        <Button onClick={() => { setEditingMember({}); setIsDialogOpen(true); }} className="bg-ku-red hover:bg-ku-red-dark text-white">
          <Plus size={18} className="mr-2" /> Add Member
        </Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-sm">Name</th>
              <th className="p-4 font-semibold text-sm">Role</th>
              <th className="p-4 font-semibold text-sm">Email</th>
              <th className="p-4 font-semibold text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {members.length > 0 ? members.map((m) => (
              <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <img src={m.imageUrl} alt={m.name} className="w-8 h-8 rounded-full" />
                    <span className="font-medium">{m.name}</span>
                  </div>
                </td>
                <td className="p-4 text-sm">{m.role}</td>
                <td className="p-4 text-sm text-slate-500">{m.email}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => { setEditingMember(m); setIsDialogOpen(true); }} className="text-slate-400 hover:text-ku-red"><Edit size={16} /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(m.id)} className="text-slate-400 hover:text-red-600"><Trash2 size={16} /></Button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">No members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px] p-0 flex flex-col max-h-[95vh] overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>{editingMember?.id ? 'Edit Member' : 'Add New Member'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-4 max-h-[65vh]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input required value={editingMember?.name || ''} onChange={(e) => setEditingMember({...editingMember, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <select 
                      className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm"
                      value={editingMember?.role || ''} 
                      onChange={(e) => setEditingMember({...editingMember, role: e.target.value as any})}
                    >
                      <option value="">Select Role</option>
                      <option value="Professor">Professor</option>
                      <option value="PhD Student">PhD Student</option>
                      <option value="Master Student">Master Student</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" value={editingMember?.email || ''} onChange={(e) => setEditingMember({...editingMember, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Profile Image</label>
                  <div 
                    className={cn(
                      "relative border-2 border-dashed rounded-xl p-6 transition-all flex flex-col items-center justify-center text-center group",
                      editingMember?.imageUrl ? "border-ku-red/20 bg-ku-red/5" : "border-slate-200 hover:border-ku-red/50 hover:bg-slate-50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDrop={(e) => { e.preventDefault(); e.stopPropagation(); handleImageUpload(e); }}
                  >
                    {isUploading ? (
                      <Loader2 className="w-10 h-10 text-ku-red animate-spin" />
                    ) : editingMember?.imageUrl ? (
                      <div className="flex flex-col items-center space-y-3">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-ku-red/30">
                          <img 
                            src={editingMember.imageUrl} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Change Image
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5 text-slate-400" />
                        </div>
                        <p className="text-xs font-bold text-slate-900 mb-0.5">Drag & drop profile picture</p>
                        <p className="text-[10px] text-slate-500 mb-2">PNG, JPG, or GIF up to 5MB</p>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Select File
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL (Optional)</label>
                  <Input 
                    value={editingMember?.imageUrl || ''} 
                    onChange={(e) => setEditingMember({...editingMember, imageUrl: e.target.value})} 
                    placeholder="Alternatively, paste profile URL here..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bio</label>
                  <Textarea rows={3} value={editingMember?.bio || ''} onChange={(e) => setEditingMember({...editingMember, bio: e.target.value})} />
                </div>
            </div>
            <DialogFooter className="p-4 border-t bg-slate-50 flex-shrink-0 m-0 rounded-none sm:rounded-b-none">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-ku-red text-white">Save Member</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ResearchManagement() {
  const [areas, setAreas] = useState<ResearchArea[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArea, setEditingArea] = useState<Partial<ResearchArea> | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    mockService.getResearchAreas().then(setAreas);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent) => {
    let file: File | null = null;
    
    if ('files' in e.target && e.target.files) {
      file = e.target.files[0];
    } else if ('dataTransfer' in e && e.dataTransfer.files) {
      e.preventDefault();
      file = e.dataTransfer.files[0];
    }

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingArea(prev => prev ? { ...prev, imageUrl: reader.result as string } : null);
      setIsUploading(false);
      toast.success('Research Area image prepared');
    };
    reader.onerror = () => {
      toast.error('Failed to read image');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArea?.title) return;
    try {
      if (editingArea.id) {
        await mockService.updateResearchArea(editingArea.id, editingArea);
        toast.success('Research area updated');
      } else {
        await mockService.addResearchArea({
          title: editingArea.title,
          description: editingArea.description || '',
          imageUrl: editingArea.imageUrl || '',
          order: areas.length + 1
        });
        toast.success('Research area added');
      }
      setIsDialogOpen(false);
      setEditingArea(null);
      mockService.getResearchAreas().then(setAreas);
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockService.deleteResearchArea(id);
      toast.success('Research area deleted');
      mockService.getResearchAreas().then(setAreas);
    } catch (error) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Research Areas</h2>
        <Button onClick={() => { setEditingArea({}); setIsDialogOpen(true); }} className="bg-ku-red hover:bg-ku-red-dark text-white">
          <Plus size={18} className="mr-2" /> Add Area
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areas.map((area) => (
          <Card key={area.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">{area.title}</CardTitle>
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon" onClick={() => { setEditingArea(area); setIsDialogOpen(true); }}><Edit size={14} /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(area.id)} className="text-red-500"><Trash2 size={14} /></Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 line-clamp-2">{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 flex flex-col max-h-[95vh] overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>{editingArea?.id ? 'Edit Research Area' : 'Add Research Area'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-4 max-h-[65vh]">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <Input required value={editingArea?.title || ''} onChange={(e) => setEditingArea({...editingArea, title: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Research Area Cover Image</label>
                  <div 
                    className={cn(
                      "relative border-2 border-dashed rounded-xl p-6 transition-all flex flex-col items-center justify-center text-center group",
                      editingArea?.imageUrl ? "border-ku-red/20 bg-ku-red/5" : "border-slate-200 hover:border-ku-red/50 hover:bg-slate-50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDrop={(e) => { e.preventDefault(); e.stopPropagation(); handleImageUpload(e); }}
                  >
                    {isUploading ? (
                      <Loader2 className="w-10 h-10 text-ku-red animate-spin" />
                    ) : editingArea?.imageUrl ? (
                      <div className="flex flex-col items-center space-y-3">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
                          <img 
                            src={editingArea.imageUrl} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Change Image
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5 text-slate-400" />
                        </div>
                        <p className="text-xs font-bold text-slate-900 mb-0.5">Drag & drop cover picture</p>
                        <p className="text-[10px] text-slate-500 mb-2">PNG, JPG, or GIF up to 5MB</p>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Select File
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL (Optional)</label>
                  <Input 
                    value={editingArea?.imageUrl || ''} 
                    onChange={(e) => setEditingArea({...editingArea, imageUrl: e.target.value})} 
                    placeholder="Alternatively, paste image URL here..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea rows={4} value={editingArea?.description || ''} onChange={(e) => setEditingArea({...editingArea, description: e.target.value})} />
                </div>
            </div>
            <DialogFooter className="p-4 border-t bg-slate-50 flex-shrink-0 m-0 rounded-none sm:rounded-b-none">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-ku-red text-white">Save Area</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PublicationsManagement() {
  const [pubs, setPubs] = useState<Publication[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPub, setEditingPub] = useState<Partial<Publication> | null>(null);

  useEffect(() => {
    mockService.getPublications().then(setPubs);
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPub?.title) return;
    try {
      if (editingPub.id) {
        await mockService.updatePublication(editingPub.id, editingPub);
        toast.success('Publication updated');
      } else {
        await mockService.addPublication({
          title: editingPub.title,
          authors: editingPub.authors || '',
          journal: editingPub.journal || '',
          year: Number(editingPub.year) || new Date().getFullYear(),
          doi: editingPub.doi || '',
          link: editingPub.link || '',
          type: (editingPub.type as any) || 'Journal'
        });
        toast.success('Publication added');
      }
      setIsDialogOpen(false);
      setEditingPub(null);
      mockService.getPublications().then(setPubs);
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockService.deletePublication(id);
      toast.success('Publication deleted');
      mockService.getPublications().then(setPubs);
    } catch (error) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Publications</h2>
        <Button onClick={() => { setEditingPub({}); setIsDialogOpen(true); }} className="bg-ku-red hover:bg-ku-red-dark text-white">
          <Plus size={18} className="mr-2" /> Add Publication
        </Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-sm">Title</th>
              <th className="p-4 font-semibold text-sm">Year</th>
              <th className="p-4 font-semibold text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pubs.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm font-medium line-clamp-1">{p.title}</td>
                <td className="p-4 text-sm">{p.year}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => { setEditingPub(p); setIsDialogOpen(true); }}><Edit size={16} /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)} className="text-red-500"><Trash2 size={16} /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[650px] p-0 flex flex-col max-h-[95vh] overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>{editingPub?.id ? 'Edit Publication' : 'Add Publication'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-4 max-h-[65vh]">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <Input required value={editingPub?.title || ''} onChange={(e) => setEditingPub({...editingPub, title: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Authors</label>
                    <Input value={editingPub?.authors || ''} onChange={(e) => setEditingPub({...editingPub, authors: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Journal</label>
                    <Input value={editingPub?.journal || ''} onChange={(e) => setEditingPub({...editingPub, journal: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year</label>
                    <Input type="number" value={editingPub?.year || ''} onChange={(e) => setEditingPub({...editingPub, year: parseInt(e.target.value) || 0})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type</label>
                    <select 
                      className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm"
                      value={editingPub?.type || ''} 
                      onChange={(e) => setEditingPub({...editingPub, type: e.target.value as any})}
                    >
                      <option value="Journal">Journal</option>
                      <option value="Conference">Conference</option>
                      <option value="Patent">Patent</option>
                      <option value="Book">Book</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DOI</label>
                    <Input value={editingPub?.doi || ''} onChange={(e) => setEditingPub({...editingPub, doi: e.target.value})} />
                  </div>
                </div>
            </div>
            <DialogFooter className="p-4 border-t bg-slate-50 flex-shrink-0 m-0 rounded-none sm:rounded-b-none">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-ku-red text-white">Save Publication</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
function NewsManagement() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<Partial<News> | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    mockService.getNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent) => {
    let file: File | null = null;
    
    if ('files' in e.target && e.target.files) {
      file = e.target.files[0];
    } else if ('dataTransfer' in e && e.dataTransfer.files) {
      e.preventDefault();
      file = e.dataTransfer.files[0];
    }

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingNews(prev => prev ? { ...prev, imageUrl: reader.result as string } : null);
      setIsUploading(false);
      toast.success('News image prepared');
    };
    reader.onerror = () => {
      toast.error('Failed to read image');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNews?.title || !editingNews?.content) return;

    try {
      if (editingNews.id) {
        await mockService.updateNews(editingNews.id, editingNews);
        toast.success('News updated');
      } else {
        await mockService.addNews({
          title: editingNews.title,
          content: editingNews.content,
          imageUrl: editingNews.imageUrl || '',
          date: new Date().toISOString(),
          author: 'Admin'
        });
        toast.success('News created');
      }
      setIsDialogOpen(false);
      setEditingNews(null);
      // Refresh
      mockService.getNews().then(setNews);
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await mockService.deleteNews(id);
      toast.success('News deleted');
      setNews(news.filter(n => n.id !== id));
    } catch (error) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage News</h2>
        <Button onClick={() => { setEditingNews({}); setIsDialogOpen(true); }} className="bg-ku-red hover:bg-ku-red-dark text-white">
          <Plus size={18} className="mr-2" /> Add News
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {news.map((item) => (
          <Card key={item.id} className="group">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-50 rounded overflow-hidden">
                  {item.imageUrl && <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500">{new Date(item.date).toLocaleDateString()} • {item.author}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" onClick={() => { setEditingNews(item); setIsDialogOpen(true); }} className="text-slate-400 hover:text-ku-red">
                  <Edit size={16} />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)} className="text-slate-400 hover:text-red-600">
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 flex flex-col max-h-[95vh] overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>{editingNews?.id ? 'Edit News' : 'Add New Post'}</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSave} className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-6 max-h-[65vh]">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <Input 
                    required
                    value={editingNews?.title || ''} 
                    onChange={(e) => setEditingNews({...editingNews, title: e.target.value})}
                    placeholder="Enter news title..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">News Image</label>
                  <div 
                    className={cn(
                      "relative border-2 border-dashed rounded-xl p-6 transition-all flex flex-col items-center justify-center text-center group",
                      editingNews?.imageUrl ? "border-ku-red/20 bg-ku-red/5" : "border-slate-200 hover:border-ku-red/50 hover:bg-slate-50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDrop={(e) => { e.preventDefault(); e.stopPropagation(); handleImageUpload(e); }}
                  >
                    {isUploading ? (
                      <Loader2 className="w-10 h-10 text-ku-red animate-spin" />
                    ) : editingNews?.imageUrl ? (
                      <div className="flex flex-col items-center space-y-3">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
                          <img 
                            src={editingNews.imageUrl} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Change Image
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5 text-slate-400" />
                        </div>
                        <p className="text-xs font-bold text-slate-900 mb-0.5">Drag & drop image</p>
                        <p className="text-[10px] text-slate-500 mb-2">PNG, JPG, or GIF up to 5MB</p>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Select File
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL (Optional)</label>
                  <Input 
                    value={editingNews?.imageUrl || ''} 
                    onChange={(e) => setEditingNews({...editingNews, imageUrl: e.target.value})}
                    placeholder="Alternatively, paste image URL here..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content</label>
                  <div className="bg-white rounded-md border border-slate-200">
                    <ReactQuill 
                      theme="snow"
                      value={editingNews?.content || ''} 
                      onChange={(content) => setEditingNews({...editingNews, content})}
                      modules={{
                        toolbar: [
                          [{ 'header': [1, 2, 3, false] }],
                          ['bold', 'italic', 'underline', 'strike'],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                          [{ 'color': [] }, { 'background': [] }],
                          ['clean']
                        ],
                      }}
                      className="min-h-[300px]"
                    />
                  </div>
                </div>
            </div>
            <DialogFooter className="p-4 border-t bg-slate-50 flex-shrink-0 m-0 rounded-none sm:rounded-b-none">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-ku-red text-white hover:bg-ku-red-dark">
                {editingNews?.id ? 'Update Post' : 'Create Post'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
function SettingsManagement() {
  const [labInfo, setLabInfo] = useState<LabInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);
  const [kuLogoUploading, setKuLogoUploading] = useState(false);

  useEffect(() => {
    mockService.getLabInfo().then((data) => {
      if (data) setLabInfo(data);
      setLoading(false);
    });
  }, []);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent, type: 'nabid' | 'ku') => {
    let file: File | null = null;
    if ('files' in e.target && e.target.files) {
      file = e.target.files[0];
    } else if ('dataTransfer' in e && e.dataTransfer.files) {
      e.preventDefault();
      file = e.dataTransfer.files[0];
    }

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    if (type === 'nabid') setLogoUploading(true);
    else setKuLogoUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      setLabInfo(prev => {
        if (!prev) return null;
        if (type === 'nabid') {
          return { ...prev, logoUrl: reader.result as string };
        } else {
          return { ...prev, kuLogoUrl: reader.result as string };
        }
      });
      if (type === 'nabid') setLogoUploading(false);
      else setKuLogoUploading(false);
      toast.success('Logo loaded (remember to click Save Changes)');
    };
    reader.onerror = () => {
      toast.error('Failed to read image');
      if (type === 'nabid') setLogoUploading(false);
      else setKuLogoUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!labInfo) return;
    setSaving(true);
    try {
      await mockService.updateLabInfo(labInfo);
      toast.success('Settings updated successfully');
    } catch (error) {
      toast.error('Failed to update settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading settings...</div>;

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Lab Settings</h2>
        <p className="text-slate-500">Manage general information and branding.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
          <CardDescription>This information is displayed in the footer and contact pages.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Lab Name</label>
                <Input 
                  value={labInfo?.name || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, name: e.target.value} : null)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Professor Name</label>
                <Input 
                  value={labInfo?.professorName || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, professorName: e.target.value} : null)}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Affiliation</label>
                <Input 
                  value={labInfo?.affiliation || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, affiliation: e.target.value} : null)}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea 
                  rows={4}
                  value={labInfo?.description || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, description: e.target.value} : null)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  value={labInfo?.email || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, email: e.target.value} : null)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input 
                  value={labInfo?.phone || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, phone: e.target.value} : null)}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Address</label>
                <Input 
                  value={labInfo?.address || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, address: e.target.value} : null)}
                />
              </div>
            </div>
            <div className="pt-4">
              <Button type="submit" disabled={saving} className="bg-ku-red hover:bg-ku-red-dark text-white">
                {saving ? 'Saving...' : 'Save General Settings'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lab Branding & Logos</CardTitle>
          <CardDescription>Upload/drag custom logos for the top header & footer.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NABID main Logo */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-800 flex items-center justify-between">
                <span>NABID Main Logo (Header & Footer Left)</span>
                {labInfo?.logoUrl && <span className="text-[10px] text-emerald-600 font-bold">Custom active</span>}
              </label>
              <div 
                className={cn(
                  "relative border-2 border-dashed rounded-xl p-8 min-h-[180px] transition-all flex flex-col items-center justify-center text-center group",
                  labInfo?.logoUrl ? "border-ku-red/20 bg-ku-red/5" : "border-slate-200 hover:border-ku-red/50 hover:bg-slate-50"
                )}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={(e) => { e.preventDefault(); e.stopPropagation(); handleLogoUpload(e, 'nabid'); }}
              >
                {logoUploading ? (
                  <Loader2 className="w-8 h-8 text-ku-red animate-spin" />
                ) : labInfo?.logoUrl ? (
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div className="relative p-2 bg-white rounded-lg border flex items-center justify-center max-w-[200px] h-24 overflow-hidden shadow-sm">
                      <img 
                        src={labInfo.logoUrl} 
                        alt="NABID Logo Preview" 
                        className="max-h-full w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                      Change Logo
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleLogoUpload(e, 'nabid')} />
                    </label>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold text-slate-950 mb-0.5">Drag & drop logo here</p>
                    <p className="text-[10px] text-slate-500 mb-3">PNG, JPG, or SVG up to 5MB</p>
                    <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                      Select File
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleLogoUpload(e, 'nabid')} />
                    </label>
                  </>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">NABID Logo URL (Optional)</span>
                <Input 
                  value={labInfo?.logoUrl || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, logoUrl: e.target.value} : null)}
                  placeholder="Alternatively, paste logo URL here..."
                  className="text-xs"
                />
              </div>
            </div>

            {/* Korea University Pharmacy Logo */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-800 flex items-center justify-between">
                <span>KU Pharmacy Logo (Footer Bottom)</span>
                {labInfo?.kuLogoUrl && <span className="text-[10px] text-emerald-600 font-bold">Custom active</span>}
              </label>
              <div 
                className={cn(
                  "relative border-2 border-dashed rounded-xl p-8 min-h-[180px] transition-all flex flex-col items-center justify-center text-center group",
                  labInfo?.kuLogoUrl ? "border-ku-red/20 bg-ku-red/5" : "border-slate-200 hover:border-ku-red/50 hover:bg-slate-50"
                )}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={(e) => { e.preventDefault(); e.stopPropagation(); handleLogoUpload(e, 'ku'); }}
              >
                {kuLogoUploading ? (
                  <Loader2 className="w-8 h-8 text-ku-red animate-spin" />
                ) : labInfo?.kuLogoUrl ? (
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div className="relative p-2 bg-white rounded-lg border flex items-center justify-center max-w-[200px] h-24 overflow-hidden shadow-sm">
                      <img 
                        src={labInfo.kuLogoUrl} 
                        alt="KU Pharmacy Logo Preview" 
                        className="max-h-full w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                      Change Logo
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleLogoUpload(e, 'ku')} />
                    </label>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold text-slate-950 mb-0.5">Drag & drop logo here</p>
                    <p className="text-[10px] text-slate-500 mb-3">PNG, JPG, or SVG up to 5MB</p>
                    <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                      Select File
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleLogoUpload(e, 'ku')} />
                    </label>
                  </>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-medium">KU Pharmacy Logo URL (Optional)</span>
                <Input 
                  value={labInfo?.kuLogoUrl || ''} 
                  onChange={(e) => setLabInfo(prev => prev ? {...prev, kuLogoUrl: e.target.value} : null)}
                  placeholder="Alternatively, paste logo URL here..."
                  className="text-xs"
                />
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <Button onClick={handleSave} disabled={saving} className="bg-ku-red hover:bg-ku-red-dark text-white font-bold px-6">
              {saving ? 'Saving...' : 'Save Branding Changes'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<Partial<GalleryImage> | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const data = await mockService.getGallery();
    setImages([...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    setLoading(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent) => {
    let file: File | null = null;
    
    if ('files' in e.target && e.target.files) {
      file = e.target.files[0];
    } else if ('dataTransfer' in e && e.dataTransfer.files) {
      e.preventDefault();
      file = e.dataTransfer.files[0];
    }

    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingImage(prev => prev ? { ...prev, imageUrl: reader.result as string } : null);
      setIsUploading(false);
      toast.success('Image prepared for saving');
    };
    reader.onerror = () => {
      toast.error('Failed to read image');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    setEditingImage({
      title: '',
      description: '',
      imageUrl: '',
      date: new Date().toISOString().split('T')[0],
      order: images.length
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    await mockService.deleteGalleryImage(id);
    toast.success('Image deleted');
    loadImages();
  };

  const handleSave = async () => {
    if (!editingImage?.title || !editingImage?.imageUrl) {
      toast.error('Title and Image URL are required');
      return;
    }

    if ('id' in editingImage && editingImage.id) {
      await mockService.updateGalleryImage(editingImage.id, editingImage);
      toast.success('Image updated');
    } else {
      await mockService.addGalleryImage(editingImage as Omit<GalleryImage, 'id'>);
      toast.success('Image added');
    }
    setIsDialogOpen(false);
    loadImages();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gallery Management</h2>
          <p className="text-slate-500 text-sm">Manage lab photos and activities.</p>
        </div>
        <Button onClick={handleAdd} className="bg-ku-red hover:bg-ku-red-dark text-white">
          <Plus size={18} className="mr-2" /> Add Photo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden bg-slate-100">
              <img 
                src={image.imageUrl} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <Button size="icon" variant="secondary" onClick={() => handleEdit(image)}>
                  <ImageIcon size={16} />
                </Button>
                <Button size="icon" variant="destructive" onClick={() => handleDelete(image.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold truncate">{image.title}</h3>
              <p className="text-xs text-slate-500">{image.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 flex flex-col max-h-[95vh] overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>{editingImage?.id ? 'Edit Photo' : 'Add Photo'}</DialogTitle>
          </DialogHeader>
          <form className="flex flex-col flex-1 overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-4 max-h-[65vh]">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <Input 
                    value={editingImage?.title || ''} 
                    onChange={(e) => setEditingImage({...editingImage, title: e.target.value})} 
                    placeholder="e.g., Lab Dinner 2024"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image Upload</label>
                  <div 
                    className={cn(
                      "relative border-2 border-dashed rounded-xl p-8 transition-all flex flex-col items-center justify-center text-center group",
                      editingImage?.imageUrl ? "border-ku-red/20 bg-ku-red/5" : "border-slate-200 hover:border-ku-red/50 hover:bg-slate-50"
                    )}
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onDrop={(e) => { e.preventDefault(); e.stopPropagation(); handleImageUpload(e); }}
                  >
                    {isUploading ? (
                      <Loader2 className="w-10 h-10 text-ku-red animate-spin" />
                    ) : editingImage?.imageUrl ? (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden group/image">
                        <img 
                          src={editingImage.imageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                          <label className="cursor-pointer bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xs hover:bg-slate-100 transition-colors">
                            Change Image
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                          </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6 text-slate-400" />
                        </div>
                        <p className="text-sm font-bold text-slate-900 mb-1">Drag and drop image here</p>
                        <p className="text-xs text-slate-500 mb-4">PNG, JPG, or GIF up to 5MB</p>
                        <label className="cursor-pointer bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                          Select File
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL (Optional)</label>
                  <Input 
                    value={editingImage?.imageUrl || ''} 
                    onChange={(e) => setEditingImage({...editingImage, imageUrl: e.target.value})} 
                    placeholder="Alternatively, paste a URL here..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <Input 
                    type="date"
                    value={editingImage?.date || ''} 
                    onChange={(e) => setEditingImage({...editingImage, date: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description (Optional)</label>
                  <Textarea 
                    value={editingImage?.description || ''} 
                    onChange={(e) => setEditingImage({...editingImage, description: e.target.value})} 
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Display Order</label>
                  <Input 
                    type="number"
                    value={editingImage?.order ?? 0} 
                    onChange={(e) => setEditingImage({...editingImage, order: parseInt(e.target.value) || 0})} 
                  />
                </div>
            </div>
            <DialogFooter className="p-4 border-t bg-slate-50 flex-shrink-0 m-0 rounded-none sm:rounded-b-none">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button type="button" onClick={handleSave} className="bg-ku-red hover:bg-ku-red-dark text-white">Save Photo</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
