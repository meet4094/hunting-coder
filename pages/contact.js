import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, phone, desc };

    fetch('http://localhost:3000/api/contact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thanks for contacting us")
        setname('')
        setemail('')
        setphone('')
        setdesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input type="text" value={name} onChange={handleChange} className={styles.fromcontrol} id="name" name='name' req />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Enter your email</label>
          <input type="email" value={email} onChange={handleChange} className={styles.fromcontrol} id="email" name='email' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter your phone</label>
          <input type="number" value={phone} onChange={handleChange} className={styles.fromcontrol} id="phone" name='phone' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern</label>
          <textarea className={styles.fromcontrol} onChange={handleChange} value={desc} placeholder="Enter your concern" id="desc" name='desc' />
        </div>
        <button type="submit" className={styles.btnprimary}>Submit</button>
      </form>
    </div>
  )
}

export default Contact

