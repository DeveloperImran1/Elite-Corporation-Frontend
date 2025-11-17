/* eslint-disable @typescript-eslint/no-explicit-any */
export const generateRoutes = (sidebarItems: any) => {
  const structuredItems = sidebarItems.map((item: any) => ({
    Component: item.component,
    path: item.url,
  }));

  return structuredItems;
};
