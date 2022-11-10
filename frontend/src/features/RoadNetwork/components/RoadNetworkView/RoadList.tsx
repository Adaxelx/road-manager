import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import { RoadDTO } from "@src/api";

interface RoadListProps {
    roads: RoadDTO[];
    handleEditRoad: (id: number) => void;
}
export const RoadList = ({ roads, handleEditRoad }: RoadListProps) => {
    return (
        <TableContainer sx={{ mt: 5 }} component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Number of nodes</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roads ? (
                        roads.map((road: RoadDTO, idx: number) => (
                            <TableRow
                                key={idx}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {road.code}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {road.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {road.type}
                                </TableCell>
                                <TableCell align="right">
                                    {road.segments?.length}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        aria-label="edit"
                                        size="small"
                                        color="info"
                                        onClick={() =>
                                            handleEditRoad(road.id as number)
                                        }
                                    >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        aria-label="delete"
                                        size="small"
                                        color="error"
                                    >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <div>brak zaznaczonych punktów</div>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};