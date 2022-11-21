export const projectsArr = [
  {
    id: "1",
    title: "eJam: NZ Open Mic Finder",
    url: "https://ejam-fullstack-production.up.railway.app/",
    description:
      "This application will provide a list of open mic events to the public. The open mic venues can be fetched by searching for a name of a town in New Zealand. The result of the search will return a list of open mic venues. The user can then click on any of the listed venues to find all the relevant information about that event such as the name of the venue, address, frequency, date and time it happens and also possible musical instruments available. The application allows users, once logged in, to create new open mic events. Only the user who created the event can update or delete the existent event.",
    reflections: [
      "The goal with this project was to be able to improve both my front end and back end skills using React, Redux, Internal API's and Database",
      "My problem solving skills was really tested during this project as there was so many functionalities both at the front end and the back end. I had to really get comfortable with reading error messages and console logging",
      "Redux helps a lot to manage states however it requires a lot of confiduration and lot of attention on how to dispatch actions and on how to retrieve data from the store",
      "Databases can sometimes stop running and I ended up spending hours trouble shooting it however a few times it was just a mal functioning and I just had to delete my sqlite file and run migrations again.",
      "On API calls it's really important to pay attention on what data it's been returned. Some of my problems with API's came from myself assuming I was receiving data however sometimes I was just getting the ID of the item retreived.",
      "I am really proud of being able to develop a full stack app and also deploy it which was also very difficult.",
    ],
    img: "./eJam-img.png",
    tech: [
      "React JS",
      "Redux",
      "CSS",
      "Superagent",
      "Node / Express JS",
      "SQLite3",
      "Firebase Authentication",
    ],
    github: "https://github.com/tomas-alves08/eJam-fullStack",
  },
  {
    id: "2",
    title: "Damascus Restaurant: Order App",
    url: "https://damascus-app.web.app/",
    description:
      "This application allows the user to search all the dishes offered by Damascus Restaurant in 2022. The user can select the amount of each item on the menu and later on open the cart to check all the items, quantities and both total and per item values to be paid. The user can also remove and add items to the cart. And as a last step make the order.",
    reflections: [
      "The goal of this project was to sharpen my React skills",
      "useReducer is a great react hook to manage complex inter related states and has very similar synthax as Redux despite they are used for different purposes.",
      "useContext is a great alternative to Redux in regards to sharing states through the application. React itself has got many great tools for web developers to do the job without using external packages",
      "I am really enjoying working with React.",
    ],
    img: "./damascus-img.png",
    tech: ["React JS", "CSS"],
    github: "https://github.com/tomas-alves08/Order-App-Damascus",
  },
];
