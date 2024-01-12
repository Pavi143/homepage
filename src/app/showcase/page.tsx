"use client";
import imgAi from "@/assets/ai.svg";
import imgApp from "@/assets/app.svg";
import imgDevops from "@/assets/devops.svg";
import imgFullstack from "@/assets/fullstack.svg";
import imgNetwork from "@/assets/network.svg";
import imgSoftware from "@/assets/software.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from "react";

type AllItems = { category: string; title: string; photo: string };

export default function Filter() {
  const [all, setAll] = useState<AllItems[]>([])
  const [items, setItems] = useState<AllItems[]>([]);

  const filterItems = (cat: string) => {
    if (cat === 'All') {
      setItems(all);
    } else {
      const newItems = all.filter((newval) => newval.category === cat);
      setItems(newItems);
    }
  };

  const getKey = (item: AllItems) => {
    return all.findIndex(a => a.category === item.category && a.title === item.title)
  }

  useEffect(() => {
    const _all: AllItems[] = [
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
        title: "ai2",
        photo: imgAi
      },
      {
        category: 'Ai',
        title: "ai3",
        photo: imgAi
      },
      {
        category: 'Ai',
        title: "ai4",
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
        title: "app3",
        photo: imgApp
      },
      {
        category: 'App',
        title: "app4",
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
        title: "Software2",
        photo: imgSoftware
      },
      {
        category: 'Software',
        title: "Software3",
        photo: imgSoftware
      },
      {
        category: 'Software',
        title: "Software4",
        photo: imgSoftware
      },
      {
        category: 'Network',
        title: "network2",
        photo: imgNetwork
      },
      {
        category: 'Network',
        title: "network3",
        photo: imgNetwork
      },
    ].map((item) => ({ ...item, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ sort, ...rest }) => rest);
    setAll(_all)
    setItems(_all)
  }, [])

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-4 m-4 p-1">
        <button onClick={() => filterItems('All')} >All</button>
        {Array.from(new Set(all.map((val) => val.category))).map((val, i) => (
          <div key={i}>
            <button onClick={() => filterItems(val)} >{val}</button>
          </div>
        ))}
      </div>
      < motion.div layout >
        <AnimatePresence>
          <div className="grid grid-cols-3 gap-4 p-4">
            {items.map((item, i) => (
              <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout key={getKey(item)} className="flex justify-center">
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
