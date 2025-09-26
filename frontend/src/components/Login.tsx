import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de autenticação
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#f4e9de] flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Chef hat - top left */}
        <div className="absolute top-16 left-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#f8dad0]">
            <path d="M50 20 C30 20, 20 35, 20 50 C20 65, 30 80, 50 80 C70 80, 80 65, 80 50 C80 35, 70 20, 50 20 Z M25 75 L75 75 C75 85, 65 90, 50 90 C35 90, 25 85, 25 75 Z"/>
          </svg>
        </div>
        
        {/* Tomato - top right */}
        <div className="absolute top-12 right-12 w-20 h-20 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#f8dad0]">
            <circle cx="50" cy="60" r="30"/>
            <path d="M35 30 Q50 20, 65 30 Q60 35, 50 35 Q40 35, 35 30"/>
          </svg>
        </div>
        
        {/* Wheat - bottom left */}
        <div className="absolute bottom-16 left-12 w-12 h-20 opacity-20">
          <svg viewBox="0 0 50 80" className="w-full h-full fill-[#f8dad0]">
            <path d="M25 10 L25 70 M15 15 Q25 20, 35 15 M15 25 Q25 30, 35 25 M15 35 Q25 40, 35 35 M15 45 Q25 50, 35 45"/>
          </svg>
        </div>
        
        {/* Carrot - bottom right */}
        <div className="absolute bottom-20 right-8 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#f8dad0]">
            <path d="M50 20 L45 80 L55 80 Z M45 15 Q50 10, 55 15 M47 12 L47 18 M53 12 L53 18"/>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Cooking pot icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Steam lines */}
              <g className="fill-[#fc4b5c]">
                <rect x="35" y="10" width="3" height="15" rx="1.5"/>
                <rect x="42" y="5" width="3" height="20" rx="1.5"/>
                <rect x="49" y="10" width="3" height="15" rx="1.5"/>
                <rect x="56" y="5" width="3" height="20" rx="1.5"/>
                <rect x="63" y="10" width="3" height="15" rx="1.5"/>
              </g>
              {/* Pot */}
              <path d="M25 40 L75 40 L75 75 C75 80, 70 85, 65 85 L35 85 C30 85, 25 80, 25 75 Z" 
                    className="fill-[#fc4b5c]"/>
              {/* Handles */}
              <path d="M20 45 C15 45, 15 55, 20 55" className="fill-none stroke-[#fc4b5c] stroke-[3]"/>
              <path d="M80 45 C85 45, 85 55, 80 55" className="fill-none stroke-[#fc4b5c] stroke-[3]"/>
            </svg>
          </div>
        </div>

        {/* Brand */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#201812] mb-2">
            GASTRONOMIA
          </h1>
          <div className="inline-block bg-[#fc4b5c] text-white px-6 py-2 text-lg font-semibold tracking-wider">
            PERIFÉRICA
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-[#48362b]" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#f8dad0] rounded-2xl text-[#201812] placeholder-[#48362b]/60 focus:outline-none focus:border-[#fc4b5c] focus:bg-white transition-all duration-200"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-[#48362b]" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#f8dad0] rounded-2xl text-[#201812] placeholder-[#48362b]/60 focus:outline-none focus:border-[#fc4b5c] focus:bg-white transition-all duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-[#48362b]" />
              ) : (
                <Eye className="h-5 w-5 text-[#48362b]" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#fc4b5c] hover:bg-[#e63946] text-white font-semibold py-4 rounded-2xl transition-colors duration-200 text-lg tracking-wider"
          >
            LOG IN
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <button
              type="button"
              className="text-[#201812] hover:text-[#fc4b5c] transition-colors duration-200 text-base"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

