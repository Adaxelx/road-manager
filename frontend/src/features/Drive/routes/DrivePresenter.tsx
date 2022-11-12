import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import { object, string } from "yup";

import { VehicleDTO } from "@src/api";

interface DriveProps {
    isSuccess: boolean;
    submit: (v: VehicleDTO) => void;
}

const validationSchema = object().shape({
    secondOwnerName: string().required(),
    registrationNumber: string().required(),
    technicalID: string().required(),
});

const initialFormValues: VehicleDTO = {
    secondOwnerName: "",
    registrationNumber: "",

    //TODO w bazie to technicalID jest teraz intem
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
                        <label htmlFor="secondOwnerName">
                            Imię i nazwisko drugiego właściciela
                        </label>
                        <Field name="secondOwnerName" />
                        <ErrorMessage name="secondOwnerName" component="div" />

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
    const [errMsg, setErrMsg] = React.useState(false);

    const submit = (v: VehicleDTO) => {
        saveVehicle(v);
        setSuccMsg(true);
    };

    const saveVehicle = (v: VehicleDTO) => {
        console.log(v);
    };

    const displayForm = () => {
        return <DriveView isSuccess={succMsg} submit={submit} />;
    };

    return displayForm();
};
