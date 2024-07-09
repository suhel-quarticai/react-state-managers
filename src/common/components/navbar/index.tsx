import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/toggle";
import { navItems } from "./nav-items";
import { cn } from "@/utils/ui";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="my-2 flex items-center justify-center text-center">
      <ul className="ml-auto flex w-fit items-center rounded-md border shadow-sm">
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

      <ThemeToggle className="ml-auto mr-4" />
    </nav>
  );
};
