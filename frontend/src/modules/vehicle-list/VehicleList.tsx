import { useGetVehiclesQuery } from '@app/graphql/types'
import ErrorMessage from '@app/modules/common/components/Misc/ErrorMessage'
import LoadingIndicator from '@app/modules/common/components/Misc/LoadingIndicator'
import { Container, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import AddVehicleButton from './components/AddVehicleButton'
import Header from './components/Header'
import VehicleListItem from './components/VehicleListItem'

const VehicleList = () => {
  const { data, loading, error } = useGetVehiclesQuery()
  const router = useRouter()

  if (loading) return <LoadingIndicator />
  if (error) return <ErrorMessage error={error} />

  const vehicles = data?.vehicles ?? []

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <AddVehicleButton
            onClick={() => {
              router.push('/vehicles/create')
            }}
          />
        </Grid>
        {vehicles.map((vehicle, i) => (
          <VehicleListItem key={vehicle.id} vehicle={vehicle} i={i} />
        ))}
      </Grid>
    </Container>
  )
}

export default VehicleList
