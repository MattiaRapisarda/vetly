-- CreateTable
CREATE TABLE "Veterinario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "specializzazione" TEXT NOT NULL,
    "annoLaurea" INTEGER NOT NULL,
    "biografia" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Veterinario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utenti" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utenti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Richieste" (
    "id" SERIAL NOT NULL,
    "codice_conversazione" TEXT NOT NULL,
    "id_utente" INTEGER NOT NULL,
    "id_veterinario" INTEGER NOT NULL,
    "id_messaggio" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Richieste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messaggi" (
    "id" SERIAL NOT NULL,
    "id_conversazione" TEXT NOT NULL,
    "contenuto" TEXT NOT NULL,
    "id_utente" INTEGER NOT NULL,
    "id_veterinario" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Messaggi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Veterinario_email_key" ON "Veterinario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Utenti_email_key" ON "Utenti"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Richieste_codice_conversazione_key" ON "Richieste"("codice_conversazione");
