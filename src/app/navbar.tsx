"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <NavigationMenu className="relative w-full p-4 bg-opacity-80 backdrop-blur-md flex items-center">
      {/* Sinistra - Menu di navigazione */}
      <div className="flex-1 flex items-center gap-6">
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Perché</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 bg-white shadow-lg rounded-md">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                      Chi siamo
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/benefits" className="block px-4 py-2 hover:bg-gray-100">
                      Benefici
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Veterinari</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 bg-white shadow-lg rounded-md">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/vets" className="block px-4 py-2 hover:bg-gray-100">
                      Trova un veterinario
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/join" className="block px-4 py-2 hover:bg-gray-100">
                      Diventa un partner
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Come funziona</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 bg-white shadow-lg rounded-md">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/how-it-works" className="block px-4 py-2 hover:bg-gray-100">
                      Il nostro servizio
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
                      Domande frequenti
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>

      {/* Centro - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary">
          <Image src="/img/logo.png" alt="Vetly Logo" width={80} height={80} />
        </Link>
      </div>

      {/* Destra - Accedi e Registrati */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-700 hover:underline">
          Accedi
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-full hover:bg-purple-600"
        >
          Registrati
        </Link>
      </div>
    </NavigationMenu>
  );
}
