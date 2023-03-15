import projectsData from '@/data/projectsData'

import ProjectCard from '@/components/ProjectCard'
import AnimatedDiv from '@/components/framer-motion/AnimatedDiv'
import { FadeContainer } from '../lib/FramerMotionVariants'
import Link from '@/components/Link'

const RecentProjects = ({ MAX_PROJECTS }) => {
  const projectsList = projectsData.slice(0, MAX_PROJECTS)

  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="my-4">
          <span className="font-poppins title-font text-3xl font-bold"> Yes </span>
        </div>
        <div className="mt-5 flex justify-end text-base font-medium leading-6">
          <Link href="/projects" className="mt-5 hover:text-primary-400" aria-label="all posts">
            All Projects &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}

export default RecentProjects
