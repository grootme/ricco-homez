'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Camera,
  Save,
  Eye,
  EyeOff,
  Bell,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Check,
  AlertCircle,
} from 'lucide-react';
import { useTranslation, useAuth } from '@/providers';

const timezones = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Shanghai',
];

export default function DashboardMyProfile() {
  const { t } = useTranslation();
  const { user, isLoading: authLoading, updateProfile, isAuthenticated } = useAuth();
  const router = useRouter();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    timezone: 'America/New_York',
    bio: '',
    website: '',
    linkedin: '',
    facebook: '',
    twitter: '',
    instagram: '',
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    marketing: true,
    updates: true,
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Initialize profile from user data
  useEffect(() => {
    if (user) {
      const nameParts = user.name?.split(' ') || ['', ''];
      setProfile({
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || '',
        email: user.email || '',
        phone: user.phone || '',
        location: '',
        timezone: 'America/New_York',
        bio: '',
        website: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        instagram: '',
      });
    }
  }, [user]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    try {
      await updateProfile({
        name: `${profile.firstName} ${profile.lastName}`.trim(),
        phone: profile.phone,
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save profile:', error);
      setSaveError(t('errors.somethingWentWrong', 'Failed to save changes'));
    } finally {
      setIsSaving(false);
    }
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user?.name) return 'U';
    return user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-36" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Skeleton className="h-96" />
          <Skeleton className="h-96 lg:col-span-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.myProfile', 'My Profile')}</h1>
          <p className="text-gray-500">{t('dashboard.accountSettings', 'Manage your account settings and preferences')}</p>
        </div>
        <div className="flex gap-3">
          {saveSuccess && (
            <div className="flex items-center text-green-600 text-sm">
              <Check className="h-4 w-4 mr-1" />
              {t('success.saved', 'Successfully saved')}
            </div>
          )}
          {saveError && (
            <div className="flex items-center text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {saveError}
            </div>
          )}
          <Button className="bg-homez-primary hover:bg-homez-primary/90" onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                {t('common.loading', 'Saving...')}
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                {t('common.save', 'Save Changes')}
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture & Basic Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>{t('profile.picture', 'Profile Picture')}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="text-2xl">{getUserInitials()}</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0 bg-homez-primary hover:bg-homez-primary/90"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              JPG, PNG or GIF. {t('forms.maxFileSize', 'Max size 2MB')}
            </p>
            <div className="flex gap-2 justify-center mt-4">
              <Button variant="outline" size="sm">
                {t('forms.uploadImage', 'Upload New')}
              </Button>
              <Button variant="outline" size="sm" className="text-red-600">
                {t('common.delete', 'Remove')}
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Verification Status */}
            <div className="text-left">
              <h4 className="text-sm font-medium text-gray-700 mb-3">{t('auth.verifyEmail', 'Verification Status')}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t('auth.email', 'Email')}</span>
                  <Badge className={user?.emailVerified ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                    {user?.emailVerified ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        {t('agent.verified', 'Verified')}
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {t('auth.verifyEmail', 'Pending')}
                      </>
                    )}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t('auth.phone', 'Phone')}</span>
                  <Badge className={user?.phoneVerified ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                    {user?.phoneVerified ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        {t('agent.verified', 'Verified')}
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {t('auth.verifyEmail', 'Pending')}
                      </>
                    )}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t('profile.personalInfo', 'Personal Information')}</CardTitle>
            <CardDescription>{t('profile.updateDetails', 'Update your personal details')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">{t('auth.firstName', 'First Name')}</Label>
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="lastName">{t('auth.lastName', 'Last Name')}</Label>
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">{t('auth.email', 'Email Address')}</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="pl-10"
                    disabled
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">{t('auth.phone', 'Phone Number')}</Label>
                <div className="relative mt-1.5">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">{t('property.location', 'Location')}</Label>
                <div className="relative mt-1.5">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="timezone">{t('profile.timezone', 'Timezone')}</Label>
                <div className="relative mt-1.5">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                  <Select
                    value={profile.timezone}
                    onValueChange={(v) => setProfile({ ...profile, timezone: v })}
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder={t('profile.selectTimezone', 'Select timezone')} />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz}>
                          {tz.replace('_', ' ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="bio">{t('profile.bio', 'Bio')}</Label>
              <Textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="mt-1.5"
                rows={4}
              />
              <p className="text-xs text-gray-500 mt-1">{profile.bio.length}/500 {t('profile.characters', 'characters')}</p>
            </div>

            <div>
              <Label htmlFor="website">{t('profile.website', 'Website')}</Label>
              <div className="relative mt-1.5">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="website"
                  value={profile.website}
                  onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                  className="pl-10"
                  placeholder="www.yourwebsite.com"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>{t('profile.socialLinks', 'Social Links')}</CardTitle>
            <CardDescription>{t('profile.connectSocial', 'Connect your social media accounts')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <div className="relative mt-1.5">
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-600" />
                  <Input
                    id="linkedin"
                    value={profile.linkedin}
                    onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                    className="pl-10"
                    placeholder="username"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="facebook">Facebook</Label>
                <div className="relative mt-1.5">
                  <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />
                  <Input
                    id="facebook"
                    value={profile.facebook}
                    onChange={(e) => setProfile({ ...profile, facebook: e.target.value })}
                    className="pl-10"
                    placeholder="username"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <div className="relative mt-1.5">
                  <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sky-500" />
                  <Input
                    id="twitter"
                    value={profile.twitter}
                    onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
                    className="pl-10"
                    placeholder="username"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <div className="relative mt-1.5">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-500" />
                  <Input
                    id="instagram"
                    value={profile.instagram}
                    onChange={(e) => setProfile({ ...profile, instagram: e.target.value })}
                    className="pl-10"
                    placeholder="username"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              {t('auth.resetPassword', 'Change Password')}
            </CardTitle>
            <CardDescription>{t('profile.passwordDesc', 'Update your password to keep your account secure')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="currentPassword">{t('profile.currentPassword', 'Current Password')}</Label>
                <div className="relative mt-1.5">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwords.current}
                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="newPassword">{t('auth.newPassword', 'New Password')}</Label>
                <div className="relative mt-1.5">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwords.new}
                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="confirmPassword">{t('auth.confirmPassword', 'Confirm Password')}</Label>
                <div className="relative mt-1.5">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline">{t('auth.resetPassword', 'Update Password')}</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              {t('dashboard.notificationSettings', 'Notification Preferences')}
            </CardTitle>
            <CardDescription>{t('profile.notificationDesc', 'Choose how you want to receive notifications')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{t('profile.emailNotifications', 'Email Notifications')}</p>
                  <p className="text-sm text-gray-500">{t('profile.emailNotifDesc', 'Receive updates via email')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.email}
                    onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-homez-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-homez-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{t('profile.smsNotifications', 'SMS Notifications')}</p>
                  <p className="text-sm text-gray-500">{t('profile.smsNotifDesc', 'Receive updates via text message')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.sms}
                    onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-homez-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-homez-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{t('profile.marketingEmails', 'Marketing Emails')}</p>
                  <p className="text-sm text-gray-500">{t('profile.marketingDesc', 'Receive promotions and special offers')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.marketing}
                    onChange={(e) => setNotifications({ ...notifications, marketing: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-homez-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-homez-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{t('profile.propertyUpdates', 'Property Updates')}</p>
                  <p className="text-sm text-gray-500">{t('profile.propertyUpdatesDesc', 'Get notified about changes to your listings')}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.updates}
                    onChange={(e) => setNotifications({ ...notifications, updates: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-homez-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-homez-primary"></div>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
