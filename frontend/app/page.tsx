// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Header from '../components/Header';
// export default function LandingPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Check if user is already logged in
//     // In a real app, this would check for a valid JWT token in localStorage or cookies
//     const token = localStorage.getItem('auth_token');
    
//     if (token) {
//       // If token exists, redirect to dashboard after a short delay
//       setTimeout(() => {
//         router.push('/dashboard');
//       }, 1000); // 1 second delay for better UX
//     } else {
//       setIsLoading(false);
//     }
//   }, [router]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-600"></div>
//           <p className="mt-4 text-gray-600">Checking authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Header isAuthenticated={false} />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
//             Manage Your Tasks Efficiently
//           </h1>
//           <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
//             A beautiful and intuitive todo application to help you stay organized and productive.
//           </p>
//           <div className="mt-10 flex justify-center gap-4">
//             <Link
//               href="/login"
//               className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:text-lg md:px-8"
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-pink-100 hover:bg-pink-200 md:text-lg md:px-8"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="pt-6">
//             <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//               <div className="-mt-6">
//                 <h3 className="text-lg font-medium text-gray-900">Task Management</h3>
//                 <p className="mt-2 text-base text-gray-500">
//                   Create, update, and organize your tasks with our intuitive interface.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-6">
//             <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//               <div className="-mt-6">
//                 <h3 className="text-lg font-medium text-gray-900">Priority Tracking</h3>
//                 <p className="mt-2 text-base text-gray-500">
//                   Set priorities and due dates to stay on top of your most important tasks.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-6">
//             <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//               <div className="-mt-6">
//                 <h3 className="text-lg font-medium text-gray-900">Secure & Private</h3>
//                 <p className="mt-2 text-base text-gray-500">
//                   Your data is protected with industry-standard security measures.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Header from '../components/Header';

// export default function LandingPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Authentication Check
//     const token = localStorage.getItem('token'); // Match this with your login storage key
    
//     if (token) {
//       setTimeout(() => {
//         router.push('/dashboard');
//       }, 800); 
//     } else {
//       setIsLoading(false);
//     }
//   }, [router]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//           <p className="mt-4 text-slate-400 font-medium tracking-wide">Authenticating Flow...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-slate-200 relative overflow-hidden">
//       {/* Background Decorative Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <Header isAuthenticated={false} />

//       <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         {/* Hero Section */}
//         <div className="text-center space-y-8">
//           <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
//             Manage Your Tasks <br />
//             <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
//               With Pure Efficiency.
//             </span>
//           </h1>
          
//           <p className="max-w-2xl mx-auto text-xl text-slate-400 font-medium leading-relaxed">
//             A beautiful, intuitive, and hyper-fast todo application designed to help you stay organized and productive.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
//             <Link
//               href="/login"
//               className="px-10 py-4 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all shadow-xl active:scale-95"
//             >
//               Login to Account
//             </Link>
//             <Link
//               href="/signup"
//               className="px-10 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700 text-white rounded-2xl font-black text-lg hover:bg-slate-700 transition-all active:scale-95 shadow-xl"
//             >
//               Get Started Free
//             </Link>
//           </div>
//         </div>

//         {/* Feature Cards Section */}
//         <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Card 1 */}
//           <div className="group p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] hover:border-purple-500/50 transition-all duration-300">
//             <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-3">Task Management</h3>
//             <p className="text-slate-400 leading-relaxed font-medium">
//               Create, update, and organize your tasks with our hyper-fast intuitive interface.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="group p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-300">
//             <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-3">Priority Tracking</h3>
//             <p className="text-slate-400 leading-relaxed font-medium">
//               Set priorities and due dates to stay on top of your most important daily tasks.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="group p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] hover:border-emerald-500/50 transition-all duration-300">
//             <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
//             <p className="text-slate-400 leading-relaxed font-medium">
//               Your data is encrypted and protected with industry-standard security.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';

export default function LandingPage() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 1. Check if token actually exists
    const token = localStorage.getItem('token');
    
    if (token) {
      setIsLoggedIn(true);
      // Optional: Agar aap chahte hain ke login user seedha dashboard jaye:
      // router.push('/dashboard'); 
    }
    
    setIsCheckingAuth(false);
  }, []);

  // Loading state ko tabhi dikhayein jab hum auth check kar rahe hon
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Header isAuthenticated={isLoggedIn} />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
          Focus<span className="text-purple-500">Flow.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 font-medium">
          The minimal, beautiful, and hyper-fast task manager.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
          {isLoggedIn ? (
            <Link
              href="/dashboard"
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl shadow-purple-500/20"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-12 py-5 bg-white text-slate-900 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all shadow-xl active:scale-95"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-12 py-5 bg-slate-800/50 backdrop-blur-xl border border-slate-700 text-white rounded-[2rem] font-black text-xl hover:bg-slate-700 transition-all active:scale-95 shadow-xl"
              >
                Create Account
              </Link>
            </>
          )}
        </div>

        {/* Info Cards */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] text-left hover:border-purple-500/50 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Fast</h3>
            <p className="text-slate-400">Optimized for speed and productivity.</p>
          </div>
          <div className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] text-left hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
            <p className="text-slate-400">Your data is yours, encrypted and safe.</p>
          </div>
          <div className="p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] text-left hover:border-emerald-500/50 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Beautiful</h3>
            <p className="text-slate-400">Minimalist design for maximum focus.</p>
          </div>
        </div>
      </main>
    </div>
  );
}