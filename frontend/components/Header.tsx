// import Link from 'next/link';

// interface HeaderProps {
//   isAuthenticated?: boolean;
// }

// export default function Header({ isAuthenticated = false }: HeaderProps) {
//   return (
//     <header className="bg-white shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex-shrink-0 flex items-center">
//               <span className="text-purple-600 text-xl font-bold tracking-tight">TodoApp</span>
//             </Link>
//             <nav className="ml-6 flex space-x-4">
//               <Link 
//                 href="/" 
//                 className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:text-purple-600 hover:bg-pink-50 transition-colors"
//               >
//                 Home
//               </Link>
//               <Link 
//                 href="/dashboard" 
//                 className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:text-purple-600 hover:bg-pink-50 transition-colors"
//               >
//                 Dashboard
//               </Link>
//             </nav>
//           </div>
          
//           <div className="flex items-center">
//             {isAuthenticated ? (
//               <Link 
//                 href="/logout" 
//                 className="text-pink-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-50"
//               >
//                 Logout
//               </Link>
//             ) : (
//               <div className="flex space-x-4">
//                 <Link 
//                   href="/login" 
//                   className="text-purple-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-50 transition-colors"
//                 >
//                   Log in
//                 </Link>
//                 <Link 
//                   href="/signup" 
//                   className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 shadow-md transition-colors"
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  isAuthenticated?: boolean;
}

export default function Header({ isAuthenticated = false }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Token delete karein
    router.push('/login'); // Login par bhej dein
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-purple-600 text-xl font-bold tracking-tight">TodoApp</span>
            </Link>
            <nav className="ml-6 flex space-x-4">
              <Link href="/" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:text-purple-600 hover:bg-pink-50 transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:text-purple-600 hover:bg-pink-50 transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <button 
                onClick={handleLogout}
                className="text-pink-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-50 transition-colors"
              >
                Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login" className="text-purple-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-50 transition-colors">
                  Log in
                </Link>
                <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 shadow-md transition-colors">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}