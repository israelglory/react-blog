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
      title: "How to design a product that can grow itself 10x in year",
      description: "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      author: "John Doe",
      date: "July 2, 2021",
      image: "https://cdn.britannica.com/45/186045-050-03EB7C3C/Damage-city-island-Tacloban-Philippine-Super-Typhoon-November-8-2013.jpg",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXXqjQBMKkHmsC15lP-nFTJF3igtndYCWnfwyUOxJT5xON1YsDXRtH-oxlVKEyTqP9FE&usqp=CAU",
      category: "UI DESIGN",
      authorTitle: "UI Designer"
    },

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
