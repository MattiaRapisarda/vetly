"use client";

import * as React from "react";

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
  return (
    <div className="bg-colore-bianco pl-40 pt-20">
        <div className="ml-130 w-1/3">
        <h1 className="text-2xl font-bold colore-primario" style={{ lineHeight: '1.2' }}>
            CONSULENZA VETERINARIA ONLINE
          </h1>
          <p className="text-lg colore-secondario mb-2">
            Consulti preambulatoriali per te e il tuo pet
          </p>
          </div>
    <div className="flex flex-col items-start space-y-4 py-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-90 cursor-pointer group"
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
  );
}
