"use client";
import imgFullstack from "@/assets/fullstack.svg";
import imgApp from "@/assets/app.svg";
import imgNetwork from "@/assets/network.svg";
import imgAi from "@/assets/ai.svg";
import imgSoftware from "@/assets/software.svg";
import imgDevops from "@/assets/devops.svg";
import { useState } from "react";

const all = [
  {
    fullstack: [
      {
        title: "fullstack",
        photo: imgFullstack,
      },
      {
        title: "fullstack",
        photo: imgFullstack,
      },
    ],
  },
  {
    ai: [
      {
        title: "ai",
        photo: imgAi,
      },
      {
        title: "ai",
        photo: imgAi,
      },
    ],
  },
  {
    app: [
      {
        title: "app",
        photo: imgApp,
      },
      {
        title: "app",
        photo: imgApp,
      },
    ],
  },
  {
    devops: [
      {
        title: "devops",
        photo: imgDevops,
      },
      {
        title: "devops",
        photo: imgDevops,
      },
    ],
  },
  {
    software: [
      {
        title: "Software",
        photo: imgSoftware,
      },
      {
        title: "Software",
        photo: imgSoftware,
      },
    ],
  },
  {
    network: [
      {
        title: "network",
        photo: imgNetwork,
      },
      {
        title: "network",
        photo: imgNetwork,
      },
    ],
  },
];

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState(all);

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 m-4">
        <button onClick={() => setSelectedCategory(all)}>All</button>
        <button onClick={() => setSelectedCategory(all[0].fullstack)}>FullStack</button>
        <button onClick={() => setSelectedCategory(all[1].ai)}>AI Engineering</button>
        <button onClick={() => setSelectedCategory(all[2].app)}>App Development</button>
        <button onClick={() => setSelectedCategory(all[3].devops)}>Devops</button>
        <button onClick={() => setSelectedCategory(all[4].software)}>Software Development</button>
        <button onClick={() => setSelectedCategory(all[5].network)}>Network Engineering</button>
      </div>
      <div>
        {selectedCategory.map((category, i) => (
          <div key={i}>
            {category.map((item, j) => (
              <div key={j}>
                <p>{item.title}</p>
                <img src={item.photo} alt={item.title} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
