function solve(params) {
    let movies = [];
    for (let param of params) {
        if (param.includes(addMovie)) {
            let token = (param.split(addMovie).filter(x => x !== (``)));
            let movieName = token[0];
            movies.push({
                name: movieName
            });
        } else if (param.includes(directedBy)) {
            let token = (param.split(directedBy).filter(x => x !== (``)))
            let movieName = token[0]
            let directorName = token[1]
            let movie = movies.find(m => m.name === movieName)
            if(movie!==undefined){
                movie[`director`]=directorName;
            }
        } else if (param.includes(onDate)) {
            let token=(param.split(onDate)).filter(x=>x!==``)
            let movieName=token[0]
            let movieDate=token[1]
            let movie=movies.find(m=>m.name===movieName)
            if(movie!==undefined){
                movie[`date`]=movieDate;
            }
        }
    }
    for (let movie of movies) {
        
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie))
        }
    }
}
solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'

])