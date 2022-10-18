function clickPress(event) {
  if (event.key == "Enter") {
    // do something
    var query
      = document.getElementById("searchTxt").value;
    if (query == "") {
      p.then(v => {
        v.query("SELECT * WHERE True")
      })
      return
    }


    console.log(query);
    query = query.toLowerCase();
    map = {
      'contracts': 0,
      'forecasts': 1,
      'financial statement': 2,
      'org structure': 3,
      'nda': 4,
      'real estate contracts': 5,
      'options': 6,
      'insurance coverage policy': 7,
      'tax returns': 8,
      'budgets': 9,
      'p&l': 10,
      'audit': 11,
    }
    query = map[query]
    p.then(v => {
      v.query("SELECT * WHERE tags == " + query)
    })
  }

}