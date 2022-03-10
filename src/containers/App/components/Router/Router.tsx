import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import { HomeContainer, PageNotFoundContainer } from './routes';
import Spinner from '@/components/Spinner/Spinner';

const AppRouter = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path={ROUTES.HOME} exact component={HomeContainer} />

                <Route component={PageNotFoundContainer} />
            </Switch>
        </Suspense>
    );
};

export default AppRouter;
