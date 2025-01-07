import styles from './servicesOverview.module.css';
import Link from 'next/link'

const services = [
  { id: 1, name: 'Cleaning', description: 'Professional home cleaning services.', icon: '🧹' },
  { id: 2, name: 'Gardening', description: 'Expert gardening services for your home.', icon: '🌿' },
  { id: 3, name: 'Handyman', description: 'Skilled handyman services for all your needs.', icon: '🛠' },
  {id: 4, name: 'Delivery', description: 'Fast and reliable delivery services for your home errands.', icon: '🛵'}
];

const ServicesOverview = () => {
  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.title}>Popular Services</h2>
      <div className={styles.servicesContainer}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <Link href={`/ui/services/${service.name.toLowerCase()}`} className={styles.learnMore}>Request</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;