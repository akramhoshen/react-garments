import DashboardMenu from "./menu/DashboardMenu";
import SystemMenu from "./menu/SystemMenu";
import Logout from "./menu/LogoutMenu";
import Merchandise from "./menu/Merchandise";
import OrderMenu from "./menu/OrderMenu";

export default function Sidebar(){
  
  return(
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">Main</li>
        <DashboardMenu/>
        <li className="nav-heading">Sale</li>
        <OrderMenu/>
        <Merchandise/>
        <li className="nav-heading">Settings</li>
        <SystemMenu/>
        <Logout/>
      </ul>
    </aside>
  );
  
};