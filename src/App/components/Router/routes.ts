import { lazy } from 'react';

export const Home = lazy(() => import('@/pages/HomePage/HomePage'));

export const PageNotFound = lazy(() => import('@/pages/PageNotFound/PageNotFoundContainer'));
