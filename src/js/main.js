;(function(){
  'use strict';
var pre = 'https://jsonp.afeld.me/?url=';
var teams = 'https://api.sportradar.us/nba-t3/games/2014/reg/schedule.json?api_key=xama6vm9k7758y5fuqfkvbw6';
var teamsDiv = $('.teams');

$(document).ready(function(){
  getTeams();
})

function getTeams() {
  $.getJSON(pre + teams)
    .then(function(data){
      getAndSort(data);
    })
    .fail(function(err){
      console.log(err, "error");
    })
}

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
        teamsDiv.append("<button id=" + id  + ">" + obj.team + "</button>");
        $(".teams button[id]").on("click", function(){
          var el = $(this).attr("id");
          if (el === id) {
            $(".list").append("<h1>" + obj.team + "</h1>");
            getData(id);
          }
        });
      })
}

function append(list, obj) {
  list.append("<li>" + obj.full_name + ", " + obj.birth_place + "</li>")
}

function getData(id) {
  $.getJSON(pre + 'https://api.sportradar.us/nba-t3/teams/' + id + '/profile.json?api_key=xama6vm9k7758y5fuqfkvbw6')
    .then(function(data){
      var team = data.players;
      var list = $('.list');
      team.forEach(function(obj, player){
        console.log(obj);
        append(list, obj);
      })
    })
    .fail(function(err){
      console.log(err, "err getting data");
    })
}

    
  
})();
