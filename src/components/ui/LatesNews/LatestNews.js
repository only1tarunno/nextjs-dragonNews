import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import banner from "@/assests/banner.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
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
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-3">
                By Fardin Rahman - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Grid
          mt={4}
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
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
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Fardin Rahman - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
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
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Fardin Rahman - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
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
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Fardin Rahman - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
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
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Fardin Rahman - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
