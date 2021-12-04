import words from './words.js';

const afinn = JSON.parse(words);

function negativity (phrase) {
  var addPush = function(t, score){
    hits -= score;
    words.push(t);
  };

  var noPunctuation = phrase.replace(/[^а-яА-Я ]+/g, ' ').replace('/ {2,}/',' '),
      tokens = noPunctuation.toLowerCase().split(" "),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (afinn.hasOwnProperty(t)) {
      if (afinn[t] < 0){
        addPush(t, afinn[t]);
      }
    }
  });

  return {
    score       : hits,
    comparative : hits / tokens.length,
    words       : words
  };
}

function positivity (phrase) {
  var addPush = function(t, score){
    hits += score;
    words.push(t);
  };

  var noPunctuation = phrase.replace(/[^а-яА-Я ]+/g, ' ').replace('/ {2,}/',' '),
      tokens = noPunctuation.toLowerCase().split(" "),
      hits   = 0,
      words  = [];

  tokens.forEach(function(t) {
    if (afinn.hasOwnProperty(t)) {
      if (afinn[t] > 0){
        addPush(t, afinn[t]);
      }
    }
  });

  return {
    score : hits,
    comparative : hits / tokens.length,
    words : words
  };
}

function analyze (phrase) {
  var pos = positivity(phrase),
      neg = negativity(phrase);

  return {
    score       : pos.score - neg.score,
    comparative : pos.comparative - neg.comparative,
    positive    : pos,
    negative    : neg
  };
}

export { analyze, negativity, positivity };
