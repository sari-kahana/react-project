import { observer } from "mobx-react-lite";
import { Card, CardContent, CardHeader, Grid, Grid2, List, ListItem, Typography } from "@mui/material";
import { Recipe } from "../Types";

const RecipeDetails = observer(({ recipe }: { recipe: Recipe }) => {

    if (!recipe) {
        return <Typography variant="h6" color="error">Recipe not found</Typography>;
    }

    return (
        <Grid2 container justifyContent="flex-start" >
            <Grid item xs={12} md={12}>
                <Card sx={{ backgroundColor: "#f7f7f7", borderRadius: 3, boxShadow: 3, }}>
                    <CardHeader
                        title={recipe.title}
                        sx={{
                            textAlign: "center",
                            backgroundColor: "#42a5f5",
                            padding: 2,
                            fontSize: "1.5rem",
                            fontWeight: "bold"
                        }}
                    />
                    <CardContent>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}><strong>ID:</strong> {recipe.id}</Typography>
                        <Typography variant="body1" sx={{ marginBottom: 1 }}><strong>Description:</strong> {recipe.description || "No description available"}</Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}><strong>Author ID:</strong> {recipe.authorId}</Typography>

                        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold" }}>Ingredients:</Typography>
                        <List dense sx={{ paddingLeft: 2 }}>
                            {recipe.ingredients.map((ingredient, index) => (
                                <ListItem key={index} sx={{ paddingLeft: 1 }}>
                                    • {ingredient}
                                </ListItem>
                            ))}
                        </List>

                        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold" }}>Instructions:</Typography>
                        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                            {recipe.instructions}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid2>
    );
})
export default RecipeDetails;