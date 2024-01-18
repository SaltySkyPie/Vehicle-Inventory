import { Typography } from '@mui/material'

const ErrorMessage = ({
  error,
}: {
  error: {
    message: string
  }
}) => (
  <Typography variant="h3" component="h1" gutterBottom>
    Error: {error.message}
  </Typography>
)

export default ErrorMessage
