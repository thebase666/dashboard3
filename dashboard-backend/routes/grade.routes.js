import express from "express";

import {
  getGradeByClass,
  getAllGradesByClass,
} from "../controllers/grade.controller.js";

const router = express.Router();

router.route("/:id").get(getGradeByClass);
router.route("/").get(getAllGradesByClass);

export default router;
