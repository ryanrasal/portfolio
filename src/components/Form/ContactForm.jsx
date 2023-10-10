import linkedin from "../../assets/projets/logoLinkedin.png";
import linkedinQr from "../../assets/projets/linkedinQr.png";
import outlook from "../../assets/projets/outlook.png";
import github from "../../assets/projets/github.png";
import githubQr from "../../assets/projets/githubQr.jpg";

const reseauxSociaux = [
  {
    id: 1,
    nameLink: "Linkedin",
    logo: linkedin,
    link: "https://www.linkedin.com/in/ryan-beaujot-537062251/",
    qrCode: linkedinQr,
    alt: "Qr Code de Linkedin",
  },
  {
    id: 2,
    nameLink: "Github",
    logo: github,
    link: "https://github.com/ryanrasal",
    qrCode: githubQr,
    alt: "Qr Code de Github",
  },
];

export default function ContactForm() {
  return (
    <div>
      <div className="border-t w-1/2 mx-auto my-4" />
      <p className=" text-primary  uppercase text-center text-2xl py-4 font-bold tracking-wider">
        Réseaux sociaux
      </p>
      <div className="flex flex-col md:flex-row md:justify-around">
        {reseauxSociaux.map((item) => (
          <div key={item.id}>
            <img className="h-12 mx-auto mb-2" src={item.logo} alt={item.alt} />
            {item.qrCode && (
              <img className="h-40 mx-auto" src={item.qrCode} alt={item.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
