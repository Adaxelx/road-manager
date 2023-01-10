import { Alert, Box, Button, InputLabel, MenuItem, Paper, Select, Snackbar, TextField } from "@mui/material"
import { RoadDTO } from "@src/api"
import { TollDTO } from "@src/api/models/TollDTO"
import { VehicleTollDTO, VehicleTollDTOVehicleTypeEnum } from "@src/api/models/VehicleTollDTO"
import React from "react"
import { PaymentTollEditVehicleTollItem } from "./PaymentTollEditVehicleTollItem"

type PaymentTollEditViewProps = {
	toll: TollDTO
	roads: RoadDTO[]
	handleSaveEditedTollClick: (toll: TollDTO) => void
	handleDismissEditViewClick: () => void
}

export const PaymentTollEditView: React.FC<PaymentTollEditViewProps> = ({
	toll,
	roads,
	handleDismissEditViewClick,
	handleSaveEditedTollClick
}) => {
	const [tollName, setTollName] = React.useState(toll.name ?? "")
	const [roadSegments, setRoadSegments] = React.useState((toll.roadSegments ?? []).length === 0 ? roads[0].segments!.map(x => x.id!) : toll.roadSegments)
	const [vehicleTolls, setVehicleTolls] = React.useState(toll.vehicleTolls ?? [])
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
			vehicleTolls: vehicleTolls,
			roadSegments: roadSegments
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

			<InputLabel id="type-label" sx={{ textAlign: 'left' }}>Sieć drogowa</InputLabel>
			<Select
				fullWidth
				sx={{ textAlign: 'left' }}
				labelId="type-label"
				label="Sieć drogowa"
				value={roads.find(x => JSON.stringify(x.segments?.map(x => x.id)) === JSON.stringify(roadSegments))!.name}
				onChange={(e) => setRoadSegments(roads.find(x => x.name === e.target.value)!.segments!.map(x => x.id!))}
			>
				{
					roads.map(road =>
						<MenuItem key={road.id} value={road.name}>
							{road.name}
						</MenuItem>
					)
				}
			</Select>

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