/* eslint-disable react/prop-types */
import { BsCoin } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
const Header = ({ playerCartPrice }) => {
  return (
    <div className="container mx-auto sticky top-0">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className="text-2xl" />
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img className="" src="/src/assets/logo.png" alt="" />
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base text-gray-600">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="flex items-center gap-2 border px-6 py-2 bg-slate-100 rounded-xl">
            {playerCartPrice} Coin{" "}
            <BsCoin className="bg-amber-400 rounded-full text-xl" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
