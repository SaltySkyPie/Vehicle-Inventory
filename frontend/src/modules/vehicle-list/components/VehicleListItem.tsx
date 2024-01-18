import { GetVehiclesQuery } from '@app/graphql/types'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const VehicleListItem = ({ vehicle, i }: { vehicle: GetVehiclesQuery['vehicles'][0]; i: number }) => {
  const [image, setImage] = useState<number | null>(vehicle.images.length ? 0 : null)

  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      if (image !== null) {
        setTimeout(() => {
          setImage((image + 1) % vehicle.images.length)
        }, i * 100)
      }
    }, 10_000)
    return () => {
      clearInterval(interval)
    }
  }, [i, image, vehicle.images.length])

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image={image !== null ? vehicle.images[image].url : 'https://via.placeholder.com/300?text=No+Image'}
            title={`${vehicle.brand} ${vehicle.model}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {vehicle.brand} {vehicle.model}
            </Typography>
            {/* Display vehicle properties */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <Chip label={vehicle.color} variant="outlined" sx={{ m: 0.25 }} />
              <Chip label={`Engine: ${vehicle.engineVolume + 'l'}`} variant="outlined" sx={{ m: 0.25 }} />
              <Chip label={vehicle.fuel} variant="outlined" sx={{ m: 0.25 }} />
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
              }}
            >
              <Button
                size="small"
                onClick={() => {
                  router.push(`/vehicles/${vehicle.id}`)
                }}
              >
                Details
              </Button>
              <Typography
                variant="h6"
                fontWeight={'bold'}
                sx={{
                  mr: 1,
                }}
              >
                ${vehicle.price.toLocaleString()}
              </Typography>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default VehicleListItem
