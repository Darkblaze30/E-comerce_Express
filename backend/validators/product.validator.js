import { body } from "express-validator";

export const validator = [
  body("code")
    .exists().withMessage("El código es obligatorio")
    .isString().withMessage("El código debe ser texto")
    .isLength({ min: 3 }).withMessage("El código debe tener al menos 3 caracteres"),

  body("name")
    .exists().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre debe ser texto")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),

  body("description")
    .exists().withMessage("La descripción es obligatoria")
    .isString().withMessage("La descripción debe ser texto")
    .isLength({ min: 5 }).withMessage("La descripción debe tener al menos 5 caracteres"),

  body("image")
    .exists().withMessage("La URL de la imagen es obligatoria")
    .isURL().withMessage("La imagen debe ser una URL válida"),

  body("price")
    .exists().withMessage("El precio es obligatorio")
    .isFloat({ gt: 0 }).withMessage("El precio debe ser un número mayor que 0"),

  body("stock")
    .exists().withMessage("El stock es obligatorio")
    .isInt({ min: 0 }).withMessage("El stock debe ser un número entero igual o mayor que 0"),

  body("condition")
    .exists().withMessage("La condición es obligatoria")
    .isString().withMessage("La condición debe ser texto")
    .isLength({ min: 3 }).withMessage("La condición debe tener al menos 3 caracteres"),

  body("vat")
    .exists().withMessage("El VAT es obligatorio")
    .isString().withMessage("El VAT debe ser texto")
    .isLength({ min: 1 }).withMessage("El VAT no puede estar vacío"),

  body("categoryId")
    .exists().withMessage("El ID de categoría es obligatorio")
    .isMongoId().withMessage("El ID de categoría debe ser un MongoID válido"),
];