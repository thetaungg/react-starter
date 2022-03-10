import { lazy } from 'react';

export const HomeContainer = lazy(() => import('@/containers/Home/HomeContainer'));

export const PageNotFoundContainer = lazy(
    () => import('@/containers/PageNotFound/PageNotFoundContainer')
);
