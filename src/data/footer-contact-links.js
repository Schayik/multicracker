import React from 'react'

import CallIcon from '../icons/call'
import ChatIcon from '../icons/chat'
import MailIcon from '../icons/mail'
import LocationIcon from '../icons/location'
import PersonIcon from '../icons/person'

export const links = [
  { Icon: CallIcon, link: "tel:0031486421510", text: "+31(0)486 421510", label: "Telefoon" },
  { Icon: ChatIcon, link: "https://wa.me/0031486421510", text: "+31(0)486 421510", label: "WhatsApp" },
  { Icon: MailIcon, link: "mailto:info@multicrackerbenelux.com", text: "info@multicrackerbenelux.com", label: "E-mail" }
]

export const location = {
  FooterIcon: LocationIcon,
  ContactIcon: PersonIcon,
  link: 'https://www.google.com/maps/place/Stoottroepenweg+2,+Velp,+Netherlands/@51.7446589,5.7283867,17z/data=!3m1!4b1!4m5!3m4!1s0x47c704f2a7540d2b:0x449d7968057cabb5!8m2!3d51.7446589!4d5.7305754',
  FooterText: () => <p>Ben Janssen-Bouwmeester<br/>Stoottroepenweg 2<br/>5363 VV Velp, Nederland</p>,
  ContactText: () => <p><strong>Multicracker Benelux</strong><br/>Ben Janssen-Bouwmeester<br/>Stoottroepenweg 2<br/>5363 VV Velp, Nederland<br/>KvK nummer: 20132623</p>,
}