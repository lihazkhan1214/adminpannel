import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";




function Sidebar() {
  const {dispatch}=useContext(DarkModeContext);
  return (
    <div className="sidebar">
    
    <div className="top" >
    <Link to="/" style={{textDecoration:"none"}}>
    
    <div className="logo">wellwisher</div>
    </Link>
   
    
    </div>
    <hr />
    <div className="center">
    <ul>
    <p className="title">Main</p>
    <li>
    <Link to="/" style={{textDecoration:"none"}}>
    <DashboardIcon className="icon"/>
    <span>Dashboard</span>
    </Link>
    </li>
    <p className="title">Lists</p>
    <li>
    <Link to="/users" style={{textDecoration:"none"}}>
    <PersonOutlineIcon className="icon"/>
    <span>Users</span>
    </Link>
    </li>
    <li>
    <Link to="/products" style={{textDecoration:"none"}}>
    <StoreIcon className="icon"/>
    <span>Products</span></Link>
    </li>
    <li>
    <CreditCardIcon className="icon"/>
    <span>Order</span>
    </li>
    <li>
    <LocalShippingIcon className="icon"/>
    <span>Delivery</span>
    </li>
    <p className="title">Usefull</p>
    <li>

 <InsertChartIcon className="icon"/>
    <span>Status</span>
    </li>
    <li>
    <NotificationsNoneIcon className="icon"/>
    <span>Notifications</span>
    </li>
    <p className="title">Service</p>
    <li>
    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
    <span>System Health</span>
    </li>
    <li>
    <PsychologyOutlinedIcon className="icon"/>
    <span>Logs</span>
    </li>
    <li>
    <SettingsApplicationsIcon className="icon"/>
    <span>Settings</span>
    </li>
    <p className="title">User</p>
    <li>
    <AccountCircleOutlinedIcon className="icon"/>
    <span>Profile</span>
    </li>
    <li>
    <ExitToAppIcon className="icon"/>
    <span>Logout</span>
    </li>
    </ul>
    
    </div>

    <div className="bottom">
    
    <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
    <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
    </div>
    
    
    
    </div>
  )
}

export default Sidebar