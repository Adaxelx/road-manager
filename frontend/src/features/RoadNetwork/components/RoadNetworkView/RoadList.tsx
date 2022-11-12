import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
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
import { RoadTypeString } from "@src/types/RoadTypeString";

interface RoadListProps {
    roads: RoadDTO[];
    handleEditRoad: (id: number) => void;
    handleAddRoadClick: () => void;
}
export const RoadList = ({
    roads,
    handleEditRoad,
    handleAddRoadClick,
}: RoadListProps) => {
    return (
        <TableContainer sx={{ mb: 5 }} component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Kod</TableCell>
                        <TableCell align="left">Nazwa</TableCell>
                        <TableCell align="left">Typ</TableCell>
                        {/*<TableCell align="right">Liczba skrzyżowań</TableCell>*/}
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roads ? (
                        <>
                            {roads.map((road: RoadDTO, idx: number) => (
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
                                        {road.type
                                            ? RoadTypeString[
                                                  road.type
                                              ].toUpperCase()
                                            : ""}
                                    </TableCell>
                                    {/*<TableCell align="right">*/}
                                    {/*    {road.segments?.length}*/}
                                    {/*</TableCell>*/}
                                    <TableCell
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 2,
                                        }}
                                        align="center"
                                    >
                                        <IconButton
                                            aria-label="edit"
                                            size="small"
                                            color="info"
                                            onClick={() =>
                                                handleEditRoad(
                                                    road.id as number
                                                )
                                            }
                                        >
                                            <EditIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            size="small"
                                            color="error"
                                        >
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    <Button
                                        sx={{ mt: 2 }}
                                        size="small"
                                        color="success"
                                        onClick={handleAddRoadClick}
                                        startIcon={
                                            <AddIcon fontSize="inherit" />
                                        }
                                    >
                                        Dodaj drogę
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </>
                    ) : (
                        <div>Lista dróg jest pusta!</div>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
