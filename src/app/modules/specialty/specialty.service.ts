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
  getAllSpecialties: async () => {},

  //! get a specialty by id
  getSpecialtyById: async (id: string) => {},

  //! update a specialty by id
  updateSpecialtyById: async (
    id: string,
    data: {
      title?: string;
      description?: string;
      icon?: string;
    },
  ) => {},

  //! delete a specialty by id
  deleteSpecialtyById: async (id: string) => {},
};
