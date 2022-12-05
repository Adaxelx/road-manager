import * as React from "react";

class Vehicle {
    name: string;
    lastName: string;
    registrationNumber: string;
    model: string;

    constructor() {
        this.name = "";
        this.lastName = "";
        this.registrationNumber = "";
        this.model = "";
    }
}

interface DriveProps {
    succMsg: boolean;
    errMsg: boolean;
    submit: (v: Vehicle) => void;
}

const DriveV = (props: DriveProps) => {
    let [form, setForm] = React.useState(new Vehicle());
    const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const initView = () => {
        return (
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Drive</h1>
                <form style={{ display: 'grid', width: 'fit-content' }}>
                    <label>Imię</label>
                    <input name="name" onChange={updateForm} />
                    <label>Nazwisko</label>
                    <input name="lastName" onChange={updateForm} />
                    <label>Numer rejestracyjny</label>
                    <input name="registrationNumber" onChange={updateForm} />
                    <label>Model</label>
                    <input name="model" onChange={updateForm} />
                    <button style={{ marginTop: '10px' }} type="button" onClick={() => props.submit(form)}>OK</button>
                </form>
                {
                    props.errMsg ?
                        <p>Błąd zapisu!</p> :
                        props.succMsg ?
                            <p>Udany zapis!</p> :
                            null
                }
            </main>
        );
    }

    return initView();
};

export const DriveP = () => {
    let [succMsg, setSuccMsg] = React.useState(false);
    let [errMsg, setErrMsg] = React.useState(false);

    const submit = (v: Vehicle) => {
        if (!validateForm(v)) {
            setErrMsg(true);
            return;
        }
        saveVehicle(v);
        setSuccMsg(true);
        setErrMsg(false);
    };

    const saveVehicle = (v: Vehicle) => {
        console.log(v);
    }

    const validateForm = (v: Vehicle) => {
        for (const val of Object.values(v)) {
            if (val === "") {
                return false;
            }
        }
        return true;
    }

    const displayForm = () => {
        return <DriveV succMsg={succMsg} errMsg={errMsg} submit={submit}></DriveV >;
    }

    return displayForm();
}