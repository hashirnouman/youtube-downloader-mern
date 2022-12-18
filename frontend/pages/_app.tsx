import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import AdminLayout from "../Layout/Admin/AdminLayout";
import { Suspense } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname.includes("admin") ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <Suspense fallback={<div>loading</div>}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Suspense>
      )}
    </>
  );
}
