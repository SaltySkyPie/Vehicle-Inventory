'use client'
import { GetVehiclesDocument, useGetVehicleLazyQuery, useRemoveVehicleMutation } from '@app/graphql/types'
import ErrorMessage from '@app/modules/common/components/Misc/ErrorMessage'
import LoadingIndicator from '@app/modules/common/components/Misc/LoadingIndicator'
import NotFoundMessage from '@app/modules/common/components/Misc/NotFoundMessage'
import { Button, Divider } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import VehicleContainer from '../common/components/Vehicle/VehicleContainer'
import VehicleItemContainer from '../common/components/Vehicle/VehicleItemContainer'
import VehicleForm from './components/VehicleForm'
import VehicleImageList from './components/VehicleImageList'

export default function Vehicle() {
  const { id } = useParams()
  const [getVehicle, { data, loading, error }] = useGetVehicleLazyQuery()
  const [removeVehicle] = useRemoveVehicleMutation({
    refetchQueries: [{ query: GetVehiclesDocument }],
  })
  const router = useRouter()

  useEffect(() => {
    if (id && typeof id === 'string') {
      void getVehicle({ variables: { id: id } })
    }
  }, [id, getVehicle])

  if (!id || typeof id !== 'string') return <></>
  if (loading) return <LoadingIndicator />
  if (error) return <ErrorMessage error={error} />
  if (!data?.vehicle) return <NotFoundMessage />

  const { vehicle } = data

  return (
    <VehicleContainer
      title={vehicle.brand + ' ' + vehicle.model}
      mainContent={
        <VehicleItemContainer>
          <VehicleImageList images={vehicle.images} id={id} />
        </VehicleItemContainer>
      }
      sideContent={
        <VehicleItemContainer>
          <VehicleForm vehicle={vehicle} />
          <Divider sx={{ my: 2 }} />
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              void removeVehicle({
                variables: {
                  id: id,
                },
              })
              router.push('/vehicles')
            }}
          >
            Delete vehicle
          </Button>
        </VehicleItemContainer>
      }
    />
  )
}
