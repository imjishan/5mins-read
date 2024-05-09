import ArticleItemList from "@/components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
import { FaTwitter } from "react-icons/fa";

const HomePage = () => {
  const articles = getCategorisedArticles();

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-10 flex flex-col gap-12 mb-10">
      <header className="font-poppins font-light text-4xl text-center gap-2">
        <h1>Jishan Ahmed</h1>
        <div className="flex gap-1 items-center justify-center">
          <p className="text-xl mr-6">Software Engineer</p>
          <FaTwitter size={20} />
          <p className="text-xl">@JishanCodes</p>
        </div>
      </header>
      <section className="md:grid md:grid-cols-3 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  );
};

export default HomePage;
