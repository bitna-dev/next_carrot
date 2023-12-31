import type { NextPage } from "next";
import Layout from "../components/layout";
import Input from "../components/input";
import TextArea from "../components/textarea";
import Button from "../components/button";

const Create: NextPage = () => {
  return (
    <Layout title="Create Stream" hasTabBar canGoback>
      <form className="space-y-5 px-4">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go Live" />
      </form>
    </Layout>
  );
};

export default Create;
