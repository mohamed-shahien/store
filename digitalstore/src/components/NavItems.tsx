"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

function NavItems() {
  const [activeIndex,setActiveIndex] = useState<null | number>(null);
  useEffect(()=>{
    const handler = (e : KeyboardEvent) => {
      if(e.key === 'Escape') {
        setActiveIndex(null)
      }
    }
    document.addEventListener("keydown",handler);
    // اسال حد من الفرونت اند على دو ل
    // هذا ضروري لمنع حدوث تسرب للذاكرة.
    return ()=>{
      document.removeEventListener("keydown",handler)
    }
  }, [])
  const isAnyOpen = activeIndex !== null
  const navref = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(navref, () => setActiveIndex(null))
  return (
  <div className="flex gap-4 h-full" ref={navref}>
    {PRODUCT_CATEGORIES.map((category, i ) => {
      const handelOpen = () => {
        if(activeIndex === i ){
          setActiveIndex(null)
        }else {
          setActiveIndex(i)
        }
      }
      const isOpen = i === activeIndex;
      return <NavItem category={category} handleOpen={handelOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} key={category.value} />
    })}
  </div>
  )
}

export default NavItems