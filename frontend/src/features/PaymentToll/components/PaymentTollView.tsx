import { TollDTO } from "@src/api/models/TollDTO";

interface PaymentTollViewProps {
    tolls: TollDTO[];
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

            <table>
                <thead>
                    <tr>
                        <th>Nazwa taryfikatora</th>
                        <th>Nazwa pojazdu</th>
                        <th>Cena za km</th>
                        <th>Typ pojazdu</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tolls.map(x =>
                            <tr key={(x.id! << 5) + x.vehicleTollDTOS![0].id!}>
                                <td>{x.name}</td>
                                <td>{x.vehicleTollDTOS![0].name}</td>
                                <td>{x.vehicleTollDTOS![0].pricePerKilometer}</td>
                                <td>{x.vehicleTollDTOS![0].vehicleType}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </main>
    );
};