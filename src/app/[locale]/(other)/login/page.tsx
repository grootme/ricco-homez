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
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Facebook, 
  Chrome,
  AlertCircle
} from 'lucide-react';
import { useTranslation, useAuth } from '@/providers';

export default function LoginPage() {
  const { t } = useTranslation();
  const { login, isLoading: authLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push('/dashboard-home');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login({ email, password });
      router.push('/dashboard-home');
    } catch (err: any) {
      console.error('Login failed:', err);
      setError(err.message || t('auth.invalidCredentials', 'Invalid email or password'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16">
        <div className="container-homez">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{t('auth.welcomeBack', 'Welcome Back')}</h1>
              <p className="text-gray-600">
                {t('auth.signinDesc', 'Sign in to access your account and saved properties')}
              </p>
            </div>

            {/* Login Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Social Login */}
                <div className="space-y-3 mb-6">
                  <Button variant="outline" className="w-full h-12" asChild>
                    <Link href="#">
                      <Chrome className="h-5 w-5 mr-2" />
                      {t('auth.signInWith', 'Continue with Google')}
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 bg-[#1877f2] text-white border-[#1877f2] hover:bg-[#1864d4] hover:border-[#1864d4]"
                    asChild
                  >
                    <Link href="#">
                      <Facebook className="h-5 w-5 mr-2" />
                      {t('auth.signInWith', 'Continue with Facebook')}
                    </Link>
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                    {t('auth.orContinueWith', 'or continue with email')}
                  </span>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('auth.email', 'Email Address')}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder={t('auth.emailPlaceholder', 'you@example.com')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 border-gray-200 focus:border-homez-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('auth.password', 'Password')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={t('auth.passwordPlaceholder', 'Enter your password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-gray-200 focus:border-homez-primary"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-homez-primary focus:ring-homez-primary"
                      />
                      <span className="text-sm text-gray-600">{t('auth.rememberMe', 'Remember me')}</span>
                    </label>
                    <Link href="#" className="text-sm text-homez-primary hover:underline">
                      {t('auth.forgotPassword', 'Forgot password?')}
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-homez-primary hover:bg-homez-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {t('auth.signingIn', 'Signing in...')}
                      </>
                    ) : (
                      t('auth.login', 'Sign In')
                    )}
                  </Button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600 mt-6">
                  {t('auth.noAccount', "Don't have an account?")}{' '}
                  <Link href="/register" className="text-homez-primary font-medium hover:underline">
                    {t('auth.signUp', 'Sign up for free')}
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
