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
      var idArray = []; 
    $.each(data.games, function(index, value){
      var array = data.games[index].home;
      $.each(array, function(index, value){
        if (array[index].length === 36) {
          var id = array[index];
          idArray.push(id);
        }
      })
    //console.log(idArray); 
    var newArr = _.uniq(idArray);
    console.log(newArr);
  }) 
  }, 
  error: function(err) {
    alert("error getting data");
  }
})

$.ajax({
  url: pre + "http://api.sportradar.us/nba-t3/teams/583ec7cd-fb46-11e1-82cb-f4ce4684ea4c/profile.json?api_key=xama6vm9k7758y5fuqfkvbw6",
  jsonp: 'callback',
  datatype: 'jsonp',
  data: {
    format: 'json'
  }, 
  success: function(data) {
    var team = data.players;

    for (var i = 0; i < team.length; i++) {
      $("body").append(team[i].full_name);
    }
  }
})



