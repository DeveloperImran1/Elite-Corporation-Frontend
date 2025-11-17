import App from "@/App";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { role } from "@/constant/role";
import Login from "@/pages/Authentication/Login";
import Register from "@/pages/Authentication/Register";
import About from "@/pages/Public/About";
import Contact from "@/pages/Public/Contact";
import Faq from "@/pages/Public/Faq";
import Features from "@/pages/Public/Features";
import HomePage from "@/pages/Public/HomePage";
import OrderNow from "@/pages/Public/OrderNow";
import UnAuthorized from "@/pages/Public/Unauthorized";
import { generateRoutes } from "@/utils/generateRoutes";
import withAuth from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: HomePage,
      },

      {
        Component: OrderNow,
        path: "order-now",
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Faq,
        path: "faq",
      },
      {
        Component: Features,
        path: "features",
      },

      {
        Component: withAuth(UnAuthorized),
        path: "unauthorized",
      },
    ],
  },

  {
    Component: withAuth(DashboardLayout, [role.admin]),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics"></Navigate> },

      // aivabe generateRoutes function ke call kore nia aste pari datake.
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
