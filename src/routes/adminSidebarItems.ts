import { AddReview } from "@/pages/Admin/AddReview";
import AllOrder from "@/pages/Admin/AllOrder";
import AllReview from "@/pages/Admin/AllReview";
import AllUser from "@/pages/Admin/AllUser";
import Analytics from "@/pages/Admin/Analytics";
import Profile from "@/pages/Profile";
import {
  IconDashboard,
  IconFolder,
  IconListDetails,
} from "@tabler/icons-react";
import { BookMinus, User } from "lucide-react";
import { MdReviews } from "react-icons/md";

export const adminSidebarItems = [
  {
    title: "Analytics",
    url: "/admin/analytics",
    component: Analytics,
    icon: IconDashboard,
  },
  {
    title: "Profile",
    url: "/admin/my-profile",
    component: Profile,
    icon: User,
  },
  {
    title: "All User",
    url: "/admin/all-user",
    icon: IconListDetails,
    component: AllUser,
  },
  {
    title: "All Order",
    url: "/admin/all-order",
    icon: IconFolder,
    component: AllOrder,
  },
  {
    title: "Add Review",
    url: "/admin/add-review",
    icon: MdReviews,
    component: AddReview,
  },
  {
    title: "All Review",
    url: "/admin/all-review",
    icon: BookMinus,
    component: AllReview,
  },
];
