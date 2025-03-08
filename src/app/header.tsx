import Image from 'next/image';


export default function Home() {
  return (
    <div className="relative">
      <div className="relative w-full" style={{ height: 'calc(100vh - 7.5rem)' }}>
        {/* Immagine di sfondo */}
        <div className="relative w-full h-full">
          <Image
            src="/img/header.png"
            alt="Vetly Hero"
            layout="fill"
            objectFit="cover"
          />
          {/* Velo blu sopra l'immagine */}
          <div className="absolute inset-0 bg-colore-primario opacity-50"></div>
        </div>

        {/* Contenuto del testo */}
        <main className="absolute top-1/3 left-0 ml-40 w-1/3 text-left z-1">
          <h1 className="text-2xl font-bold colore-bianco" style={{ lineHeight: '1.2' }}>
            IL TUO PET SI COMPORTA IN MODO STRANO? NON ASPETTARE, CHIEDI UN CONSULTO ONLINE 24/7.
          </h1>
          <p className="text-lg colore-secondario mb-2">
            Prenditi cura del tuo pet.
          </p>
          <p className="text-md colore-bianco mb-6" style={{ lineHeight: '1.2' }}>Talk to a vet in minutes and receive a diagnosis, treatment plan, and prescription con il primo consulto gratuito.
          </p>
          <button className="colore-bottoni bg-colore-bottoni hover:bg-blue-700 py-1 px-3 rounded-full">
            <span className="text-white">Chiedi un consulto</span>
          </button>
        </main>

        {/* Immagine a destra del testo */}
        <div className="absolute bottom-0 right-0 w-1/2 pl-30 z-10">
          <Image
            src="/img/doc.png"
            alt="Dottore"
            layout="intrinsic"
            objectFit="cover"
            width="250"
            height="250"
          />
        </div>
      </div>

      {/* Div verde sotto l'immagine, occupa l'ultima parte della viewport */}
      <div className="w-full h-30 bg-colore-secondario flex justify-center items-center">
      <div className="flex space-x-4 -mt-30">
      <div className="bg-colore-bianco rounded-lg p-6 shadow-md w-80 z-40">
        <div className="flex items-center mb-4">
         
          <h3 className="text-lg font-semibold">Il Giusto Vet per le Esigenze Pet</h3>
        </div>
      </div>

      <div className="bg-colore-bianco rounded-lg p-6 shadow-md w-80 z-40">
        <div className="flex items-center mb-4">
          
          <h3 className="text-lg font-semibold">Consulenza Pre Ambulatoriale</h3>
        </div>
      </div>

      <div className="bg-colore-bianco rounded-lg p-6 shadow-md w-80 z-40">
        <div className="flex items-center mb-4">
        
          <h3 className="text-lg font-semibold">Risposta dal Vet Entro 12h</h3>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
