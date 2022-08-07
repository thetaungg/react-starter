import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import FullscreenSpinner from '@/components/FullscreenSpinner/FullscreenSpinner';
import { ROUTES } from '@/utils/constants';

import { Home, PageNotFound } from './routes';

const AppRouter = () => {
    return (
        <Suspense fallback={<FullscreenSpinner />}>
            <Switch>
                <Route path={ROUTES.HOME} exact component={Home} />

                <Route component={PageNotFound} />
            </Switch>
        </Suspense>
    );
};

export default AppRouter;
