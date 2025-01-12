import Link from 'next/link'

export default function NotFound() {
  return <div className='notfounddiv'>
      <h1 className='nfh1'>404 Not Found</h1>
      <div>
        <Link className='hello' href="/">Home</Link>
      </div>
  </div>
}