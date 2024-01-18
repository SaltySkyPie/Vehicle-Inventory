import { Container, Divider, Grid, Typography } from '@mui/material'
import VehicleItemContainer from './VehicleItemContainer'

export default function VehicleContainer({
  mainContent,
  sideContent,
  title,
  spacing,
  subContentSpacing,
}: {
  mainContent: React.ReactNode
  sideContent: React.ReactNode
  title?: string
  spacing?: number
  subContentSpacing?: number
}) {
  return (
    <Container>
      <Grid container spacing={spacing ?? 4} my={5}>
        <Grid item container spacing={subContentSpacing ?? 4} xs={12} md={7.5}>
          {title && (
            <VehicleItemContainer>
              <Typography variant="h3" fontWeight={'bold'}>
                {title}
              </Typography>
              <Divider sx={{ my: 2 }} />
            </VehicleItemContainer>
          )}
          {mainContent}
        </Grid>
        <Grid item xs={12} md={1} />
        <Grid item container xs={12} md={3.5} mt={5} sx={{ height: 0 }}>
          {sideContent}
        </Grid>
      </Grid>
    </Container>
  )
}
