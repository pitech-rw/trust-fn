'use client'
import React, { FormEvent, useState, useEffect } from 'react'
import Nav from '@/app/ui/top navbar/nav'
import Footer from '../ui/footer/footer'
import styles from '../auth/signin.module.css'
import { z } from 'zod'
import { auth } from '../utils/server'
import { User } from '../utils/types'
import { useNotification } from '../ui/shared/notification/notificationContext'
const SignupPage = () => {
  const { addNotification } = useNotification()
  const [passwordMatch, setPasswordMatch] = useState(true) 
  const [serverError, setServerError] = useState(null)
    const handleSignup = async (e: any) => {
      e.preventDefault()

          const sanitizedResponse = await auth('/api/v1/auth/signup', formData)
          
          // check if the response has a message property
          if (sanitizedResponse.hasOwnProperty('message')) {
            setServerError(sanitizedResponse.message)
            // show the error message
            addNotification(sanitizedResponse.message, 'error')
            return null
          }
          const res = sanitizedResponse as Response
          const user = sanitizedResponse as User

          console.info(user)
          if (res.ok && user ) return user
          return null
    }

    // add a listener to the serverError state
    useEffect(() => {
      if (serverError) {
        addNotification(serverError, 'error')
      }
    }, [serverError])


  const [password_, setPassword_] = useState('x')
  const [formError, setFormError] = useState('')
  const [ formData, setFormData ] = useState({
      email: '',
      phone: '',
      password: '',
      
  })

  const passwords = z.object({
    password: z.string().min(8),
    password_: z.string().min(8)
  })
  .refine(
    (data) => data.password === data.password_, {
      message: "Passwords don't match",
      path: ["password_"]
    }
  )
  
  const checkPasswords = (e: any) => {
    const newP = e.target.value
    setPassword_(newP)
    useEffect(() => {
      const parsedP = passwords.safeParse({
        password: formData.password,
        password_: newP
      })
      if (parsedP.success) {
        // proceed to submitting form
        setFormError('')
        setPasswordMatch(true)
      } else {
        // diplay error message
        setFormError("Passwords don't match")
        setPasswordMatch(false)
        
      }


      }, [formData.password, password_])
  }

  const handleChange = (ev: { target: { name: any; value: any } }) => {
    const {name, value } = ev.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <main>
      <Nav />
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <h2 className={styles.title}>Register </h2>
          <button className= {styles.button}>
            Register
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder={formData.email}
              onChange={handleChange}
              required
            />
          </div>
            <div className={styles.formGroup}>
            <label htmlFor="telephone">Phone number</label>
            <input
                type="tel"
                name="phone"
                pattern="07[2389]\d{7}"                
                placeholder={formData.phone}
                onChange={handleChange}
                title='078 | 079 | 072 | 073'
                required
            />
            </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder={formData.password}
              minLength={8}
              onChange={handleChange}
              required
            />
          </div>
            <div className={styles.formGroup}>
            <label htmlFor='password_'>Re-type password</label>
            <input
                type='password'
                name='password_'
                placeholder={password_}
                minLength={8}
                onChange={checkPasswords}
                required
            />
            </div>
          <button type="submit" className={styles.submitButton} disabled={!passwordMatch}>
            Register
          </button>

          {
            formError && <div className={formError ? `${styles.error} ${styles.active}`: styles.error}>
              {formError}
            </div>
          }
        </form>
        </div>
        <Footer />
      </main>
    )
}

export default SignupPage