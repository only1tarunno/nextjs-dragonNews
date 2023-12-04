import { catNews } from "@/utils/getCatNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const DynamicNews = async ({ params, searchParams }) => {
  const { data } = await catNews(searchParams.category);
  //   console.log(data);
  return (
    <div className="my-5">
      <h1>
        Total {searchParams.category} news : {data.length}
      </h1>
      <Grid
        mt={4}
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((item) => (
          <Grid key={item._id} item xs={6}>
            <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={item.thumbnail_url}
                      alt="topNews"
                      width={800}
                      height={400}
                    />
                  </CardMedia>
                  <CardContent>
                    <span className="bg-[#F00] py-1 px-2 inline-block my-3 rounded  text-white">
                      {item.category}
                    </span>
                    <Typography gutterBottom className="text-xl">
                      {item.title.length > 0
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                    </Typography>
                    <Typography gutterBottom className="my-3">
                      By {item.author.name} - {item.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.details.length > 0
                        ? item.details.slice(0, 100) + "..."
                        : item.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNews;
