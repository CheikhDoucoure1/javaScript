
const movie = {
    title :'a', 
    releaseYear : 2018,
    rating : 4.5,
    director : 'b'

};

function ShowProperties(Obj){
    for(let key of Obj)
    if (typeof Obj === 'string') console.log(key);
}

ShowProperties(movie);