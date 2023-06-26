import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { rem } from './plugins';

function App() {
  return (
    <>
      <ul className="flex gap-x-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? 'bg-blue-500 text-slate-100 hover:text-slate-100'
                  : 'bg-slate-100'
              } rounded-md py-1 px-2 `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive
                  ? 'bg-blue-500 text-slate-100 hover:text-slate-100'
                  : 'bg-slate-100'
              } rounded-md py-1 px-2`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <Outlet />
      {/* 750px 设计稿，1rem === 100px， fontSize 0.12热门即 12px */}
      <div style={{ fontSize: rem(42) }}>Hello</div>
    </>
  );
}

export default App;
