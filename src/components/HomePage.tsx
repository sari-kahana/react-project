import { Typography, Box } from "@mui/material";
import { GiCook, GiForkKnifeSpoon } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold" color="#ff7e5f" gutterBottom>
          Welcome To The Recipes World!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ display: "flex", gap: "20px", marginTop: "20px" }}
      >
        <GiCook size={60} color="#ff7e5f" />
        <FaUtensils size={60} color="#ff7e5f" />
        <GiForkKnifeSpoon size={60} color="#ff7e5f" />
      </motion.div>
    </Box>
  );
};
export default HomePage;
