import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <Link href={'/tree'} >Tree</Link>  
      </div>
      <div>
        <Link href={'/toad'} >toad</Link>  
      </div>
    </div>
  )
}
