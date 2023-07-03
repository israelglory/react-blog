//import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header.js';
import FeaturedNews from './components/featured_news';
import RegularNews from './components/regular_news';
import CopyRight from './components/copright';
import HomeRegularNews from './components/home_regular_news';
import SectionTitile from './components/section_title';

function App() {
  const [title, setTitle] = useState("Epictetus");
  const [blogs, setBolgs] = useState([
    //list of blog post that contains title, description, author, date, image, author image, category, author title
    {
      title: "How to design a product that can grow itself 10x in year",
      description: "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      author: "John Doe",
      date: "July 2, 2021",
      image: "https://cdn.britannica.com/45/186045-050-03EB7C3C/Damage-city-island-Tacloban-Philippine-Super-Typhoon-November-8-2013.jpg",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXXqjQBMKkHmsC15lP-nFTJF3igtndYCWnfwyUOxJT5xON1YsDXRtH-oxlVKEyTqP9FE&usqp=CAU",
      category: "UI DESIGN",
      authorTitle: "UI Designer"
    },
    {
  title: "The Art of Storytelling in Graphic Design",
  description: "Dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt augue eget rhoncus euismod. Donec ultrices ipsum eu quam venenatis, quis feugiat tortor vestibulum.",
  author: "Jane Smith",
  date: "September 15, 2022",
  image: "https://www.usnews.com/object/image/00000176-8717-df90-a17e-9f3778c60000/201222bc-disasters7-editorial.jpg?update-time=1608647040715&size=responsive640",
  authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXXqjQBMKkHmsC15lP-nFTJF3igtndYCWnfwyUOxJT5xON1YsDXRtH-oxlVKEyTqP9FE&usqp=CAU",
  category: "Front-end Development",
  authorTitle: "Graphic Designer"
},
{
  title: "Building User-Centric Mobile Apps",
  description: "Nulla in libero eget augue maximus auctor. Phasellus finibus purus a finibus hendrerit. Cras et nisl a elit laoreet euismod in ut tortor.",
  author: "Michael Johnson",
  date: "April 7, 2023",
  image: "https://img.freepik.com/premium-photo/natural-disaster-with-hurricane-strong-storm-that-damages-buildings-3d-illustration_398478-238.jpg?w=2000",
  authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXXqjQBMKkHmsC15lP-nFTJF3igtndYCWnfwyUOxJT5xON1YsDXRtH-oxlVKEyTqP9FE&usqp=CAU",
  category: "MOBILE APPS",
  authorTitle: "App Developer"
},
{
  title: "Designing for Inclusivity: Creating Accessible Websites",
  description: "Quisque ullamcorper massa nunc, a ultrices libero tincidunt non. Integer quis libero in quam facilisis malesuada. Nulla bibendum, risus a hendrerit feugiat.",
  author: "Emily Adams",
  date: "November 30, 2022",
  image: "https://er.educause.edu/-/media/images/articles/2018/8/er18_5204_article_art/16x9-large.jpg?hash=F5C8B0A1CF48DA29F3B2F1F4D7F130D68C77C610&la=en",
  authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaN6_D3nr0NyI_PRV8eksapRZYw_c9pchy_xnp-tr56N7jq6wchS79aMiGCDSKtQOCL18&usqp=CAU",
  category: "WEB DESIGN",
  authorTitle: "Web Developer"
}

  ]);
  const onHomeClick = () => {

    setTitle("Home");
  };
  const onAboutClick = () => {

    setTitle("About");
  };
  const onContactClick = () => {
   
    setTitle("Contact");
  };

  return (
    <div >
      <Header title= {title} onHomeClick = {onHomeClick} onAboutClick = {onAboutClick} onContactClick = {onContactClick}/>
      <FeaturedNews />
      <SectionTitile title="Trending News"/>
     <HomeRegularNews blogs={blogs}/>
      <CopyRight />
    </div>
  );
}

export default App;
