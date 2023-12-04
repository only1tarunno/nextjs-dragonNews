import { getAllCat } from "@/utils/getAllCat";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CatList = async () => {
  const { data: allCat } = await getAllCat();
  //   console.log(allCat);
  return (
    <Box className="bg-gray-100 p-5 mt-5">
      <Typography variant="h6" mb={2}>
        Category List
      </Typography>
      <Divider></Divider>
      <Stack rowGap={2} mt={2} className="w-full">
        {allCat.map((cat) => (
          <Link
            key={cat._id}
            href={`/categories/news?category=${cat.title.toLowerCase()}`}
            className="inline-block w-full"
          >
            <Button variant="outlined" className="w-full">
              {cat.title}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default CatList;
