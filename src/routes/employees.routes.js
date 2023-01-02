import { Router } from "express";
import { getEmployee, createEmployee, updateEmployee, deleteEmployee, getEmployees } from "../controllers/employees.controller.js";
const router = Router();

router.get("/employees/:id", getEmployees);
router.get("/employees", getEmployee);
router.post("/employees", createEmployee);
router.patch("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;