import type { NextPage } from "next";
import Layout from "../components/layout";
import TextArea from "../components/textarea";
import Button from "../components/button";

const Write: NextPage = () => {
  return (
    <Layout canGoback title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question" />
        <Button text="submit" />
      </form>
    </Layout>
  );
};

export default Write;
