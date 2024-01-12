"use client";
import imgFullstack from "@/assets/fullstack.svg";
import imgApp from "@/assets/app.svg";
import imgNetwork from "@/assets/network.svg";
import imgAi from "@/assets/ai.svg";
import imgSoftware from "@/assets/software.svg";
import imgDevops from "@/assets/devops.svg";
import { useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@mui/material";

type AllItems = { category: string; title: string; photo: string };

const all: AllItems[] = [
  {
    category: 'Fullstack',
    title: "fullstack1",
    photo: imgFullstack
  },
  {
    category: 'Fullstack',
    title: "fullstack2",
    photo: imgFullstack
  },
  {
    category: 'Ai',
    title: "ai1",
    photo: imgAi
  },
  {
    category: 'Ai',
    title: "ai1",
    photo: imgAi
  },
  {
    category: 'Ai',
    title: "ai1",
    photo: imgAi
  },
  {
    category: 'Ai',
    title: "ai2",
    photo: imgAi
  },
  {
    category: 'App',
    title: "app1",
    photo: imgApp
  },
  {
    category: 'App',
    title: "app2",
    photo: imgApp
  },
  {
    category: 'App',
    title: "app1",
    photo: imgApp
  },
  {
    category: 'App',
    title: "app2",
    photo: imgApp
  },
  {
    category: 'Devops',
    title: "devops1",
    photo: imgDevops
  },
  {
    category: 'Devops',
    title: "devops2",
    photo: imgDevops
  },
  
  {
    category: 'Software',
    title: "Software1",
    photo: imgSoftware
  },
  {
    category: 'Software',
    title: "Software1",
    photo: imgSoftware
  },
  {
    category: 'Software',
    title: "Software1",
    photo: imgSoftware
  },
  {
    category: 'Software',
    title: "Software2",
    photo: imgSoftware
  },
  {
    category: 'Network',
    title: "network1",
    photo: imgNetwork
  },
  {
    category: 'Network',
    title: "network2",
    photo: imgNetwork
  },
];

const categories = Array.from(new Set(all.map((val) => val.category)));

export default function Filter() {
  const [items, setItems] = useState(all);

  const filterItems = (cat) => {
    if (cat === 'All') {
      setItems(all);
    } else {
      const newItems = all.filter((newval) => newval.category === cat);
      setItems(newItems);
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-4 m-4 p-1">
        <Button onClick={() => filterItems('All')} >All</Button>
        {categories.map((val, i) => (
          <div key={i}>
            <Button onClick={() => filterItems(val)} >{val}</Button>
          </div>
        ))}
      </div>
      < motion.div layout >
        <AnimatePresence>
          <div className="grid grid-rows-2 grid-cols-3 gap-4 p-4">
            {items.map((item, i) => (
                <motion.div transition={{delay : i * 0.05}}
                  animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, scale: 0 }} layout key={Math.random()}  className="flex justify-center">
                  <div className="flex flex-col items-center bg-mantle p-2 m-4">
                    <p className="text-xl m-1">{item.title}</p>
                    <Image src={item.photo} alt={item.title} className="w-64 h-64"></Image>
                  </div>
                </motion.div>
            ))}
          </div >
        </AnimatePresence>
      </motion.div>
    </div >
  );
}
