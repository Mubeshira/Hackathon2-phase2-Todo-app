

// 'use client';

// import { useState } from 'react';

// interface Todo {
//   id: string;
//   title: string;
//   completed: boolean;
//   priority?: string;
// }

// interface TodoItemProps {
//   todo: Todo;
//   onDelete: (id: string) => void;
//   onUpdate: (updatedData: any) => void; // Dashboard ka handleUpdateTask yahan use hoga
// }

// export default function TodoItem({ todo, onDelete, onUpdate }: TodoItemProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(todo.title);

//   const priority = todo.priority || 'medium';

//   const priorityColors: { [key: string]: string } = {
//     high: 'text-red-600 bg-red-50',
//     medium: 'text-yellow-600 bg-yellow-50',
//     low: 'text-blue-600 bg-blue-50'
//   };

//   // Jab user title change karke 'Enter' dabaye ya click bahar kare
//   const handleSave = () => {
//     if (editedTitle.trim() !== "" && editedTitle !== todo.title) {
//       onUpdate({ 
//         title: editedTitle, 
//         completed: todo.completed, 
//         priority: priority 
//       });
//     }
//     setIsEditing(false);
//   };

//   // Jab checkbox click ho
//   const handleToggle = () => {
//     onUpdate({ 
//       title: todo.title, 
//       completed: !todo.completed, 
//       priority: priority 
//     });
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl mb-3 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex items-center gap-4 flex-1">
//         <input 
//           type="checkbox" 
//           checked={todo.completed}
//           onChange={handleToggle}
//           className="h-5 w-5 text-purple-600 rounded cursor-pointer focus:ring-purple-500 border-gray-300"
//         />
        
//         <div className="flex flex-col flex-1">
//           {isEditing ? (
//             <input
//               type="text"
//               className="border-b-2 border-purple-400 outline-none text-gray-800 font-medium w-full bg-transparent"
//               value={editedTitle}
//               onChange={(e) => setEditedTitle(e.target.value)}
//               onBlur={handleSave}
//               onKeyDown={(e) => e.key === 'Enter' && handleSave()}
//               autoFocus
//             />
//           ) : (
//             <span 
//               onClick={() => setIsEditing(true)}
//               className={`text-gray-800 font-medium cursor-text ${todo.completed ? 'line-through text-gray-400' : ''}`}
//             >
//               {todo.title}
//             </span>
//           )}
          
//           <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mt-1 w-fit ${priorityColors[priority] || 'text-gray-500 bg-gray-100'}`}>
//             {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
//           </span>
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         {/* Edit Button (Pencil Icon) */}
//         <button 
//           onClick={() => setIsEditing(!isEditing)}
//           className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//           </svg>
//         </button>

//         {/* Delete Button */}
//         <button 
//           onClick={() => onDelete(todo.id.toString())}
//           className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority?: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdate: (updatedData: any) => void;
}

export default function TodoItem({ todo, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const priority = todo.priority || 'medium';

  // Dark Theme Priorities Colors
  const priorityStyles: { [key: string]: string } = {
    high: 'text-red-400 bg-red-400/10 border-red-400/20',
    medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    low: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
  };

  const handleSave = () => {
    if (editedTitle.trim() !== "" && editedTitle !== todo.title) {
      onUpdate({ 
        title: editedTitle, 
        completed: todo.completed, 
        priority: priority 
      });
    }
    setIsEditing(false);
  };

  const handleToggle = () => {
    onUpdate({ 
      title: todo.title, 
      completed: !todo.completed, 
      priority: priority 
    });
  };

  return (
    <div className={`flex items-center justify-between p-5 bg-slate-900/40 border ${todo.completed ? 'border-slate-800' : 'border-slate-800/80'} rounded-2xl mb-4 backdrop-blur-sm transition-all hover:bg-slate-800/40 hover:border-slate-700 shadow-lg group`}>
      <div className="flex items-center gap-5 flex-1">
        {/* Custom Checkbox */}
        <div className="relative flex items-center">
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={handleToggle}
            className="peer h-6 w-6 opacity-0 absolute cursor-pointer z-10"
          />
          <div className="h-6 w-6 border-2 border-slate-600 rounded-lg flex items-center justify-center peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col flex-1">
          {isEditing ? (
            <input
              type="text"
              className="bg-transparent border-b-2 border-purple-500/50 outline-none text-white font-bold text-lg w-full py-1"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
            />
          ) : (
            <span 
              onClick={() => setIsEditing(true)}
              className={`text-lg font-bold transition-all cursor-text ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-100'}`}
            >
              {todo.title}
            </span>
          )}
          
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-[9px] font-black uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border ${priorityStyles[priority]}`}>
              {priority} Priority
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Edit Button */}
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="p-2.5 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 rounded-xl transition-all"
          title="Edit Task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        {/* Delete Button */}
        <button 
          onClick={() => onDelete(todo.id.toString())}
          className="p-2.5 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
          title="Delete Task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}