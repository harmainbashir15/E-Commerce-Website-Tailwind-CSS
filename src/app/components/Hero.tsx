import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <main className="m-0 p-4 bg-yellow-600">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-4 items-center">
        {/* Left side */}
        <div className="flex-1">
          <h1 className="font-bold text-2xl md:text-4xl text-slate-950">Why Choose Cake Palette? </h1>
          <p className="text-md md:text-lg text-black  mt-2">
         

<b>Customizable Cake Designs:</b> Cake Palette offers a wide variety of designs and flavors that can be personalized to match any event or theme, ensuring a unique experience for every customer.<br></br>

<b>Premium Ingredients:</b> They use only the finest ingredients, ensuring that each cake not only looks beautiful but also tastes exceptional.<br></br>

<b>Attention to Detail:</b> Every cake is crafted with meticulous attention to design and detail, from intricate decorations to vibrant colors, creating a true edible masterpiece.<br></br>

<b>Variety of Flavors:</b> Cake Palette offers a wide range of flavors that cater to different preferences, from classic chocolate to exotic fruit blends.<br></br>

<b>Skilled Artisans:</b> The bakers and decorators at Cake Palette are experienced professionals with a passion for creating visually stunning and delicious cakes.<br></br>

<b>Timely Delivery:</b> Cake Palette ensures that your cake arrives fresh and on time, making your special moments even more delightful.<br></br>

<b>Customer-Centric Approach:</b> They work closely with customers to meet their specific needs, whether it’s for weddings, birthdays, or corporate events, ensuring a delightful and personalized experience.<br></br>



          </p>
         
        </div>
        {/* Right Side */}
        <div className="flex-1 w-full h-auto">
          <Image width={400} height={300} src="/poster2.jpg" alt="Image" className="object-cover w-full h-full block" />
          
        </div>
      </section>
    </main>
  );
}

export default Hero;