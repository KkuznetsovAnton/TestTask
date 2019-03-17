var mockData = {
  "18.03": {
    day: "Monday",
    films: {
      "king-kong": ["10:00", "14:00", "18:00"],
      avatar: ["12:00", "16:00", "20:00"]
    }
  },
  "19.03": {
    day: "Tuesday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  },
  "20.03": {
    day: "Wednesday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  },
  "21.03": {
    day: "Thursday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  },
  "22.03": {
    day: "Friday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  },
  "23.03": {
    day: "Saturday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  },
  "24.03": {
    day: "Sunday",
    films: {
      avengers: ["10:00", "14:00", "18:00"],
      interstellar: ["12:00", "16:00", "20:00"]
    }
  }
};

var seanceSelect = document.querySelector("#dateSeance");

Object.keys(mockData).forEach(function(item) {
  var option = document.createElement("option");
  option.value = item;
  option.text = item;
  seanceSelect.add(option);
});
var filmSelect = document.querySelector("#film");

seanceSelect.onchange = function() {
  filmSelect.innerHTML = "";
  Object.keys(mockData[seanceSelect.value].films).forEach(function(item) {
    var option = document.createElement("option");
    option.value = item;
    option.text = item;
    filmSelect.add(option);
  });
};

var timeSelect = document.querySelector("#timeSeance");

filmSelect.onchange = function() {
  timeSelect.innerHTML = "";
  mockData[seanceSelect.value].films[filmSelect.value].forEach(function(item) {
    var option = document.createElement("option");
    option.value = item;
    option.text = item;
    timeSelect.add(option);
  });
};
