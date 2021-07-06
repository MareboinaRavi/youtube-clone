import React from "react";
import Card from "./Components/Card";
import "./Cards.css";
const Cards = () => {
  const details = [
    {
      image:
        "https://i.ytimg.com/vi/-edmQKcOW8s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOEAw_u8M3kev1Gf3SNUYCh7A9LA",
      name: "My Creations",
      views: "1332",
      time: "1",
      caption: "Motivational Video for Best Company",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLSofTo9brx_8FyDQwaQIPP9-vPioDqrLVElLPhioQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/0BqfP9vPOlc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH2zd29YE3gTWA1KI2jRwG1Fl5Zw",
      name: "Rise and Shine",
      views: "543",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/njVUtjD8_Bk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAod2PRG0Gt4ui_ayg1nThjo61YTg",
      name: "React JS",
      views: "6432",
      time: "5",
      caption: "Learn react doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/3LMnsc3Zr9k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASVT_qor-gooK8yTVx67lGpUXyiw",
      name: "Fontend",
      views: "15332",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/ZI41tLLxNak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRan6csMynF5ULwDEJNHj9oit6yA",
      name: "Full Stacker",
      views: "15332",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/-edmQKcOW8s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOEAw_u8M3kev1Gf3SNUYCh7A9LA",
      name: "My Creations",
      views: "1332",
      time: "1",
      caption: "Motivational Video for Best Company",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLSofTo9brx_8FyDQwaQIPP9-vPioDqrLVElLPhioQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/0BqfP9vPOlc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH2zd29YE3gTWA1KI2jRwG1Fl5Zw",
      name: "Rise and Shine",
      views: "543",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/njVUtjD8_Bk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAod2PRG0Gt4ui_ayg1nThjo61YTg",
      name: "React JS",
      views: "6432",
      time: "5",
      caption: "Learn react doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/3LMnsc3Zr9k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASVT_qor-gooK8yTVx67lGpUXyiw",
      name: "Fontend",
      views: "15332",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/ZI41tLLxNak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRan6csMynF5ULwDEJNHj9oit6yA",
      name: "Full Stacker",
      views: "15332",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/-edmQKcOW8s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOEAw_u8M3kev1Gf3SNUYCh7A9LA",
      name: "My Creations",
      views: "1332",
      time: "1",
      caption: "Motivational Video for Best Company",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLSofTo9brx_8FyDQwaQIPP9-vPioDqrLVElLPhioQ=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/0BqfP9vPOlc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH2zd29YE3gTWA1KI2jRwG1Fl5Zw",
      name: "Rise and Shine",
      views: "543",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/njVUtjD8_Bk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAod2PRG0Gt4ui_ayg1nThjo61YTg",
      name: "React JS",
      views: "6432",
      time: "5",
      caption: "Learn react doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/3LMnsc3Zr9k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASVT_qor-gooK8yTVx67lGpUXyiw",
      name: "Fontend",
      views: "15332",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      image:
        "https://i.ytimg.com/vi/ZI41tLLxNak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRan6csMynF5ULwDEJNHj9oit6yA",
      name: "Full Stacker",
      views: "15332",
      time: "4",
      caption: "Learn by doing anything can be possible",
      cimg: "https://yt3.ggpht.com/ytc/AKedOLRgnnLB14hghTLEzwQsPczbJACAN1cXaGmz7WlC=s176-c-k-c0x00ffffff-no-rj",
    },
  ];
  return (
    <div className="container ll">
      {details.map((card, index) => {
        const { name, views, time, caption, cimg, image } = card;
        return (
          <Card
            key={index}
            name={name}
            views={views}
            time={time}
            caption={caption}
            cimg={cimg}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Cards;
