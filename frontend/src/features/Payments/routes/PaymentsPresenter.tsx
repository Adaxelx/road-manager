import * as React from "react";
import { PaymentDTO } from "@api/models/PaymentDTO";
import { PaymentsView } from "@features/Payments/components/PaymentsView";
import { useEffect } from "react";

export const PaymentsPresenter = () => {
    const [payments, setPayments] = React.useState<PaymentDTO[]>([]);

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = () => {
        setPayments([
            {
                paid: true,
                passage: {
                    date: "2022-10-30",
                    junctionId: 0,
                    registrationNumber: "S01XXPXX",
                },
                amount: 100.99,
            },
            {
                paid: false,
                passage: {
                    date: "2022-11-25",
                    junctionId: 0,
                    registrationNumber: "S01XXPXX",
                },
                amount: 200.99,
            },
            {
                paid: false,
                passage: {
                    date: "2022-5-30",
                    junctionId: 0,
                    registrationNumber: "S01XXPXX",
                },
                amount: 300.99,
            },
            {
                paid: false,
                passage: {
                    date: "2022-4-30",
                    junctionId: 0,
                    registrationNumber: "S01XXPXX",
                },
                amount: 400.99,
            },
        ]);
    };
    return <PaymentsView payments={payments} />;
};
