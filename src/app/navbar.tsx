"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md bg-opacity-80 py-4 flex items-center justify-between z-50">
      {/* Sinistra - Menu di navigazione */}
      <div className="flex items-center gap-6 ml-40">
        <ul className="flex space-x-6">
          <li className="relative group">
            <button className="colore-bianco">Perché</button>
            <div className="absolute hidden group-hover:block w-48 mt-2 py-2 shadow-lg rounded-md">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                Chi siamo
              </Link>
              <Link href="/benefits" className="block px-4 py-2 hover:bg-gray-100">
                Benefici
              </Link>
            </div>
          </li>
          <li className="relative group">
            <button className="colore-bianco">Veterinari</button>
            <div className="absolute hidden group-hover:block w-48 mt-2 py-2 bg-white shadow-lg rounded-md">
              <Link href="/vets" className="block px-4 py-2 hover:bg-gray-100">
                Trova un veterinario
              </Link>
              <Link href="/join" className="block px-4 py-2 hover:bg-gray-100">
                Diventa un partner
              </Link>
            </div>
          </li>
          <li className="relative group">
            <button className="colore-bianco">Come funziona</button>
            <div className="absolute hidden group-hover:block w-48 mt-2 py-2 bg-white shadow-lg rounded-md">
              <Link href="/how-it-works" className="block px-4 py-2 hover:bg-gray-100">
                Il nostro servizio
              </Link>
              <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
                Domande frequenti
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Centro - Logo */}
      <div className="flex-grow flex justify-center mr-40">
        <Link href="/" className="flex items-center">
          <Image src="/img/logo-bianco-verde.png" alt="Vetly Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Destra - Accedi e Registrati */}
      <div className="flex items-center gap-4 mr-40">
        <Link href="/login" className="">
          <span className="colore-bianco">Accedi</span>
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 text-white bg-colore-bottoni rounded-full hover:bg-purple-600"
        >
          <span className="colore-bianco">Registrati</span>
        </Link>
      </div>
    </nav>
  );
}
