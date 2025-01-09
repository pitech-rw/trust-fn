"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './page.module.css'

const ServicePage = () => {
    const [service, setService] = useState(null);
    let serviceId = null;

    let serviceProviders = [
        {
            id: 1,
            name: 'RL Grime',
            title: 'Cleaner',
            description: 'Excellent, all around house helper with a special touch for dishes and laundry.',
            image: '/assets/providers/happy-dog.jpg',
            rating: 4.8
        },
        {
            id: 2,
            name: 'Diplo',
            title: 'Cleaner',
            description: 'Great with pets',
            image: '/assets/providers/happy-dog.jpg',
            rating: 5
        },
        {
            id: 3,
            name: 'Alison Wonderland',
            title: 'Cleaner',
            description: 'Specializes in deep cleaning. I\'m a perfectionist and I love to clean.',
            image: '/assets/providers/happy-dog.jpg',
            rating: 4.3
        }
    ];

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
            {serviceProviders.map((provider) => (
                <div key={provider.id} className={styles['service-provider-card']}>
                    <div className={styles['card-header-shot']}>
                        <Image fill src={provider.image} alt='Happy dog' />
                    </div>
                    <div className={styles['card-body']}>
                        <h3 className={styles['provider-name']}>{provider.name}</h3>
                        <p className={styles['provider-title']}>{provider.title}</p>
                        <p className={styles['provider-ratings']}>{provider.rating}</p>
                        <p className={styles['provider-description']}>{provider.description}</p>
                        <div className={styles['card-footer']}>
                            <button className={styles['contact-button']}>Contact</button>
                            <button className={styles['view-profile-button']}>View profile</button>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
};

export default ServicePage;