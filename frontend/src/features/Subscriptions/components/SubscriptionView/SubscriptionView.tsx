import {
    Alert,
    Box,
    Card,
    CardActions,
    CardContent,
    Radio,
    Snackbar,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

import { SubscriptionDTO } from "@api/models/SubscriptionDTO";
import { SubscriptionTypeDTO } from "@api/models/SubscriptionTypeDTO";
import { PaymentPopup } from "@src/shared/Payment/PaymentPopup";
import { ResponseError } from "@src/api";
interface RoadNetworkViewProps {
    subscriptionTypes: SubscriptionTypeDTO[];
    subscriptions: SubscriptionDTO[];
    handleBuySubscriptionButtonClicked: () => Promise<void>;
    handleBuySubscriptionFormSubmitted: (
        subscriptionTypeDTO: SubscriptionTypeDTO,
        blickNumber: number
    ) => Promise<any>;
}
export const SubscriptionView = ({
    subscriptions,
    subscriptionTypes,
    handleBuySubscriptionButtonClicked,
    handleBuySubscriptionFormSubmitted,
}: RoadNetworkViewProps) => {
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [alert, setAlert] = React.useState<any>();

    const [displayForm, setDisplayForm] = React.useState(false);
    const [chosenSubscriptionTypeIdx, setChosenSubscriptionTypeIdx] =
        React.useState<number | undefined>();

    const [paymentPopupOpen, setPaymentPopupOpen] = React.useState(false);

    const errorAlert = (
        <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
        >
            Nie udało się opłacić abonamentu!
        </Alert>
    );

    const successAlert = (
        <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
        >
            Zakupiono abonament!
        </Alert>
    );

    const handlePayButtonClicked = () => {
        const chosenSubscription: SubscriptionTypeDTO = subscriptionTypes[
            chosenSubscriptionTypeIdx as number
        ] as SubscriptionTypeDTO;

        if (chosenSubscription) {
            setPaymentPopupOpen(true);
        } else {
            setSnackbarOpen(true);
            setAlert(errorAlert);
        }
    };

    const handlePaymentComplete = (blik: number) => {
        setPaymentPopupOpen(false);
        const chosenSubscription: SubscriptionTypeDTO = subscriptionTypes[
            chosenSubscriptionTypeIdx as number
        ] as SubscriptionTypeDTO;
        handleBuySubscriptionFormSubmitted(chosenSubscription, blik)
            .then(() => {
                setChosenSubscriptionTypeIdx(undefined);
                setSnackbarOpen(true);
                setAlert(successAlert);
                setDisplayForm(false);
            })
            .catch((err: ResponseError) => {
                if (err.message === "Response returned an error code") {
                    setSnackbarOpen(true);
                    setAlert(errorAlert);
                } else {
                    setChosenSubscriptionTypeIdx(undefined);
                    setSnackbarOpen(true);
                    setAlert(successAlert);
                    setDisplayForm(false);
                }
            });
    };

    const handleBuyClicked = () => {
        handleBuySubscriptionButtonClicked();
        setDisplayForm(true);
    };

    return (
        <>
            <h1>Abonamenty</h1>
            <TableContainer sx={{ mt: 2, mb: 4 }} component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Do</TableCell>
                            <TableCell align="center">Typ abonamentu</TableCell>
                            <TableCell align="center">Cena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subscriptions.map(
                            (s: SubscriptionDTO, idx: number) => (
                                <TableRow
                                    key={idx}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell align="center">
                                        {s.to?.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell align="center">
                                        {s.type?.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {s.type?.price + " zł"}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <Button
                                    sx={{ mt: 2 }}
                                    size="small"
                                    color="success"
                                    onClick={handleBuyClicked}
                                >
                                    Wykup abonament
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                sx={{ width: "90%" }}
                onClose={() => setSnackbarOpen(false)}
            >
                {alert}
            </Snackbar>
            {displayForm && subscriptionTypes?.length ? (
                <>
                    <h1>Wybierz abonament</h1>
                    <Box sx={{ width: "fit-content", margin: "0 auto" }}>
                        {subscriptionTypes.map(
                            (st: SubscriptionTypeDTO, idx: number) => (
                                <Card
                                    key={idx}
                                    sx={{
                                        width: 300,
                                        display: "inline-block",
                                        mx: 2,
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            sx={{ fontSize: 14 }}
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            {st.period}{" "}
                                            {st.period === 1
                                                ? "miesiąc"
                                                : "miesięcy"}
                                        </Typography>

                                        <Typography variant="h5" sx={{ mb: 3 }}>
                                            {st.name}
                                        </Typography>

                                        <Typography
                                            sx={{ mb: 2, fontWeight: "bold" }}
                                            variant="h4"
                                        >
                                            {st.price + " zł"}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{ justifyContent: "center", mb: 4 }}
                                    >
                                        <Radio
                                            sx={{ transform: "scale(1.3)" }}
                                            checked={
                                                idx ===
                                                chosenSubscriptionTypeIdx
                                            }
                                            onChange={() =>
                                                setChosenSubscriptionTypeIdx(
                                                    idx
                                                )
                                            }
                                        />
                                    </CardActions>
                                </Card>
                            )
                        )}
                    </Box>
                    <Button
                        sx={{ mt: 4 }}
                        variant="contained"
                        size="large"
                        onClick={handlePayButtonClicked}
                    >
                        Zatwierdź i zapłać
                    </Button>
                </>
            ) : (
                <></>
            )}
            {paymentPopupOpen && (
                <PaymentPopup
                    open={paymentPopupOpen}
                    amount={
                        subscriptionTypes[chosenSubscriptionTypeIdx!!].price
                    }
                    onClose={() => setPaymentPopupOpen(false)}
                    onPaymentComplete={handlePaymentComplete}
                />
            )}
        </>
    );
};
