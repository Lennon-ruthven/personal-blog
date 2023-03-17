import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall, IoLogoTwitter } from 'react-icons/io5'
import Notification from './Notification'
import portraitImage from '../public/static/images/avatar.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1 " {...props}>
      <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1 " {...props}>
      <Icon
        className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200"
        onClick={handleClick}
      />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

export default function Hero() {
  return (
  <div>
   <div className="flex flex-col items-center xl:flex-row gap-x-12 mb-12">
    <div className="mb-5 max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        Spirituality enthusiast, and fitness junkie
      </h1>
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
        I'm Lennon, a student of Health and Social Care based in England, Northamptonshire.
      </p>
    </div>
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center pt-8 my-2 space-x-2">
        <Image
          src={portraitImage}
          alt="portrait of Lennon Ruthven"
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
      </div>
    </div>
   </div>
          
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://twitter.com/lennonruthven"
          aria-label="Check out my Twitter"
          icon={IoLogoTwitter}
        />
        <CopyToClipboard
          text={{ contact: 'lennonruthven@outlook.com', type: 'Email' }}
          aria-label="Send me an email"
          icon={IoMail}
        />
  
    </div>
  </div>

  )
}
// <div className="flex flex-col w-full">
//   <div className="pb-4 space-y-2 text-center md:space-y-5 md:text-left">
//     <PageTitle>Web Developer, Tech Enthusiast, and Fitness Junkie</PageTitle>
//     <p className="pb-4 text-lg leading-7 prose text-gray-400 max-w-none">
//       Technology enthusiast experienced in consumer electronics industry. I believe the optimal
//       code is achieved when the user and development experience is frictionless and intuitive.{' '}
//       <Link href={`mailto:${siteMetadata.email}`}>
//         <a
//           className="font-medium leading-6 "
//           aria-label={`Email to ${siteMetadata.email}`}
//           title={`Email to ${siteMetadata.email}`}
//         >
//           Get in touch &rarr;
//         </a>
//       </Link>
//     </p>
//   </div>
// </div>
