"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm bg-opacity-80 py-4 flex items-center justify-between z-50">
      {/* Sinistra - Menu di navigazione */}
      <div className="flex items-center gap-6 ml-40">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {/* Menu "Perché" */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group flex items-center justify-between gap-2 px-3 py-2 colore-bianco">
                Perché <CaretDownIcon className="colore-bianco transition-transform duration-250 ease-in group-data-[state=open]:-rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 w-48 mt-2 py-2 bg-colore-bianco shadow-lg rounded-md z-50">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  Chi siamo
                </Link>
                <Link href="/benefits" className="block px-4 py-2 hover:bg-gray-100">
                  Benefici
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Menu "Veterinari" */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group flex items-center justify-between gap-2 px-3 py-2 colore-bianco">
                Veterinari <CaretDownIcon className="colore-bianco transition-transform duration-250 ease-in group-data-[state=open]:-rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 w-48 mt-2 py-2 bg-colore-bianco shadow-lg rounded-md z-50">
                <Link href="/vets" className="block px-4 py-2 hover:bg-gray-100">
                  Trova un veterinario
                </Link>
                <Link href="/join" className="block px-4 py-2 hover:bg-gray-100">
                  Diventa un partner
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Menu "Come funziona" */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group flex items-center justify-between gap-2 px-3 py-2 colore-bianco">
                Come funziona <CaretDownIcon className="colore-bianco transition-transform duration-250 ease-in group-data-[state=open]:-rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 w-48 mt-2 py-2 bg-colore-bianco shadow-lg rounded-md z-50">
                <Link href="/how-it-works" className="block px-4 py-2 hover:bg-gray-100">
                  Il nostro servizio
                </Link>
                <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
                  Domande frequenti
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Centro - Logo */}
      <div className="flex-grow flex justify-center mr-40">
        <Link href="/" className="flex items-center">
          <Image src="/img/logo-bianco-verde.png" alt="Vetly Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Destra - Accedi e Registrati */}
      <div className="flex items-center gap-4 mr-40">
        <Link href="/login" className="colore-bianco">
          Accedi
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 colore-bianco bg-colore-bottoni rounded-full hover:bg-purple-600"
        >
          Registrati
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;