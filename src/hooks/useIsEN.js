import { useLocation } from '@reach/router'
  
const useIsEN = () => {
  const sliced = useLocation().pathname.slice(0,4)
  console.log('sliced: ', sliced, ', location: ', useLocation(), ', isEN: ', (sliced === '/en/' || (sliced.length === 3 && sliced === '/en')))
  if (sliced === '/en/' || (sliced.length === 3 && sliced === '/en')) {
    return true
  } else {
    return false
  }
}

export default useIsEN
