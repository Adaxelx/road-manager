import DeleteIcon from "@mui/icons-material/Delete";
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
}

export const RoadJunctionsTable = ({
    junctions,
    road,
    handleDeleteJunction,
}: RoadNetworkViewProps) => {
    return junctions.length ? (
        <>
            <div>{road?.name}</div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Coordinate X</TableCell>
                            <TableCell align="center">Coordinate Y</TableCell>
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
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    ) : (
        <div>No road selected!</div>
    );
};
