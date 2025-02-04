import { Link } from "react-router";
import { navStyle } from "./Style";
import { Button, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./MyUserContext";

const Menu = () => {
    const [isConnected, setIsConnected] = useState(false);
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (user.id) {
            setIsConnected(true);
        }
    }, [user.id]);

    return (
        <>
            <Box style={navStyle} sx={{ display: "flex", gap: 3 }}>
                <Button component={Link} to="Recipies" sx={{ color: "#42a5f5" }}>
                    🍽️ All Recipes
                </Button>
                {isConnected && <Button component={Link} to="AddRecipe" sx={{ color: "#42a5f5" }}>
                    ➕ Add Recipe
                </Button>}
                <Button component={Link} to="HomePage" sx={{ color: "#42a5f5" }}>
                    🏠 Home
                </Button>
            </Box>
        </>
    )
}
export default Menu;