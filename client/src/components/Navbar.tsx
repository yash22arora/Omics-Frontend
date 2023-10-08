"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>("");
  return (
    <nav className="flex flex-col p-8 h-full min-h-screen min-w-[280px] shadow-2xl bg-[hsl(var(--primary-foreground))]">
      <Link className="text-2xl font-medium mb-12" href={"/"}>
        OmicsML
      </Link>

      {NAV_ITEMS.map((item, idx) => (
        <div key={item.label} className="">
          {idx !== 0 && <Separator className="my-3" />}
          <div
            className="flex flex-col gap-2"
            onClick={() => {
              setActive(item.label);
            }}
          >
            <Link
              href={item.path}
              className={`text-lg font-medium px-4 py-1 rounded-md w-full flex flex-row justify-between items-center ${
                active === item.label ? "bg-[hsl(var(--accent))]" : ""
              }`}
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronDown
                  className={`inline-block ml-2 transition-all duration-200 delay-75 ${
                    active === item.label ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              )}
            </Link>
            {item.children && (
              <div
                className={`flex flex-col gap-2 ml-5 transition-[max-height] duration-200 overflow-hidden ${
                  active === item.label ? "max-h-[100px] my-1" : "max-h-0"
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    href={child.path}
                    key={child.label}
                    className="text-sm my-1"
                  >
                    {child.label}
                  </Link>
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
