import RootLayout from "@/components/Layouts/RootLayout";

function NewsDetailPage({ news }) {
  return (
    <div>
      <h1>Title: {news?.title}</h1>
      <h1>ID: {news?.id}</h1>
    </div>
  );
}

export default NewsDetailPage;

// Navber & Footer Section ---------------------------------
NewsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// Dynamic ID ------------------------------------------------
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const newses = await res.json();

  const paths = newses?.map((news) => ({
    params: { newsId: news?.id },
  }));

  return { paths, fallback: false };
};

// Dynamic Data ------------------------------------------------
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
    revalidate: 10,
  };
};
// export const getStaticProps = async () => {
//   return {
//     props: {},
//   };
//   revalidate: 10,
// };
