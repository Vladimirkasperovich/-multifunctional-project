import {
  LucideIcon,
  BadgeDollarSign,
  Sun,
  Newspaper,
  Clapperboard,
} from "lucide-react";

export interface SidebarItem {
  icon: LucideIcon;
  id: string;
  value: string;
  color: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    id: crypto.randomUUID(),
    value: "Store",
    icon: BadgeDollarSign,
    color: "green",
  },
  { id: crypto.randomUUID(), value: "Weather", icon: Sun, color: "orange" },
  { id: crypto.randomUUID(), value: "News", icon: Newspaper, color: "white" },
  {
    id: crypto.randomUUID(),
    value: "Movie",
    icon: Clapperboard,
    color: "black",
  },
];
