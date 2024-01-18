// Framework and UI Components
import {
  GetVehicleDocument,
  GetVehiclesDocument,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
} from '@app/graphql/types'
import { Button, MenuItem, TextField } from '@mui/material'
import { Form, Formik, useFormikContext } from 'formik'
import { useRouter } from 'next/navigation'
import * as Yup from 'yup'

// Types and Enums
import { FuelType, GetVehicleQuery } from '@app/graphql/types'

export type VehicleFormValues = {
  brand: string
  color: string
  engineVolume: number
  fuel: FuelType
  model: string
  [key: string]: string | number | FuelType
}

// Styles
const fieldStyle = { mb: 2 }

// Validation Schema
const validationSchema: Yup.Schema<VehicleFormValues> = Yup.object({
  brand: Yup.string().required('Brand is required'),
  color: Yup.string().required('Color is required'),
  engineVolume: Yup.number().required('Engine volume is required'),
  fuel: Yup.mixed<FuelType>().oneOf(Object.values(FuelType), 'Invalid fuel type').required('Fuel is required'),
  model: Yup.string().required('Model is required'),
})

// Initial form values
const getInitialValues = (vehicle?: GetVehicleQuery['vehicle']) => ({
  brand: vehicle?.brand ?? '',
  color: vehicle?.color ?? '',
  engineVolume: vehicle?.engineVolume ?? 0,
  fuel: vehicle?.fuel ?? FuelType.Petrol,
  model: vehicle?.model ?? '',
})

// Text Field Component
const FormTextField = ({ name, label }: { name: string; label: string }) => {
  const formik = useFormikContext<VehicleFormValues>()

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      fullWidth
      sx={fieldStyle}
    />
  )
}

const FormSelectField = ({ name, label, options }: { name: string; label: string; options: string[] }) => {
  const formik = useFormikContext<VehicleFormValues>()

  return (
    <TextField
      id={name}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      fullWidth
      select
      sx={fieldStyle}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}

// VehicleForm Component
export default function VehicleForm({ vehicle }: { vehicle?: GetVehicleQuery['vehicle'] }) {
  const [updateVehicle] = useUpdateVehicleMutation()
  const [createVehicle] = useCreateVehicleMutation()
  const router = useRouter()

  const handleCreate = async (values: VehicleFormValues) => {
    const result = await createVehicle({
      variables: {
        input: {
          brand: values.brand,
          color: values.color,
          engineVolume: values.engineVolume,
          fuel: values.fuel,
          model: values.model,
        },
      },
      refetchQueries: [{ query: GetVehiclesDocument }],
    })

    if (result.data?.createVehicle) {
      router.push(`/vehicles/${result.data.createVehicle.id}`)
    }
  }

  const handleUpdate = async (values: VehicleFormValues, id: string) => {
    const result = await updateVehicle({
      variables: {
        input: {
          id: id,
          brand: values.brand,
          color: values.color,
          engineVolume: values.engineVolume,
          fuel: values.fuel,
          model: values.model,
        },
      },
      refetchQueries: [
        {
          query: GetVehicleDocument,
          variables: { id: id },
        },
        {
          query: GetVehiclesDocument,
        },
      ],
    })
  }

  return (
    <Formik
      initialValues={getInitialValues(vehicle)}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (vehicle) {
          handleUpdate(values, vehicle.id).catch(console.error)
        } else {
          handleCreate(values).catch(console.error)
        }
      }}
    >
      <Form>
        <FormTextField name="brand" label="Brand" />
        <FormTextField name="model" label="Model" />
        <FormTextField name="color" label="Color" />
        <FormTextField name="engineVolume" label="Engine Volume" />
        <FormSelectField name="fuel" label="Fuel" options={Object.values(FuelType)} />
        <Button variant="contained" color="primary" fullWidth type="submit" sx={fieldStyle}>
          {vehicle ? 'Update' : 'Create'}
        </Button>
      </Form>
    </Formik>
  )
}
