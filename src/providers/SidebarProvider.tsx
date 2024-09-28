import { createContext, ReactNode, useState } from "react";


export interface ISidebarCollapse {
  isCollapsed: boolean;
  toggleSidebar: () => void
}

export const SidebarContext = createContext<ISidebarCollapse>({
  isCollapsed: false,
  toggleSidebar() { }
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        toggleSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>)
}
