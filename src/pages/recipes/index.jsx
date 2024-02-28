import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
// import RecipeItem from "../../components/recipe-item"
import { useEffect, useState } from "react";
import emptyIcon from "../../assets/images/empty.svg";
import "./main.css";
import loadingIcon from "../../assets/images/gears-spinner.svg";
import { Link } from "react-router-dom";

export default function Recipes() {
  // to store the recipes after fetching it using API, you go with the useState(a react hook) approach to make sure react keeps it
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipes = () => {
    setLoading(true);
    // prepare URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append(
      "apiKey",
      process.env.REACT_APP_SPOONACULAR_API_KEY
    );
    url.searchParams.append("query", keyword);
    // fetch recipes from the API
    // setRecipes will be updated with the recipe state
    // url.searchParams.append('number', 2) to specify the number of recipes to show

    fetch(url) //this is how fetch works. its default is GET
      .then((response) => response.json())
      .then((data) => {
        // update recipes state with data
        setRecipes(data.results);
      }) //if it fails to do its work the .catch
      .catch((error) => {
        console.log(error);
      })

      .finally(() => setLoading(false));
  };

  useEffect(getRecipes, [keyword]);

  // Fetch recipe data
  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search and hit enter"
        variant="outlined"
        onKeyDown={(event) =>
          event.key === "Enter" && setKeyword(event.target.value)
        }
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        {loading ? (
          <img src={loadingIcon} />
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid key={recipe.id} item xs={4}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardActionArea sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent sx={{ height: "100%" }}>
                    <Link to={`/recipes/${recipe.id}`}>
                    <Typography gutterBottom variant="h5" component="div">
                      {recipe.title}
                    </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))) : ( <img src={emptyIcon} width={"40%"} className="emptyIcon" />
        )}
      </Grid>
    </Container>
  );
}
