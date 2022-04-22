import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { LoggedOutRoute } from './components/LoggedOutRoute';
import { ROUTES } from './routes/Routes';
import {
    BaseScreen,
    Chat,
    EmailConfirmation,
    Feed,
    ForgotPassword,
    Home,
    Login,
    Logout,
    NotFound,
    Posts,
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
                </Route>

                <Route
                    element={
                        <LoggedOutRoute>
                            <BaseScreen />
                        </LoggedOutRoute>
                    }
                >
                    <Route path={ROUTES.LOGIN} element={<Login />} />

                    <Route path={ROUTES.REGISTER} element={<Register />} />

                    <Route
                        path={`${ROUTES.RESET_PASSWORD}/:id`}
                        element={<ResetPassword />}
                    />

                    <Route
                        path={ROUTES.FORGOT_PASSWORD}
                        element={<ForgotPassword />}
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
                    <Route path={ROUTES.LOGOUT} element={<Logout />} />

                    <Route path={`${ROUTES.CHAT}/:id`} element={<Chat />} />

                    <Route path={ROUTES.FEED} element={<Feed />} />

                    <Route path={ROUTES.POSTS} element={<Posts />} />

                    <Route
                        path={`${ROUTES.PROFILE}/:username`}
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
