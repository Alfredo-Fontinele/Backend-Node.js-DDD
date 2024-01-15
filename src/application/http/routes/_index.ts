import { Router } from "express";
import { accountRouter } from "./AccountRoute";

const routesGlobal = Router();

routesGlobal.use("/api/account", accountRouter);

export { routesGlobal };
