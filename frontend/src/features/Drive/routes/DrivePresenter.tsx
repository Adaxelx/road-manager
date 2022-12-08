import { DriveView } from "../components/DriveView/DriveView";
import React from "react";

import { DriveControllerApi, VehicleDTO } from "@src/api";

export const DrivePresenter = () => {
    const [succMsg, setSuccMsg] = React.useState<boolean | undefined>(
        undefined
    );

    const submit = async (v: VehicleDTO) => {
        await saveVehicle(v)
            .then(() => setSuccMsg(true))
            .catch(() => setSuccMsg(false));
    };

    const saveVehicle = async (v: VehicleDTO) => {
        return await new DriveControllerApi().registerVehicle(v);
    };

    const displayForm = () => {
        return <DriveView isSuccess={succMsg} submit={submit} />;
    };

    return displayForm();
};
