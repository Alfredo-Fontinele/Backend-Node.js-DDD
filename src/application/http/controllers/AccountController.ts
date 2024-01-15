import { Request, Response } from "express";
import { AccountService } from "../rpc/services/AccountService";
import { GetAccountInfo } from "../types/GetAccountInfo";

type AccountControllerProps = {
  credit(req: Request, res: Response): void;
  debit(req: Request, res: Response): void;
  getAccountInfo(req: Request, res: Response): void;
  transfer(req: Request, res: Response): void;
};

export class AccountController implements AccountControllerProps {
  getAccountInfo(req: Request, res: Response): void {
    const payload: GetAccountInfo = req.body;

    AccountService.getAccountInfo(
      { document: payload.document },
      (err, data) => {
        if (err) {
          return res.status(err?.code).json({
            message: err?.message,
          });
        }

        return res.status(200).json({
          message: "Account Info has found successfully",
          requestData: payload,
          responseData: data,
        });
      }
    );
  }

  credit(req: Request, res: Response): void {
    const payload = req.body;

    AccountService.credit(
      { amount: payload.amount, document: payload.document },
      (err, data) => {
        if (err) {
          return res.status(err?.code).json({
            message: err?.message,
          });
        }

        return res.status(200).json({
          message: "Credit has successfully",
          requestData: payload,
          responseData: data,
        });
      }
    );
  }

  debit(req: Request, res: Response): void {
    const payload = req.body;

    AccountService.debit(
      { amount: payload.amount, document: payload.document },
      (err, data) => {
        if (err) {
          return res.status(err?.code).json({
            message: err?.message,
          });
        }

        return res.status(200).json({
          message: "Debit has successfully",
          requestData: payload,
          responseData: data,
        });
      }
    );
  }

  transfer(req: Request, res: Response): void {
    const payload = req.body;

    AccountService.transfer(
      {
        accountFromDocument: payload.accountFromDocument,
        accountToDocument: payload.accountToDocument,
        amount: payload.amount,
      },
      (err) => {
        if (err) {
          return res.status(err?.code).json({
            message: err?.message,
          });
        }

        return res.status(200).json({
          message: "Credit has successfully",
          requestData: payload,
        });
      }
    );
  }
}
