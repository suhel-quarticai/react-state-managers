import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/toggle";
import { navItems } from "./nav-items";
import { navText } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="mx-4 my-2 flex items-center justify-center text-center">
      <h1 className={"text-lg font-medium"}>{navText}</h1>

      <ul className="ml-auto flex w-fit items-center rounded-md border shadow-sm">
        {navItems.map((item) => (
          <li
            key={item.href}
            className={cn(
              "border-r text-sm last:border-r-0 hover:bg-secondary/60",
              location.pathname === item.href && "bg-secondary text-primary",
            )}
          >
            <Link to={item.href} className="block px-4 py-1.5">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <ThemeToggle className="ml-auto" />
    </nav>
  );
};
