import { role } from "@/constant/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";

import type { TRole } from "@/types/auth.type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return adminSidebarItems;

    default:
      return [];
  }
};
