efteljsInner = {};

function eftelingjs() {
  if (!window.jQuery) {
    console.error("Efteling.js requires jQuery to be loaded!");
  } else {

    var Ruigrijk = ["python", "jorisendedraak", "devliegendehollander", "baron1898", "baron1898singlerider", "baron1898frontrow", "kinderspoor", "halvemaen", "doudetuffer", "polkamarina", "stoomtreinr"];
    var Reizenrijk = ["gondoletta", "pagode", "avonturendoolhof", "monsieurcannibale", "carnavalfestival", "vogelrok", "kleuterhof", "volkvanlaafmonorail"];
    var Marerijk = ["sprookjesbos", "stoomtreinm", "droomvlucht", "villavolta", "eftelingmuseum", "stoomcarrousel", "diorama"];
    var Anderrijk = ["fatamorgana", "bobbaan", "bobsingleriders", "pandadroom", "spookslot", "pirana"];

    var Thrillrides = ["baron1898", "baron1898singlerider", "baron1898frontrow", "vogelrok", "halvemaen", "bobbaan", "bobsingleriders", "python", "villavolta", "jorisendedraak"];

    this.getLastUpdated = function() {
      var newDate = new Date();
      newDate.setTime(efteljsInner.time * 1000);
      var h = newDate.getHours();
      var m = newDate.getMinutes();
      return h + ":" + m;
    }

    this.getAllRides = function() {
      var allRides = [];
      var allRidesObjects = [];
      for (var i = 0; i < Ruigrijk.length; i++) {
        if (!allRides.includes(Ruigrijk[i])) {
          allRides.push(Ruigrijk[i])
        }
      }
      for (var i = 0; i < Reizenrijk.length; i++) {
        if (!allRides.includes(Reizenrijk[i])) {
          allRides.push(Reizenrijk[i])
        }
      }
      for (var i = 0; i < Marerijk.length; i++) {
        if (!allRides.includes(Marerijk[i])) {
          allRides.push(Marerijk[i])
        }
      }
      for (var i = 0; i < Anderrijk.length; i++) {
        if (!allRides.includes(Anderrijk[i])) {
          allRides.push(Anderrijk[i])
        }
      }
      for (var i = 0; i < allRides.length; i++) {
        allRidesObjects.push(this.getRide(allRides[i]));
      }
      return allRidesObjects;
    }

    this.getRuigrijk = function() {
      var list = [];
      for (var i = 0; i < Ruigrijk.length; i++) {
        list.push(this.getRide(Ruigrijk[i]));
      }
      return list;
    }

    this.getMarerijk = function() {
      var list = [];
      for (var i = 0; i < Marerijk.length; i++) {
        list.push(this.getRide(Marerijk[i]));
      }
      return list;
    }

    this.getAnderrijk = function() {
      var list = [];
      for (var i = 0; i < Anderrijk.length; i++) {
        list.push(this.getRide(Anderrijk[i]));
      }
      return list;
    }

    this.getReizenrijk = function() {
      var list = [];
      for (var i = 0; i < Reizenrijk.length; i++) {
        list.push(this.getRide(Reizenrijk[i]));
      }
      return list;
    }

    this.update = function(callback. host) {
      $.getScript(host)
        .done(function(script, textStatus) {
          setTimeout(callback, 500);
        })
        .fail(function(jqxhr, settings, exception) {
          console.error("Efteling.js failed to get status!");
        });
    }

    this.getShow = function(showName) {
      var array = efteljsInner.rides.AttractionInfo;
      var arrayLength = array.length;
      for (var i = 0; i < arrayLength; i++) {
        if (array[i].Type == "Show") {
          if (array[i].Id == showName) {
            return new this.showObj(array[i]);
          }
        }
      }
    }
    
    this.getAllShows = function() {
      var shows = [];
      var array = efteljsInner.rides.AttractionInfo;
      var arrayLength = array.length;
      for (var i = 0; i < arrayLength; i++) {
        if (array[i].Type == "Show") {
          shows.push(new this.showObj(array[i]));
        }
      }
      return shows;
    }

    this.getLowestSorted = function(request) {
      var rides = request;
      var sortable = [];
      var returns = [];
      for (var i = 0; i < rides.length; i++) {
        sortable.push([rides[i], rides[i].getTime()]);
      }
      sortable.sort(function(a, b) {
        return a[1] - b[1];
      });
      for (var i = 0; i < sortable.length; i++) {
        var item = sortable[i];
        returns.push(item[0]);
      }
      return returns;
    }

    this.getPark = function() {
      return new this.parkObj(efteljsInner.meta);
    }

    this.getMaintenance = function() {
      var list = [];
      var array = efteljsInner.maintenance.MaintenanceInfo;
      var arrayLength = array.length;
      for (var i = 0; i < arrayLength; i++) {
        list.push(new this.maintenaceObj(array[i]));
      }
      return list;
    }

    this.getHospitality = function(horecaName) {
      var array = efteljsInner.rides.AttractionInfo;
      var arrayLength = array.length;
      for (var i = 0; i < arrayLength; i++) {
        if (array[i].Type == "Horeca") {
          if (array[i].Id == horecaName) {
            return new this.hospitalityObj(array[i]);
          }
        }
      }
    }

    this.getRide = function(rideName) {
      var array = efteljsInner.rides.AttractionInfo;
      var arrayLength = array.length;
      for (var i = 0; i < arrayLength; i++) {
        if (array[i].Type == "Attraction") {
          if (array[i].Id == rideName) {
            return new this.rideObj(array[i]);
          }
        }
      }
    }
  }

  this.showObj = function(data) {
    var state = data.State;
    var StateColor = data.StateColor;
    var ShowTimes = data.ShowTimes;
    this.getState = function() {
      return state;
    }
    this.getShowTimes = function() {
      return ShowTimes;
    }
    this.getStateColor = function() {
      return StateColor;
    }
  }

  this.maintenaceObj = function(data) {
    var name = data.AttractionId;
    var from = data.DateFrom;
    var to = data.DateTo;
    var OpenInWeekend = data.OpenInWeekend;
    this.getName = function() {
      return name;
    }
    this.getStartDate = function() {
      return from;
    }
    this.getEndDate = function() {
      return to;
    }
    this.getOpenInWeekend = function() {
      return OpenInWeekend;
    }
  }

  this.parkObj = function(data) {
    var OpeningTime = data.OpeningHours.HourFrom;
    var ClosingTime = data.OpeningHours.HourTo;
    var BusyIndication = data.OpeningHours.BusyIndication;

    this.getBusyIndication = function() {
      return BusyIndication;
    }
    this.getOpeningTime = function() {
      return OpeningTime;
    }
    this.getClosingTime = function() {
      return ClosingTime;
    }
  }

  this.hospitalityObj = function(data) {
    var openingTIme = data.OpeningHours;
    var horecaTimes = data.HorecaTimes;
    var state = data.State;
    var StateColor = data.StateColor;
    this.getOpeningHours = function() {
      return openingTIme;
    }
    this.getState = function() {
      return state;
    }
    this.getStateColor = function() {
      return StateColor;
    }
    this.getTimes = function() {
      return horecaTimes;
    }
  }

  this.rideObj = function(data) {
    var time = data.WaitingTime;
    //var time = Math.floor(Math.random() * (80 - 2) + 2);
    var Percentage = data.StatePercentage;
    var state = data.State;
    var id = data.Id;
    var stateColor = data.StateColor;
    this.getTime = function() {
      if (time == null) {
        if (state != "gesloten") {
          if (state == "inonderhoud") {
            return "Closed for maintenance";
          } else {
            return "Unknown.";
          }
        } else {
          return "Closed.";
        }
      } else {
        return time;
      }
    }
    this.getId = function() {
      return id;
    }
    this.getState = function() {
      return state;
    }
    this.getStateColor = function() {
      return stateColor
    }
  }
}

//handydandy
Array.prototype.contains = function(element) {
  return this.indexOf(element) > -1;
};
