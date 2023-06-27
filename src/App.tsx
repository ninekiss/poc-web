import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

import { DatePicker, Button, Checkbox, Radio, ConfigProvider } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6300b9',
          },
          components: {
            Radio: {
              colorPrimary: '#00b96b',
            },
          },
        }}
      >
        <Radio>Radio</Radio>
        <Checkbox>Checkbox</Checkbox>
        <Button type="primary">点我</Button>
      </ConfigProvider>
      <DatePicker />
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
    </>
  );
}

export default App;
