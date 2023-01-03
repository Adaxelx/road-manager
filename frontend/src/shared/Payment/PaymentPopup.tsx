import { Button, Card, CardActions, CardContent, Dialog, Input, Radio, Typography } from "@mui/material"
import { ChangeEvent, FC, useState } from "react"

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
	const [paymentSelected, setPaymentSelected] = useState(false);
	const [blikCode, setBlikCode] = useState<string>("");

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

	const handlePaymentSelect = () => {
		setPaymentSelected(true);
	}

	const handleBlikCodeChange = (el: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const change = el.target.value;
		if (/^[0-9]{0,6}$/.test(change)) {
			setBlikCode(change);
		}
	}

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

			{
				!paymentSelected ?
					<div>
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
								onClick={handlePaymentSelect}
							>
								Zapłać
							</Button>
						</div>
					</div>
					:
					<div style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}>
						<img src="/blik.svg" width={128} />

						<Input placeholder="------" inputProps={{ style: { width: "150px", fontSize: "40px", textAlign: 'center' } }} value={blikCode} onChange={handleBlikCodeChange} />

						<div style={{
							display: "flex",
							justifyContent: "center",
							margin: 16,
						}}>
							<Button
								variant="contained"
								size="large"
								disabled={blikCode.length < 6}
								onClick={handlePaymentClick}
							>
								Zapłać
							</Button>
						</div>
					</div>
			}
		</Dialog>
	)
}