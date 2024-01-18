'use client'
import { GetVehicleDocument, GetVehicleQuery, GetVehiclesDocument, useRemoveImageMutation } from '@app/graphql/types'
import { Box, Button, ImageList, ImageListItem, Typography } from '@mui/material'
import { useState } from 'react'
import AddImageButton from './AddImageButton'

export default function VehicleImageList({ images, id }: { images: GetVehicleQuery['vehicle']['images']; id: string }) {
  const [removeImage] = useRemoveImageMutation({
    refetchQueries: [{ query: GetVehicleDocument, variables: { id } }, { query: GetVehiclesDocument }],
  })

  const [deleteMode, setDeleteMode] = useState(false)

  return (
    <Box>
      <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={2} rowHeight={121}>
        {images.map((item, i) => (
          <ImageListItem
            key={item.url}
            cols={i % 3 === 0 ? 2 : 1}
            rows={i % 3 === 0 ? 2 : 1}
            sx={{
              '&:hover': {
                opacity: deleteMode ? 0.5 : 1,
                cursor: deleteMode ? 'pointer' : 'default',
              },
            }}
            onClick={() => {
              if (!deleteMode) return
              void removeImage({
                variables: {
                  id: item.id,
                },
              })
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.url} alt={item.url} loading="lazy" />
          </ImageListItem>
        ))}
        {!deleteMode && (
          <ImageListItem cols={images.length % 3 === 0 ? 2 : 1} rows={images.length % 3 === 0 ? 2 : 1}>
            <AddImageButton />
          </ImageListItem>
        )}
      </ImageList>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {deleteMode
          ? 'Click on an image to delete it. Click "Cancel" to exit delete mode.'
          : images.length + ' image' + (images.length === 1 ? '' : 's')}
      </Typography>

      <Button
        variant="outlined"
        color="error"
        sx={{ mt: 2 }}
        onClick={() => {
          setDeleteMode((prev) => !prev)
        }}
      >
        {deleteMode ? 'Exit delete mode' : 'Delete images'}
      </Button>
    </Box>
  )
}
