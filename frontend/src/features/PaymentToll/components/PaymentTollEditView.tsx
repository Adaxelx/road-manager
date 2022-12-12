import { Alert, Box, Button, Paper, Snackbar, TextField } from "@mui/material"
import { TollDTO } from "@src/api/models/TollDTO"
import {VehicleTollDTO, VehicleTollDTOVehicleTypeEnum} from "@src/api/models/VehicleTollDTO"
import React from "react"
import { PaymentTollEditVehicleTollItem } from "./PaymentTollEditVehicleTollItem"

type PaymentTollEditViewProps = {
	toll: TollDTO
	handleSaveEditedTollClick: (toll: TollDTO) => void
	handleDismissEditViewClick: () => void
}

export const PaymentTollEditView: React.FC<PaymentTollEditViewProps> = ({
	toll,
	handleDismissEditViewClick,
	handleSaveEditedTollClick
}) => {
	const [tollName, setTollName] = React.useState(toll.name ?? "")
	const [vehicleTolls, setVehicleTolls] = React.useState(toll.vehicleTollDTOS ?? [])
	const [error, setError] = React.useState("")
	
	const handleVehicleTollTypeChange = (vt: VehicleTollDTO, newType: VehicleTollDTOVehicleTypeEnum) => {
		vt.vehicleType = newType
		setVehicleTolls([...vehicleTolls])
	}
	
	const handleVehicleTollPriceChange = (vt: VehicleTollDTO, newPrice: number) => {
		vt.pricePerKilometer = newPrice
		setVehicleTolls([...vehicleTolls])
	}

	const handleVehicleTollDelete = (vt: VehicleTollDTO) => {
		vehicleTolls.splice(vehicleTolls.indexOf(vt), 1)
		setVehicleTolls([...vehicleTolls])
	}

	const handleVehicleTollAdd = () => {
		setVehicleTolls([
			...vehicleTolls,
			{
				pricePerKilometer: 0
			}
		])
	}

	const handleSave = () => {
		if (tollName === "") {
			setError("Nazwa taryfikatora nie może być pusta")
			return
		}
		if (vehicleTolls.length === 0) {
			setError("Musi istnieć przynajmniej jedna taryfa")
			return
		}

		for (const vt of vehicleTolls) {
			const i = vehicleTolls.indexOf(vt) + 1
			
			if (!Object.values(VehicleTollDTOVehicleTypeEnum).includes(vt.vehicleType as any)) {
				setError(`Taryfa #${i}: typ samochodu musi być wybrany`)
				return
			} else if (vt.pricePerKilometer === undefined || vt.pricePerKilometer <= 0) {
				setError(`Taryfa #${i}: cena za kilometr musi być większa niż 0`)
				return
			}
		}

		handleSaveEditedTollClick({
			...toll,
			name: tollName,
			vehicleTollDTOS: vehicleTolls
		})
	}

	return (
		<main>
			<h1>Edycja taryfikatora</h1>

			<TextField
				fullWidth
				label="Nazwa taryfikatora"
				value={tollName}
				onChange={(e) => setTollName(e.target.value)}
			/>

			<h2>Taryfy</h2>

			<Paper>
				{
					vehicleTolls.map((vehicleToll, i) => 
						<PaymentTollEditVehicleTollItem
							vehicleToll={vehicleToll}
							handleVehicleTollTypeChange={handleVehicleTollTypeChange}
							handleVehicleTollPriceChange={handleVehicleTollPriceChange}
							handleVehicleTollDelete={handleVehicleTollDelete}
							index={i + 1}
							key={i}
						/>
					)
				}
				
				<Box style={{
					display: "flex",
					justifyContent: "center",
					gap: 8
				}}>
					<Button
						size="large"
						onClick={handleVehicleTollAdd}
					>
						Dodaj taryfę
					</Button>
				</Box>
			</Paper>

			<Box style={{
				display: "flex",
				justifyContent: "center",
				gap: 8,
				marginTop: 16
			}}>
				<Button
					color="primary"
					size="large"
					variant="contained"
					onClick={handleSave}
				>
					Zapisz
				</Button>
				<Button
					size="large"
					variant="outlined"
					onClick={handleDismissEditViewClick}
				>
					Anuluj
				</Button>
			</Box>

			<Snackbar
				open={error !== ""}
			>
				<Alert severity="error">
					{error}
				</Alert>
			</Snackbar>
		</main>
	)
}