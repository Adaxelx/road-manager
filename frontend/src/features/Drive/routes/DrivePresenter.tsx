import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import { object, string, number } from "yup";

import { DriveApi, VehicleDTO } from "@src/api";

interface DriveProps {
    isSuccess: boolean;
    submit: (v: VehicleDTO) => void;
}

const validationSchema = object().shape({
    registrationNumber: string().required("Numer rejestracyjny jest wymagany"),
    technicalID: number().typeError("Identyfikator techniczny musi być liczbą całkowitą").required("Identyfikator techniczny jest wymagany"),
});

const initialFormValues: VehicleDTO = {
    registrationNumber: "",
    technicalID: "" || 0,
};

const DriveView = (props: DriveProps) => {
    const onSubmit = React.useCallback(
        (values: VehicleDTO) => {
            props.submit(values);
        },
        [props.submit]
    );

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Drive</h1>
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isValid, isSubmitting }) => (
                    <Form style={{ display: "grid", width: "fit-content" }}>
                        <label htmlFor="registrationNumber">
                            Numer rejestracyjny
                        </label>
                        <Field name="registrationNumber" />
                        <ErrorMessage
                            name="registrationNumber"
                            component="div"
                        />

                        <label htmlFor="technicalID">
                            Identyfikator techniczny
                        </label>
                        <Field name="technicalID" />
                        <ErrorMessage name="technicalID" component="div" />

                        <button
                            style={{ marginTop: "10px" }}
                            type="submit"
                            disabled={!isValid && !isSubmitting}
                        >
                            OK
                        </button>
                    </Form>
                )}
            </Formik>

            {props.isSuccess ? <p>Udany zapis!</p> : null}
        </main>
    );
};

export const DrivePresenter = () => {
    const [succMsg, setSuccMsg] = React.useState(false);

    const submit = (v: VehicleDTO) => {
        saveVehicle(v);
        setSuccMsg(true);
    };

    const saveVehicle = (v: VehicleDTO) => {
        new DriveApi().registerVehicle({ vehicleDTO: v });
    };

    const displayForm = () => {
        return <DriveView isSuccess={succMsg} submit={submit} />;
    };

    return displayForm();
};
