import ryan from "../assets/ryan.jpg";

export default function WhoIAm() {
  return (
    <div className="flex py-10 items-center">
      <img
        src={ryan}
        alt="photo de moi Ryan"
        className="h-80  ml-40 rounded "
      />
      <div>
        <h2 className=" text-primary uppercase text-center text-2xl mb-4 font-bold tracking-wider">
          A propos de moi
        </h2>
        <p className="mx-28">
          Bonjour ! Je m'appelle Ryan Beaujot, je suis développeur Web junior.
          <br /> <br />
          Avant, j'ai travaillé pendant 6 ans dans une usine de meuble en tant
          qu'ouvrier, mes journées étaient devenues monotones et je n'avais
          aucune passion dans ce que je faisais. <br /> <br />
          Un jour, j'ai découvert le développement web, et cela, à changé mon
          quotidien et ma vie en général. J'ai commencé par faire des petits
          sites vitrine pour m'amuser pendant 1 an. <br /> <br />
          Après avoir acquis de bonnes bases en html et css, j'ai décidé de
          passer le cap et de m'inscrire dans une formation. J'ai intégré la
          formation développeur web et web mobile de la wild code school ! Après
          ces 6 mois de formation intensive et avoir obtenue le diplôme web et
          web mobile rncp de niveau 5, j'ai décidé que mon aventure n'était pas
          terminée... <br /> <br />
          J'ai intégré la formation de concepteur développeur d'application pour
          une durée de 8 mois. Je termine cette formation prochainement. (15
          octobre 2023)
        </p>
      </div>
    </div>
  );
}
