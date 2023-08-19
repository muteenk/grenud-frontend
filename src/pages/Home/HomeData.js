
// Tech Stack Timeline logos
import androidStudio from "../../assets/home/techLogos/android-studio.png"
import aws from "../../assets/home/techLogos/aws.png"
import flutter from "../../assets/home/techLogos/flutter.png"
import node from "../../assets/home/techLogos/node.png"
import react from "../../assets/home/techLogos/react.png"
import salesforce from "../../assets/home/techLogos/salesforce.png"
import xcode from "../../assets/home/techLogos/xcode.png"
import git from "../../assets/home/techLogos/git.png"

// Tech Card Logos
import cloud from "../../assets/home/techCards/cloud.jpg"
import ai from "../../assets/home/techCards/AI.jpeg"
import automation from "../../assets/home/techCards/intelligentAutomation.jpeg"
import vr from "../../assets/home/techCards/vr.jpg"
import visualisation from "../../assets/home/techCards/visualisation.jpeg"




const techStackTimelineContent = [
    {
      title: "Android Applications",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: androidStudio,
      isLeft: true
    },
    {
      title: "Frontend Development (Single Page Application)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: react,
      isLeft: false
    },
    {
      title: "Backend Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: node,
      isLeft: true
    },
    {
      title: "Salesforce Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: salesforce,
      isLeft: false
    },
    {
      title: "IOS Applications",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: xcode,
      isLeft: true
    },
    {
      title: "Cross Platform Applications",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: flutter,
      isLeft: false
    },
    {
      title: "Version Control",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: git,
      isLeft: true
    },
    {
      title: "Cloud Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: aws,
      isLeft: false
    },
  
  ]




  const techCards = [
    {
        title: "Cloud Native",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
        img: cloud,
    },
    {
        title: "Artificial Intelligence",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
        img: ai,
    },
    {
        title: "Intelligent Automation",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
        img: automation,
    },
    {
        title: "Virtual Reality",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
        img: vr,
    },
    {
        title: "Data Visualisation",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
        img: visualisation,
    },
  ]




  const industryTabs = {
    "Financial Services": {
      id: 0,
      title: "Financial Services",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      link: "/financial",
    },
    "Healthcare": {
      id: 1,
      title: "Healthcare",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/healthcare",
    },
    "Retail": {
      id: 2,
      title: "Retail",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/retail",
    },
    "Education": {
      id: 3,
      title: "Education",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
      link: "/education",
    },
    "Real Estates": {
      id: 4,
      title: "Real Estates",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      link: "/realEstates",
    },
    "Manufacturing": {
      id: 5,
      title: "Manufacturing",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/manufacturing",
    },
    "Logistics": {
      id: 6,
      title: "Logistics",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis!",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/logistics",
    },
    "Non Profit": {
      id: 7,
      title: "Non Profit",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis! ",
      img: "https://images.unsplash.com/photo-1608052026785-0bc249c733e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80",
      link: "/nonProfit",
    },
    "Sports": {
      id: 8,
      title: "Sports",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis! ",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "/sports",
    },
    "Media": {
      id: 9,
      title: "Media",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis! ",
      img: "https://images.unsplash.com/photo-1612043071344-94c20c4c837e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      link: "/media",
    },
    "Sustainability": {
      id: 10,
      title: "Sustainability",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis! ",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzdGFpbmFiaWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/sustainability",
    },
    "Agriculture": {
      id: 11,
      title: "Agriculture",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minima vel maiores repellat id nihil. Sint vero rem sit veritatis! ",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/agriculture",
    },

  }



    export {techStackTimelineContent, techCards, industryTabs};