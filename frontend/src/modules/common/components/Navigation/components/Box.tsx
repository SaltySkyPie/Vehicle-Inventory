'use client'
import { Button, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from './Logo'

export const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
`

export const BigScreenBox = () => {
  const router = useRouter()
  return (
    <FlexBox
      sx={{
        width: '100%',
      }}
    >
      <FlexBox sx={{ width: '90%' }}>
        <Box
          sx={{ mr: 1, cursor: 'pointer' }}
          onClick={() => {
            router.push('/')
          }}
        >
          <Logo />
        </Box>
        <FlexBox>
          <Link href="/">
            <Button variant="text">Home</Button>
          </Link>
        </FlexBox>
      </FlexBox>
      <FlexBox
        sx={{
          width: '10%',
          justifyContent: 'flex-end',
        }}
      ></FlexBox>
    </FlexBox>
  )
}

export const SmallScreenBox = () => {
  const router = useRouter()
  return (
    <FlexBox
      sx={{
        width: '100%',
      }}
    >
      <FlexBox sx={{ width: '10%', justifyContent: 'flex-start' }}>
        <Link href="/">
          <Button variant="text">Home</Button>
        </Link>
      </FlexBox>
      <FlexBox
        sx={{
          width: '80%',
          justifyContent: 'center',
        }}
        onClick={() => {
         router.push('/')
        }}
      >
        <Logo />
      </FlexBox>
      <FlexBox
        sx={{
          width: '10%',
          justifyContent: 'flex-end',
        }}
      ></FlexBox>
    </FlexBox>
  )
}
