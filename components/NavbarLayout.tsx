"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function NavbarLayout() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || (path === "/table" && pathname === "/");

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              isActive("/table")
                ? "bg-indigo-500 text-white"
                : "text-gray-300 hover:bg-indigo-400 hover:text-white"
            }`}
            href="/table"
          >
            Table
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              isActive("/list")
                ? "bg-indigo-500 text-white"
                : "text-gray-300 hover:bg-indigo-400 hover:text-white"
            }`}
            href="/list"
          >
            List
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
