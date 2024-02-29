'use client'
import React, {useState} from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";

function Header() {
    const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 dark:border-gray-800">
      <Link
        className="flex items-center space-x-2 text-xl font-medium"
        href="#"
      >
        <SquareIcon className="w-6 h-6" />
      </Link>
      <nav className=" hidden md:flex items-center gap-4 text-sm font-medium">
        <Link
          className="text-gray-900 hover:underline dark:text-gray-50"
          href="#"
        >
          Catalogo
        </Link>
        <Link
          className="text-gray-900 hover:underline dark:text-gray-50"
          href="#"
        >
          Acerca de nosotros
        </Link>
        <Link
          className="text-gray-900 hover:underline dark:text-gray-50"
          href="#"
        >
          Blog
        </Link>
      </nav>

      <Button onClick={() => setOpen(true)}>menu</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <p>opc 1</p>
      </Drawer>
    </header>
  );
}

function SquareIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}

export default Header;
