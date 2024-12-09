import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface CustomDatePickerProps extends Omit<DatePickerProps<Dayjs>, "value" | "onChange"> {
    name: string;
}

export default function CustomDatePicker({ name, ...props }: CustomDatePickerProps) {
    const [field, meta, helpers] = useField(name);

    return (
        <DatePicker
            {...props}
            value={field.value ? dayjs(field.value) : null}
            onChange={(value) => helpers.setValue(value ? value.toISOString() : null)}
            slots={{
                textField: (params: TextFieldProps) => (
                    <TextField
                        {...params}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                    />
                ),
            }}
        />
    );
};