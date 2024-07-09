import { cn } from "@/utils/ui";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Context",
    href: "/context",
  },
  {
    label: "Zustand",
    href: "/zustand",
  },
  {
    label: "Recoil",
    href: "/recoil",
  },
  {
    label: "Jotai",
    href: "/jotai",
  },
  {
    label: "Redux Toolkit",
    href: "/redux-toolkit",
  },
  {
    label: "MobX",
    href: "/mobx",
  },
  {
    label: "Easy Peasy",
    href: "/easy-peasy",
  },
  {
    label: "Valtio",
    href: "/valtio",
  },
  {
    label: "XState",
    href: "/xstate",
  },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="my-2 flex items-center justify-center text-center">
      <ul className="flex w-fit items-center rounded-md border shadow-sm">
        {navItems.map((item) => (
          <li
            key={item.href}
            className={cn(
              "border-r px-4 py-1.5 text-sm last:border-r-0 hover:bg-secondary/60",
              location.pathname === item.href && "bg-secondary text-primary",
            )}
          >
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
