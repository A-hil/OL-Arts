-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "years" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "highlights" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "image" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "status" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_tall" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);
