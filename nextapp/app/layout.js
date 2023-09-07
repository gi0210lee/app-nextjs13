import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li>
            <a href="/read/1">html</a>
            <a href="/read/2">css</a>
          </li>
        </ul>
        {children}
        <ul>
          <li><a href="/create">Create</a></li>
          <li><a href="/update/1">Update</a></li>
          <li><input type="button" value="delete"></input></li>          
        </ul>
      </body>
    </html>
  )
}
