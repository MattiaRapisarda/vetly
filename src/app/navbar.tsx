"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDownIcon } from "lucide-react"

const Navbar = () => {
  return (
    <NavigationMenuPrimitive.Root className="bg-gray-900 text-white">
      <NavigationMenuPrimitive.List className="flex gap-4 items-center justify-center p-4">
        <NavigationMenuPrimitive.Item className="relative group">
          <NavigationMenuPrimitive.Trigger className="text-lg font-semibold transition-all hover:text-yellow-400 flex items-center">
            Item One
            <ChevronDownIcon className="ml-2 transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute left-0 w-full bg-gray-800 text-white mt-2 rounded-md shadow-lg p-4 transition-all group-data-[state=open]:animate-in">
            <NavigationMenuPrimitive.Link href="#" className="block text-sm py-2 px-4 rounded-md transition-all hover:bg-gray-700 hover:text-yellow-400">
              Link
            </NavigationMenuPrimitive.Link>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        {/* Puoi aggiungere altri menu item qui */}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  )
}

export default Navbar
