import { sidebarMenu } from "../data/sidebar-menu";
import logo from "../assets/sidebar-logo.svg";

const Sidebar = () => {
  return (
    <div className="bg-secondary text-white w-1/6 min-h-screen p-4">
      <div className="flex items-center my-5 pl-3 font-bold">
        <img src={logo} alt="logo" className="w-8 h-8 mr-4 " />
        <p>Inter-act</p>
      </div>

      <ul className="py-8">
        {sidebarMenu.map((menu, index) => (
          <div key={index}>
            <li className=" py-4 pl-3 hover:bg-gray-600 hover:rounded-xl flex items-center cursor-pointer">
              <img src={menu.icon} alt={menu.name} className="w-5 h-5 mr-4" />
              <p className="text-[#6C747D]">{menu.name}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
