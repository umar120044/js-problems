var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};
movie4 = {
    title: " Out",
    actors: ", Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
  };
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");
const events = [
  {
      id: 1,
      start: 30, 
      end: 150, 
  },
  {
      id: 2,
      start: 540, 
    end: 600  
  },
  {
      id: 3,
      start: 560, 
      end: 620, 
  },
  {
      id: 4,
      start: 610, 
      end: 670, 
  },
];
console.log(events.id);
console.log(events.start);
console.log(events.end);