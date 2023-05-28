const { Post } = require('../../components/post')
import { useRouter } from 'next/router'
const content = require('./works.json')

const Work = () => {
  const router = useRouter()
  const id = router.query.id

  const postContent = content[id]

  return Post(postContent, id)
}

export default Work
