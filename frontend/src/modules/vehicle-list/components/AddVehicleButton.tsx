import { Button } from '@mui/material'

const AddVehicleButton = ({ onClick }: { onClick: () => void }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    Add Vehicle
  </Button>
)

export default AddVehicleButton
