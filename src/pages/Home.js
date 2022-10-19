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
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {

  console.log(document.cookie)

  
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
           {/*  <div>
              <h1>Design Customer Review</h1>
              <h1>Design New store on Show case</h1>
            </div> */}
            {/* <Testimonial/> */}
          </section>
          <Chat/>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Home;
