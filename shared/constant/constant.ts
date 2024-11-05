export interface SidebarItem {
  id: string;
  value: string;
}
export const sidebarItems: SidebarItem[] = [
  { id: crypto.randomUUID(), value: "Clothes store" },
  { id: crypto.randomUUID(), value: "Weather" },
  { id: crypto.randomUUID(), value: "News" },
];
