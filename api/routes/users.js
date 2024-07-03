import express from "express";
import { addUser, deleteUser, getUsers, updateUser, getUserById } from "../controllers/user.js";

//criar instância do router
const router = express.Router()

//definir rotas
router.get("/", getUsers)

router.post("/", addUser)

router.get("/:id", getUserById)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router