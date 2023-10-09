import { NavLink } from "react-router-dom";
import sentiersPerdues from "../../assets/projets/sentiersPerdus.png";
import WildOnTrack from "../../assets/projets/wildOnTrack.png";
import nutriDiet from "../../assets/projets/nutriDiet.png";
import enedis from "../../assets/projets/enedis.png";
import innovin from "../../assets/projets/innovin.png";

export default function ProjetsGroupesDetails() {
  const projets = [
    {
      id: 1,
      projetName: "Sentiers Perdues",
      stack: "Html, Css et Javascript",
      time: "2 semaines",
      image: sentiersPerdues,
      descriptionLink: "Voir sur Github Sentiers Perdues",
      link: "https://github.com/ryanrasal/sentiers-perdus",
    },
    {
      id: 2,
      projetName: "Wild On Track",
      stack: "React et Material Ui",
      time: "6 semaines",
      image: WildOnTrack,
    },
    {
      id: 3,
      projetName: "NutriDiet",
      stack: "React et Tailwind",
      time: "6 semaines",
      image: nutriDiet,
    },
    {
      id: 4,
      projetName: "Enedis",
      stack: "React, Tailwind et ExpressJs/NodeJs",
      time: "2 semaines",
      image: enedis,
    },
    {
      id: 5,
      projetName: "Innovin",
      stack: "React, Tailwind et ExpressJs/NodeJs",
      time: "2 semaines",
      image: innovin,
      descriptionLink: "Voir sur Github innovin_Front",
      descriptionLinkTwo: "Voir sur Github innovin_Back",
      link: "https://github.com/ryanrasal/Innovin_front",
      linkTwo: "https://github.com/ryanrasal/Innovin_back",
    },
  ];

  return (
    <div>
      <div className="md:grid md:grid-cols-3">
        {projets.map((projet) => (
          <div className="rounded mx-2 p-3" key={projet.id}>
            <p className="text-xl font-bold tracking-wider text-primary">
              {projet.projetName}
            </p>
            <img className="h-40 rounded my-2 " src={projet.image} alt="" />
            <p className="font-bold ">{projet.stack}</p>
            {projet.link && (
              <NavLink
                to={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {projet.descriptionLink}
              </NavLink>
            )}
            <br />
            {projet.linkTwo && (
              <NavLink
                to={projet.linkTwo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {projet.descriptionLinkTwo}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
