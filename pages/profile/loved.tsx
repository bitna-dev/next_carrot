import type { NextPage } from "next";
import Layout from "../components/layout";
import Item from "../components/item";

const Loved: NextPage = () => {
  return (
    <Layout title="관심목록" hasTabBar canGoback>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="Iphone 15"
            price={99}
            comments={11}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
