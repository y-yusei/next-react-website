export default function Home() {
  const subtitle = 'アウトプットしていくサイト'

  return (
  <>
  <header>HEADER</header>

  <main>
  <div className = "hero">
  <h1 style={{color: 'red',fontSize: '80px'}}>
    CUBE
    </h1>
  <hr />
  <p>{subtitle}</p>
  </div>
  </main>

  <footer>FOOTER</footer>
  </>
  )
}

