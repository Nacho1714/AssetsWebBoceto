import { TextField, TextFieldProps, MenuItem } from "@mui/material";
import { useField } from "formik";

interface CustomSelectFieldProps extends Omit<TextFieldProps, "name" | "onChange" | "onBlur" | "value"> {
    name: string;
    options: { value: string | number; label: string }[];
}

export default function CustomSelectField({ name, options, ...props }: CustomSelectFieldProps) {
    const [field, meta] = useField(name);

    return (
        <TextField
            {...field}
            {...props}
            select
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            fullWidth
            margin="normal"
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};