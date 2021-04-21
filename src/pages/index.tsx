

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SSG - Static Site Generation
export async function getStaticProps(){
  const res = await fetch('http://localhost:3333/episodes')
  const data = await res.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}