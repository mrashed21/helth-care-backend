import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const router = Router();

router.get("/", SpecialtyController.getAllSpecialties);
router.post("/", SpecialtyController.createSpecialty);
router.get("/:id", SpecialtyController.getSpecialtyDetails);
router.patch("/", SpecialtyController.updateSpecialty);
router.put("/", SpecialtyController.deleteSpecialty);

export const SpecialtyRouter = router;
