import { Box, Button, Card, CardActions, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { TollDTO } from "@src/api/models/TollDTO";

interface PaymentTollViewProps {
    tolls: TollDTO[];
	handleEditTollClick: (toll: TollDTO) => void
	handleAddTollClick: () => void
	handleRemoveTollClick: (toll: TollDTO) => void
}


export const PaymentTollView = (props: PaymentTollViewProps) => {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Taryfy</h1>

			<Grid container gap={1}>{
				props.tolls.map(toll => 
					<Grid item xs={12}>
						<Card key={toll.id}>
							<CardContent>
								<Typography variant="h5">{toll.name}</Typography>
								
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Nazwa pojazdu</TableCell>
											<TableCell>Typ pojazdu</TableCell>
											<TableCell>Cena za km</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{
											toll.vehicleTollDTOS?.map((vehicleToll, i) => 
												<TableRow key={i}>
													<TableCell>{vehicleToll.name}</TableCell>
													<TableCell>{vehicleToll.vehicleType}</TableCell>
													<TableCell>{vehicleToll.pricePerKilometer}</TableCell>
												</TableRow>
											)
										}
									</TableBody>
								</Table>
							</CardContent>
							<CardActions style={{justifyContent: "center"}}>
								<Button
									onClick={() => props.handleEditTollClick(toll)}
								>
									Edytuj taryfikator
								</Button>
								<Button
									onClick={() => props.handleRemoveTollClick(toll)}
									color="error"
								>
									Usuń taryfikator
								</Button>
							</CardActions>
						</Card>
					</Grid>
				)
			}
			</Grid>

			<Box style={{
				display: "flex",
				justifyContent: "center",
				gap: 8,
				marginTop: 16
			}}>
				<Button
					size="large"
					variant="outlined"
					onClick={props.handleAddTollClick}
				>
					Dodaj taryfikator
				</Button>
			</Box>
        </main>
    );
};