import express, { Request, Response ,NextFunction} from "express";
import loginRoutes from "./Routes/LoginRoutes.js";
import homeRoutes from "./Routes/HomeRoutes.js";
import accountRoutes from "./Routes/AccountRoutes.js";

const isUserAuthenticated = (req: Request): boolean => {
  if (req.body.user || req.query.user) return true;
  return false;
};
const userAuthorization = (req:Request, res:Response, next:NextFunction) => {
  if (isUserAuthenticated(req)) {
    return next();
  }
  console.log("user in not logged in");
  res.json({ msg: "error" });
};
export default function (app: express.Express) {
  app.use("/login", loginRoutes);
  app.use("/home", userAuthorization, homeRoutes);
  app.use("/account", accountRoutes);
}
