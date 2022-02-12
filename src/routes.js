
import Dashboard from "views/Dashboard.js";
import Form1 from "views/form1";

import Icons from "views/Icons.js";

import Week1 from "views/Week1";
import Week2 from "views/Week2";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/Week1",
    name: "Week1",
    icon: "nc-icon nc-book-bookmark",
    component: Week1,
    layout: "/admin",
  },
  {
    path: "/Week2",
    name: "Week2",
    icon: "nc-icon nc-book-bookmark",
    component: Week2,
    layout: "/admin",
  },
  {
    path: "/Form1",
    name: "Assessment1",
    icon: "nc-icon nc-book-bookmark",
    component: Form1,
    layout: "/admin",
  },
  
];
export default routes;
