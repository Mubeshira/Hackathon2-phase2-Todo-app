
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Header from '../../components/Header'; 
// import AddTodo from '../../components/AddTodo';
// import TodoItem from '../../components/TodoItem';

// export default function Dashboard() {
//   const [todos, setTodos] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isAuth, setIsAuth] = useState(false);
//   const [searchQuery, setSearchQuery] = useState(''); // 1. Search State
//   const router = useRouter();

//   const API_BASE_URL = 'http://127.0.0.1:8000';

//   const fetchTodos = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(`${API_BASE_URL}/todos/`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setTodos(data);
//       } else if (response.status === 401) {
//         localStorage.removeItem('token');
//         router.push('/login');
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login');
//     } else {
//       setIsAuth(true);
//       fetchTodos(); 
//     }
//   }, []);

//   const handleAddTask = async (title: string) => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`${API_BASE_URL}/todos/`, {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` 
//         },
//         body: JSON.stringify({ title, priority: 'medium', completed: false, description: '' }),
//       });

//       if (response.ok) {
//         const savedTodo = await response.json();
//         setTodos(prev => [savedTodo, ...prev]);
//       }
//     } catch (error) {
//       console.error("Add error:", error);
//     }
//   };

//   const handleDeleteTask = async (id: string) => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
//         method: 'DELETE',
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       if (response.ok) {
//         setTodos(prev => prev.filter(todo => todo.id !== id));
//       }
//     } catch (error) {
//       console.error("Delete error:", error);
//     }
//   };

//   const handleUpdateTask = async (id: string, updatedData: any) => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
//         method: 'PUT',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` 
//         },
//         body: JSON.stringify(updatedData),
//       });

//       if (response.ok) {
//         const updatedTodo = await response.json();
//         setTodos(prev => prev.map(t => t.id === id ? updatedTodo : t));
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//     }
//   };

//   // 2. Filter Logic: Yeh query ke mutabiq list filter karega
//   const filteredTodos = todos.filter(todo =>
//     todo.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header isAuthenticated={isAuth} />
//       <main className="max-w-3xl mx-auto py-12 px-6">
//         <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl font-extrabold text-gray-900">My Tasks</h2>
//             <button onClick={fetchTodos} className="text-purple-600 text-sm font-medium hover:underline">🔄 Refresh</button>
//           </div>

//           <AddTodo onAddTodo={handleAddTask} />

//           {/* 3. Search Bar UI */}
//           <div className="relative mt-6 mb-4">
//             <input
//               type="text"
//               placeholder="Search tasks..."
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all shadow-sm"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>
          
//           <div className="mt-8">
//             {loading ? (
//               <p className="text-center text-gray-500">Loading your tasks...</p>
//             ) : (
//               <div className="space-y-1">
//                 {/* 4. Filtered List render ho rahi hai */}
//                 {filteredTodos.length > 0 ? (
//                   filteredTodos.map((todo) => (
//                     <TodoItem 
//                       key={todo.id} 
//                       todo={todo} 
//                       onDelete={handleDeleteTask} 
//                       onUpdate={(updatedData: any) => handleUpdateTask(todo.id, updatedData)}
//                     />
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-400 py-10">No tasks found matching your search.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// interface Todo {
//   id: string;
//   title: string;
//   description: string;
//   completed: boolean;
//   priority: 'high' | 'medium' | 'low';
// }

// export default function Dashboard() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [userName, setUserName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // 1. Check if user is logged in
//     const token = localStorage.getItem('token');
//     const name = localStorage.getItem('user_name');
    
//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     setUserName(name || 'User');
//     fetchTodos(token);
//   }, []);

//   const fetchTodos = async (token: string) => {
//     try {
//       const response = await fetch('http://localhost:8000/todos/', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       const data = await response.json();
//       setTodos(data);
//     } catch (err) {
//       console.error("Failed to fetch todos");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     router.push('/login');
//   };

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-10">
//       {/* Top Navigation */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center mb-12">
//         <div>
//           <h1 className="text-3xl font-black text-white tracking-tight">FocusFlow</h1>
//           <p className="text-slate-400 font-medium">Welcome back, {userName} ✨</p>
//         </div>
//         <button 
//           onClick={handleLogout}
//           className="px-6 py-2.5 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 border border-slate-700 rounded-xl font-bold transition-all"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Left Column: Quick Stats & Add Task */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-[2rem]">
//             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Stats</h3>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-slate-400">Total Tasks</span>
//                 <span className="text-white font-bold">{todos.length}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-slate-400">Completed</span>
//                 <span className="text-green-400 font-bold">{todos.filter(t => t.completed).length}</span>
//               </div>
//             </div>
//           </div>

//           <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 transition-all active:scale-[0.95]">
//             + New Task
//           </button>
//         </div>

//         {/* Right Column: Todo List */}
//         <div className="lg:col-span-3">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {loading ? (
//               <p className="text-slate-500">Loading your focus flow...</p>
//             ) : todos.length === 0 ? (
//               <div className="col-span-full py-20 text-center bg-slate-900/30 border-2 border-dashed border-slate-800 rounded-[2rem]">
//                 <p className="text-slate-500 font-medium">No tasks found. Start by adding one!</p>
//               </div>
//             ) : (
//               todos.map((todo) => (
//                 <div key={todo.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded-[2rem] hover:border-slate-600 transition-all group">
//                   <div className="flex justify-between items-start mb-4">
//                     <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
//                       todo.priority === 'high' ? 'bg-red-500/10 text-red-500' : 
//                       todo.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-500' : 
//                       'bg-blue-500/10 text-blue-500'
//                     }`}>
//                       {todo.priority}
//                     </span>
//                     <input type="checkbox" checked={todo.completed} className="w-5 h-5 rounded-lg accent-blue-500 bg-slate-800 border-none" />
//                   </div>
//                   <h4 className={`text-xl font-bold text-white mb-2 ${todo.completed ? 'line-through opacity-50' : ''}`}>
//                     {todo.title}
//                   </h4>
//                   <p className="text-slate-400 text-sm line-clamp-2">{todo.description}</p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header'; 
import AddTodo from '../../components/AddTodo';
import TodoItem from '../../components/TodoItem';

export default function Dashboard() {
  const [todos, setTodos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const API_BASE_URL = 'http://127.0.0.1:8000';

  const fetchTodos = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/todos/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else if (response.status === 401) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuth(true);
      fetchTodos(); 
    }
  }, []);

  const handleAddTask = async (title: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}/todos/`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ title, priority: 'medium', completed: false, description: '' }),
      });

      if (response.ok) {
        const savedTodo = await response.json();
        setTodos(prev => [savedTodo, ...prev]);
      }
    } catch (error) {
      console.error("Add error:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleUpdateTask = async (id: string, updatedData: any) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        setTodos(prev => prev.map(t => t.id === id ? updatedTodo : t));
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-purple-500/30">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <Header isAuthenticated={isAuth} />

      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                My Focus List
              </h2>
              <p className="text-slate-400 font-medium mt-1">Organize your workflow efficiently</p>
            </div>
            <button 
              onClick={fetchTodos} 
              className="px-5 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-xl text-sm font-bold transition-all active:scale-95"
            >
              🔄 Refresh
            </button>
          </div>

          <div className="space-y-6">
            {/* Add Todo Component Container */}
            <div className="bg-slate-800/30 p-2 rounded-2xl border border-slate-700/50">
              <AddTodo onAddTodo={handleAddTask} />
            </div>

            {/* Search Bar UI */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white placeholder:text-slate-500 shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-4 top-4.5 h-6 w-6 text-slate-500 group-focus-within:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Tasks List */}
            <div className="mt-10 min-h-[300px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-500 animate-pulse font-medium">Fetching your tasks...</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                      <div key={todo.id} className="transition-all duration-300 hover:translate-x-1">
                        <TodoItem 
                          todo={todo} 
                          onDelete={handleDeleteTask} 
                          onUpdate={(updatedData: any) => handleUpdateTask(todo.id, updatedData)}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-slate-900/20 border-2 border-dashed border-slate-800 rounded-[2rem]">
                      <p className="text-slate-500 font-medium text-lg">
                        {searchQuery ? "No matching tasks found." : "Your list is empty. Add a task to start!"}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}