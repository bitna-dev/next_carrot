import type { NextPage } from "next";
import Layout from "../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout hasTabBar title="Upload Item" canGoback>
      <div className="px-4 sapce-y-5">
        <div>
          <div>
            <label className="w-full cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md hover:border-orange-500 hover:text-orange-500">
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input className="hidden" type="file" />
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            Price
          </label>
          <div className="rounded-md relative shadow-sm flex items-center">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-sm text-gray-500">$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="apperance-none pl-7 w-full px-3 py-2 border-gray-300 rounded-l-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="pr-3 flex items-center border border-l-0 border-gray-300 px-3 py-2.5 rounded-r-md">
              <span className="text-gray-500 text-sm">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            className="text-sm font-medium text-gray-700 mb-1 block"
            htmlFor="description"
          >
            Description
          </label>
          <div>
            <textarea
              id="description"
              rows={4}
              className=" mt-1 apperance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Upload Item
        </button>
      </div>
    </Layout>
  );
};

export default Upload;
