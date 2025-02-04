import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { styleForm } from "./Style";
import { Recipe } from "../Types";
import recipesStore from "./RecipesStore";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    authorId: yup.number().positive().integer().required("Author ID is required"),
    ingredients: yup.string().required("Ingredients are required"),
    instructions: yup.string().required("Instructions are required"),
});

const AddRecipe = () => {

    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        const newRecipe = {
            title: data.title,
            description: data.description,
            authorId: Number(data.authorId),
            ingredients: data.ingredients.split(","),
            instructions: data.instructions,
        };

        await recipesStore.addRecipe(newRecipe as Recipe);
        navigate("/Recipies");
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={styleForm}>
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
                    🍳 Add New Recipe
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <TextField
                        label="Title"
                        {...register("title")}
                        fullWidth
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        required
                    />
                    <TextField
                        label="Description"
                        {...register("description")}
                        fullWidth
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        required
                        multiline
                    />
                    <TextField
                        type="number"
                        label="Author ID"
                        {...register("authorId")}
                        fullWidth
                        error={!!errors.authorId}
                        helperText={errors.authorId?.message}
                        required
                    />
                    <TextField
                        label="Ingredients (comma-separated)"
                        {...register("ingredients")}
                        fullWidth
                        error={!!errors.ingredients}
                        helperText={errors.ingredients?.message}
                        required
                    />
                    <TextField
                        label="Instructions"
                        {...register("instructions")}
                        fullWidth
                        error={!!errors.instructions}
                        helperText={errors.instructions?.message}
                        required
                        multiline
                        rows={4}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        🚀 Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
    // const titleRef = useRef<HTMLInputElement>(null)
    // const descriptionRef = useRef<HTMLInputElement>(null)
    // const authorRef = useRef<HTMLInputElement>(null)
    // const ingredientsRef = useRef<HTMLInputElement>(null)
    // const instructionsRef = useRef<HTMLInputElement>(null)

    // const handleSubmit = async (e:FormEvent) => {
    //     e.preventDefault();
    //     const newRecipe = {
    //         title: titleRef.current?.value || "",
    //         description: descriptionRef.current?.value || "",
    //         authorId: Number(authorRef.current?.value) || 0,
    //         ingredients: ingredientsRef.current?.value?.split(",") || [],
    //         instructions: instructionsRef.current?.value || "",
    //     };
    //     await recipesStore.addRecipe(newRecipe as Recipe)
    //     navigate("/Recipies");
    //     setOpen(false);
    // }
    // return (
    //     <>
    //         <Modal open={open} onClose={() => setOpen(false)}>
    //             <Box sx={styleForm}>
    //                 <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
    //                     🍳 Add New Recipe
    //                 </Typography>
    //                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    //                     <TextField label="Title" inputRef={titleRef} fullWidth required />
    //                     <TextField label="Description" inputRef={descriptionRef} fullWidth required multiline />
    //                     <TextField type="number" label="Author ID" inputRef={authorRef} fullWidth required />
    //                     <TextField label="Ingredients (comma-separated)" inputRef={ingredientsRef} fullWidth required />
    //                     <TextField label="Instructions" inputRef={instructionsRef} fullWidth required multiline rows={4} />
    //                     <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
    //                         🚀 Submit
    //                     </Button>
    //                 </form>
    //             </Box>
    //         </Modal>
    //     </>
    // );
}
export default AddRecipe;


