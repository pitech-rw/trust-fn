import React from 'react';
import ServicesLayout from './layout';

const Page: React.FC = () => {
    return (
        <ServicesLayout>
            <div>
                <h1>Page Title</h1>
                <p>This is the content of the page.</p>
            </div>
        </ServicesLayout>
    );
};

export default Page;