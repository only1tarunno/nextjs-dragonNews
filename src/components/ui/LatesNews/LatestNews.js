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
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
  const { data } = await getAllNews();
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
          {data.slice(0, 4).map((news) => (
            <Grid key={news.id} item xs={6}>
              <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                {" "}
                <Card>
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src={news.thumbnail_url}
                        width={800}
                        height={300}
                        alt="top news"
                      />
                    </CardMedia>
                    <CardContent>
                      <p
                        className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
                      >
                        {news.category}
                      </p>
                      <Typography gutterBottom>
                        {news.title.length > 30
                          ? news.title.slice(0, 30) + "..."
                          : news.title}
                      </Typography>
                      <Typography gutterBottom className="my-3">
                        By Tanmoy Parvez - Mar 18 2023
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout........
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
