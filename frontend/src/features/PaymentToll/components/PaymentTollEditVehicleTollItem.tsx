import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import {VehicleTollDTO, VehicleTollDTOVehicleTypeEnum} from "@src/api/models/VehicleTollDTO"

type PaymentTollEditVehicleTollItemProps = {
	vehicleToll: VehicleTollDTO
	handleVehicleTollTypeChange: (vt: VehicleTollDTO, newType: VehicleTollDTOVehicleTypeEnum) => void
	handleVehicleTollPriceChange: (vt: VehicleTollDTO, newPrice: number) => void
	handleVehicleTollDelete: (vt: VehicleTollDTO) => void
	index: number
}
//VehicleType
export const PaymentTollEditVehicleTollItem: React.FC<PaymentTollEditVehicleTollItemProps> = ({
	vehicleToll,
	handleVehicleTollTypeChange,
	handleVehicleTollPriceChange,
	handleVehicleTollDelete,
	index
}) => {
	return (
		<div style={{
			padding: 16,
			display: "flex",
			gap: 16
		}}>
			<Box sx={{
				display: "flex",
				alignItems: "center"
			}}>
				#{index}
			</Box>
			<Box flexGrow={1}>
				<FormControl fullWidth>
					<InputLabel id="type-label">Typ pojazdu</InputLabel>
					<Select
						labelId="type-label"
						label="Typ pojazdu"
						value={vehicleToll.vehicleType}
						onChange={(e) => handleVehicleTollTypeChange(vehicleToll, e.target.value as VehicleTollDTOVehicleTypeEnum)}
					>
						{
							Object.values(VehicleTollDTOVehicleTypeEnum).map(vehicleType =>
								<MenuItem key={vehicleType} value={vehicleType}>
									{vehicleType}
								</MenuItem>
							)
						}
					</Select>
				</FormControl>
			</Box>
			<Box flexGrow={1}>
				<TextField
					fullWidth
					type="number"
					label="Cena za km"
					value={vehicleToll.pricePerKilometer}
					onChange={(e) => handleVehicleTollPriceChange(vehicleToll, +e.target.value)}
				/>
			</Box>
			<Button 
				color="error"
				onClick={() => handleVehicleTollDelete(vehicleToll)}
			>
				Usuń
			</Button>
		</div>
	)
}