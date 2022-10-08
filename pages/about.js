import React from 'react'
import styles from '../styles/about.module.css'

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Hunting coder</h1>
            <h2 className={styles.h2}>Introduction</h2>
            <p className={styles.p}>When describing the services you offer, it’s very easy to get caught up in the ‘we’. But why wouldn’t you? The services page is about what ‘we’ (your company) can do, and how great you are at it.</p>
            <p className={styles.p}>I challenge you to take the approach that Medallia did with there services page. Although they make sure to mention how their services will turn into the solutions for their audience, they make sure to include the reader (or the potential customer) is involved within each of the services.</p>
            <h2 className={styles.h2}>Services</h2>
            <p className={styles.p}>I challenge you to take the approach that Medallia did with there services page. Although they make sure to mention how their services will turn into the solutions for their audience, they make sure to include the reader (or the potential customer) is involved within each of the services.</p>
            <p className={styles.p}></p>
            <ul>
                <li>Servicer 1</li>
                <li>Servicer 2</li>
                <li>Servicer 3</li>
                <li>Servicer 4</li>
                <li>Servicer 5</li>
                <li>Servicer 6</li>
            </ul>
            <h2 className={styles.h2}>Contact Us</h2>
            <p className={styles.p}>When describing the services you offer, it’s very easy to get caught up in the ‘we’. But why wouldn’t you? The services page is about what ‘we’ (your company) can do, and how great you are at it.</p>
            <p className={styles.p}>I challenge you to take the approach that Medallia did with there services page. Although they make sure to mention how their services will turn into the solutions for their audience, they make sure to include the reader (or the potential customer) is involved within each of the services.</p>
        </div>
    )
}

export default About
