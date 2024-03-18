-- CreateTable
CREATE TABLE `Frequencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ra` VARCHAR(191) NOT NULL,
    `frequencia` INTEGER NOT NULL,
    `turma` VARCHAR(191) NOT NULL,
    `turmaCodigo` VARCHAR(191) NOT NULL,
    `escola` VARCHAR(191) NOT NULL,
    `escolaCodigo` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
