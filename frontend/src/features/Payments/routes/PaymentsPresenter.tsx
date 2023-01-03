import * as React from "react";
import { useEffect } from "react";

import { PaymentDTO } from "@api/models/PaymentDTO";
import { PaymentsView } from "@features/Payments/components/PaymentsView";
import { PaymentControllerApi } from "@src/api";
import { PaymentPopup } from "@src/shared/Payment/PaymentPopup";

export const PaymentsPresenter = () => {
    const paymentsApi: PaymentControllerApi = new PaymentControllerApi();

    const [payments, setPayments] = React.useState<PaymentDTO[]>([]);

	const [currentPayment, setCurrentPayment] = React.useState<PaymentDTO | null>(null)

    useEffect(() => {
        setPayments([
			{
				id: 1,
				paid: false,
				passage: {
					date: new Date()
				},
				price: 100
			},
			{
				id: 2,
				paid: false,
				passage: {
					date: new Date()
				},
				price: 59.99
			},
			{
				id: 3,
				paid: true,
				passage: {
					date: new Date()
				},
				price: 49.99
			},
			{
				id: 4,
				paid: false,
				passage: {
					date: new Date()
				},
				price: 10
			}
		])
    }, []);

    const loadPayments = async () =>
        paymentsApi
            .getPaymentList("1")
            .then((paymentList: PaymentDTO[]) => setPayments(paymentList));
	
	const handlePayment = (payment: PaymentDTO) => {
		setCurrentPayment(payment)
	}

	const handlePaymentComplete = () => {
		currentPayment!!.paid = true
		setPayments([...payments])
		console.log(payments)
		setCurrentPayment(null)
	}

    return <>
		<PaymentsView
			payments={payments}
			handlePayment={handlePayment}
		/>
		{
			currentPayment &&
			<PaymentPopup
				open={true} onClose={() => setCurrentPayment(null)}
				amount={currentPayment.price!!} onPaymentComplete={handlePaymentComplete}
			/>
		}
	</>;
};
