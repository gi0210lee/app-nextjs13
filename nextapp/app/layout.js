import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Next13 Sample',
  description: 'Next App',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ul>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ul>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/read/1">Read</Link></li>
          <li><Link href="/update/1">Update</Link></li>
          <li><input type="button" value="delete"></input></li>          
        </ul>
      </body>
    </html>
  )
}
