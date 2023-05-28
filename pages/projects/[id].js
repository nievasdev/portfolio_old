const { Post } = require('../../components/post')
import { useRouter } from 'next/router'
const content = require('./projects.json')

const Project = () => {
  const router = useRouter()
  const id = router.query.id

  const postContent = content[id]

  return Post(postContent, id, true)
}

export default Project
