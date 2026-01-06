
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // 1. URL remains the same
//       const response = await fetch('http://localhost:8000/auth/login', {
//         method: 'POST',
//         headers: { 
//           // 2. MUST be application/json to match your Backend's LoginRequest
//           'Content-Type': 'application/json' 
//         },
//         // 3. MUST use JSON.stringify and match the keys in your LoginRequest model
//         body: JSON.stringify({ 
//           email: email, 
//           password: password 
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Save the token and redirect
//         localStorage.setItem('token', data.access_token);
//         router.push('/dashboard');
//       } else {
//         // Handle backend validation or auth errors
//         setError(data.detail || 'Invalid email or password. Please try again.');
//         setLoading(false);
//       }
//     } catch (err) {
//       setError('Unable to connect to the server. Please ensure the backend is running.');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center p-6 text-slate-900">
//       <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white">
        
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-black text-slate-800 tracking-tight">Welcome Back</h2>
//           <p className="text-slate-500 mt-2 font-medium">Manage your tasks efficiently</p>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-6">
//           {error && (
//             <div className="bg-red-50 text-red-500 p-4 rounded-2xl text-sm font-medium border border-red-100">
//               {error}
//             </div>
//           )}

//           <div className="space-y-2">
//             <label className="block text-sm font-bold text-slate-700 ml-1">Email Address</label>
//             <input
//               type="email"
//               required
//               className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400 text-black shadow-sm"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-bold text-slate-700 ml-1">Password</label>
//             <input
//               type="password"
//               required
//               className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-slate-400 text-black shadow-sm"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 mt-4"
//           >
//             {loading ? 'Signing in...' : 'Sign In'}
//           </button>
//         </form>

//         <p className="mt-8 text-center text-slate-500 font-medium">
//           Don't have an account?{' '}
//           <Link href="/signup" className="text-purple-600 hover:underline font-bold">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Token ko browser mein save karein
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user_name', data.user.first_name);
        
        // Dashboard par bhej dein
        router.push('/dashboard');
      } else {
        setError(data.detail || 'Invalid email or password');
      }
    } catch (err) {
      setError('Connection refused. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="w-full max-w-md z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-white tracking-tight">Welcome Back</h1>
            <p className="text-slate-400 mt-3 font-medium">Enter your details to access your dashboard</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-slate-800/40 border border-slate-700 text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <Link href="#" className="text-xs text-blue-400 hover:text-blue-300 font-bold">Forgot?</Link>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-slate-800/40 border border-slate-700 text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 transition-all active:scale-[0.97] disabled:opacity-50 mt-4"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-slate-400 font-medium">
              New here?{' '}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-black transition-colors">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}