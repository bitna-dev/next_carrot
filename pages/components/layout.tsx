import type { NextPage } from "next";
import Head from "next/head";
import cls from "../libs/utils";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  title?: string;
  canGoback?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}
const Layout: NextPage<LayoutProps> = ({
  title,
  canGoback,
  hasTabBar,
  children,
}) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className="bg-white w-full max-w-lg text-lg font-medium py-3 px-4 fixed text-gray-700 border-b top-0 flex items-center justify-center">
        {canGoback ? (
          <button onClick={onClick} className="absolute left-4">
            &larr;
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white w-full max-w-lg text-gray-800 border-t fixed bottom-0 pb-5 pt-3 flex justify-between items-center text-sm px-10">
          <Link
            href="/"
            className={cls(
              "flex flex-col items-center space-y-2",
              router.pathname === "/"
                ? "text-orange-500"
                : "hover:text-gray-500 transition-colors"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Home</span>
          </Link>
          <Link
            href="/community"
            className={cls(
              "flex flex-col items-center space-y-2",
              router.pathname === "/community"
                ? "text-orange-500"
                : "hover:text-gray-500 transition-colors"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>

            <span>동네생활</span>
          </Link>
          <Link
            href="/chats"
            className={cls(
              "flex flex-col items-center space-y-2",
              router.pathname === "/chats"
                ? "text-orange-500"
                : "hover:text-gray-500 transition-colors"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <span>메세지</span>
          </Link>
          <Link
            href="/streams"
            className={cls(
              "flex flex-col items-center space-y-2",
              router.pathname === "/streams"
                ? "text-orange-500"
                : "hover:text-gray-500 transition-colors"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span>라이브</span>
          </Link>
          <Link
            href="/profile"
            className={cls(
              "flex flex-col items-center space-y-2",
              router.pathname === "/profile"
                ? "text-orange-500"
                : "hover:text-gray-500 transition-colors"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span>내정보</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
