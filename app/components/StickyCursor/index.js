"use client";
import React from 'react'
import styles from './style.module.scss'
import { motion, useMotionValue } from 'framer-motion'

function StickyCursor() {
  const mouse = {x: useMotionValue(500), y: useMotionValue(500)};


  const cursorSize = 20;

  const manageMouseMove = (e)=>{
    const {clientX, clientY} = e;
    mouse.x.set(clientX - cursorSize);
    mouse.y.set(clientY - cursorSize);
  }


  React.useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove)
    return ()=>{
      window.removeEventListener("mousemove", manageMouseMove);
    }
  });

  return (
    <motion.div
    style={{
      left: mouse.x,
      top: mouse.y
    }}

    className={styles.cursor}>
    </motion.div>
  )
}

export default StickyCursor
