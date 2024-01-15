declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    GRPC_PORT: number;
    SECRET: string;
    DATABASE_URL: string;
  }
}
