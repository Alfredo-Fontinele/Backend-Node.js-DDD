import * as grpc from "@grpc/grpc-js";
import { CONSTANTS } from "../../../../utils/constants";
import { proto } from "../../server/gRPC";

export const AccountService = new proto.account.AccountService(
  `localhost:${CONSTANTS.GRPC_PORT}`,
  grpc.credentials.createInsecure()
);
