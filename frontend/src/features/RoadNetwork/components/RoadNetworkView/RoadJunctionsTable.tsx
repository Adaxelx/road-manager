import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import { JunctionDTO, RoadDTO } from "@src/api";

interface RoadNetworkViewProps {
    road: RoadDTO | undefined;
    junctions: JunctionDTO[];
    handleDeleteJunction: (idx: number) => void;
    handleAddJunction: () => void;
}

export const RoadJunctionsTable = ({
    junctions,
    handleDeleteJunction,
    handleAddJunction,
}: RoadNetworkViewProps) => {
    return (
        <>
            <TableContainer sx={{ mt: 2, mb: 4 }} component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Latitude</TableCell>
                            <TableCell align="center">Longitude</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {junctions.map((j: JunctionDTO, idx: number) => (
                            <TableRow
                                key={idx}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    {j.latitude?.toFixed(3)}
                                </TableCell>
                                <TableCell align="center">
                                    {j.longitude?.toFixed(3)}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        aria-label="delete"
                                        size="small"
                                        color="error"
                                        onClick={() =>
                                            handleDeleteJunction(idx)
                                        }
                                    >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                <Button
                                    size="small"
                                    color="success"
                                    onClick={handleAddJunction}
                                    startIcon={<AddIcon fontSize="inherit" />}
                                >
                                    Dodaj skrzyżowanie
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
