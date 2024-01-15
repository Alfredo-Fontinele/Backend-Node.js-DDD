import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { join } from "node:path";
import { ProtoGrpcType } from "../../../domain/protobufs/rpc/account";
import { CONSTANTS } from "../../../utils/constants";
import { AccountServiceHandler } from "../rpc/handlers/AccountServiceHandler";

const PROTO_FILE_LOCAL = "../../../domain/protobufs/account.proto";

export const packageDefinition = protoLoader.loadSync(
  join(__dirname, PROTO_FILE_LOCAL)
);

export const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

export const server_gRPC = {
  execute() {
    const grpcServer = new grpc.Server();

    grpcServer.addService(
      proto.account.AccountService.service,
      AccountServiceHandler
    );

    grpcServer.bindAsync(
      `0.0.0.0:${CONSTANTS.GRPC_PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(
          `\n (gRPC) Server is running on http://localhost:${port}\n`
        );
        grpcServer.start();
      }
    );
  },
};
