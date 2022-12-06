import { PaymentTollApi } from "@src/api/apis/PaymentTollApi";
import { TollDTO } from "@src/api/models/TollDTO";
import * as React from "react";
import { PaymentTollEditView } from "../components/PaymentTollEditView";
import { PaymentTollView } from "../components/PaymentTollView";

export const PaymentTollPresenter = () => {
    const [tolls, setTolls] = React.useState<TollDTO[]>([])
	const [editedToll, setEditedToll] = React.useState<TollDTO | null>(null)

    const loadTolls = () => {
        const apiResult = PaymentTollApi
            .getTollList();

        setTolls(apiResult);
    }

	const handleAddTollClick = () => {
		setEditedToll({
			name: "Nowy taryfikator",
			vehicleTollDTOS: [],
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

	const handleSaveEditedTollClick = (toll: TollDTO) => {
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
	}

	const handleDismissEditViewClick = () => {
		setEditedToll(null)
	}

    if (tolls.length === 0) {
        loadTolls();
    }

    return (
		editedToll === null
        ? <PaymentTollView
			tolls={tolls}
			handleEditTollClick={handleEditTollClick}
			handleAddTollClick={handleAddTollClick}
			handleRemoveTollClick={handleRemoveTollClick}
		/>
		: <PaymentTollEditView
			toll={editedToll}
			handleDismissEditViewClick={handleDismissEditViewClick}
			handleSaveEditedTollClick={handleSaveEditedTollClick}
		/>
    )
}