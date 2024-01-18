import { GetVehicleDocument, useAddImagesMutation } from '@app/graphql/types'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useParams } from 'next/navigation'
import React from 'react'
import * as Yup from 'yup'

export default function AddImageButton() {
  const [addImages] = useAddImagesMutation()
  const { id } = useParams()
  const [isOpened, setIsOpened] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      image: '',
    },
    validationSchema: Yup.object({
      image: Yup.string().url().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (!id || typeof id !== 'string') {
        return
      }

      const result = await addImages({
        variables: {
          input: {
            id: id,
            images: [values.image],
          },
        },

        refetchQueries: [
          {
            query: GetVehicleDocument,
            variables: { id: id },
          },
        ],
      })

      if (result.data?.addImages) {
        setIsOpened(false)
      }
      resetForm()
    },
  })

  if (!id) {
    return <></>
  }

  return (
    <Box
      sx={{
        'width': '100%',
        'height': '100%',
        'backgroundColor': isOpened ? undefined : 'rgba(0, 0, 0, 0.10)',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'cursor': 'pointer',
        '&:hover': {
          backgroundColor: isOpened ? undefined : 'rgba(0, 0, 0, 0.20)',
        },
        '&:active': {
          backgroundColor: isOpened ? undefined : 'rgba(0, 0, 0, 0.30)',
        },
        'transition': 'background-color 0.2s ease-in-out',
        'userSelect': 'none',
      }}
      onClick={() => {
        setIsOpened(true)
      }}
    >
      {!isOpened ? (
        <Typography variant="h3" component="h1" color="text.secondary">
          Add Image
        </Typography>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="images"
            name="image"
            label="Image URL"
            value={formik.values.image}
            onChange={formik.handleChange}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Add Image
          </Button>
        </form>
      )}
    </Box>
  )
}
