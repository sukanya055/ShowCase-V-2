import React, { lazy, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Hero from '../Pages/Hero/Hero';
import ErrorFallback from '../share/ErrorFallBack';

const Amazing = lazy(() => import('../Pages/Amazing/Amazing'))
const Count = lazy(() => import('../Pages/Count/Count'))
const WorksAndQuotes = lazy(() => import('../Pages/WorksAndQuotes/WorksAndQuotes'))



const Home = () => {

   
    return (
        <div>
            <Hero />
            {/* <PFd/> */}
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                }}
            >

                <Suspense fallback={<div>
                    <p className='text-center py-5'>Loading...</p>
                </div>}>
                    <section>
                        <Amazing />
                        <Count />
                        <WorksAndQuotes />
                    </section>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default Home;