import Image from "next/image";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 bg-green-200 text-center">
        My Informition
        <br className="hidden lg:inline-block" />
        And My Goal 
        
      </h1>
      <p className="mb-8 leading-relaxed text-lg font-medium text-gray-700">
  I am currently enrolled in an <span className="text-blue-500 font-semibold">AT course</span> 
  at <span className="italic">Governor House, Karachi</span>, while also pursuing a 
  <span className="text-green-500 font-semibold">CIT program</span> at a center in Karachi. 
  Having completed my 12th grade, I am passionately delving into the world of web development. 
  I am actively learning <span className="text-yellow-500">HTML</span>, 
  <span className="text-green-600">CSS</span>, <span className="text-blue-600">JavaScript</span>, 
  <span className="text-indigo-500">TypeScript</span>, 
  <span className="text-teal-500">React.js</span>, 
  <span className="text-pink-500">Next.js</span>, and 
  <span className="text-purple-500">Tailwind CSS</span> to enhance my skills in front-end development.
  <br /><br />
  My vision is to become a highly accomplished and innovative 
  <span className="font-bold text-gray-900">Software Engineer</span>, specializing in modern web 
  and software development. I aspire to design and develop robust, scalable, and user-centric 
  applications that solve real-world problems and create meaningful impacts. With every step, 
  I am committed to exploring cutting-edge technologies and pushing the boundaries of innovation.
</p>

    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/code.jpg"
        width={400}
          height={300}
      />
    </div>
  </div>
</section>

)}