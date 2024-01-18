import Image from 'next/image'

const Logo = () => {
  return <Image src="/logo.svg" alt="Vehicle Inventory" width={40} height={40} priority />
}

export default Logo
