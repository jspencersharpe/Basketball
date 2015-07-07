var pre = 'https://jsonp.afeld.me/?url=';
$.get(pre + "https://api.sportradar.us/nba-t3/games/2014/reg/schedule.json?api_key=xama6vm9k7758y5fuqfkvbw6", function(data){

  for (var i = 0; i < 100; i++) {
    var team = {
      id: data.games[i].home.id,
      team: data.games[i].home.name
    };
    console.log(team);
  }
});

/*function getData() {
  var id = "583ec7cd-fb46-11e1-82cb-f4ce4684ea4c";
 $.get(pre + "http://api.sportradar.us/nba-t3/teams/" + "/profile.json?api_key=xama6vm9k7758y5fuqfkvbw6", function(data){
   console.log(data);
 })
}*/

$.get(pre + "http://api.sportradar.us/nba-t3/teams/583ec7cd-fb46-11e1-82cb-f4ce4684ea4c/profile.json?api_key=xama6vm9k7758y5fuqfkvbw6", function(data){
  var team = data.players;

  for (var i = 0; i < team.length; i++) {
    $("body").append(team[i].full_name);
  }
  
})
