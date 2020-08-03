import { useLocation } from '@reach/router'
  
const useIsEN = () => {
  const sliced = useLocation().pathname.slice(0,4)
  if (sliced === '/en/' || (sliced.length === 3 && sliced === '/en')) {
    return true
  } else {
    return false
  }
}

export default useIsEN
