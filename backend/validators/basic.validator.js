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
];