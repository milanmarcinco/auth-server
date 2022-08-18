import express from "express";
const router = express.Router();

import { register, logIn, renewToken, changePassword, logOut, logOutAll, deleteUser } from "./auth.service";

router.post("/register", register);
router.post("/login", logIn);
router.post("/renew-token", renewToken);
router.patch("/change-password", changePassword);
router.delete("/logout", logOut);
router.delete("/logout-all", logOutAll);
router.delete("/delete-account", deleteUser);

export default router;
