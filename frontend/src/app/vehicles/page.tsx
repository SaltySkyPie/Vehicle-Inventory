'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Vehicle() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <></>
}
