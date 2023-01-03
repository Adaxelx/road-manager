import { Button, Card, CardActions, CardContent, Dialog, Radio, Typography } from "@mui/material"
import { FC, useState } from "react"

type PaymentMethod = {
	name: string
	enabled: boolean
}

type PaymentPopupProps = {
	open: boolean
	amount: number
	onClose: () => void
	onPaymentComplete: () => void
}

export const PaymentPopup: FC<PaymentPopupProps> = ({
	open, amount,
	onClose, onPaymentComplete
}) => {
	const [selectedMethodIndex, setSelectedMethodIndex] = useState(-1)

	const paymentMethods: PaymentMethod[] = [
		{
			name: "Blik",
			enabled: true
		},
		{
			name: "Nerka",
			enabled: true
		},
		{
			name: "Wątroba",
			enabled: false
		}
	]

	const handlePaymentClick = () => {
		// "Redirect" here
		onPaymentComplete()
	}

	return (
		<Dialog
			open={open}
			onClose={() => onClose()}
			style={{
				textAlign: "center"
			}}
		>
			<p style={{
				fontSize: 80,
				fontWeight: 700,
				margin: 40
			}}>{amount} zł</p>

			<Typography variant="h5">Wybierz metodę płatności</Typography>

			<div style={{
				display: "flex",
				justifyContent: "center",
				margin: 16,
				gap: 8
			}}>
				{paymentMethods.map((method, i) => 
					<Card key={i} style={{
						width: 150,
						opacity: method.enabled ? 1 : 0.6,
						transform: (i === selectedMethodIndex) ? "scale(1.1)" : "",
						zIndex: (i === selectedMethodIndex) ? 1 : 0,
						transition: "all 0.2s"
					}}>
						<CardContent>
							<Typography variant="h6">{method.name}</Typography>
						</CardContent>
						<CardActions style={{
							justifyContent: "center"
						}}>
							<Radio
								checked={i === selectedMethodIndex}
								onChange={() => setSelectedMethodIndex(i)}
								disabled={!method.enabled}
							/>
						</CardActions>
					</Card>
				)}
			</div>

			<div style={{
				display: "flex",
				justifyContent: "center",
				margin: 16,
			}}>
				<Button
                    variant="contained"
                    size="large"
					disabled={selectedMethodIndex < 0}
					onClick={handlePaymentClick}
				>
					Zapłać
				</Button>
			</div>
		</Dialog>
	)
}