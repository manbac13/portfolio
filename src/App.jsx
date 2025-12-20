import Fallback from "components/common/fallBack";
import Layout from "layout";
import { lazy, Suspense } from "react";

const LandingPage = lazy(() => import("pages/landing"));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<Fallback />}>
          <LandingPage />
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
