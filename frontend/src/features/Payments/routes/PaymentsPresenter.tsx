import * as React from "react";
import { useEffect } from "react";

import { PaymentControllerApi } from "@src/api";
import { PaymentDTO } from "@api/models/PaymentDTO";
import { PaymentsView } from "@features/Payments/components/PaymentsView";

export const PaymentsPresenter = () => {
    const paymentsApi: PaymentControllerApi = new PaymentControllerApi();

    const [payments, setPayments] = React.useState<PaymentDTO[]>([]);

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = async () =>
        paymentsApi
            .getPaymentList("")
            .then((paymentList: PaymentDTO[]) => setPayments(paymentList));

    return <PaymentsView payments={payments} />;
};
