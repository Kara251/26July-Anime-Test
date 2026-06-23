(function () {
  var lang = 'tc';
  var current = 0;
  var scores = {};
  var history = [];
  var total = QUIZ_DATA.questions.length;

  var pageHome = document.getElementById('page-home');
  var pageQuiz = document.getElementById('page-quiz');
  var pageResult = document.getElementById('page-result');
  var progressText = document.getElementById('progress-text');
  var progressFill = document.getElementById('progress-fill');
  var quizBody = document.getElementById('quiz-body');
  var quizQuestion = document.getElementById('quiz-question');
  var quizOptions = document.getElementById('quiz-options');
  var btnPrev = document.getElementById('btn-prev');

  function T(s) {
    return lang === 'sc' ? toSC(s) : s;
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function resetScores() {
    scores = {};
    Object.keys(QUIZ_DATA.results).forEach(function (k) { scores[k] = 0; });
  }

  function triggerAnims(page) {
    var els = page.querySelectorAll('.anim');
    els.forEach(function (el) { el.classList.remove('anim-in'); });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        els.forEach(function (el) { el.classList.add('anim-in'); });
      });
    });
  }

  function showPage(page) {
    [pageHome, pageQuiz, pageResult].forEach(function (p) {
      p.classList.remove('active');
    });
    page.classList.add('active');
    window.scrollTo(0, 0);
    triggerAnims(page);
  }

  function applyLang() {
    var u = UI[lang];
    document.getElementById('lang-btn').textContent = u.tog;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (u[key]) el.textContent = u[key];
    });
  }

  function updatePrevBtn() {
    btnPrev.disabled = current === 0;
  }

  function startQuiz() {
    current = 0;
    history = [];
    resetScores();
    showPage(pageQuiz);
    renderQuestion();
  }

  function renderQuestion() {
    var q = QUIZ_DATA.questions[current];
    progressText.textContent = pad(current + 1) + ' / ' + pad(total);
    progressFill.style.width = (current / total * 100) + '%';
    quizQuestion.textContent = T(q.text);
    quizOptions.innerHTML = '';
    updatePrevBtn();

    var labels = ['A', 'B', 'C', 'D'];
    q.options.forEach(function (opt, i) {
      var btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.style.setProperty('--i', i);
      btn.textContent = labels[i] + '. ' + T(opt.text);
      btn.addEventListener('click', function () { selectOption(i); });
      quizOptions.appendChild(btn);
    });
  }

  function selectOption(index) {
    var q = QUIZ_DATA.questions[current];
    var opt = q.options[index];

    history.push({ question: current, option: index, scores: Object.assign({}, opt.scores) });

    Object.keys(opt.scores).forEach(function (k) {
      scores[k] = (scores[k] || 0) + opt.scores[k];
    });

    var btns = quizOptions.querySelectorAll('.quiz-option');
    btns.forEach(function (b) { b.disabled = true; });
    btns[index].classList.add('selected');

    setTimeout(function () {
      current++;
      if (current < total) {
        quizBody.classList.add('exiting');
        setTimeout(function () {
          renderQuestion();
          quizBody.classList.remove('exiting');
          quizBody.classList.add('entering');
          void quizBody.offsetHeight;
          quizBody.classList.remove('entering');
        }, 280);
      } else {
        progressFill.style.width = '100%';
        setTimeout(showResult, 350);
      }
    }, 300);
  }

  function goBack() {
    if (history.length === 0) return;
    var last = history.pop();
    Object.keys(last.scores).forEach(function (k) {
      scores[k] = (scores[k] || 0) - last.scores[k];
    });
    current = last.question;
    quizBody.classList.add('entering');
    setTimeout(function () {
      renderQuestion();
      quizBody.classList.remove('entering');
    }, 100);
  }

  function getResultKey() {
    var maxVal = 0;
    var key = 'action';
    Object.keys(scores).forEach(function (k) {
      if (scores[k] > maxVal) { maxVal = scores[k]; key = k; }
    });
    return key;
  }

  function showResult() {
    var result = QUIZ_DATA.results[getResultKey()];

    var img = document.getElementById('result-img');
    if (result.image) {
      img.src = result.image;
      img.alt = result.animeName;
      img.onload = function () { img.classList.add('loaded'); };
      img.onerror = function () { img.classList.remove('loaded'); };
    } else {
      img.classList.remove('loaded');
      img.src = '';
    }

    document.getElementById('result-anime-name').textContent = T(result.animeName);
    document.getElementById('result-anime-romaji').textContent = result.animeRomaji;
    document.getElementById('result-type-name').textContent = T(result.typeName);
    document.getElementById('result-description').textContent = T(result.description);

    var kwEl = document.getElementById('result-keywords');
    kwEl.innerHTML = '';
    result.keywords.forEach(function (w) {
      var s = document.createElement('span');
      s.textContent = T(w);
      kwEl.appendChild(s);
    });

    var altList = document.getElementById('alt-list');
    altList.innerHTML = '';
    (result.alt || []).forEach(function (a) {
      var div = document.createElement('div');
      div.className = 'result-section-item';
      div.innerHTML =
        '<div class="result-section-item-name">' + T(a.name) + '</div>' +
        '<div class="result-section-item-why">' + T(a.why) + '</div>';
      altList.appendChild(div);
    });

    var avoidList = document.getElementById('avoid-list');
    avoidList.innerHTML = '';
    (result.avoid || []).forEach(function (a) {
      var div = document.createElement('div');
      div.className = 'result-section-item';
      div.innerHTML =
        '<div class="result-section-item-name">' + T(a.name) + '</div>' +
        '<div class="result-section-item-why">' + T(a.why) + '</div>';
      avoidList.appendChild(div);
    });

    showPage(pageResult);
  }

  function restart() {
    showPage(pageHome);
  }

  function shareResult() {
    var card = document.getElementById('result-card');
    var btn = document.getElementById('btn-share');
    var origText = btn.textContent;
    btn.textContent = '保存中…';
    btn.disabled = true;

    html2canvas(card, {
      backgroundColor: '#FAF8F4',
      scale: 2,
      useCORS: true
    }).then(function (canvas) {
      var a = document.createElement('a');
      a.download = '2026夏季番測驗結果.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    }).catch(function () {
      alert(lang === 'sc'
        ? '截图保存失败，请使用手机截图功能'
        : '截圖保存失敗，請使用手機截圖功能');
    }).finally(function () {
      btn.textContent = origText;
      btn.disabled = false;
    });
  }

  function toggleLang() {
    lang = lang === 'tc' ? 'sc' : 'tc';
    applyLang();
    if (pageQuiz.classList.contains('active')) renderQuestion();
  }

  document.getElementById('btn-start').addEventListener('click', startQuiz);
  document.getElementById('btn-retry').addEventListener('click', restart);
  document.getElementById('btn-share').addEventListener('click', shareResult);
  document.getElementById('lang-btn').addEventListener('click', toggleLang);
  btnPrev.addEventListener('click', goBack);

  applyLang();
  triggerAnims(pageHome);
})();
