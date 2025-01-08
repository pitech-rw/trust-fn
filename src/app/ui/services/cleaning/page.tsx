"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

    /*if (!service) {
        return  <Loading />;
    }*/

    return (
        <div>
            <h1>Available cleaning service providers</h1>
            <div className='service-provider-card'>
                <div className='card-header'>
                    <Image src='/assets/providers/happy-dog.jpg' alt='Happy dog' />
                </div>
                <div className='card-body'>
                    <h3 className='provider-name'>RL Grime</h3>
                    <p className='provider-title'>Cleaner</p>
                    <p className='provider-description'>Excellent, all-round house helper</p>
                    <div className='card-footer'>
                        <button className='contact-button'>Contact</button>
                        <button className='view-profile-button'>View profile</button>
                    </div>
                </div>
            </div>
            <p>{service}</p>
            {/* Add more service details as needed */}
        </div>
    );
};

export default ServicePage;