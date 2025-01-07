"use client"
import { useEffect, useState } from 'react';
import Nav from '@/app/ui/shared/top navbar/nav';
import Footer from '@/app/ui/shared/footer/footer';
import Loading from '../../shared/suspense/loading';

const ServicePage = () => {
    const [service, setService] = useState(null);
    let serviceId = null;

    useEffect(() => {
        if (serviceId) {
            // Fetch the service details using the serviceId
            fetch(`/api/services/${serviceId}`)
                .then(response => response.json())
                .then(data => setService(data))
                .catch(error => console.error('Error fetching service:', error));
        }
    }, [serviceId]);

    if (!service) {
        return  <Loading />;
    }

    return (
        <div>
            <h1>{service}</h1>
            <p>{service}</p>
            {/* Add more service details as needed */}
        </div>
    );
};

export default ServicePage;