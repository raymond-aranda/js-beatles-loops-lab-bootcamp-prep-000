function theBeatlesPlay(musicians, instruments) {
  var arr = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {

  var factsArr = []

  var i = 0
  while(i < facts.length) {
    factsArr.push(`${facts}!!!`)
    i++
  }

  return factsArr
}
