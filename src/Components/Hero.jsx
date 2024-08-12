import aominePic from "../assets/Aomine.jpeg";

function Hero() {
  return (
    <div className="flex items-center min-h-screen p-20 bg-black">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md">
        <img
          src={aominePic}
          alt="Aomine pic"
          className="w-48 rounded-lg mx-auto"
        />
        <h1 className="text-2xl font-bold mt-4 text-center text-black">
          Hey! I'm Shiva 🚀
        </h1>
        <h2 className="text-center text-grey-800 font-bold text-black">
          Nice to meet you 😁
        </h2>
        <p className="text-gray-600 mt-2">
          As an emerging fullstack developer, currently exploring the MERN
          stack, focusing on building dynamic web applications. My passion for
          technology drives me to continuously learn and adapt, and I am excited
          about the prospect of diving into Web3 technologies in the near
          future. With a strong foundation in modern web development and a keen
          interest in blockchain and decentralized applications, I aim to
          combine my skills in creating impactful solutions and embracing the
          cutting-edge advancements of the digital world 🤖
        </p>
      </div>
    </div>
  );
}

export default Hero;
