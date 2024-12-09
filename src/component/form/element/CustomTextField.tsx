import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface CustomTextFieldProps extends Omit<TextFieldProps, "name" | "onChange" | "onBlur" | "value"> {
    name: string;
}

export default function CustomTextField({ name, ...props }: CustomTextFieldProps) {
    const [field, meta] = useField(name);

    return (
        <TextField
            {...field}
            {...props}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            fullWidth
            margin="normal"
        />
    );
};