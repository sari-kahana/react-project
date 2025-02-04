import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { Recipe } from "../Types";

class RecipesStore {
    recipes: Recipe[] = [];
    loading = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    fetchRecipes = async () => {
        this.loading = true;
        this.error = null;
        try {
            const response = await axios.get("http://localhost:3000/api/recipes");
            runInAction(() => {
                this.recipes = response.data as Recipe[];
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = "Failed to fetch recipes";
                this.loading = false;
            });
        }
    };
    addRecipe = async (newRecipe: Recipe) => {

        this.loading = true;
        const userId = localStorage.getItem('userId'); 
        console.log("User ID שנשלח:", userId);  
        try {
            const response = await axios.post('http://localhost:3000/api/recipes', newRecipe, {
                headers: {
                    'user-id': userId 
                }
            });
            runInAction(() => {
                this.recipes.push(response.data.recipe);
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.loading = false;
            });
            console.error("שגיאה בהוספת המתכון:", error);
        }
    }
}
const recipesStore = new RecipesStore();
export default recipesStore;