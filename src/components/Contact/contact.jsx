import './contact.scss'
import { ReactComponent as Email } from '../../assets/mail.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formState, setFormState] = useState({
    lastName: '',
    firstName: '',
    subject: '',
    email: '',
    message: '',
  })

  const [confirm, setConfirm] = useState('')
  const [confirmVisible, setConfirmVisible] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_portfolio', // Remplace par ton Service ID
        'template_portfolio', // Remplace par ton Template ID
        formState,
        'QeBm7uGs-Rbgo1Hq7' // Remplace par ton User ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setFormState({
          name: '',
          firstName: '',
          subject: '',
          email: '',
          message: '',
        })
        setConfirm('Le message à bien été envoyé')
        setConfirmVisible(true)
        setTimeout(() => {
          setConfirmVisible(false)
        }, 10000)
      })
      .catch((err) => {
        console.error('FAILED...', err)
        setConfirm(
          `En raison d'une erreur le message ne s'est pas envoyé correctement`
        )
        setConfirmVisible(true)
        setTimeout(() => {
          setConfirmVisible(false)
        }, 10000)
      })
  }

  return (
    <section className="contactSection padding" id="contact">
      <div className="contact margin">
        <h2 className="underline">CONTACTEZ MOI</h2>
        <div className="contact_group margin">
          <div className="contact_group_infos">
            <div className="contact_group_infos_element">
              <Phone className="contact_icon" />
              <h3>PAR TÉLÉPHONE</h3>
              <p>06 47 01 30 99</p>
            </div>
            <div className="contact_group_infos_separate"></div>
            <div className="contact_group_infos_element">
              <Email className="contact_icon" />
              <h3>PAR MAIL</h3>
              <p>steven.canivet@gmail.com</p>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="wrapper">
              <div className="wrapper_container">
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="lastName">
                    LastName
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Nom"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="firstName">
                    Firstname
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Prénom"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Objet"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wrapper_container_inputs">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="wrapper_message">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button className="button" type="submit">
              <span className="sr-only">Contact button</span>
              <FontAwesomeIcon icon={faPaperPlane} className="button_icon" />
            </button>
          </form>
          {confirmVisible && (
            <div>
              <p>{confirm}</p>
            </div>
          )}
        </div>
        <div className="thanks_wrapper margin">
          <h3 className="thanks_wrapper_title">MERCI POUR VOTRE ATTENTION</h3>
          <p className="thanks_wrapper_text">
            Téléchargez mon{' '}
            {
              <a href="/omf.jpg" download="omf.jpg">
                CV
              </a>
            }{' '}
            si vous souhaitez plus d'informations
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
