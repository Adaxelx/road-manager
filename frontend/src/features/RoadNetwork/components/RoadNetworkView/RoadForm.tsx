import {
    Alert,
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";

import { JunctionDTO, RoadDTO, RoadDTOTypeEnum } from "@src/api";
import { RoadTypeString } from "@src/types/RoadTypeString";
import { EditMode } from "@features/RoadNetwork/components/RoadNetworkView/RoadNetworkView";

interface RoadFormProps {
    road: RoadDTO | undefined;
    handleSaveRoadClick: (road: RoadDTO) => void;
    table: any;
    editMode: EditMode;
    junctions: JunctionDTO[];
}

export const RoadForm = ({
    road,
    handleSaveRoadClick,
    table,
    editMode,
    junctions,
}: RoadFormProps) => {
    const [errorNodeNumber, setErrorNodeNumber] =
        React.useState<boolean>(false);

    const validationSchema = object().shape({
        name: string().required(),
        code: string().required(),
        type: string().required(),
    });

    const initialFormValues: RoadDTO = {
        name: road?.name || "",
        code: road?.code || "",
        type: road?.type || RoadDTOTypeEnum.Highway,
    };

    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (junctions.length < 2) {
                setErrorNodeNumber(true);
                return;
            }

            setErrorNodeNumber(false);
            handleSaveRoadClick(values);
        },
    });

    return (
        <Box sx={{ mt: 2, mb: 6 }}>
            <h2 style={{ textAlign: "left" }}>
                {editMode === EditMode.EDIT ? " Edytuj drogę" : "Dodaj drogę"}
            </h2>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    id="name"
                    name="name"
                    label="Nazwa drogi"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    sx={{ mb: 3 }}
                    fullWidth
                    id="code"
                    name="code"
                    label="Kod"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    error={formik.touched.code && Boolean(formik.errors.code)}
                    helperText={formik.touched.code && formik.errors.code}
                />
                <FormControl fullWidth>
                    <InputLabel id="type-label">Typ</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type"
                        name="type"
                        value={formik.values.type}
                        label="Typ"
                        onChange={formik.handleChange}
                    >
                        {Object.values(RoadDTOTypeEnum).map((roadType) => (
                            <MenuItem key={roadType} value={roadType}>
                                {RoadTypeString[roadType].toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Box sx={{ my: 6 }}>
                    {errorNodeNumber && (
                        <Alert severity="error">
                            Droga musi mieć co najmniej 2 skrzyżowania!
                        </Alert>
                    )}
                    {table}
                </Box>

                <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    variant="contained"
                    size="large"
                >
                    Zapisz drogę
                </Button>
            </form>
        </Box>
    );
};
