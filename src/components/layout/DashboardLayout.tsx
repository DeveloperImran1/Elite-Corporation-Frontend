import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  authAPi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Outlet } from "react-router";
import { toast } from "sonner";
import Loader from "../modules/shared/Loading";
import Logo from "../modules/shared/Logo";

export function DashboardLayout({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { data: currentUser, isLoading } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation(undefined);
  const dispatch = useAppDispatch();

  const sidebarItems = getSidebarItems(currentUser?.data?.role);

  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authAPi.util.resetApiState());
      localStorage.removeItem("user");

      toast.success("Logout successful");
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    user: {
      name: currentUser?.data?.name,
      email: currentUser?.data?.email,
      avatar:
        currentUser?.data?.picture ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log("user data from footer", currentUser?.data);
  return (
    <SidebarProvider>
      {/* এখানে toggle button */}
      <div className=" ">
        <SidebarTrigger /> {/* ছোট ডিভাইসে toggle button দেখাবে */}
      </div>

      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5 "
              >
                <Logo></Logo>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <NavMain items={sidebarItems} />
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={data.user} handleLogout={handleLogout} />
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <Outlet></Outlet>
      </div>
    </SidebarProvider>
  );
}
