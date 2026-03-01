import { Router } from "express";
import { SpecialtyRouter } from "../modules/specialty/specialty.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/specialties",
    route: SpecialtyRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
