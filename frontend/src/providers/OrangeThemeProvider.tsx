import { createTheme, ThemeProvider } from "@mui/material"

const orangeTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#ef6c00',
        },
        secondary: {
            main: '#e0e0e0',
        },
        background: {
            default: '#212121',
            paper: '#303030',
        },
    },
})

type ThemeProviderProps = {
    children: React.ReactNode
}

export const OrangeThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    return (
        <ThemeProvider theme={orangeTheme}>
            {children}
        </ThemeProvider>
    )
}