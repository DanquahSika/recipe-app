import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Recipe from './pages/recipe';
import Recipes from './pages/recipes';

const router = createBrowserRouter([
  {path:"/", element: <Recipes />},
  {path: "/recipes", element: <Recipes />},   // {path: "/*", element: } 
  {path: "/recipes/:id", element: <Recipe />}
]);

function App() {
  return (
    <>
    <Navbar />
    <RouterProvider router={router} />  {/*the components recipe and recipes have been replaced with this to allow to still show while the navbar stays and shows for every other page*/}
   </>
  );
}

export default App;
