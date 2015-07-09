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
      console.log(objs);
}


/*for (var i = 0; i < 30; i++) {
        $.ajax({
          url: pre + 'https://api.sportradar.us/nba-t3/teams/' + unique[i] + '/profile.json?api_key=xama6vm9k7758y5fuqfkvbw6',
          jsonp: 'callback',
          datatype: 'jsonp',
          data: {
            format: 'json'
          }, 
          success: function(data) {
            var team = data.players;
            console.log(team);

          for (var i = 0; i < team.length; i++) {
            $("body").append(team[i].full_name);
          }
        }      
        }); 

      }  

   */     
