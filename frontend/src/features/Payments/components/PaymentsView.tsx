import { PaymentDTO } from "@api/models/PaymentDTO";
import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
interface PaymentsViewProps {
    payments: PaymentDTO[];
}
export const PaymentsView = ({ payments }: PaymentsViewProps) => {
    return (
        <>
            <h1>Opłaty</h1>
            <TableContainer sx={{ mt: 2, mb: 4 }} component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Data</TableCell>
                            <TableCell align="center">Kwota</TableCell>
                            <TableCell align="center">Czy opłacono?</TableCell>
                            <TableCell align="center">
                                Nr. rejestracyjny
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments.map((p: PaymentDTO, idx: number) => (
                            <TableRow
                                key={idx}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    {p.passage?.date}
                                </TableCell>
                                <TableCell align="center">
                                    {p.amount + " zł"}
                                </TableCell>
                                <TableCell align="center">
                                    {p.paid ? "Tak" : "Nie"}
                                </TableCell>
                                <TableCell align="center">
                                    {p.passage?.registrationNumber}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};