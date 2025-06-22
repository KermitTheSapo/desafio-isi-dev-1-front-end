import SidebarRow from "../sidebar-row/index.component";
import { useSidebarItems } from "../../hooks/use-icons";

export default function Sidebar() {
  const sidebarItems = useSidebarItems();

  return (
    <>
      {sidebarItems.map((item) => (
        <SidebarRow
          key={item.id}
          icon={item.iconPath}
          label={item.label}
          description={item.description}
        />
      ))}
    </>
  );
}
