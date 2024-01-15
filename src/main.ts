import { serverExpress } from "./application/http/server/Express";
import { server_gRPC } from "./application/http/server/gRPC";

export const main = () => {
  serverExpress.execute();
  server_gRPC.execute();
};

main();
