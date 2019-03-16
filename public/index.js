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


var seanceSelect = document.querySelector("#dataSeance");

fromServer.forEach(function(item) {
  var option = document.createElement("option");
  option.value = item.date;
  option.text = item.date;
  seanceSelect.add(option);
});
var currentDay;

seanceSelect.onchange = function(e){
    console.log(this.value);
    currentDay = this.value;
}
