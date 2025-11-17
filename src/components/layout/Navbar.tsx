import { Menu } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import Logo from "../modules/shared/Logo";
import LogoWithoutName from "../modules/shared/LogoWithoutName";

interface MenuItem {
  title: string;
  url: string;
}

const menuItems = [
  { title: "Home", url: "/", role: "PUBLIC" },
  {
    title: "Order Now",
    url: "/order-now",
    role: "PUBLIC",
  },
  {
    title: "About Us",
    url: "/about-us",
    role: "PUBLIC",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
    role: "PUBLIC",
  },
  {
    title: "FAQ",
    url: "/faq",
    role: "PUBLIC",
  },
];
const Navbar = () => {
  return (
    <section className="">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex justify-between  w-full items-center gap-6">
            {/* Logo */}
            <Logo></Logo>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item) => (
                    <>{item.role.includes("PUBLIC") && renderMenuItem(item)}</>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <LogoWithoutName></LogoWithoutName>
            <Sheet>
              <div className="flex gap-3">
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
              </div>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <LogoWithoutName></LogoWithoutName>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menuItems.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <Link
        to={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export default Navbar;
