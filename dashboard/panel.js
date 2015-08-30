'use strict';

$('#scoreboard-home-image').change(function() {
  $('#scoreboard-home-image-preview').attr('src', $(this).val());
});

$('#scoreboard-away-image').change(function() {
  $('#scoreboard-away-image-preview').attr('src', $(this).val());
});

$('#scoreboard-update-teams').click(function() {
  var data = {};

  data.awayTag = $('#scoreboard-away-tag').val();
  data.awayName = $('#scoreboard-away-name').val();
  data.awayImage = $('#scoreboard-away-image').val();
  data.awayColor = $('#scoreboard-away-color').val();
  data.homeTag = $('#scoreboard-home-tag').val();
  data.homeName = $('#scoreboard-home-name').val();
  data.homeImage = $('#scoreboard-home-image').val();
  data.homeColor = $('#scoreboard-home-color').val();

  nodecg.sendMessage('scoreboardUpdateTeams', data);
});

$('#scoreboard-show-timer').click(function() {
  nodecg.sendMessage('scoreboardShowTimer');
});

$('#scoreboard-hide-timer').click(function() {
  nodecg.sendMessage('scoreboardHideTimer');
});

$('#scoreboard-show-small-scoreboard').click(function() {
  nodecg.sendMessage('scoreboardShowSmallScoreboard');
});

$('#scoreboard-hide-small-scoreboard').click(function() {
  nodecg.sendMessage('scoreboardHideSmallScoreboard');
});

$('#scoreboard-show-large-scoreboard').click(function() {
  nodecg.sendMessage('scoreboardShowLargeScoreboard');
});

$('#scoreboard-hide-large-scoreboard').click(function() {
  nodecg.sendMessage('scoreboardHideLargeScoreboard');
});

$('#scoreboard-switch-game-colors').click(function() {
  newHomeColor = $('#scoreboard-away-game-color').val();
  newAwayColor = $('#scoreboard-home-game-color').val();

  $('#scoreboard-away-game-color').val(newAwayColor);
  $('#scoreboard-home-game-color').val(newHomeColor);
});

$('#scoreboard-show-away-score-notification').click(function() {
  var data = {};

  data.team = 'away';
  data.score = $('#scoreboard-away-score').val();
  data.reason = $('#scoreboard-away-score-reason').val();

  nodecg.sendMessage('scoreboardDisplayNotification', data);
});

$('#scoreboard-show-home-score-notification').click(function() {
  var data = {};

  data.team = 'home';
  data.score = $('#scoreboard-home-score').val();
  data.reason = $('#scoreboard-home-score-reason').val();

  nodecg.sendMessage('scoreboardDisplayNotification', data);
});

$('#scoreboard-update-status').click(function() {
  var data = {};

  data.awayGameColor = $('#scoreboard-away-game-color').val();
  data.awayScore = $('#scoreboard-away-score').val();
  data.homeGameColor = $('#scoreboard-home-game-color').val();
  data.homeScore = $('#scoreboard-home-score').val();

  data.timerTime = $('#scoreboard-timer-time-display').val();
  data.timerDesc = $('#scoreboard-timer-desc').val();
  data.title = $('#scoreboard-title').val();
  data.status = $('#scoreboard-status-text').val();

  nodecg.sendMessage('scoreboardUpdateStatus', data);
});

var timer = {};
timer.direction = 0;
timer.initialValue = 0;
timer.startingTime = moment();

$('#scoreboard-timer-count-up').click(function() {
  timer.direction = 1;
  timer.initialValue = moment.duration({minutes: $('#scoreboard-timer-time').val().split(':')[0], seconds: $('#scoreboard-timer-time').val().split(':')[1]}).asSeconds();
  timer.startingTime = moment();

  nodecg.sendMessage('scoreboardUpdateTimer', timer);
});

$('#scoreboard-timer-pause').click(function() {
  timer.direction = 0;
  timer.initialValue = moment.duration({minutes: $('#scoreboard-timer-time').val().split(':')[0], seconds: $('#scoreboard-timer-time').val().split(':')[1]}).asSeconds();
  timer.startingTime = moment();

  nodecg.sendMessage('scoreboardUpdateTimer', timer);
});

$('#scoreboard-timer-count-down').click(function() {
  timer.direction = -1;
  timer.initialValue = moment.duration({minutes: $('#scoreboard-timer-time').val().split(':')[0], seconds: $('#scoreboard-timer-time').val().split(':')[1]}).asSeconds();
  timer.startingTime = moment();

  nodecg.sendMessage('scoreboardUpdateTimer', timer);
});

$('#scoreboard-timer-copy-time').click(function() {
  $('#scoreboard-timer-time').val($('#scoreboard-timer-time-display').val());
})

setInterval(updateTime, 100);

function updateTime() {
  var time = moment.duration(timer.initialValue, 'seconds');

  if (timer.direction == -1) {
    $('#scoreboard-timer-time-display').val(time.subtract(moment().diff(timer.startingTime, 'seconds'), 'seconds').format('m:ss', {trim: false}));
  }
  else if (timer.direction == 1) {
    $('#scoreboard-timer-time-display').val(time.add(moment().diff(timer.startingTime, 'seconds'), 'seconds').format('m:ss', {trim: false}));
  }
}
