"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>("");
  const pathname = usePathname();
  useEffect(() => {
    const item = NAV_ITEMS.find((item) => item.path === pathname);
    if (item) {
      setActive(item.label);
    }
  }, [pathname]);
  return (
    <nav className="flex flex-col p-8 h-full min-h-screen min-w-[300px] shadow-2xl bg-[hsl(var(--primary-foreground))]">
      <Link className="text-2xl font-semibold mb-12" href={"/"}>
        Omics
        <span className="text-amber-300">ML</span>
      </Link>

      {NAV_ITEMS.map((item, idx) => (
        <div key={item.label} className="">
          {idx !== 0 && <Separator className="my-3" />}
          <div
            className="flex flex-col"
            onClick={() => {
              setActive(item.label);
            }}
          >
            <Link
              href={item.path}
              className={`text-lg font-medium px-4 py-1 rounded-md w-full flex flex-row items-center ${
                active === item.label ? "bg-[hsl(var(--secondary))]" : ""
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="ml-2">{item.label}</span>
              {item.children && (
                <ChevronDown
                  className={`inline-block ml-auto transition-all duration-200 delay-75 ${
                    active === item.label ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              )}
            </Link>
            {item.children && (
              <div
                className={`flex flex-col gap-2 ml-10 transition-[max-height] duration-300 overflow-hidden ${
                  active === item.label ? "max-h-[200px] my-1 pt-1" : "max-h-0"
                }`}
              >
                {item.children.map((child) => (
                  <span
                    // href={child.path}
                    key={child.label}
                    className="text-sm my-1"
                  >
                    {child.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
