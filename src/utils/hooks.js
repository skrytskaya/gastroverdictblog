import { useEffect } from 'react'

export const useScrollElementWindow = (elementRef, window, extraArgs) => {
    let className = 'hidden'
    if (extraArgs && extraArgs.className) className = extraArgs.className
    let pastScroll
    const onScroll = () => {
      let currentScrollPos = window.pageYOffset
      let scrollDiff
      if (typeof pastScroll === 'number') scrollDiff = currentScrollPos - pastScroll
      if (scrollDiff > 0) elementRef.current.classList.add(className)
      else elementRef.current.classList.remove(className)
      pastScroll = currentScrollPos
    }
  
    useEffect(() => {
      setTimeout(() => {
        window.onscroll = onScroll
      }, 0)
    }, [])
  }