import express from "express";
import { CONSTANTS } from "../../../utils/constants";
import { routesGlobal } from "../routes/_index";

const PORT = CONSTANTS.PORT || 3333;
const app = express();

app.use(express.json());
app.use(routesGlobal);

export const serverExpress = {
  execute() {
    app.listen(PORT, () => {
      console.log(
        `\n (Express.js) Server is running on http://localhost:${PORT}\n`
      );
    });
  },
};
