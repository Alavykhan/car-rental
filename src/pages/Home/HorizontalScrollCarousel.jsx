import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import Car from './Car';

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const [cars, setCars]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
          {
            cars.map(car=><Car
            key={car.id}
            car={car}></Car>)
          }
          </motion.div>
        </div>
      </section>
    );
};

export default HorizontalScrollCarousel;