import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
      <Typography color= "inherit" to="/recipes" variant="h6" component={Link} sx={{ flexGrow: 1 }}>
          Receipe App
        </Typography>
        <Button to="/add-recipe" component={Link} variant="container" color="primary"> Add New Recipe</Button>
        
        
      </Toolbar>
    </AppBar>
  );
}