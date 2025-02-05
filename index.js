function takeANumber(currentLineOfPeople, name){
  currentLineOfPeople.push(name)
  return (`Welcome, ${name}. You are number ` + currentLineOfPeople.length + ` in line.`)
}

function nowServing(currentLineOfPeople){
  if (currentLineOfPeople.length>0){
  return (`Currently serving `+ `${currentLineOfPeople.shift()}.`)}

  else {return ("There is nobody waiting to be served!")}
}

function currentLine(currentLineOfPeople){
  var lineReturn = []
  if (currentLineOfPeople.length > 0){
    for (var i = 0; i < currentLineOfPeople.length; i++){
    lineReturn.push(` ` + (i+1) + `. ${currentLineOfPeople[i]}`)}
    return (`The line is currently:${lineReturn}`)
  } else return (`The line is currently empty.`)
}
