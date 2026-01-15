import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='text-gray-300 font-bold text-xl md:text-2xl lg:text-3xl'>
        Tech<span className='text-primary'>Blogs</span>
    </Link>
  )
}

export default Logo
