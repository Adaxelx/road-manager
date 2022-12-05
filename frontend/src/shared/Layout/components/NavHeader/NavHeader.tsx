import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const NavHeader = () => {
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box alignItems="center">
                        <Link to="/app/home">
                            <img src="/logo.svg" height={40} />
                        </Link>
                    </Box>
                    <Box flexGrow={1}>
                        <Link to="/app/road-network">
                            <Button>Sieć drogowa</Button>
                        </Link>
                        <Link to="/app/drive">
                            <Button>Rejestr pojazdów</Button>
                        </Link>
                        <Link to="/app/payments">
                            <Button>Opłaty</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
