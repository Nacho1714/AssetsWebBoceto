import * as Yup from "yup";

export const ValidationRegisterCompany = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    cuit: Yup.string().required("El CUIT es requerido"),
});
