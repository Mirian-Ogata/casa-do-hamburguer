import type { Request, Response } from "express";
import { prisma } from "../db.js";
import { CartItemScalarFieldEnum } from "../../generated/prisma/internal/prismaNamespace.js";

export async function createOrder(req: Request, res: Response) {
  try {
    const { user } = req;

    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: { product: true },
    });

    if (cartItems.length === 0) {
      res.status(400).json({ message: "Carrinho vazio" });
    }

    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];

      if (!item) continue;
      total += item.product.price * item.quantity;
    }

    const order = await prisma.order.create({
      data: {
        total,
        userId: user.id,
        orderItems: {
          create: cartItems.map((orderItems) => ({
            productId: orderItems.productId,
            orderQuantity: orderItems.quantity,
            price: orderItems.product.price,
          })),
        },
      },
      include: { orderItems: true },
    });

    await prisma.cartItem.deleteMany({
      where: { userId: user.id },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o pedido" });
  }
}
