"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState } from "react"
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

function NavItems() {
  const [activeIndex,setActiveIndex] = useState<null | number>(null);
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
      const isOpen = i === activeIndex
      return <NavItem category={category} handleOpen={handelOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} key={category.value} />
    })}
  </div>
  )
}

export default NavItems