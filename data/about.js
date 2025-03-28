import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon, TwitterIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github, twitter } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta
          name="description"
          content="Hi, I'm Lennon Ruthven. I'm a Health and Social Care student and a lifelong learner. I'm passionate about occultism, self-development and fitness, and sharing what I learn along the way."
        />
      </Head>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="portrait of Curtis Warcup"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Lennon Ruthven. I live in a town in North Northamptonshire.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                "Why do I see through my eyes and not yours" and "What am I doing here?" are examples
		of questions that went through my young, innocent 14 year old mind.
              </p>
              <p>
                I sought answers.
              </p>
              <p>
                I began experimenting with psychedelics.
              </p>
              <p>
                I began lucid dreaming and astral projecting.
              </p>
              <p>
                I overcame my smoking addiction.
              </p>
              <p>
                I learn't that we can live better lives under the roof of truth; the only opportunity we have in this
		lifetime is to evolve with the truth because through truth do we evolve.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={twitter} icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                lennonruthven@outlook.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Analytics />
    </>
  )
}
