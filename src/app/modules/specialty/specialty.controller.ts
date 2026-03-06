import catchAsync from "@/app/custom/catch-async";
import sendResponse from "@/app/custom/send-response";
import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { SpecialtyService } from "./specialty.service";
export const SpecialtyController = {
  //! create a specialty
  createSpecialty: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const payload = req.body;
      const specialty = await SpecialtyService.createSpecialty(payload);
      sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Specialty created successfully",
        data: specialty,
      });
    },
  ),

  //! get all specialties
  getAllSpecialties: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const specialties = await SpecialtyService.getAllSpecialties();
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Specialties retrieved successfully",
        data: specialties,
      });
    },
  ),

  //! get a specialty details
  getSpecialtyDetails: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const specialty = await SpecialtyService.getSpecialtyDetails(
        id as string,
      );
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Specialty details retrieved successfully",
        data: specialty,
      });
    },
  ),

  //! update a specialty
  updateSpecialty: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      {
        const payload = req.body;
        const specialty = await SpecialtyService.updateSpecialty(payload);
        sendResponse(res, {
          statusCode: status.OK,
          success: true,
          message: "Specialty updated successfully",
          data: specialty,
        });
      }
    },
  ),

  //! delete a specialty
  deleteSpecialty: catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.body;
      await SpecialtyService.deleteSpecialty(id as string);
      sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Specialty deleted successfully",
      });
    },
  ),
};
