import { db } from "../db.js";

// Funções de controle para manipular usuários
export const getUsers = async (_, res) => {
  const q = "SELECT * FROM usuarios";

  try {
    const [data] = await db.query(q);
    return res.status(200).json(data);
  } catch (err) {
    return res.json(err);
  }
};

export const addUser = async (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  try {
    await db.query(q, [values]);
    return res.status(200).json("Usuário criado com sucesso.");
  } catch (err) {
    return res.json(err);
  }
};

export const getUserById = async (req, res) => {
  const q = "SELECT * FROM usuarios WHERE `id` = ?";

  try {
    const [data] = await db.query(q, [req.params.id]);
    return res.status(200).json(data);
  } catch (err) {
    return res.json(err);
  }
};

export const updateUser = async (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  try {
    await db.query(q, [...values, req.params.id]);
    return res.status(200).json("Usuário atualizado com sucesso.");
  } catch (err) {
    return res.json(err);
  }
};

export const deleteUser = async (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  try {
    await db.query(q, [req.params.id]);
    return res.status(200).json("Usuário deletado com sucesso.");
  } catch (err) {
    return res.json(err);
  }
};
