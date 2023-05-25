/* 
const fullName=["Mayank","Kumar"]
const biodata=[1,...fullName,"male",22]
console.log(biodata)
console.log(biodata[2])
 */


/* 
var shooterGames=['Call of duty','Far Cry','Resident Evil']
var racingGames=['Need for speed','Gran Turismo','Burnout']
var games=[...shooterGames,...racingGames]
console.log(games)
console.log(games[3])
 */



var shooterGames=['Call of duty','Far Cry','Resident Evil']
const [first,...remaining]=shooterGames
console.log(first)
console.log(remaining) 
console.log(remaining[0]) 


const fullName={
    fname:"Mayank",
    lname:"kumar"
}

const biodata={
    id:1,
    ...fullName,
    age:20,
    gender:'male'
}

console.log(biodata)
console.log(biodata.fname)