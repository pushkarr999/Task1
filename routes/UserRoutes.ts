import express from 'express';
import { login, register, getAll, refreshTokenH, deleteUser } from '../controllers/UserController';

const router = express.Router();

router.route("/").get(getAll).post(login);
router.post("/register", register);
router.post("/refresh",refreshTokenH);
router.post("/delete",deleteUser);

export default router;