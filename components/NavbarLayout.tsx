"use client";

import { Navbar, NavbarItem } from "@heroui/navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";

export default function NavbarLayout() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || (path === "/table" && pathname === "/");

  return (
    <Navbar className="bg-gray-800 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <NavbarItem
            as={Link}
            className={
              isActive("/table")
                ? "text-indigo-400"
                : "text-gray-300 hover:text-indigo-300"
            }
            href="/table"
          >
            Table
          </NavbarItem>
          <NavbarItem
            as={Link}
            className={
              isActive("/list")
                ? "text-indigo-400"
                : "text-gray-300 hover:text-indigo-300"
            }
            href="/list"
          >
            List
          </NavbarItem>
        </div>
        <ThemeToggle />
      </div>
    </Navbar>
  );
}
