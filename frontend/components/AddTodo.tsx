// 'use client';

// import { useState } from 'react';

// interface AddTodoProps {
//   onAddTodo: (title: string) => void;
// }

// export default function AddTodo({ onAddTodo }: AddTodoProps) {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (title.trim()) {
//       onAddTodo(title);
//       setTitle('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Add a new todo..."
//         className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//       >
//         Add
//       </button>
//     </form>
//   );
// }

'use client';
import { useState } from 'react';

interface AddTodoProps {
  onAddTodo?: (title: string) => void; // ? ka matlab hai ye optional hai
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      // Check kar rahe hain ke agar function bheja gaya hai tabhi call karein
      if (typeof onAddTodo === 'function') {
        onAddTodo(title);
      } else {
        console.log("Task added locally:", title);
        alert("Task add ho gaya: " + title);
      }
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?" 
        className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
      />
      <button 
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
      >
        Add
      </button>
    </form>
  );
}