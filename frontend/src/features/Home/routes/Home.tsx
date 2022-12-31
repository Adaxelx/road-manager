import styles from "./styles.module.scss";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";

import { HomeButton } from "@features/Home/components/HomeButton/HomeButton";

export const Home = () => {
    return (
        <Stack className={styles.home} spacing={1} alignItems="center" gap={4}>
            <img src="/logo.svg" width={64} />

            <Grid container justifyContent="center" gap={1}>
                <Grid container justifyContent="center" gap={1}>
                    <HomeButton
                        href="/app/road-network"
                        title="Sieć drogowa"
                        icon="/road_network.svg"
                    />
                    <HomeButton
                        href="/app/drive"
                        title="Rejestr pojazdów"
                        icon="/drive.svg"
                    />
                </Grid>
                <Grid container justifyContent="center" gap={1}>
                    <HomeButton
                        href="/app/payments"
                        title="Opłaty"
                        icon="/drive.svg"
                    />
                    <HomeButton
                        href="/app/payment-toll"
                        title="Taryfikatory"
                        icon="/toll.svg"
                    />
                </Grid>
                <Grid container justifyContent="center" gap={1}>
                    <HomeButton
                        href="/app/subscriptions"
                        title="Abonamenty"
                        icon="/drive.svg"
                    />
                </Grid>
            </Grid>
        </Stack>
    );
};
