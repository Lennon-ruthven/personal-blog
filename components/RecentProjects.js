import projectsData from '@/data/projectsData'

import ProjectCard from '@/components/ProjectCard'
import AnimatedDiv from '@/components/framer-motion/AnimatedDiv'
import { FadeContainer } from '../lib/FramerMotionVariants'
import Link from '@/components/Link'

const RecentProjects = ({ MAX_PROJECTS }) => {
  const projectsList = projectsData.slice(0, MAX_PROJECTS)

  return (
    <>

    </>
  )
}

export default RecentProjects
