

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
    
//     console.log("Sending data to backend..."); // Debugging

//     try {
//       const response = await fetch('http://localhost:8000/auth/register', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({ 
//           email: email, 
//           password: password, 
//           first_name: firstName, 
//           last_name: lastName 
//         }),
//       });

//       console.log("Status Code:", response.status); // Debugging

//       const data = await response.json();

//       if (response.ok) {
//         alert("Account Created! Redirecting to login...");
//         router.push('/login');
//       } else {
//         // Validation errors ko handle karein
//         const detailedError = data.detail && typeof data.detail === 'object' 
//           ? JSON.stringify(data.detail) 
//           : data.detail;
//         setError(detailedError || 'Registration failed');
//       }
//     } catch (err) {
//       console.error("Fetch Error:", err);
//       setError('Connection refused. Please check if your FastAPI server is running on port 8000.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center p-6 text-slate-900">
//       <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-black text-slate-800 tracking-tight">Join Us</h2>
//           <p className="text-slate-500 mt-2 font-medium">Create your FocusFlow account</p>
//         </div>

//         {error && (
//           <div className="bg-red-50 text-red-500 p-4 rounded-2xl text-sm font-medium border border-red-100 mb-6 break-words">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label className="block text-sm font-bold text-slate-700 ml-1">First Name</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-5 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-black shadow-sm"
//                 placeholder="John"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="block text-sm font-bold text-slate-700 ml-1">Last Name</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full px-5 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-black shadow-sm"
//                 placeholder="Doe"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-bold text-slate-700 ml-1">Email</label>
//             <input
//               type="email"
//               required
//               className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-black shadow-sm"
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
//               className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-black shadow-sm"
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
//             {loading ? 'Creating account...' : 'Sign Up'}
//           </button>
//         </form>

//         <p className="mt-8 text-center text-slate-500 font-medium">
//           Already have an account?{' '}
//           <Link href="/login" className="text-purple-600 hover:underline font-bold">
//             Sign In
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
import { motion } from 'framer-motion'; // Motion animations ke liye

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          password: password, 
          first_name: firstName, 
          last_name: lastName 
        }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.detail || 'Registration failed');
      }
    } catch (err) {
      setError('Connection refused. Check backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Decorative Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="w-full max-w-md z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Create Account</h1>
            <p className="text-slate-400 mt-2">Start managing your tasks smartly</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="John"
                  className="w-full bg-slate-800/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  className="w-full bg-slate-800/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full bg-slate-800/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-slate-800/50 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] disabled:opacity-50 mt-4"
            >
              {loading ? 'Processing...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 font-bold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}