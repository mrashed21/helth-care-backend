import { prisma } from "@/app/lib/prisma";
import { Specialty } from "@/generated/prisma/client";

export const SpecialtyService = {
  //! create a specialty
  createSpecialty: async (payload: Specialty): Promise<Specialty> => {
    const specialty = await prisma.specialty.create({
      data: payload,
    });
    return specialty;
  },

  //   ! get all specialties
  getAllSpecialties: async () => {
    const specialties = await prisma.specialty.findMany({
      where: { isDeleted: false },
    });
    return specialties;
  },

  //! get a specialty details
  getSpecialtyDetails: async (id: string) => {
    const specialty = await prisma.specialty.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });
    return specialty;
  },

  //! update a specialty
  updateSpecialty: async (payload: Specialty) => {
    const specialty = await prisma.specialty.update({
      where: {
        id: payload.id,
        isDeleted: false,
      },
      data: payload,
    });
    return specialty;
  },

  //! delete a specialty
  deleteSpecialty: async (id: string) => {
    const specialty = await prisma.specialty.update({
      where: {
        id,
        isDeleted: false,
      },
      data: {
        isDeleted: true,
      },
    });
    return specialty;
  },
};
