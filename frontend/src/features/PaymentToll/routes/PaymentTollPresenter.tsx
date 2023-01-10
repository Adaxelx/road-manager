import * as React from "react";
import { PaymentTollEditView } from "../components/PaymentTollEditView";
import { PaymentTollView } from "../components/PaymentTollView";
import { useEffect } from "react";
import { PaymentControllerApi, RoadNetworkControllerApi, RoadDTO, TollDTO } from "@src/api";

export const PaymentTollPresenter = () => {
	const [loading, setLoading] = React.useState(true)
	const [tolls, setTolls] = React.useState<TollDTO[]>([])
	const [roads, setRoads] = React.useState<RoadDTO[]>([])
	const [editedToll, setEditedToll] = React.useState<TollDTO | null>(null)

	const api = new PaymentControllerApi()
	const roadApi = new RoadNetworkControllerApi()

	useEffect(() => {
		api.getTool().then(items => {
			setTolls(items)
		})
		roadApi.getRoadNetwork().then(items => {
			setRoads(items.roadDTOS!)
			setLoading(false)
		})
	}, [])

	const handleAddTollClick = () => {
		setEditedToll({
			name: "Nowy taryfikator",
			vehicleTolls: [],
			roadSegments: []
		})
	}

	const handleEditTollClick = (toll: TollDTO) => {
		setEditedToll(toll)
	}

	const handleRemoveTollClick = (toll: TollDTO) => {
		tolls.splice(tolls.indexOf(toll), 1)
		setTolls([...tolls])
	}

	const handleSaveEditedTollClick = async (toll: TollDTO) => {
		if (toll.id) {
			tolls[tolls.findIndex(t => t.id === toll.id)] = toll
			setTolls([...tolls])
		} else {
			setTolls([
				...tolls,
				{
					id: tolls.length + 1,
					...toll
				}
			])
		}

		setEditedToll(null)
		await api.addOrEditTool(toll)
	}

	const handleDismissEditViewClick = () => {
		setEditedToll(null)
	}

	return (
		loading ?
			<p>Ładowanie...</p>
			:
			editedToll === null
				? <PaymentTollView
					tolls={tolls}
					roads={roads}
					handleEditTollClick={handleEditTollClick}
					handleAddTollClick={handleAddTollClick}
				/>
				: <PaymentTollEditView
					toll={editedToll}
					roads={roads}
					handleDismissEditViewClick={handleDismissEditViewClick}
					handleSaveEditedTollClick={handleSaveEditedTollClick}
				/>
	)
}