import pizzeria1 from "../img/p1.png"
import agenda1 from "../img/a1.png"
import tris1 from "../img/t1.png"

const techs1 = ["html", "css", "javascript", "responsive"]
const techs2 = ["react", "css", "responsive"]

const pizzeriaDescr = "Un sito (a scopo dimostrativo) di una pizzeria. Il sito dispone di un menù dal quale si possono aggiungere o togliere gli ingredienti delle varie pizze."

const agendaDescr = "Un'applicazione che simula un'agenda per memorizzare gli appuntamenti. E' disponibile un calendario che evidenzia i giorni in cui vi è memorizzato un appuntamento."

const trisDescr = "Un'app per giocare a tris contro il computer. Si Può selezionare il simbolo e chi gioca per primo. Il gioco tiene conto del numero di vittorie, sconfitte e pareggi effettuati. Il computer muove a caso."

const pizzeriaLink= "https://giuse-dev.github.io/pizzeria"
const agendaLink= "https://giuse-dev.github.io/react-agenda-app/"
const trisLink= "https://giuse-dev.github.io/tris-game"

const pizzeriaCodeLink = "https://github.com/giuse-dev/pizzeria"
const agendaCodeLink = "https://github.com/giuse-dev/react-agenda-app"
const trisCodeLink = "https://github.com/giuse-dev/tris-game"

// const ProjectsData = {
//   imgs : [pizzeria1, agenda1, tris1],
//   names : ["pizzeria", "agenda", "tris"],
//   techListsNames : [ techs1, techs2, techs1 ],
//   descriptions : [pizzeriaDescr, agendaDescr, trisDescr],
//   projectsLink : [pizzeriaLink, agendaLink, trisLink],
//   ghCodesLink : [pizzeriaCodeLink, agendaCodeLink, trisCodeLink],
// }

const projectsData =[
  {id: 1, img: pizzeria1, name:"Pizzeria site", techListNames: techs1,
    description: pizzeriaDescr, projectLink: pizzeriaLink, ghCodeLink: pizzeriaCodeLink},
  {id: 2, img: agenda1, name:"Agenda app", techListNames: techs2,
    description: agendaDescr, projectLink: agendaLink, ghCodeLink: agendaCodeLink},
  {id: 3, img: tris1, name:"Tris game", techListNames: techs1,
    description: trisDescr, projectLink: trisLink, ghCodeLink: trisCodeLink},
]

export default projectsData