import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideBottomNews from "@/assests/side-bottom-img.png";
import SidebarNewsCard from "./SidebarNewsCard";
import banner from "@/assests/banners.png";

const Siderbar = () => {
  return (
    <Box py={6}>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={banner} alt="topNews" width={800} height={400} />
          </CardMedia>
          <CardContent>
            <p className="bg-[#F00] py-1 px-2 inline-block my-5 rounded  text-white">
              Technology
            </p>
            <Typography gutterBottom className="text-xl">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Fardin Rahman - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Stack my={3} columnGap={2}>
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
      </Stack>

      <Box>
        <Image
          src={sideBottomNews}
          height={400}
          width={350}
          alt="rectangle world image"
        />
      </Box>
    </Box>
  );
};

export default Siderbar;
