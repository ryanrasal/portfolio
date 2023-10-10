import pexelsheader from "../assets/pexelsheader.jpg";

export default function Header() {
  return (
    <div className=" h-screen relative flex flex-col text-center justify-center items-center ">
      <img src={pexelsheader} alt="photo hacker" />
      <div className="absolute">
        <h1 className="text-6xl font-bold mb-2">Ryan Beaujot</h1>
        <p className="text-2xl">Développeur web Junior</p>
      </div>
    </div>
  );
}
