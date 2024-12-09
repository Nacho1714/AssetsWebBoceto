// Material UI
import { Grid2 as Grid } from "@mui/material";

// Elements
import { CustomTextField } from "../element";

// Yup
import { ValidationRegisterCompany } from "../validation";

// Formik
import { Formik, Form, FormikHelpers, FormikProps } from "formik";

interface FormComponentProps {
    formRef: React.RefObject<FormikProps<any>>;
}

export default function RegisterCompany({ formRef }: FormComponentProps) {

    const initialValues = {
        name: "",
        cuit: "",
        note: "",
    }

    const onSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {

        console.log(values)
        console.log(actions)
    }

    return (
        <Formik
            innerRef={formRef}
            initialValues={initialValues}
            validationSchema={ValidationRegisterCompany}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>

                    <Grid container columns={{ md: 2 }} spacing={3}>

                        <Grid size={{ md: 1 }}>
                            <CustomTextField
                                name="name"
                                label="Nombre"
                            />
                        </Grid>

                        <Grid size={{ md: 1 }}>
                            <CustomTextField
                                name="cuit"
                                label="CUIT"
                            />
                        </Grid>

                        <Grid size={{ md: 2 }}>
                            <CustomTextField
                                name="note"
                                label="Nota"
                                multiline
                                rows={4}
                            />
                        </Grid>

                    </Grid>
                    
                </Form>
            )}
        </Formik>
    );
};