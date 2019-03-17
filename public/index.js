var fromServer = [
  {
    id: 0,
    date: "09.03",
    day: "Monday",
    films: [
      {
        film: "Film-1",
        seanceTime: ["12:00", "16:00", "20:00"]
      },
      {
        film: "Film-2",
        seanceTime: ["10:00", "14:00", "18:00"]
      }
    ]
  },
  {
    id: 1,
    date: "10.03",
    day: "Tuesday",
    films: [
      {
        film: "Film-2",
        seanceTime: ["12:00", "16:00", "20:00"]
      },
      {
        film: "Film-1",
        seanceTime: ["10:00", "14:00", "18:00"]
      }
    ]
  }
];

var fromServer2 = {
  "09.03": {
    day: "Monday",
    films: {
      "king-kong": ["10:00", "14:00", "18:00"],
      avatar: ["12:00", "16:00", "20:00"]
    }
  },
  "10.03": {
    day: "Tuesday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  }
};

var seanceSelect = document.querySelector("#dateSeance");

Object.keys(fromServer2).forEach(function(item) {
  var option = document.createElement("option");
  option.value = item;
  option.text = item;
  seanceSelect.add(option);
});
var filmSelect = document.querySelector("#film");

seanceSelect.onchange = function() {
  filmSelect.innerHTML = "";
  Object.keys(fromServer2[seanceSelect.value].films).forEach(function(item) {
    var option = document.createElement("option");
    option.value = item;
    option.text = item;
    filmSelect.add(option);
  });
};

var timeSelect = document.querySelector("#timeSeance");

filmSelect.onchange = function() {
  fromServer2[seanceSelect.value].films[filmSelect.value].forEach(function(
    item
  ) {
    var option = document.createElement("option");
    option.value = item;
    option.text = item;
    timeSelect.add(option);
  });
};
