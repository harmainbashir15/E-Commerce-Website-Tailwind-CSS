import React from "react";
import Image from "next/image";
function Product() {
  return (
    <section className="bg-slate-100">
      <div className="container mx-auto py-15 px-5">
        <h1 className="text-black sm:text-4xl text-2xl mb-2 text-center font-bold">
          Our Products
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/pancake.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
            Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">PANCAKE</h2>
              <p>($10.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48  border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/biscuit1.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">BISCUITS</h2>
              <p>($20.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/cupcake.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">CUPCAKE</h2>
              <p>($13.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/veganpie.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">VEGAN PIE</h2>
              <p>($17.30)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/nutscake.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">NUTS CAKE</h2>
              <p>($15.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/fruitcake.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">FRUIT CAKE</h2>
              <p>($20.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/lemoncake.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">LEMON CAKE</h2>
              <p>($19.20)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/birthdaycake.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">BIRTHDAY CAKE</h2>
              <p>($21.50)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/donut.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">DONUTS</h2>
              <p>($10.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/cocoacake.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">COCOA CAKE</h2>
              <p>($22.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110  ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/brioche1.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">BRIOCHE</h2>
              <p>($15.70)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/berrytart.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">BERRY TART</h2>
              <p>($21.00)</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/muffin.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">MUFFIN</h2>
              <p>($12.00)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/chocolatecake.jpg"
                alt="iamge"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">CHOCOLATE CAKE</h2>
              <p>($24.10)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/cheesecake.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">CHEESE CAKE</h2>
              <p>($20.50)</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <a className="block relative h-48 border-2 rounded overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full block"
                src="/redvelvetcake.jpg"
                alt="image"
                width={400}
                height={300}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-yellow-400 text-lg font-bold mb-1">
              Cake Palette
              </h3>
              <h2 className="text-black text-xl font-bold">RED VELVET CAKE</h2>
              <p>($25.20)</p>
            </div>
          </div>
          <button className="bg-black py-1 mt-4 px-4 font-bold rounded-md mb-3 text-white hover:bg-yellow-600">
            Add Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;