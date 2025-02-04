import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Grid, Typography, Paper, List, ListItem, CircularProgress, Button } from "@mui/material";
import recipesStore from "./RecipesStore";
import { Recipe } from "../Types";
import RecipeDetails from "./RecipeDetails";

const Recipies = observer(() => {

    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

    useEffect(() => {
        if (recipesStore.recipes.length === 0) {
            recipesStore.fetchRecipes();
        }
    }, []);
    
    const showDetails = (recipe:Recipe)=>{
        setSelectedRecipe(recipe);
    }

    return (
        <Container maxWidth="lg" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" align="center" sx={{ marginTop: 2 }}>
                Recipies 🍽️🍜
            </Typography>

            <Grid container spacing={3} sx={{ flexGrow: 1, marginTop: 3 }}>
                <Grid item xs={6}>
                    {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
                </Grid>

                <Grid item xs={6}>
                    <Paper elevation={3} sx={{ padding: 3, backgroundColor: "#f8f8f8" }}>
                        {recipesStore.loading ? (
                            <Typography align="center">
                                <CircularProgress sx={{ marginRight: 1 }} /> Loading Recipes...
                            </Typography>
                        ) : recipesStore.error ? (
                            <Typography color="error">{recipesStore.error}</Typography>
                        ) : (
                            <List>
                                {recipesStore.recipes.map((recipe: Recipe) => (
                                    <ListItem key={recipe.id} divider>
                                        <Button onClick={() => showDetails(recipe)}>
                                            {recipe.title}
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    );
});
export default Recipies;

    