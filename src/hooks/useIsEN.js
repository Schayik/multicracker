import { withPrefix } from "gatsby"
import { useLocation } from '@reach/router'
  
const useIsEN = () => {
  const path = useLocation().pathname
  const withPre = withPrefix(path)
  const prefix = withPre.slice(0, withPre.length - path.length)
  const prefixLength = prefix.length ? prefix.length : 0

  const sliced = useLocation().pathname.slice(prefixLength, prefixLength + 4)

  if (sliced === '/en/' || (sliced.length === 3 && sliced === '/en')) {
    return true
  } else {
    return false
  }
}

export default useIsEN
