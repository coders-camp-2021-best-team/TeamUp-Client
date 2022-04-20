import { Outlet } from 'react-router';

import { Header } from '../../components';

export const BaseScreen = () => {
    return (
        <div className='base-screen'>
            <Header />
            <main style={{ maxWidth: 480, margin: '0 auto' }}>
                <Outlet />
            </main>
        </div>
    );
};
