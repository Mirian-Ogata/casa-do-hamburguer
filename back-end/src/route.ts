import { Router } from "express";
import { auth, login, logOut, register } from "./controller/user-controller.js";
import { authMiddleware } from "./middlewares/aurh-middleware.js";
import { deleteProduct, getProducts } from "./controller/product-controller.js";
import { getCartItem } from "./controller/cartItem-controller.js";

export const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logOut);

router.get("/products", getProducts);
router.delete("/delete-product/:id", authMiddleware, deleteProduct);

router.get("/get-cart-items", authMiddleware, getCartItem);
