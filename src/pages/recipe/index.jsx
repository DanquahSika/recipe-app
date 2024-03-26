import {Link, useParams } from "react-router-dom";
import useSWR from "swr"
import loadingIcon from "../../assets/images/gears-spinner.svg";
import {Container} from "@mui/material"


const getRecipe =(...args) => {
 // prepare URL
 const url = new URL(args[0]);
 url.searchParams.append("apiKey",process.env.REACT_APP_SPOONACULAR_API_KEY)
//  fetch and return receipe
return fetch(url).then(response => response.json());
}

 

export default function Recipe() {
  const { id } = useParams();
  const {data,isLoading, } = useSWR(`${process.env.REACT_APP_RECIPE_API_URL}/recipes/${id}`, getRecipe);
  // console.log(data, isLoading);



  return (
    <>
    {isLoading ? <img src={{loadingIcon}} /> :(
      <Container>
      <h1>{data.title}</h1>
      <div>{data.summary}</div>
      <div dangerouslySetInnerHTML={{__html: data.
        summary}} />
      <img src={data.image} />
      </Container>
    )}
    </>
  );
  
}