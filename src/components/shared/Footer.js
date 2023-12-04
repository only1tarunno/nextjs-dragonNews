import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <YouTubeIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color="gray" variant="body2" textAlign="center">
          @2023 Dragon News. Design by Programming Hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
