import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { creditSchema } from "../types/Credit";
import { debitSchema } from "../types/Debit";
import { transferSchema } from "../types/Transfer";

const accountController = new AccountController();

const accountRouter = Router();

accountRouter.post(
  "/credit",
  validateSchema(creditSchema),
  accountController.credit
);

accountRouter.post(
  "/debit",
  validateSchema(debitSchema),
  accountController.debit
);

accountRouter.post(
  "/transfer",
  validateSchema(transferSchema),
  accountController.transfer
);

accountRouter.post("/get-info", accountController.getAccountInfo);

export { accountRouter };
