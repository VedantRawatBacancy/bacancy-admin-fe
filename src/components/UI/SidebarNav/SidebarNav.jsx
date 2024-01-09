import logo from '../../../assets/Sample.svg'
import { Users } from '../Common/Users';
import { LuPower } from "react-icons/lu";

import { NavLink } from 'react-router-dom';

const SidebarNav = ({ items, selected, onItemClick }) => {
    return (
        <nav className="fixed top-0 left-0 w-64 flex flex-col justify-between bg-white h-dvh text-black shadow-lg">
          <ul className="py-3 space-y-4 p-3">
            <div className="flex flex-row">
                <img src={logo} className="text-center p-5" width={100}/>
                <h1 className="flex text-black items-center text-center p-5 align-center justify-center">ADMIN</h1>
            </div>
                <p className="flex items-center text-center uppercase p-5 align-center justify-center">Welcome {Users[1].firstName}</p>
            {items.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.setPath}`}
                className={`flex items-center justify-between rounded-md transition duration-200 p-4 bg-white ${
                  selected === item.id ? 'bg-orange-700 text-white' : ''
                }`}
                onClick={() => onItemClick(item.id)}
              >
                <div className="row flex flex-row items-center w-100">
                <div className='col-md-6 p-1'>{item.icon}</div>
                <div className='col-md-6 p-1'>{item.label}</div>
                </div>
              </NavLink>
            ))}
          </ul>

          <ul className="py-3 space-y-4 p-3">
            <a href="#" className="flex items-center rounded-md transition duration-200 p-4 bg-white hover:bg-orange-700 hover:text-white">
            <div className="row flex flex-row items-center w-100">
                <div className='col-md-6 p-1'><LuPower /></div>
                <div className='col-md-6 p-1'>Logout</div>
                </div>
            </a>
          </ul>
        </nav>
      );
};

export default SidebarNav;