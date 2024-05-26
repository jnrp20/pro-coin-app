// todo este codigo sale en la documentación oficial de prisma "good practices prisma" y es para inicializar el prisma de modo global


import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;