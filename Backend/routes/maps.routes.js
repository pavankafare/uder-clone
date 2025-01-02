import express from "express";
const router = express.Router();
import { authUser } from "../middlewares/auth.middleware.js";

import { getCoordinates } from "../controllers/map.controller.js";
import { getDistanceInTime } from "../controllers/map.controller.js";
import { getAutoCompleteSuggestion } from "../controllers/map.controller.js";
import { query } from "express-validator";

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authUser,
  getCoordinates
);

router.get(
  "/get-distance-time",
  query("origins").isString().isLength({ min: 3 }),
  query("destinations").isString().isLength({ min: 3 }),
  authUser,
  getDistanceInTime
);

router.get(
  "/get-suggestions",
  query("input").isString().isLength({ min: 3 }),
  authUser,
  getAutoCompleteSuggestion
);

export default router;
