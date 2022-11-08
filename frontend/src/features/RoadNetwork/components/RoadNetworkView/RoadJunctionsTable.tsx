import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { RoadDto } from "../../../../api/model/roadDto";
import { JunctionDto } from "../../../../api/model/junctionDto";

// function createData(name: string, x: number, y: number) {
//     return { name, x, y };
// }

// const rows = [
//     createData("Junction 1", 44.444, 66.231),
//     createData("Junction 2", 44.443, 46.231),
//     createData("Junction 3", 44.441, 56.231),
// ];

type RoadNetworkViewProps = {
    road: RoadDto;
};

export const RoadJunctionsTable = ({ road }: RoadNetworkViewProps) => {
    const rows = road.segments?.map((element) => element.startNode);
    const j: JunctionDto | undefined = road.segments?.at(-1)?.endNode;
    if (j !== undefined) {
        rows?.push(j);
    }
    console.log(rows);
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Name of junction</TableCell>
                        <TableCell align="right">Coordinate X</TableCell>
                        <TableCell align="right">Coordinate Y</TableCell>
                        <TableCell align="right">Delete junction</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows !== undefined ? (
                        rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.latitude}
                                </TableCell>
                                <TableCell align="right">
                                    {row.longitude}
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
