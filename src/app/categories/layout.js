import CatList from "@/components/ui/CatList/CatList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CatList></CatList>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
