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
        secondOwnerName: string(),
        registrationNumber: string().required("Numer rejestracyjny jest wymagany"),
        technicalID: number()
            .typeError("Identyfikator techniczny musi być liczbą całkowitą")
            .required("Identyfikator techniczny jest wymagany"),
    });

    const initialValues: VehicleDTO = {
        secondOwnerName: "",
        registrationNumber: "dfgsdf",
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
                    sx={{ mb: 3}}
                    fullWidth
                    id="secondOwnerName"
                    name="secondOwnerName"
                    label="Imię i nazwisko drugiego właściciela (opcjonalne)"
                    value={formik.values.secondOwnerName}
                    onChange={formik.handleChange}
                    error={formik.touched.secondOwnerName && !!formik.errors.secondOwnerName}
                    helperText={formik.touched.secondOwnerName && formik.errors.secondOwnerName}
                />
                <TextField
                    sx={{ mb: 3}}
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
                    sx={{ mb: 3}}
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
                props.isSuccess ? <p>Udany zapis!</p> : <p>Nieudany zapis!</p>
            )}
        </main>
    );
};