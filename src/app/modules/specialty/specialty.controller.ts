import { NextFunction, Request, Response } from "express";

export const SpecialtyController = {
    
  //! create a specialty
  createSpecialty: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {},

  //   ! get all specialties
  getAllSpecialties: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {},

  //! get a specialty by id
  getSpecialtyById: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {},

  //! update a specialty by id
  updateSpecialtyById: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {},

  //! delete a specialty by id
  deleteSpecialtyById: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {},
};
