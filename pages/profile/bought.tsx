import type { NextPage } from "next";
import Layout from "../components/layout";
import Item from "../components/item";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" hasTabBar canGoback>
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

export default Bought;
