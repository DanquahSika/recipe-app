import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [recipeImage, setRecipeImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("country", country);
    formData.append("recipeImage", recipeImage);

    try {
      const response = await fetch("http://localhost:3001/api/recipes", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Recipe Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <input type="file" onChange={(e) => setRecipeImage(e.target.files[0])} />
        <Button variant="outlined" color="secondary" type="submit">
          Add Recipe
        </Button>
      </form>
      <Link to="/">Back to Home</Link>
    </React.Fragment>
  );
};

export default AddRecipe;