import {ErrorMessage} from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
    {
        error: "required",
        format: (label, error) => `Este campo es requerido.`
    },
    {
        error: "email",
        format: (label, error) => `Dirección de correo electrónico no válida.`
    },
    {
        error: "minlength",
        format: (label, error) => `${label} debe tener al menos ${error.requiredLength} caracteres.`
    },
    {
        error: "maxlength",
        format: (label, error) => `${label} no debe tener mas de ${error.requiredLength} caracteres.`
    },
    {
        error: "min",
        format: (label, error) => `El valor no debe ser menor a ${error.min}`
    },
    {
        error: 'max',
        format: (label, error) => `El valor no debe ser mayor a ${error.max}`
    }
];