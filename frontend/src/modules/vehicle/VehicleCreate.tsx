import { Container, Typography } from '@mui/material'
import VehicleForm from './components/VehicleForm'

export default function VehicleCreate() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom mt={2}>
        Create Vehicle
      </Typography>
      <VehicleForm />
    </Container>
  )
}
