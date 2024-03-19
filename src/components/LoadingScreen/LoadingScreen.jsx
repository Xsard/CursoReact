import { Box, Container, Grid } from "@mui/material"
import { GifGokuLoading } from "../../assets"

export const LoadingScreen = () => {
    return (
        <Container>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "center"
                }}
            >
                <img src={GifGokuLoading} alt="Cargando..."/>
            </Box>
        </Container>
    )
}
