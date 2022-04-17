import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { ROUTES } from './routes/Routes';
import {
    BaseScreen,
    Chat,
    EmailConfirmation,
    Feed,
    Home,
    Login,
    NotFound,
    Post,
    Profile,
    Register,
    ResetPassword,
    Search
} from './screens';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseScreen />}>
                    <Route path={ROUTES.HOME} element={<Home />} />

                    <Route path={ROUTES.LOGIN} element={<Login />} />

                    <Route path={ROUTES.REGISTER} element={<Register />} />

                    <Route
                        path={ROUTES.RESET_PASSWORD}
                        element={<ResetPassword />}
                    />

                    <Route
                        path={ROUTES.CONFIRMATION_EMAIL}
                        element={<EmailConfirmation />}
                    />
                </Route>

                <Route
                    element={
                        <ProtectedRoute>
                            <BaseScreen />
                        </ProtectedRoute>
                    }
                >
                    <Route path={`${ROUTES.CHAT}/:id`} element={<Chat />} />

                    <Route path={ROUTES.FEED} element={<Feed />} />

                    <Route path={ROUTES.POST} element={<Post />} />

                    <Route
                        path={`${ROUTES.PROFILE}/:id`}
                        element={<Profile />}
                    />

                    <Route path={ROUTES.SEARCH} element={<Search />} />
                </Route>

                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />

                <Route
                    path='*'
                    element={<Navigate to={ROUTES.NOT_FOUND} replace />}
                />
            </Routes>
        </BrowserRouter>
    );
};
