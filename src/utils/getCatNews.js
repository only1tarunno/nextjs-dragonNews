export const catNews = async (cat) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news?category=${cat}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
