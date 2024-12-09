import { FormControlLabel, Checkbox, CheckboxProps } from "@mui/material";
import { useField } from "formik";

interface CustomCheckboxProps extends Omit<CheckboxProps, "name" | "value"> {
    name: string;
    label: string;
}

export default function CustomCheckbox({ name, label, ...props }: CustomCheckboxProps) {
    const [field] = useField({ name, type: "checkbox" });

    return <FormControlLabel control={<Checkbox {...field} {...props} />} label={label} />;
};