import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  Amazing,
  Count,
  ErrorFallback,
  GetStarted,
  Hero,
  Layout,
  WorkesAndQuotes,
} from "../components";
import Chat from "../components/ChatFile/Chat";
import CustomerReview from "../components/CustomerReview";
import Stores from "../components/Stores";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense
          fallback={
            <div>
              <p className="text-center py-5">Loading...</p>
            </div>
          }
        >
          <section>
            <Amazing />
            <Count />
            <WorkesAndQuotes />
            <GetStarted />
            {/* <CustomerReview />
            <Stores /> */}
          </section>
          <Chat />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Home;
