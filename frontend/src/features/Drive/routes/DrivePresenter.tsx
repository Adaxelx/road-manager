import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import { object, string } from "yup";
import { VehicleDto } from "../../../api/model/vehicleDto";

interface DriveProps {
    isSuccess: boolean
    submit: (v: VehicleDto) => void;
}

const validationSchema = object().shape({
    secondOwnerName: string().required(),
    registrationNumber: string().required(),
    technicalId: string().required()
})

const initialFormValues: VehicleDto = {
    secondOwnerName: "",
    registrationNumber: "",
    technicalId: ""
}

const DriveView = (props: DriveProps) => {
    const onSubmit = React.useCallback((values: VehicleDto) => {
        props.submit(values)
    }, [props.submit])

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Drive</h1>
            <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({isValid, isSubmitting}) => (
                    <Form style={{ display: 'grid', width: 'fit-content' }}>
                        <label htmlFor="secondOwnerName">Imię i nazwisko drugiego właściciela</label>
                        <Field name="secondOwnerName" />
                        <ErrorMessage name="secondOwnerName" component="div" />

                        <label htmlFor="registrationNumber">Numer rejestracyjny</label>
                        <Field name="registrationNumber" />
                        <ErrorMessage name="registrationNumber" component="div" />

                        <label htmlFor="technicalId">Identyfikator techniczny</label>
                        <Field name="technicalId" />
                        <ErrorMessage name="technicalId" component="div" />

                        <button style={{ marginTop: '10px' }} type="submit" disabled={!isValid && !isSubmitting}>OK</button>
                    </Form>
                )}
            </Formik>
                
            {
                props.isSuccess ?
                <p>Udany zapis!</p> :
                null
            }
        </main>
    );
};

export const DrivePresenter = () => {
    let [succMsg, setSuccMsg] = React.useState(false);
    let [errMsg, setErrMsg] = React.useState(false);

    const submit = (v: VehicleDto) => {
        saveVehicle(v);
        setSuccMsg(true);
    };

    const saveVehicle = (v: VehicleDto) => {
        console.log(v);
    }

    const displayForm = () => {
        return <DriveView
            isSuccess={succMsg}
            submit={submit}
        />;
    }

    return displayForm();
}