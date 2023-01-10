import { Button, TextField } from "@mui/material";
import { VehicleDTO } from "@src/api";
import { useFormik } from "formik";
import { number, object, string } from "yup";

interface DriveViewProps {
    isSuccess: boolean | undefined;
    submit: (v: VehicleDTO) => Promise<void>;
}


export const DriveView = (props: DriveViewProps) => {
    const validationSchema = object().shape({
        secondOwner: string(),
        registrationNumber: string().required("Numer rejestracyjny jest wymagany"),
        technicalID: number()
            .typeError("Identyfikator techniczny musi być liczbą całkowitą")
            .required("Identyfikator techniczny jest wymagany"),
    });

    const initialValues: VehicleDTO = {
        secondOwner: "",
        registrationNumber: "",
        technicalID: "" || 0,
    };

    const formik = useFormik({
        initialValues, validationSchema,
        onSubmit: (values) => {
            props.submit(values)
        }
    })

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Drive</h1>

            <form onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    id="secondOwner"
                    name="secondOwner"
                    label="Imię i nazwisko drugiego właściciela (opcjonalne)"
                    value={formik.values.secondOwner}
                    onChange={formik.handleChange}
                    error={formik.touched.secondOwner && !!formik.errors.secondOwner}
                    helperText={formik.touched.secondOwner && formik.errors.secondOwner}
                />
                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    id="registrationNumber"
                    name="registrationNumber"
                    label="Numer rejestracyjny"
                    value={formik.values.registrationNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.registrationNumber && !!formik.errors.registrationNumber}
                    helperText={formik.touched.registrationNumber && formik.errors.registrationNumber}
                />
                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    id="technicalID"
                    name="technicalID"
                    label="Identyfikator techniczny"
                    value={formik.values.technicalID}
                    onChange={formik.handleChange}
                    error={formik.touched.technicalID && !!formik.errors.technicalID}
                    helperText={formik.touched.technicalID && formik.errors.technicalID}
                />

                <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    variant="contained"
                    size="large"
                >
                    Zarejestruj pojazd
                </Button>
            </form>

            {typeof props.isSuccess === "boolean" && (
                props.isSuccess ? <p>Udany zapis!</p> : <p>Udany zapis!</p>
            )}
        </main>
    );
};