import linkedin from "../../assets/linkedin.png";
import linkedinQr from "../../assets/linkedinQr.png";
import outlook from "../../assets/outlook.png";
import github from "../../assets/github.png";
import githubQr from "../../assets/githubQr.jpg";

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
  {
    id: 3,
    nameLink: "Outlook",
    logo: outlook,
    adresse: "ryan.beaujot@outlook.fr",
  },
];

export default function ContactForm() {
  return (
    <div className="flex flex-col md:justify-around">
      {reseauxSociaux.map((item) => (
        <div key={item.id}>
          <img className="h-12 mx-auto mb-2" src={item.logo} alt={item.alt} />
          <img className="h-40 mx-auto" src={item.qrCode} alt={item.alt} />
          <p>{item.adresse}</p>
        </div>
      ))}
    </div>
  );
}

