import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
 query {
  lessons {
    id
    title
  }
 }
`

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
    <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
  )
}

export default App
