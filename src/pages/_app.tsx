import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/layout";
import "~/styles/globals.css";
import { MeshProvider } from "@meshsdk/react";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <>
      <MeshProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MeshProvider>
    </>
  );
};

export default MyApp;
