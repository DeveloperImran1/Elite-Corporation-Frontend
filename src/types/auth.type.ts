import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SENDER" | "RECEIVER" | "ADMIN";
