var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

const quizQuestion = {
    questionText: "What is the title of movie2?",
    options: ["Star Wars","Episode VII","The Force Awakens"],
    correctAnswer: 0, 
};
const quizQuestion2 = {
    questionText: "What is the title of movie3?",
    options: ["Star Wars","Episode VII","The Force Awakens"],
    correctAnswer: 0, 
};
quiz=function(){
console.log("Question:", quizQuestion.questionText);
}
quiz();