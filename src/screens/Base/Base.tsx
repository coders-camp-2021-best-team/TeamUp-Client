import { Outlet } from 'react-router';

import { Header } from '../../components';

export const BaseScreen = () => {
    return (
        <div className='base-screen'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
