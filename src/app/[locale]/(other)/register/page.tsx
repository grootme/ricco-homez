'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Facebook, 
  Chrome,
  User,
  Phone,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useTranslation, useAuth } from '@/providers';

export default function RegisterPage() {
  const { t } = useTranslation();
  const { register, isAuthenticated } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push('/dashboard-home');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(t('forms.passwordsDoNotMatch', 'Passwords do not match'));
      return;
    }

    if (!formData.agreeToTerms) {
      setError(t('profile.agreeTerms', 'Please agree to the Terms of Service and Privacy Policy'));
      return;
    }

    setIsLoading(true);
    
    try {
      await register({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Registration failed:', err);
      setError(err.message || t('errors.somethingWentWrong', 'Registration failed'));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-16">
          <div className="container-homez">
            <div className="max-w-md mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{t('auth.accountCreated', 'Account Created!')}</h2>
                  <p className="text-gray-600 mb-6">
                    {t('auth.verificationSent', `We've sent a verification email to ${formData.email}. Please check your inbox to activate your account.`)}
                  </p>
                  <Button className="w-full bg-homez-primary hover:bg-homez-primary/90" asChild>
                    <Link href="/login">{t('auth.backToSignIn', 'Continue to Sign In')}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16">
        <div className="container-homez">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{t('auth.createAccount', 'Create Your Account')}</h1>
              <p className="text-gray-600">
                {t('auth.joinUsers', 'Join thousands of users finding their dream homes')}
              </p>
            </div>

            {/* Register Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Social Login */}
                <div className="space-y-3 mb-6">
                  <Button variant="outline" className="w-full h-12" asChild>
                    <Link href="#">
                      <Chrome className="h-5 w-5 mr-2" />
                      {t('auth.signUpWith', 'Continue with Google')}
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-[#1877f2] text-white border-[#1877f2] hover:bg-[#1864d4] hover:border-[#1864d4]"
                    asChild
                  >
                    <Link href="#">
                      <Facebook className="h-5 w-5 mr-2" />
                      {t('auth.signUpWith', 'Continue with Facebook')}
                    </Link>
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                    {t('auth.orRegisterWithEmail', 'or register with email')}
                  </span>
                </div>

                {/* Register Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('auth.firstName', 'First Name')}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder={t('auth.firstNamePlaceholder', 'John')}
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="pl-10 h-12 border-gray-200 focus:border-homez-primary"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('auth.lastName', 'Last Name')}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder={t('auth.lastNamePlaceholder', 'Doe')}
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="pl-10 h-12 border-gray-200 focus:border-homez-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('auth.email', 'Email Address')}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder={t('auth.emailPlaceholder', 'you@example.com')}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 h-12 border-gray-200 focus:border-homez-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('auth.phone', 'Phone Number')}</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder={t('auth.phonePlaceholder', '+1 (555) 123-4567')}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10 h-12 border-gray-200 focus:border-homez-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('auth.password', 'Password')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={t('auth.createPassword', 'Create a password')}
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-10 h-12 border-gray-200 focus:border-homez-primary"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {t('auth.passwordHint', 'Must be at least 8 characters')}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('auth.confirmPassword', 'Confirm Password')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={t('auth.confirmPasswordPlaceholder', 'Confirm your password')}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="pl-10 h-12 border-gray-200 focus:border-homez-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked as boolean})}
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      {t('auth.agreeToTerms', 'I agree to the')}{' '}
                      <Link href="#" className="text-homez-primary hover:underline">
                        {t('auth.termsOfService', 'Terms of Service')}
                      </Link>{' '}
                      {t('common.and', 'and')}{' '}
                      <Link href="#" className="text-homez-primary hover:underline">
                        {t('auth.privacyPolicy', 'Privacy Policy')}
                      </Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-homez-primary hover:bg-homez-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {t('auth.creatingAccount', 'Creating account...')}
                      </>
                    ) : (
                      t('auth.createAccount', 'Create Account')
                    )}
                  </Button>
                </form>

                {/* Sign In Link */}
                <p className="text-center text-gray-600 mt-6">
                  {t('auth.hasAccount', 'Already have an account?')}{' '}
                  <Link href="/login" className="text-homez-primary font-medium hover:underline">
                    {t('auth.login', 'Sign in')}
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
