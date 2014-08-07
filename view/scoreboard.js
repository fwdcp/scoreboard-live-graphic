nodecg.listenFor('scoreboardShowSmallScoreboard', showSmallScoreboard);
nodecg.listenFor('scoreboardHideSmallScoreboard', hideSmallScoreboard);
nodecg.listenFor('scoreboardShowTimer', showTimer);
nodecg.listenFor('scoreboardHideTimer', hideTimer);
nodecg.listenFor('scoreboardShowLargeScoreboard', showLargeScoreboard);
nodecg.listenFor('scoreboardHideLargeScoreboard', hideLargeScoreboard);
nodecg.listenFor('scoreboardUpdateTeams', updateTeams);
nodecg.listenFor('scoreboardUpdateStatus', updateStatus);
nodecg.listenFor('scoreboardUpdateTimer', updateTimer);
nodecg.listenFor('scoreboardDisplayNotification', displayNotification);

var scoresVisible = false;

function showSmallScoreboard() {
  var show = new TimelineLite({paused: true});

  show.from($('#small-scoreboard-logo'), 0, {top: "60px", left: "60px", height: 0, width: 0, opacity: 0, ease: Quad.easeOut}, 0)
      .to($('#small-scoreboard-logo'), 0.75, {top: "0px", left: "0px", height: "120px", width: "120px", opacity: 1, ease: Quad.easeOut}, 0)
      .from($('#small-scoreboard-info'), 0, {left: "-100%", ease: Quad.easeOut}, 0.5)
      .to($('#small-scoreboard-info'), 0.25, {left: 0, ease: Quad.easeOut}, 0.5)
      .from($('#small-scoreboard-logo'), 0, {top: "0px", left: "0px", height: "120px", width: "120px", ease: Quad.easeIn}, 0.75)
      .to($('#small-scoreboard-logo'), 0.25, {top: "20px", left: "20px", height: "80px", width: "80px", ease: Quad.easeIn}, 0.75)
      .play();

  scoresVisible = true;
}

function hideSmallScoreboard() {
  var hide = new TimelineLite({paused: true});

  hide.from($('#small-scoreboard-logo'), 0, {top: "20px", left: "20px", height: "80px", width: "80px", ease: Quad.easeOut}, 0)
      .to($('#small-scoreboard-logo'), 0.25, {top: "0px", left: "0px", height: "120px", width: "120px", ease: Quad.easeOut}, 0)
      .from($('#small-scoreboard-info'), 0, {left: 0, ease: Quad.easeIn}, 0.25)
      .from($('#small-scoreboard-score-notification'), 0, {left: 0, ease: Quad.easeIn}, 0.25)
      .from($('#small-scoreboard-logo'), 0, {top: "0px", left: "0px", height: "120px", width: "120px", opacity: 1, ease: Quad.easeIn}, 0.25)
      .to($('#small-scoreboard-info'), 0.25, {left: "-100%", ease: Quad.easeIn}, 0.25)
      .to($('#small-scoreboard-score-notification'), 0.25, {left: "-100%", ease: Quad.easeIn}, 0.25)
      .to($('#small-scoreboard-logo'), 0.75, {top: "60px", left: "60px", height: 0, width: 0, opacity: 0, ease: Quad.easeIn}, 0.25)
      .play();

  scoresVisible = false;
}

function showTimer() {
  var show = new TimelineLite({paused: true});

  show.from($('#small-scoreboard-info'), 0, {width: "186px", ease: Quad.easeOut}, 0)
      .from($('#small-scoreboard-timer'), 0, {opacity: 0, ease: Quad.easeOut}, 0)
      .from($('#small-scoreboard-score-notification'), 0, {width: "186px", ease: Quad.easeOut}, 0)
      .from($('#small-scoreboard-score-notification-text'), 0, {width: "80px", ease: Quad.easeOut}, 0)
      .to($('#small-scoreboard-info'), 0.25, {width: "236px", ease: Quad.easeOut}, 0)
      .to($('#small-scoreboard-timer'), 0.25, {opacity: 1, ease: Quad.easeOut}, 0)
      .to($('#small-scoreboard-score-notification'), 0.25, {width: "236px", ease: Quad.easeOut}, 0)
      .to($('#small-scoreboard-score-notification-text'), 0.25, {width: "130px", ease: Quad.easeOut}, 0)
      .play();
}

function hideTimer() {
  var show = new TimelineLite({paused: true});

  show.from($('#small-scoreboard-info'), 0, {width: "236px", ease: Quad.easeIn}, 0)
      .from($('#small-scoreboard-timer'), 0, {opacity: 1, ease: Quad.easeIn}, 0)
      .from($('#small-scoreboard-score-notification'), 0, {width: "236px", ease: Quad.easeIn}, 0)
      .from($('#small-scoreboard-score-notification-text'), 0, {width: "130px", ease: Quad.easeIn}, 0)
      .to($('#small-scoreboard-info'), 0.25, {width: "186px", ease: Quad.easeIn}, 0)
      .to($('#small-scoreboard-timer'), 0.25, {opacity: 0, ease: Quad.easeIn}, 0)
      .to($('#small-scoreboard-score-notification'), 0.25, {width: "186px", ease: Quad.easeIn}, 0)
      .to($('#small-scoreboard-score-notification-text'), 0.25, {width: "80px", ease: Quad.easeIn}, 0)
      .play();
}

function showLargeScoreboard() {
  var show = new TimelineLite({paused: true});

  show.from($('#large-scoreboard'), 0, {opacity: 0, ease: Quad.easeOut}, 0)
      .to($('#large-scoreboard'), 0.5, {opacity: 1, ease: Quad.easeOut}, 0)
      .play();
}

function hideLargeScoreboard() {
  var hide = new TimelineLite({paused: true});

  hide.from($('#large-scoreboard'), 0, {opacity: 1, ease: Quad.easeIn}, 0)
      .to($('#large-scoreboard'), 0.5, {opacity: 0, ease: Quad.easeIn}, 0)
      .play();
}

function updateTeams(data) {
  $('#small-scoreboard-away-team').css('background-color', data.awayColor);
  $('#small-scoreboard-home-team').css('background-color', data.homeColor);
  $('#large-scoreboard-away-team').css('background-color', data.awayColor);
  $('#large-scoreboard-home-team').css('background-color', data.homeColor);
  $('#large-scoreboard-away-team-image').css('background', 'url("' + data.awayImage + '") 50% 50% / contain no-repeat');
  $('#large-scoreboard-home-team-image').css('background', 'url("' + data.homeImage + '") 50% 50% / contain no-repeat');
  $('#small-scoreboard-away-team-tag').text(data.awayTag);
  $('#small-scoreboard-home-team-tag').text(data.homeTag);
  $('#large-scoreboard-away-team-name').text(data.awayName);
  $('#large-scoreboard-home-team-name').text(data.homeName);
}

function updateStatus(data) {
  $('#small-scoreboard-away-team-color').css('background-color', data.awayGameColor);
  $('#small-scoreboard-home-team-color').css('background-color', data.homeGameColor);
  $('#small-scoreboard-away-team-score').text(data.awayScore);
  $('#small-scoreboard-home-team-score').text(data.homeScore);
  $('#large-scoreboard-away-team-score').text(data.awayScore);
  $('#large-scoreboard-home-team-score').text(data.homeScore);

  $('#small-scoreboard-timer-time').text(data.timerTime);
  $('#small-scoreboard-timer-desc').text(data.timerDesc);
  $('#large-scoreboard-title-text').text(data.title);
  $('#large-scoreboard-status-text').text(data.status);
}

var timer = {};
timer.direction = 0;
timer.initialValue = 0;
timer.startingTime = moment();

function updateTimer(data) {
  timer = data;
}

setInterval(updateTime, 100);

function updateTime() {
  var time = moment.duration(timer.initialValue, 'seconds');

  if (timer.direction == -1) {
    time.subtract(moment().diff(timer.startingTime, 'seconds'), 'seconds');
  }
  else if (timer.direction == 1) {
    time.add(moment().diff(timer.startingTime, 'seconds'), 'seconds');
  }
  
  if (time.asSeconds() >= 0) {
    $('#small-scoreboard-timer-time').text(time.format('m:ss', {trim: false}));
  }
  else {
    $('#small-scoreboard-timer-time').text('0:00');
  }
}

function displayNotification(data) {
  if (!scoresVisible) {
    showSmallScoreboard();
    setTimeout(displayNotification, 1000, data);
  }
  else {
    var show = new TimelineLite({paused: true});

    $('#small-scoreboard-score-notification').css('background-color', $('#small-scoreboard-' + data.team + '-team').css('background-color'));
    $('#small-scoreboard-score-notification-image').css('background-image', $('#large-scoreboard-' + data.team + '-team-image').css('background-image'));
    $('#small-scoreboard-score-notification-text').text(data.reason);

    show.from($('#small-scoreboard-score-notification'), 0, {left: "-100%", ease: Quad.easeOut}, 0)
        .to($('#small-scoreboard-score-notification'), 0.5, {left: 0, ease: Quad.easeOut}, 0)
        .from($('#small-scoreboard-score-notification'), 0, {left: 0, ease: Quad.easeIn}, 2.5)
        .to($('#small-scoreboard-score-notification'), 0.5, {left: "-100%", ease: Quad.easeIn}, 2.5)
        .from($('#small-scoreboard-' + data.team + '-team-score'), 0, {opacity: 1, ease: Quad.easeIn}, 3)
        .from($('#large-scoreboard-' + data.team + '-team-score'), 0, {opacity: 1, ease: Quad.easeIn}, 3)
        .to($('#small-scoreboard-' + data.team + '-team-score'), 0.5, {opacity: 0, ease: Quad.easeIn}, 3)
        .to($('#large-scoreboard-' + data.team + '-team-score'), 0.5, {opacity: 0, ease: Quad.easeIn}, 3)
        .set($('#small-scoreboard-' + data.team + '-team-score'), {text: data.score.toString()}, 3.5)
        .set($('#large-scoreboard-' + data.team + '-team-score'), {text: data.score.toString()}, 3.5)
        .from($('#small-scoreboard-' + data.team + '-team-score'), 0, {opacity: 0, ease: Quad.easeOut}, 3.5)
        .from($('#large-scoreboard-' + data.team + '-team-score'), 0, {opacity: 0, ease: Quad.easeOut}, 3.5)
        .to($('#small-scoreboard-' + data.team + '-team-score'), 0.5, {opacity: 1, ease: Quad.easeOut}, 3.5)
        .to($('#large-scoreboard-' + data.team + '-team-score'), 0.5, {opacity: 1, ease: Quad.easeOut}, 3.5)
        .play();
  }
}
