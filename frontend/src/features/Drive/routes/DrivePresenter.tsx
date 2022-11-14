import { DriveApi, VehicleDTO } from "@src/api";
import React from "react";
import { DriveView } from "../components/DriveView/DriveView";


export const DrivePresenter = () => {
    const [succMsg, setSuccMsg] = React.useState<boolean | undefined>(undefined);

    const submit = async (v: VehicleDTO) => {
        await saveVehicle(v).then(
            () => setSuccMsg(true)
        ).catch(
            () => setSuccMsg(false)
        );
    };

    const saveVehicle = async (v: VehicleDTO) => {
        return await (new DriveApi().registerVehicle(v));
    };

    const displayForm = () => {
        return <DriveView isSuccess={succMsg} submit={submit} />;
    };

    return displayForm();
};
