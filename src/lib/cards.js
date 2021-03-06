import edukacijaImg1 from "../assets/Sliki/Za_Nas/edukacija.jpg";
import edukacijaImg from "../assets/Sliki/Za_Nas/edukacija1.jpg";
import kompaniiImg from "../assets/Sliki/Za_Nas/edukacija2.jpg";
import nastaniImg from "../assets/Sliki/Za_Nas/nastani.jpg";
import coworkingImg from "../assets/Sliki/Za_Nas/coworking.jpg";
import prostorImg from "../assets/Sliki/Za_Nas/prostor za nastani.jpg";
import partnerstvaImg from "../assets/Sliki/Za_Nas/partnerstva so tech komp.jpg";
import inovaciiImg from "../assets/Sliki/Za_Nas/IMG_7397.jpg";
import companii from "../assets/Sliki/IMG_7707.jpg";

import codeworks from "../assets/Sliki/Nastani/IMG_7481.jpg";
import marketing from "../assets/Sliki/Nastani/instruktori.jpg";
import dataScience from "../assets/Sliki/Nastani/Hristijan-Nosecka-1024x536.jpg";

import eventsImg1 from "../assets/Sliki/Renderi/2.jpg";
import eventsImg2 from "../assets/Sliki/Renderi/C1 1.jpg";
import eventsImg3 from "../assets/Sliki/Renderi/C1 4.jpg";
import eventsImg4 from "../assets/Sliki/Renderi/C2 1.jpg";
import eventsImg5 from "../assets/Sliki/Renderi/C3 1.jpg";
import eventsImg6 from "../assets/Sliki/Renderi/C3 2.jpg";
import eventsImg7 from "../assets/Sliki/Renderi/C3 EXIBITION_1.jpg";
import eventsImg8 from "../assets/Sliki/Renderi/HOL KON SEDENJE.jpg";
import eventsImg9 from "../assets/Sliki/KITCHEN_03.jpg";

export const events_cards = [
  { img: eventsImg1, text: "Brainster" },
  { img: eventsImg2, text: "Училница" },
  { img: eventsImg3, text: "Канцелариски простор" },
  { img: eventsImg4, text: "Училница" },
  { img: eventsImg5, text: "Адаптибилна училница" },
  { img: eventsImg6, text: "Сала со бина" },
  { img: eventsImg7, text: "Конференциска сала" },
  { img: eventsImg8, text: "Хол" },
  { img: eventsImg9, text: "Space Kitchen" },
];

export const za_nas_cards = [
  {
    img: edukacijaImg,
    title: "Едукација",
    text: (
      <p>
        Научи практични вештини за трансформација во кариерата. Нашата
        специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе
        одговори на реалните потреби на пазарот на труд. Организираме курсеви,
        <span className="dots">
          академии и персонализирани обуки кои одговараат на реалните потреби на
          денешницата.
        </span>
      </p>
    ),
    url: "https://brainster.co/",
  },
  {
    img: nastaniImg,
    title: "Настани",
    text: (
      <p>
        Специјално креирани о организирани настани кои ги поврзуваат правите
        таленти со иновативните компании. Идејата е да нашата tech заедница
        расте, се инспирира и креира преку овие настани.
      </p>
    ),
    url: "/calendar",
  },
  {
    img: coworkingImg,
    title: "Coworking",
    text: (
      <p>
        Биди дел од заедницата на иноватори, креативци и претприемачи. Резевирај
        стол во нашата shared office. Пичјго твојот бизнис и нашиот тим заедно
        ќе одлучи секој месец со кого да ги дели своите канцеларии.
      </p>
    ),
    url: "/coworking",
  },
  {
    img: prostorImg,
    title: "Простор за настани",
    text: (
      <p>
        Имаш идеја за обука или настан од tech областа? Ние имаме простор за
        реализација. Нашиот тим внимателно ги одбира и курира сите настани.
      </p>
    ),
    url: "/events_space",
  },
  {
    img: partnerstvaImg,
    title: "Партнерства со Tech компании",
    text: (
      <p>
        Целта и идејата е креирање на tech заедница која ќе се негува, расте и
        креира подобро утро за сите нас. Преку директно и индеректно поврзување
        на tech талентите со компаниите.
      </p>
    ),
    url: "/partnership",
  },
  {
    img: inovaciiImg,
    title: "Иновации за компании",
    text: (
      <p>
        Нов концепт кој ќе им помогне на компаниите да преминат од стариот во
        новиот начин на работење. Подгответе ја вашата компанија за дигитална
        трансорммација.
      </p>
    ),
    url: "https://brainster.co/",
  },
];

export const nastani_cards = [
  {
    img: codeworks,
    title: "Codeworks",
    text: (
      <p>
        Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да
        научат што е ново во tech заедницата. Настан кој ги поврзува mid
        programerite со IT компаниите. Deep Dive Intensive Seminar Екслузивни
        семинари кои комбинираат три различни техникки на учење.
      </p>
    ),
    url: "https://online.brainster.co/webinar_categories/razno/",
  },
  {
    img: marketing,
    title: "Deep Dive into Marketing",
    text: (
      <p>
        Deep Dive into Marketing се серија интензивни семинари кои се наменски
        подготвени да ти помогнат да ги совладаш и предвидиш современите
        промени, предизвици и идните трендови во областа во marketingot.
      </p>
    ),
    url: "https://online.brainster.co/webinar_categories/digitalen-marketing/",
  },
  {
    img: dataScience,
    title: "Deep Dive into Data Science",
    text: (
      <p>
        Deep Dive into Data Science се серија интензивни семинари кои се
        наменски подготвени да ти помогнат да ги совладаш и предвидиш
        современите промени, предизвици и идните трендови во областа во Data
        Science.
      </p>
    ),
    url: "https://online.brainster.co/webinar_categories/data-science/",
  },
];

export const blockContext = {
  edukacija: (
    <p>
      Дали си подготвен да одговориш на потребите на иднината. Вистинските
      курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација
      во областа дигитален маркетинг, дизајн, програмирање и Data Science.
    </p>
  ),
  edukacija_img: edukacijaImg,

  kompanii: (
    <p>
      Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го
      подобрат перфомнасот на својата компанија.
      <br /> <br /> Дигиталната трансформација се случува, а вашите компании
      треба да бидат подготвени да се адаптираат соодветно. Обуки, семинари,
      курсеви или team building? <br />
      <br /> Во Brainser Space имаме специјално обучен тим кој е подготвен да ја
      насочи, адаптира и сподели својата експертиза со денешните потреби на
      компаниите.
    </p>
  ),
  kompanii_img: companii,

  coworking: (
    <p>
      Биди дел од заедницата на иноватори, креативци и претприемачи. Резевирај
      стол во нашата shared office. Пичјго твојот бизнис и нашиот тим заедно ќе
      одлучи секој месец со кого да ги дели своите канцеларии.
    </p>
  ),
  coworking_img: coworkingImg,

  events_space_1: (
    <p>
      Можност за презентации, обуки, конференции, networking настани. Одбери ја
      просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме
      правото да одбереме кој настан ќе се организира во нашиот Brainster Space.
    </p>
  ),
  events_space_2: (
    <p>
      Нашиот простор се прилагодува според потребите на вашиот настан
      Седумразлични простории и Space Kitchen. <br /> <br /> Наменски создадени
      да се прилагодуваат и менуваат во согласност со типот на настан кој го
      организирате. <br /> <br />
      Организираме конференции до 150 учесници и обуки и предавања за групи од
      20 учесници. Контактирај не за да хостираме одличен настан
    </p>
  ),
  events_space_img: prostorImg,
};

export const academy_cards = [
  {
    title: "Академија за графички дизајн",
    color: "#66316e",
    img: edukacijaImg1,
    link: "https://design.brainster.co/",
  },
  {
    title: "Академија за дигитален маркетинг",
    color: "#8f3d4f",
    img: kompaniiImg,
    link: "https://marketpreneurs.brainster.co/",
  },
  {
    title: "Академија за Front-end програмирање",
    color: "#398e57",
    img: edukacijaImg1,
    link: "https://codepreneurs.brainster.co/",
  },
  {
    title: "Академија за Full-stack програмирање",
    color: "#2d7141",
    img: edukacijaImg,
    link: "https://codepreneurs.brainster.co/",
  },
  {
    title: "Академија за Data science ",
    color: "#444b69",
    img: coworkingImg,
    link: "https://datascience.brainster.co/",
  },
  {
    title: "Академија за  software testing",
    color: "#2f4941",
    img: kompaniiImg,
    link: "https://qa.brainster.co/",
  },
];
