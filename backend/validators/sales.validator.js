import { body } from "express-validator";

export const validator = [
  body("reference")
    .exists().withMessage("La referencia es obligatoria")
    .isString().withMessage("La referencia debe ser texto")
    .isLength({ min: 3 }).withMessage("La referencia debe tener al menos 3 caracteres"),

  body("date")
    .exists().withMessage("La fecha es obligatoria")
    .isISO8601().withMessage("La fecha debe tener un formato válido"),

  body("paymentMethod")
    .exists().withMessage("El método de pago es obligatorio")
    .isIn(['CC', 'TI']).withMessage("El método de pago debe ser 'CC' o 'TI'"),

  body("client")
    .exists().withMessage("El cliente es obligatorio")
    .isMongoId().withMessage("El cliente debe ser un ID válido de MongoDB"),

  body("seller")
    .exists().withMessage("El vendedor es obligatorio")
    .isMongoId().withMessage("El vendedor debe ser un ID válido de MongoDB"),

  body("details")
    .exists().withMessage("El campo 'details' es obligatorio")
]