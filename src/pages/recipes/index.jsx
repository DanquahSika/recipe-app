import {
  Card, CardContent, CardMedia, Container, Grid,
   TextField, Typography, CardActionArea} from "@mui/material";
import { useEffect, useState } from "react";

export default function Recipes() {
// to store the recipes after fetching it using API, you go with the useState(a react hook) approach to make sure react keeps it
    const [recipes,setRecipes] = useState([]); 

    const getRecipes =() => {
        // prepare URL
        const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
        url.searchParams.append('apiKey', '8a366d5b700243eaab3767afca817585')
        // fetch recipes from the API
        // setRecipes will be updated with the recipe state
        // url.searchParams.append('number', 2) to specify the number of recipes to show

        fetch(url) //this is how fetch works. its default is GET
        .then(response => response.json())
        .then(data => {
             // update recipes state with data
            setRecipes(data.results);
        }) //if it fails to do its work the .catch
        .catch(error =>{
            console.log(error)
        });
       
    } 

    useEffect(getRecipes, []);

    
    // Fetch recipe data
  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search and hit enter"
        variant="outlined"
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        {recipes.map(recipe => (<Grid key={recipe.id} item xs={4}>
          <Card sx={{ maxWidth: 345, height: "100%"}} >
            <CardActionArea sx={{height: "100%"}}>
              <CardMedia
                component="img"
                height="140"
                image= {recipe.image}
                alt={recipe.title}
              />
              <CardContent  sx={{height: "100%"}}>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
               
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>))}
      </Grid>
    </Container>
  );
}
