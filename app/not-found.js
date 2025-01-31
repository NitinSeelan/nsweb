import Link from 'next/link'

export default function NotFound() {
  return <div className='notfounddiv'>
      <h1 className='nfh1'>404 Not Found</h1>
      <h1 className='nfh1'>NitinSeelan.com</h1>
      <div>
        <Link className='hello' href="/">Home</Link>
      </div>
  </div>
}