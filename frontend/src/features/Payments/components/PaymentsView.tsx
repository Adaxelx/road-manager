import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { PaymentDTO } from "@api/models/PaymentDTO";
import { Button } from "@mui/material";
interface PaymentsViewProps {
    payments: PaymentDTO[];
	handlePayment: (payment: PaymentDTO) => void
}
export const PaymentsView = ({ payments, handlePayment }: PaymentsViewProps) => {
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
                            <TableCell align="center">Kwota</TableCell>
                            <TableCell align="center">Czy opłacono?</TableCell>
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
                                    {p.price + " zł"}
                                </TableCell>
                                <TableCell align="center">
                                    {p.paid ? "Tak" : <Button onClick={() => handlePayment(p)}>Opłać</Button>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
