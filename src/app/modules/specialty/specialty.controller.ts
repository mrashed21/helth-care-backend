import { NextFunction, Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

export const SpecialtyController = {
  //! create a specialty
  createSpecialty: async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    try {
      const specialty = await SpecialtyService.createSpecialty(payload);
      res.status(201).json({
        success: true,
        message: "Specialty created successfully",
        data: specialty,
      });
    } catch (error) {
      next(error);
    }
  },

  //   ! get all specialties
  getAllSpecialties: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const specialties = await SpecialtyService.getAllSpecialties();
      res.status(200).json({
        success: true,
        message: "Specialties retrieved successfully",
        data: specialties,
      });
    } catch (error) {
      next(error);
    }
  },

  //! get a specialty details
  getSpecialtyDetails: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id } = req.params;
      const specialty = await SpecialtyService.getSpecialtyDetails(
        id as string,
      );
      res.status(200).json({
        success: true,
        message: "Specialty retrieved successfully",
        data: specialty,
      });
    } catch (error) {
      next(error);
    }
  },

  //! update a specialty
  updateSpecialty: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const specialty = await SpecialtyService.updateSpecialty(payload);
      res.status(200).json({
        success: true,
        message: "Specialty updated successfully",
        data: specialty,
      });
    } catch (error) {
      next(error);
    }
  },

  //! delete a specialty
  deleteSpecialty: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const specialty = await SpecialtyService.deleteSpecialty(id as string);
      res.status(200).json({
        success: true,
        message: "Specialty deleted successfully",
        data: specialty,
      });
    } catch (error) {
      next(error);
    }
  },
};
