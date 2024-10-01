import { useContext } from "react";
import { SidebarContext } from "@/providers/SidebarProvider";

export const useSidebarContext = () => {
  return useContext(SidebarContext)
}