import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

type HomeButtonProps = {
    title: string
    href: string
    icon: string
}

export const HomeButton: React.FC<HomeButtonProps> = ({title, href, icon}) => {
    return (
        <Link to={href}>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    image={icon}
                />
                <CardContent>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}