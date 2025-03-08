"use client";

import * as React from "react";
import Image from "next/image";

const items = [
  {
    title: "OTTIMIZZA LE SPESE VETERINARIE",
    details: "Scopri come risparmiare sulle cure veterinarie con consulenze mirate."
  },
  {
    title: "RIDUCI ANSIA E ALLARMISMI AGISCI IN TEMPO",
    details: "Ricevi risposte immediate per evitare preoccupazioni inutili."
  },
  {
    title: "EVITA STRESS DA TRASPORTO E ATTESE",
    details: "Effettua una consulenza da casa senza spostamenti stressanti."
  },
  {
    title: "OTTENI CONSIGLI MIRATI E UNA DIAGNOSI INIZIALE",
    details: "Ricevi un primo parere professionale direttamente online."
  }
];

export default function Why() {
  const [hoverCount, setHoverCount] = React.useState(0);

  const handleMouseEnter = () => setHoverCount(prev => prev + 1);
  const handleMouseLeave = () => setHoverCount(prev => Math.max(0, prev - 1));

  return (
    <div className="bg-colore-bianco">
      <div className="pl-185 w-10/12 pt-20 flex flex-col">
        <h1 className="text-2xl font-bold colore-primario" style={{ lineHeight: '1.2' }}>
          CONSULENZA VETERINARIA ONLINE
        </h1>
        <p className="text-lg colore-secondario mb-2">
          Consulti vet per te e il tuo pet
        </p>
      </div>

      <div className="flex items-center justify-between pl-40">
        <div className="w-2/5 flex flex-col">
          <div className="flex flex-col items-start space-y-4 py-10">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="relative w-full cursor-pointer group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white shadow-md p-4 rounded-lg transition-transform duration-300 group-hover:translate-x-5">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <div className="absolute left-full top-0 ml-4 bg-blue-100 p-4 rounded-lg w-64 shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`w-1/3 mr-40 flex justify-center items-center relative transition-opacity duration-500 ${hoverCount > 0 ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src="/img/call.png"
            alt="Immagine descrizione"
            width="200"
            height="200"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
