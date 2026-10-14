-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Оксана',
    "lastName" TEXT NOT NULL DEFAULT 'Лапа',
    "email" TEXT NOT NULL DEFAULT 'oksana.lapa@example.com',
    "description" TEXT NOT NULL DEFAULT 'Оксана Лапа - художник, дизайнер и иллюстратор. Она создает уникальные произведения искусства, вдохновленные природой и культурой. Ее работы отличаются яркими цветами, оригинальными формами и глубоким смыслом. Оксана активно участвует в выставках и проектах, делясь своим творчеством с миром.',

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);
