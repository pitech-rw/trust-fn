"use client"

import { useState, useEffect} from 'react'
import styles from './nav.module.css'
import Link from 'next/link'

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const navItems = {
        '/#': "Services",
        "/#hiw": "How It Works",
        '/auth': "Join",
        '/lang': "Ururimi"
    }

    const services = [
        {path: '/services/cleaning', label: 'Cleaning'},
        {path: '/services/gardening', label: 'Gardening'}
    ]

    const languages = [
        {path: '/en', label: 'English'},
        {path: '/fr', label: 'Francais'},
        {path: '/kin', label: 'Kinyarwanda'}
    ]
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    useEffect(() => {
        const navListElt = document.querySelector('ul')

        if (mobileMenuOpen) {
            navListElt?.classList.remove(styles.navList)
            navListElt?.classList.add(styles.navListMobile)
        }
    }, [mobileMenuOpen])
    return (
        <div className={styles.navigation}>
            <div className={styles.nav_left}>
                <Link href='/'><h1>Trust</h1></Link>
            </div>
            <div className= {styles.nav_right}>
                <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                     ☰
                </button>
                <ul className={`${styles.navList} ${mobileMenuOpen? styles.navListMobile : ''}`}>
                    {
                        Object.entries(navItems).map(([path, label]) => (
                            <li
                              key={path}
                              onMouseEnter={() => setHoveredItem(label)}
                              onMouseLeave={() => setHoveredItem(null)}
                            ><Link href={path}> {label}</Link>
                            {label === 'Services' && hoveredItem === 'Services' && (
                                <ul className={styles.dropdownMenu}>
                                    {services.map((item) => (
                                        <li key={item.path}>
                                            <Link href={item.path}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {label === 'Ururimi' && hoveredItem === 'Ururimi' && (
                                <ul className={styles.dropdownMenu}>
                                    {languages.map((item) => (
                                        <li key={item.path}>
                                            <Link href={item.path}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav