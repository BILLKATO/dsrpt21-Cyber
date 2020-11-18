import Renovacoes from "views/Renovacoes.jsx";
import Detalhes from "views/Detalhes.jsx";


var routes = [
  {
    path: "/renovacoes",
    name: "Renovações",
    icon: "nc-icon nc-paper",
    component: Renovacoes,
    layout: "/admin"
  },
  {
    path: "/detalhes/:local/:email",
    name: "Detalhes",
    icon: "nc-icon nc-paper",
    component: Detalhes,
    layout: "/admin"
  },
];
export default routes;