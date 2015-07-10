var pre = 'https://jsonp.afeld.me/?url=';
var teams = 'https://api.sportradar.us/nba-t3/games/2014/reg/schedule.json?api_key=xama6vm9k7758y5fuqfkvbw6';

$.ajax({
  url: pre + teams,
  jsonp: 'callback',
  datatype: 'jsonp',
  data: {
    format: 'json'
  }, 
  success: function(data){
    getAndSort(data);
  }, 
  error: function(err) {
    //console.log(err, "error getting data");
  }
});

function getAndSort(data) {
  var objs = [];      
    var array = data.games;
      array.forEach(function(item){
        var newTeam = {
          id: item.home.id,
          team: item.home.name
        }
        objs.push(newTeam);
      })    
      var unique = _.uniq(objs, function(x){
        return x.id;
      })
      unique.forEach(function(obj, team){
        var id = obj.id;        
        $(".teams").append("<button id=" + id  + ">" + obj.team + "</button>");
        //console.log(obj.id);
        $(".teams button[id]").on("click", function(){
          var el = $(this).attr("id");
          if (el === id) {
            getData(id);
          }

        });
        
      })
}

function getData(id) {
  $.ajax({
    url: pre + 'https://api.sportradar.us/nba-t3/teams/' + id + '/profile.json?api_key=xama6vm9k7758y5fuqfkvbw6',
    jsonp: 'callback',
    datatype: 'jsonp',
    data: {
      format: 'json'
    }, 
    success: function(data) {
      var team = data.players;
      console.log(team);
    }
  })
}

    
