//import logo from './logo.svg';
import {useState} from 'react';
import React from 'react'
import './App.css';
import Header from './components/header.js';
import FeaturedNews from './components/featured_news';
import CopyRight from './components/copright';
import HomeRegularNews from './components/home_regular_news';
import SectionTitile from './components/section_title';

function App() {
  const [title, setTitle] = useState("Epictetus");
  const [blogs] = useState([
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
    },

    {
      title: "Artificial Intelligence in Product Design",
      description: "Pellentesque consequat arcu in velit dictum, vel finibus odio ultricies. Maecenas eu ullamcorper libero. Vestibulum a risus augue. Cras sit amet bibendum arcu.",
      author: "Alex Turner",
      date: "January 5, 2023",
      image: "https://dc-prod-blog.sfo2.digitaloceanspaces.com/uploads/2017/11/Artificial-Intelligence-And-Its-Role-In-Design.jpg",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQbOConPJkl1-Mm1S7LD4O2CaWpyP65s2SPy9MqnPHqff-b-0iR5H47pJuaNWZbBwg1w&usqp=CAU",
      category: "PRODUCT DESIGN",
      authorTitle: "Product Designer"
    },
    {
      title: "Creating Immersive User Experiences with Virtual Reality",
      description: "Vestibulum ac erat a eros tristique iaculis vel non turpis. In eleifend sapien in dapibus euismod. Donec eu metus non libero pharetra laoreet.",
      author: "Sarah Anderson",
      date: "March 22, 2023",
      image: "https://www.adorama.com/alc/wp-content/uploads/2018/06/shutterstock_390641047-825x465.jpg",
      authorImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*as7hLl9-ZADQxe5CAmSD3A.png",
      category: "USER EXPERIENCE",
      authorTitle: "UX Designer"
    },
    {
      title: "Eco-Friendly Design: A Sustainable Approach",
      description: "Sed sed purus ac neque bibendum bibendum. Ut egestas non nunc eu venenatis. Integer eu justo sed erat hendrerit luctus. Aliquam sit amet diam ac dolor bibendum tincidunt.",
      author: "Mark Roberts",
      date: "October 12, 2022",
      image: "https://www.worldconstructiontoday.com/wp-content/uploads/architecture/8198/green-building-Ecofriendly.jpg",
      authorImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*as7hLl9-ZADQxe5CAmSD3A.png",
      category: "SUSTAINABLE DESIGN",
      authorTitle: "Sustainability Specialist"
    },
    {
      title: "Designing for Mobile-First User Engagement",
      description: "Donec id libero ac nisi suscipit gravida. Duis vitae ultricies sapien. Integer a sapien justo. Proin scelerisque eleifend orci, eget pharetra risus consequat non.",
      author: "Laura Mitchell",
      date: "August 8, 2022",
      image: "https://www.creativepl.com/sites/default/files/styles/xlarge/public/2019-07/Web%20Design_1.jpg?itok=tahVIRG4",
      authorImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*as7hLl9-ZADQxe5CAmSD3A.png",
      category: "MOBILE DESIGN",
      authorTitle: "Mobile Designer"
    },
    {
  title: "The Psychology of Color in Visual Design",
  description: "Maecenas vel ipsum at lectus dignissim facilisis. Nulla ultrices tortor ac sapien bibendum, sit amet rhoncus nisi tristique. Suspendisse a dictum dui.",
  author: "Robert Clark",
  date: "June 5, 2023",
  image: "https://i2.wp.com/www.zekagraphic.com/wp-content/uploads/2021/03/Color-Psychology-in-Logo-Design.jpg?w=1920&ssl=1",
  authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaN6_D3nr0NyI_PRV8eksapRZYw_c9pchy_xnp-tr56N7jq6wchS79aMiGCDSKtQOCL18&usqp=CAU",
  category: "VISUAL DESIGN",
  authorTitle: "Visual Designer"
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
