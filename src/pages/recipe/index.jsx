import { useParams } from "react-router-dom"

export default function Recipe () {
  const {id}= useParams(); // TODO: get recipe id from url param



  return (
    <h1>Recipe Page: {id}</h1>
  )
}
