import { TollDTO } from "@src/api/models/TollDTO";
import * as React from "react";
import { PaymentTollEditView } from "../components/PaymentTollEditView";
import { PaymentTollView } from "../components/PaymentTollView";
import {useEffect} from "react";
import {PaymentControllerApi} from "@src/api";

export const PaymentTollPresenter = () => {
	const [loading, setLoading] = React.useState(true)
    const [tolls, setTolls] = React.useState<TollDTO[]>([])
	const [editedToll, setEditedToll] = React.useState<TollDTO | null>(null)

	const api = new PaymentControllerApi()

	useEffect(() => {
		api.getTool().then(items => {
			setTolls(items)
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
			handleEditTollClick={handleEditTollClick}
			handleAddTollClick={handleAddTollClick}
		/>
		: <PaymentTollEditView
			toll={editedToll}
			handleDismissEditViewClick={handleDismissEditViewClick}
			handleSaveEditedTollClick={handleSaveEditedTollClick}
		/>
    )
}