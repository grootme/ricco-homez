'use client'

import * as React from 'react'
import { Mail, Lock, User, Eye, EyeOff, Facebook, Chrome } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultTab?: 'login' | 'register'
}

export function AuthModal({ open, onOpenChange, defaultTab = 'login' }: AuthModalProps) {
  const [activeTab, setActiveTab] = React.useState<'login' | 'register'>(defaultTab)
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  
  // Form states
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [registerForm, setRegisterForm] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  React.useEffect(() => {
    if (open) {
      setActiveTab(defaultTab)
    }
  }, [open, defaultTab])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', loginForm)
    onOpenChange(false)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle register logic here
    console.log('Register:', registerForm)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px] p-0 gap-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-[#e33e3e] to-[#c53535] px-6 py-8 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E')] opacity-50"></div>
          <DialogTitle className="text-2xl font-bold text-white relative z-10">
            Welcome to Homez
          </DialogTitle>
          <p className="text-white/80 text-sm mt-2 relative z-10">
            Sign in to continue your real estate journey
          </p>
        </div>

        {/* Tabs */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'login' | 'register')}>
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 rounded-xl p-1">
              <TabsTrigger 
                value="login"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#e33e3e] text-gray-600 font-medium transition-all"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#e33e3e] text-gray-600 font-medium transition-all"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login" className="mt-0">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-gray-700">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="pl-10 h-11 border-gray-200 focus:border-[#e33e3e] focus:ring-[#e33e3e]/20 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-gray-700">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="pl-10 pr-10 h-11 border-gray-200 focus:border-[#e33e3e] focus:ring-[#e33e3e]/20 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={loginForm.rememberMe}
                      onChange={(e) => setLoginForm({ ...loginForm, rememberMe: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-300 text-[#e33e3e] focus:ring-[#e33e3e]/20"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-[#e33e3e] hover:underline font-medium">
                    Forgot password?
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 bg-[#e33e3e] hover:bg-[#c53535] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-red-500/20"
                >
                  Sign In
                </Button>
              </form>

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="h-11 border-gray-200 hover:bg-gray-50 rounded-xl"
                  >
                    <Facebook className="h-5 w-5 text-[#1877f2] mr-2" />
                    Facebook
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="h-11 border-gray-200 hover:bg-gray-50 rounded-xl"
                  >
                    <Chrome className="h-5 w-5 text-[#4285f4] mr-2" />
                    Google
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register" className="mt-0">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name" className="text-gray-700">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      className="pl-10 h-11 border-gray-200 focus:border-[#e33e3e] focus:ring-[#e33e3e]/20 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-gray-700">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="Enter your email"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className="pl-10 h-11 border-gray-200 focus:border-[#e33e3e] focus:ring-[#e33e3e]/20 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-gray-700">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      className="pl-10 pr-10 h-11 border-gray-200 focus:border-[#e33e3e] focus:ring-[#e33e3e]/20 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password" className="text-gray-700">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      className="pl-10 pr-10 h-11 border-gray-200 focus:border-[#e33e3e] focus:ring-[#e33e3e]/20 rounded-xl"
                      required
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

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={registerForm.agreeTerms}
                    onChange={(e) => setRegisterForm({ ...registerForm, agreeTerms: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#e33e3e] focus:ring-[#e33e3e]/20"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <button type="button" className="text-[#e33e3e] hover:underline">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button type="button" className="text-[#e33e3e] hover:underline">
                      Privacy Policy
                    </button>
                  </span>
                </label>

                <Button 
                  type="submit" 
                  className="w-full h-11 bg-[#e33e3e] hover:bg-[#c53535] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-red-500/20"
                >
                  Create Account
                </Button>
              </form>

              {/* Social Register */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="h-11 border-gray-200 hover:bg-gray-50 rounded-xl"
                  >
                    <Facebook className="h-5 w-5 text-[#1877f2] mr-2" />
                    Facebook
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="h-11 border-gray-200 hover:bg-gray-50 rounded-xl"
                  >
                    <Chrome className="h-5 w-5 text-[#4285f4] mr-2" />
                    Google
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
