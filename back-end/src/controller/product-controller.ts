import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { id } = req.params;

    if (!user?.admin) {
      res.status(400).json({ message: "Usuário não autorizado" });
      return;
    }
    if (typeof id !== "string" || !id) {
      res.status(400).json({ message: "ID não encontrado" });
      return;
    }
    const deleteProduct = await prisma.product.delete({
      where: { id },
    });
    if (!deleteProduct) {
      res.status(404).json({ message: "Erro ao deletar o produto" });
      return;
    }
    res.json({ message: "Produto deletado com sucesso" });
  } catch (error: any) {
    if (error.code === "P2025") {
      res.json({ message: "Produto não encontrado" });
      return;
    }
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};
