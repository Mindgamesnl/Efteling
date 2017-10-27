# Efteling.js
A javascript ui for the efteling

The efteling.js project is not maintained by the efteling.

# Example code
```javascript
myEfteling = new eftelingjs();
myEfteling.update(function(){
  console.log("The waiting time for baron1898 is " + myEfteling.getRide("baron1898").getTime() + "-Minutes");
  console.log("The show ravelein starts on: " + myEfteling.getShow("raveleijn").getShowTimes()[0].ShowDateTime
  + ", "
  + myEfteling.getShow("raveleijn").getShowTimes()[1].ShowDateTime
  + ", "
  + myEfteling.getShow("raveleijn").getShowTimes()[2].ShowDateTime
  + " and "
  + myEfteling.getShow("raveleijn").getShowTimes()[3].ShowDateTime);
  
  var freeseats = myEfteling.getHospitality("polleskeuken").getTimes()[0].FreeSeats
  + myEfteling.getHospitality("polleskeuken").getTimes()[1].FreeSeats
  + myEfteling.getHospitality("polleskeuken").getTimes()[2].FreeSeats
  
  console.log("There are " + freeseats + " frees seats at polleskeuken");
  
  console.log("The park opens at " + myEfteling.getPark().getOpeningTime());
  console.log("The park closes at " + myEfteling.getPark().getClosingTime());
  console.log("The park busy indication is " + myEfteling.getPark().getBusyIndication());
  
  var closedRides = 0;
  var array = myEfteling.getMaintenance();
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    closedRides++;
    var rideName = myEfteling.getMaintenance()[i].getName();
    var DateFrom = myEfteling.getMaintenance()[i].getStartDate();
    var end = myEfteling.getMaintenance()[i].getEndDate();
    var weekend = myEfteling.getMaintenance()[i].getOpenInWeekend();
    var message = "";
    
    if (weekend) {
      message = "is opened in weekends.";
    } else {
      message = "is not opened in weekends.";
    }
    
    console.log(rideName + "Is in maintenance since " + DateFrom + " and will open again on " + end + ". this ride " + message);
  }
  
  console.log("There are " + closedRides + " ride(s) in maintenance.");
  
}, "api server");
```

Output:

```
The waiting time for baron1898 is 20-Minutes
The show ravelein starts on: 2017-06-19T13:00:00, 2017-06-19T14:30:00, 2017-06-19T16:00:00 and 2017-06-19T17:30:00
There are 27 frees seats at polleskeuken
The park opens at 2017-06-19T10:00:00
The park closes at 2017-06-19T18:00:00
The park busy indication is rustig
monsieurcannibaleIs in maintenance since 2017-06-19T00:00:00 and will open again on 2017-06-23T00:00:00. this ride is not opened in weekends.
volkvanlaafmonorailIs in maintenance since 2017-06-06T00:00:00 and will open again on 2017-06-23T00:00:00. this ride is not opened in weekends.
```

# Documentation
## eftelingjs functions
```javascript
.getLastUpdated(); //(string) time of last api update
.getAllRides(); //(objects in array) array of all ride objects
.getRuigrijk(); //(objects in array) array of all rides in ruigrijk
.getMarerijk(); //(objects in array) array of all rides in marerijk
.getAnderrijk(); //(objects in array) array of all rides in anderrijk
.getReizenrijk(); //(objects in array) array of all rides in reizenrijk
.update((function) callback); //(void) update the api, function = callback
.getShow((String) Show name); //(object) return the object for requested show
.getLowestSorted((Array) rides); //(objects in array) return rides sorted by waiting time
.getPark(); //(object) return park object
.getMaintenance(); //(objects in array) return the maintenance data object
.getHospitality(); //(objects in array) return the hospitality locations as objects
.getRide((String) RideName); //(object) return the ride object
```

## Show object
```javascript
.getState(); //(String) return the state of a show
.getStateColor(); //(String) returns the state color
.getShowTimes(); //(Json) get info on show times
```

## Maintenance object
```javascript
.getName(); //(String) return the ride name
.getStartDate(); //(String) return date stamp of when the the maintenance starts
.getEndDate(); //(String) return a date stamp of when the maintenance ends
.getOpenInWeekend(); //(Boolean) true = ride is open in weekends, false is not
```

## Park object
```javascript
.getBusyIndication(); //(String) get the busy indication
.getOpeningTime(); //(String) time stamp of when the park opens
.getClosingTime(); //(String) time stamp of when the park closes
```

## Hospitality object
```javascript
.getOpeningHours(); //(String) times of opening and closing
.getState(); //(String) get open or closed
.getStateColor(); //(String) get state color
.getTimes(); //(Json) array of remaining times & free seats
```

## Ride object
```javascript
.getTime(); //(Int) get waiting time in minutes
.getId(); //(String) return ride id
.getState(); //(String) get if the ride is open or closed
.getStateColor(); //(String) get state color
```

## List of rides
* kinderspoor
* halvemaen
* doudetuffer
* polkamarina
* stoomtreinr
* python
* devliegendehollander
* jorisendedraak
* baron1898
* baron1898singlerider
* baron1898frontrow
* carnavalfestival
* vogelrok
* monsieurcannibale
* avonturendoolhof
* kleuterhof
* pagode
* gondoletta
* pandadroom
* spookslot
* pirana
* bobbaan
* bobsingleriders
* fatamorgana
* sprookjesbos
* diorama
* stoomcarrousel
* stoomtreinm
* droomvlucht
* villavolta
* kindervreugd
* volkvanlaafmonorail
* carrouselsantonpieckplein
* eftelingmuseum
* symbolicasingleriders
* symbolica
## Hospitality
* poffertjestogo
* panoramalacarte
* panoramaselfservice
* hetsuykerhuys
* polleskeuken
* degebrandeboon
* rondjevandemolen
* happinessstationpk
* tokopagode
* demeermin
* stationdeoost
* dekombuys
* octopus
* devrolijkenoot
* beiersemarkt
* desteenbok
* burgerbackerij
* wittewalvis
* hetseylendfregat
* casacaracol
* melkhuysje
* oase
* hetwapenvanraveleijn
* tpoffertje
* hetwittepaard
* smulpaap
* denguldengaarde
* grootmoederskeuken
* gelaarsdekat
* hoorndesovervloeds
* kleyneklaroen
* desoeteinval
* happinessstationwp
* theaterrestaurantapplaus
* hollandsegebakskraam
## Merchandise
* jokieswereld
* gamegallery
* pandashop
* debazaar
* efteldingen
* indenoudenmarskramer
* dromerijen
* fotopuntcarnavalfestival
* fotopuntbobbaan
* fotopuntpiraa
* fotopuntdevliegendehollander
* fotopuntjorisendedraak
* fotopuntpython
* fotopuntbaron1898
## Shows
* ontmoeteftelingbewoners
* sprookjesboomshow
* pardoesdetovernar
* prinsespardijn
* raveleijn
* aquanura
