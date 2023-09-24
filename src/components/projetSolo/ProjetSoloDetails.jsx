import one from "../../assets/projetsSolo/one.jpg";
import two from "../../assets/projetsSolo/two.jpg";
import three from "../../assets/projetsSolo/three.png";
import four from "../../assets/projetsSolo/four.png";

export default function ProjetSoloDetails() {
  return (
    <>
      <div className="grid grid-cols-4 ml-20">
        <img className="h-80 rounded my-2 shadow-md " src={one} alt="" />
        <img className="h-80 rounded my-2 shadow-md " src={two} alt="" />
        <img className="h-80 rounded my-2 shadow-md " src={three} alt="" />
        <img className="h-80 rounded my-2 shadow-md " src={four} alt="" />
      </div>
      <div className="mx-20">
        <h3 className="text-primary font-bold text-xl my-3">
          Technologies Utilisées :
        </h3>
        <ul>
          <li className="pb-3">
            <span className="font-bold underline">React Native </span>: Cette
            technologie a été choisie pour sa flexibilité et sa capacité à
            offrir une expérience utilisateur native sur différentes plateformes
            mobiles.
          </li>
          <li className="pb-3">
            <span className="font-bold underline">Tailwind CSS </span>: : Le
            framework CSS a été intégré pour simplifier la création et la
            gestion de l'interface utilisateur, garantissant un design cohérent
            et attrayant.
          </li>
          <li className="pb-3">
            <span className="font-bold underline">Express.js </span>: En tant
            que framework Node.js, Express.js est utilisé pour créer une API
            robuste pour la gestion des données et la communication entre
            l'application mobile et le serveur.
          </li>
          <li className="pb-3">
            <span className="font-bold underline">Node.js </span> :
            L'environnement Node.js fournit un backend performant pour alimenter
            l'application, permettant une manipulation efficace des données et
            une communication en temps réel.
          </li>
        </ul>
      </div>
    </>
  );
}
