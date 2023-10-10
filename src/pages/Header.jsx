import pexelsheader from "../assets/pexelsheader.jpg";

export default function Header() {
  return (
    <div className="md:h-screen h-[50vh] relative flex flex-col text-center justify-center items-center ">
      <img className="h-screen w-full" src={pexelsheader} alt="photo hacker" />
      <div className="absolute">
        <h1 className="md:text-6xl text-3xl font-bold mb-2">Ryan Beaujot</h1>
        <p className="text-2xl">Développeur web Junior</p>
      </div>
    </div>
  );
}
