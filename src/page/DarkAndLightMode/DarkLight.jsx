// import { useEffect, useState } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// const DarkLight = () => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);
//   return (
//     <button
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800  transition"
//     >
//       {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
//     </button>
//   );
// };

// export default DarkLight;
