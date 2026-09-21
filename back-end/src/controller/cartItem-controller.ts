import type { Request, Response } from "express";
import { prisma } from "../db.js";

export async function getCartItem(req: Request, res: Response) {
  try {
    const { user } = req;
    console.log(user);

    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: { product: true },
    });

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
}
