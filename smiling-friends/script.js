(function () {  'use strict';

  const DATABASE_API_URL = "/api/save-results";

  // DATASET COMPLETO DEL CUESTIONARIO (ENFOQUE DE CONOCIMIENTO OBJETIVO)
  const QUIZ_DATA = {
    1: {
      title: "Día 1: Hábitos de cepillado",
      questions: [
        {
          id: "d1q1",
          question: "¿Cuánto tiempo demoras en cepillar tus dientes?",
          options: [
            { key: "A", text: "40–50 segundos" },
            { key: "B", text: "2–3 minutos" },
            { key: "C", text: "5–8 minutos" }
          ],
          correct: ["B"],
          errorMsg: "El tiempo ideal para remover bien la placa bacteriana es de 2 a 3 minutos."
        },
        {
          id: "d1q2",
          question: "¿Cómo es tu cepillo de dientes?",
          options: [
            { key: "A", text: "Cabezal grande con cerdas duras" },
            { key: "B", text: "Cabezal pequeño con cerdas suaves" },
            { key: "C", text: "Cabezal mediano con cerdas normales" }
          ],
          correct: ["B"],
          errorMsg: "Lo ideal es un cabezal pequeño para llegar a todos los rincones y cerdas suaves para no dañar tus encías."
        },
        {
          id: "d1q3",
          question: "¿Te lavas la lengua cuando te cepillas los dientes?",
          options: [
            { key: "A", text: "Sí, siempre" },
            { key: "B", text: "De vez en cuando" },
            { key: "C", text: "No, nunca" }
          ],
          correct: ["A"],
          errorMsg: "La lengua retiene muchísimas bacterias que causan mal aliento. Lávala siempre."
        },
        {
          id: "d1q4",
          question: "Antes de dormir, ¿te cepillas los dientes después de tu última comida y esperas un tiempo antes de dormir?",
          options: [
            { key: "A", text: "Sí, siempre y espero unos 30 minutos" },
            { key: "B", text: "A veces me cepillo, pero no espero" },
            { key: "C", text: "No, nunca me cepillo antes de dormir" }
          ],
          correct: ["A"],
          errorMsg: "Esperar 30 minutos permite que la saliva neutralice los ácidos de la comida antes de cepillarte."
        }
      ]
    },
    2: {
      title: "Día 2: Técnicas de cepillado",
      questions: [
        {
          id: "d2q1",
          question: "Cuando te cepillas los dientes, ¿qué movimiento haces con el cepillo?",
          options: [
            { key: "A", text: "Solo haces círculos rápidos" },
            { key: "B", text: "Solo haces movimientos vibratorios" },
            { key: "C", text: "Coloco el cepillo entre la encía y el diente y hago movimientos de barrido" }
          ],
          correct: ["C"],
          errorMsg: "El movimiento de barrido es el más efectivo para sacar los restos de comida."
        },
        {
          id: "d2q2",
          question: "¿Qué tanto cubres tus dientes al cepillarte?",
          options: [
            { key: "A", text: "Solo las partes visibles cuando sonrío" },
            { key: "B", text: "Todas las superficies de los dientes, incluyendo la parte cercana a la encía" },
            { key: "C", text: "Solo las muelas de atrás" }
          ],
          correct: ["B"],
          errorMsg: "La placa se esconde en todas las caras del diente, especialmente cerca de la encía."
        },
        {
          id: "d2q3",
          question: "¿Qué haces con el cepillo al limpiar la encía?",
          options: [
            { key: "A", text: "No paso el cepillo por la encía, solo los dientes" },
            { key: "B", text: "Paso el cepillo suavemente entre el diente y la encía" },
            { key: "C", text: "Frote con fuerza para “sacar toda la suciedad”" }
          ],
          correct: ["B"],
          errorMsg: "Debes masajear la encía suavemente. Si frotas con fuerza, puedes retraerla y causar daño."
        },
        {
          id: "d2q4",
          question: "¿Con qué frecuencia cambias tu cepillo de dientes?",
          options: [
            { key: "A", text: "Solo cuando se ve muy usado o se rompe" },
            { key: "B", text: "Cada 3 meses aproximadamente" },
            { key: "C", text: "Nunca, uso el mismo hasta que se arruine completamente" }
          ],
          correct: ["B"],
          errorMsg: "Recuerda: la vida útil de un cepillo es de máximo 3 meses."
        }
      ]
    },
    3: {
      title: "Día 3: Colutorio y seda dental",
      questions: [
        {
          id: "d3q1",
          question: "¿Usas hilo dental para limpiar entre tus dientes?",
          options: [
            { key: "A", text: "Nunca" },
            { key: "B", text: "Algunas veces a la semana" },
            { key: "C", text: "Sí, todos los días" }
          ],
          correct: ["C"],
          errorMsg: "El cepillo no llega entre los dientes. El hilo dental diario es obligatorio para evitar caries ocultas."
        },
        {
          id: "d3q2",
          question: "Cuando usas hilo dental, ¿cómo lo haces?",
          options: [
            { key: "A", text: "Paso el hilo rápido y sin cubrir toda la superficie del diente" },
            { key: "B", text: "Paso el hilo suavemente cubriendo ambos lados del diente" },
            { key: "C", text: "Paso el hilo solo una vez por semana" }
          ],
          correct: ["B"],
          errorMsg: "Debes abrazar el diente formando una 'C' con el hilo para raspar la placa de ambos lados."
        },
        {
          id: "d3q3",
          question: "¿Usas enjuague bucal (colutorio)?",
          options: [
            { key: "A", text: "Nunca" },
            { key: "B", text: "Algunas veces" },
            { key: "C", text: "Todos los días" }
          ],
          correct: ["B", "C"],
          errorMsg: "El enjuague es un excelente complemento, usarlo algunas veces te da protección extra."
        }
      ]
    },
    4: {
      title: "Día 4: Molestias y cuidado de la boca",
      questions: [
        {
          id: "d4q1",
          question: "¿Tus encías sangran cuando te cepillas los dientes?",
          options: [
            { key: "A", text: "Sí, siempre" },
            { key: "B", text: "A veces" },
            { key: "C", text: "No, nunca" }
          ],
          correct: ["C"],
          errorMsg: "Una encía sana NO sangra. Si sangra, es señal de inflamación."
        },
        {
          id: "d4q2",
          question: "¿Es normal sentir sensibilidad aguda o dolor en los dientes al comer algo muy frío o dulce?",
          options: [
            { key: "A", text: "Sí, es algo que le pasa a todo el mundo" },
            { key: "B", text: "Solo si muerdes hielo directo" },
            { key: "C", text: "No, es una señal de alerta de que el esmalte está débil o hay caries" }
          ],
          correct: ["C"],
          errorMsg: "La sensibilidad indica daño. Tu esmalte se está desgastando o ya tienes el principio de una caries."
        },
        {
          id: "d4q3",
          question: "Si sientes dolor en algún diente o molestia fuerte en tu boca, ¿qué sueles hacer?",
          options: [
            { key: "A", text: "No hago nada y espero a que pase" },
            { key: "B", text: "Me enjuago con agua o como que “lo ignoro”" },
            { key: "C", text: "Aviso a un adulto o voy al dentista" }
          ],
          correct: ["C"],
          errorMsg: "El dolor dental no se cura solo. Ignorarlo hará que el tratamiento sea más doloroso después."
        }
      ]
    },
    5: {
      title: "Día 5: Retroalimentación y hábitos avanzados",
      questions: [
        {
          id: "d5q1",
          question: "Después de estos días, ¿te has lavado los dientes aproximadamente 2–3 minutos?",
          options: [
            { key: "A", text: "Sí, algunas veces" },
            { key: "B", text: "No, casi nunca" },
            { key: "C", text: "Sí, siempre" }
          ],
          correct: ["A", "C"],
          errorMsg: "Puedes mejorar esto para cuidar mejor tus dientes. La constancia es lo más importante."
        },
        {
          id: "d5q2",
          question: "Después de estos días, ¿has comenzado a cuidar más tu lengua, usar hilo dental o colutorio?",
          options: [
            { key: "A", text: "No, sigo igual" },
            { key: "B", text: "Sí, a veces" },
            { key: "C", text: "Sí, todos los días" }
          ],
          correct: ["B", "C"],
          errorMsg: "Tu boca es un ecosistema. Si solo lavas los dientes y dejas la lengua sucia, las bacterias volverán."
        },
        {
          id: "d5q3",
          question: "Después de comer algo dulce o ácido, ¿esperas unos 30 minutos antes de cepillarte los dientes?",
          options: [
            { key: "A", text: "No, me cepillo inmediatamente" },
            { key: "B", text: "A veces" },
            { key: "C", text: "Sí, siempre" }
          ],
          correct: ["B", "C"],
          errorMsg: "Es mejor esperar 30 minutos para proteger el esmalte, ya que el ácido lo debilita temporalmente."
        },
        {
          id: "d5q4",
          question: "¿Qué parte de tu higiene bucal crees que debes mejorar más?",
          options: [
            { key: "A", text: "Cepillado (tiempo o técnica)" },
            { key: "B", text: "Uso de hilo dental / colutorio" },
            { key: "C", text: "Tener un hábito de higiene de todos los días" }
          ],
          correct: ["A", "B", "C"],
          errorMsg: "Reconocer qué te falta es el primer paso." // Fallback
        }
      ]
    }
  };

  // ESTADO DE LA APLICACIÓN
  let appState = {
    alias: "",
    edad: "",
    currentDay: 1,
    currentQuestionIndex: 0,
    score: 0,
    completedDays: [],
    answersLog: {},
    startDate: null
  };

  // CONTROLADORES DE TIEMPO GLOBALES
  let timerInterval = null;
  let timeLeft = 10;

  // ELEMENTOS DEL DOM
  const screens = {
    welcome: document.getElementById('screen-welcome'),
    dashboard: document.getElementById('screen-dashboard'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results')
  };

  const inputAlias = document.getElementById('input-alias');
  const inputEdad = document.getElementById('input-edad');
  const btnStart = document.getElementById('btn-start');
  const btnReset = document.getElementById('btn-reset');
  const btnBackDash = document.getElementById('btn-back-dash');
  const btnNextQuestion = document.getElementById('btn-next-question');
  const btnGoResults = document.getElementById('btn-go-results');
  const btnResultsBack = document.getElementById('btn-results-back');

  const dashScore = document.getElementById('dash-score');
  const quizDayTitle = document.getElementById('quiz-day-title');
  const quizStepIndicator = document.getElementById('quiz-step-indicator');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const questionText = document.getElementById('question-text');
  const optionsGroup = document.getElementById('options-group');
  
  const feedbackPanel = document.getElementById('feedback-panel');
  const feedbackEmoji = document.getElementById('feedback-emoji');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackText = document.getElementById('feedback-text');

  const resultBadgeEmoji = document.getElementById('result-badge-emoji');
  const resultRank = document.getElementById('result-rank');
  const resultFinalScore = document.getElementById('result-final-score');
  const dashFooterFinish = document.getElementById('dash-footer-finish');
  
  const audioCorrect = document.getElementById('audio-correct');
  const audioIncorrect = document.getElementById('audio-incorrect');
  const winMusic = document.getElementById('win-music');
  const glepImage = document.getElementById('glep-image');

  // INICIALIZACIÓN
  window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initEventListeners();
    checkFormValidation();
    renderDashboard();
    
    setTimeout(() => {
      screens.welcome.classList.add('fade-in');
    }, 50);
  });

  function initEventListeners() {
    inputAlias.addEventListener('input', checkFormValidation);
    inputEdad.addEventListener('input', checkFormValidation);

    btnStart.addEventListener('click', () => {
      appState.alias = inputAlias.value.trim().replace(/[/<>]/g, "");
      appState.edad = parseInt(inputEdad.value, 10);
      
      if (!appState.startDate) {
        appState.startDate = new Date().toISOString();
      }
      
      saveProgress();
      switchScreen('dashboard');
    });

    btnBackDash.addEventListener('click', () => {
      clearInterval(timerInterval);
      switchScreen('dashboard');
    });
    
    btnResultsBack.addEventListener('click', () => {
      clearInterval(timerInterval);
      if (winMusic) {
        winMusic.pause();
        winMusic.currentTime = 0;
      }
      switchScreen('dashboard');
    });
    
    btnReset.addEventListener('click', () => {
      if (confirm('¿Seguro que deseas reiniciar tu progreso y tus datos?')) {
        resetProgressData();
      }
    });

    btnNextQuestion.addEventListener('click', handleNextQuestionAction);
    btnGoResults.addEventListener('click', calculateAndShowResults);

    document.querySelectorAll('.btn-day').forEach(button => {
      button.addEventListener('click', (e) => {
        const daySelected = parseInt(e.currentTarget.getAttribute('data-day'), 10);
        startDayQuiz(daySelected);
      });
    });
  }

  function checkFormValidation() {
    const aliasVal = inputAlias.value.trim();
    const edadVal = inputEdad.value.trim();
    btnStart.disabled = !(aliasVal !== "" && edadVal !== "" && parseInt(edadVal, 10) > 0);
  }

  function switchScreen(screenKey) {
    const currentActiveScreen = document.querySelector('.screen.active');
    if (currentActiveScreen) {
      currentActiveScreen.classList.remove('fade-in');
      setTimeout(() => {
        currentActiveScreen.classList.remove('active');
        screens[screenKey].classList.add('active');
        void screens[screenKey].offsetWidth; 
        screens[screenKey].classList.add('fade-in');
        window.scrollTo(0, 0);
        if (screenKey === 'dashboard') renderDashboard();
      }, 350);
    } else {
      screens[screenKey].classList.add('active');
      void screens[screenKey].offsetWidth;
      screens[screenKey].classList.add('fade-in');
    }
  }

  function renderDashboard() {
    dashScore.textContent = `${appState.score} / 180`;

    // LÓGICA DE DESBLOQUEO POR PROGRESO DIRECTO (MODO PRUEBA)
    let firstIncompleteDay = 1;
    for (let d = 1; d <= 5; d++) {
      if (!appState.completedDays.includes(d)) {
        firstIncompleteDay = d;
        break;
      } else {
        firstIncompleteDay = 6;
      }
    }

    const isWholeGameFinished = appState.completedDays.length === 5;

    for (let d = 1; d <= 5; d++) {
      const card = document.getElementById(`card-day-${d}`);
      if (!card) continue;
      const statusLabel = document.getElementById(`status-day-${d}`);
      const actionBtn = document.getElementById(`btn-day-${d}`);

      card.className = "day-card";
      
      if (isWholeGameFinished) {
        card.classList.add('completed');
        statusLabel.textContent = "Completado ✨";
        actionBtn.textContent = "Repetir Día";
        actionBtn.disabled = false;
        actionBtn.className = "btn btn-primary btn-day";
      } 
      else if (appState.completedDays.includes(d)) {
        card.classList.add('completed');
        statusLabel.textContent = "Completado 🔒";
        actionBtn.textContent = "Bloqueado hasta el final";
        actionBtn.disabled = true;
        actionBtn.className = "btn btn-secondary btn-day";
      } 
      else if (d === firstIncompleteDay) {
        card.classList.add('current');
        statusLabel.textContent = "Disponible";
        actionBtn.textContent = "Iniciar";
        actionBtn.disabled = false;
        actionBtn.className = "btn btn-primary btn-day";
      } 
      else {
        statusLabel.textContent = "Bloqueado 🔒";
        actionBtn.textContent = "Completa el día anterior";
        actionBtn.disabled = true;
        actionBtn.className = "btn btn-secondary btn-day";
      }
    }

    if (isWholeGameFinished) {
      dashFooterFinish.classList.remove('hidden-element');
      dashFooterFinish.classList.add('visible-element');
    } else {
      dashFooterFinish.classList.remove('visible-element');
      dashFooterFinish.classList.add('hidden-element');
    }
  }

  function startDayQuiz(day) {
    appState.currentDay = day;
    appState.currentQuestionIndex = 0;
    hideFeedback();
    loadQuestion();
    switchScreen('quiz');
  }

  function loadQuestion() {
    hideFeedback();
    const currentDayData = QUIZ_DATA[appState.currentDay];
    const questionData = currentDayData.questions[appState.currentQuestionIndex];
    const totalQuestions = currentDayData.questions.length;

    quizDayTitle.textContent = currentDayData.title;
    
    // Indicador limpio
    quizStepIndicator.textContent = `${appState.currentQuestionIndex + 1} de ${totalQuestions}`;
    
    const progressPercent = ((appState.currentQuestionIndex + 1) / totalQuestions) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    questionText.textContent = questionData.question;
    optionsGroup.innerHTML = ''; 

    questionData.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${opt.key}. ${opt.text}`;
      btn.setAttribute('role', 'radio');
      btn.addEventListener('click', () => evaluateAnswer(opt.key, btn));
      optionsGroup.appendChild(btn);
    });

    // INYECCIÓN DE LA BARRA DE TIEMPO (SIN NÚMEROS)
    let timerWrapper = document.getElementById('quiz-timer-wrapper');
    if (!timerWrapper) {
      timerWrapper = document.createElement('div');
      timerWrapper.id = 'quiz-timer-wrapper';
      timerWrapper.style = 'width: 100%; background: #E2E8F0; height: 8px; border-radius: 4px; margin-bottom: 24px; overflow: hidden; display: flex; align-items: center; position: relative;';
      
      const timerFill = document.createElement('div');
      timerFill.id = 'quiz-timer-fill';
      timerFill.style = 'height: 100%; background: #E53E3E; width: 100%; transition: width 0.1s linear;';
      
      timerWrapper.appendChild(timerFill);
      questionText.parentNode.insertBefore(timerWrapper, questionText);
    }

    initQuestionTimer();
  }

  function initQuestionTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    
    const timerFill = document.getElementById('quiz-timer-fill');
    timerFill.style.width = '100%';

    timerInterval = setInterval(() => {
      timeLeft -= 0.1;
      if (timeLeft <= 0) {
        timeLeft = 0;
        clearInterval(timerInterval);
        timerFill.style.width = '0%';
        handleQuestionTimeout();
      } else {
        timerFill.style.width = `${(timeLeft / 10) * 100}%`;
      }
    }, 100);
  }

  function handleQuestionTimeout() {
    const questionData = QUIZ_DATA[appState.currentDay].questions[appState.currentQuestionIndex];
    const allButtons = optionsGroup.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    const answerLogKey = `d${appState.currentDay}q${appState.currentQuestionIndex}`;
    appState.answersLog[answerLogKey] = "TIMEOUT";

    feedbackPanel.className = "feedback-panel incorrect";
    feedbackEmoji.textContent = "⏱️";
    feedbackTitle.textContent = "Tiempo Agotado";
    feedbackText.textContent = questionData.errorMsg || "Demoraste demasiado. Intenta ser más rápido.";

    if (audioIncorrect) {
      audioIncorrect.currentTime = 0;
      audioIncorrect.play().catch(() => {});
    }

    feedbackPanel.classList.remove('hidden');
    saveProgress();
  }

  function evaluateAnswer(selectedKey, selectedButton) {
    clearInterval(timerInterval); 
    
    const questionData = QUIZ_DATA[appState.currentDay].questions[appState.currentQuestionIndex];
    const allButtons = optionsGroup.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    const isCorrect = questionData.correct.includes(selectedKey);
    const answerLogKey = `d${appState.currentDay}q${appState.currentQuestionIndex}`;
    
    const previousWasCorrect = appState.answersLog[answerLogKey] 
      ? questionData.correct.includes(appState.answersLog[answerLogKey]) 
      : false;

    appState.answersLog[answerLogKey] = selectedKey;

    // Buscamos si la opción seleccionada tiene un feedback personalizado
    const selectedOptionObj = questionData.options.find(opt => opt.key === selectedKey);
    const customFeedback = selectedOptionObj ? selectedOptionObj.feedback : null;

    if (isCorrect) {
      selectedButton.classList.add('correct-picked');
      feedbackPanel.className = "feedback-panel correct";
      feedbackEmoji.textContent = "✅";
      feedbackTitle.textContent = "¡Buen punto!";
      // Prioriza el feedback de la opción si existe, si no usa el genérico
      feedbackText.textContent = customFeedback || "Sigue con esa mentalidad.";
      
      if (!previousWasCorrect) {
        appState.score += 10;
      }

      if (audioCorrect) {
        audioCorrect.currentTime = 0;
        audioCorrect.play().catch(() => {});
      }
    } else {
      selectedButton.classList.add('incorrect-picked');
      feedbackPanel.className = "feedback-panel incorrect";
      feedbackEmoji.textContent = "💡";
      feedbackTitle.textContent = "Revisión técnica";
      // Prioriza el feedback de la opción si existe, si no usa el errorMsg general
      feedbackText.textContent = customFeedback || questionData.errorMsg;
      
      if (previousWasCorrect) {
        appState.score = Math.max(0, appState.score - 10);
      }

      if (audioIncorrect) {
        audioIncorrect.currentTime = 0;
        audioIncorrect.play().catch(() => {});
      }
    }

    feedbackPanel.classList.remove('hidden');
    saveProgress();
  }

  function hideFeedback() {
    feedbackPanel.classList.add('hidden');
  }

  function handleNextQuestionAction() {
    appState.currentQuestionIndex++;
    const totalQuestions = QUIZ_DATA[appState.currentDay].questions.length;

    if (appState.currentQuestionIndex < totalQuestions) {
      loadQuestion();
    } else {
      if (!appState.completedDays.includes(appState.currentDay)) {
        appState.completedDays.push(appState.currentDay);
      }
      saveProgress();
      switchScreen('dashboard');
    }
  }

  function calculateAndShowResults() {
    resultFinalScore.textContent = appState.score;
    const successPercentage = (appState.score / 180) * 100;

    if (appState.score >= 150) {
      resultBadgeEmoji.textContent = "🏆";
      resultRank.textContent = "Excelente / Nivel Oro";
    } else if (appState.score >= 100) {
      resultBadgeEmoji.textContent = "✨";
      resultRank.textContent = "Bueno / Nivel Plata";
    } else {
      resultBadgeEmoji.textContent = "💧";
      resultRank.textContent = "Reforzar / Nivel Bronce";
    }

    sendDataToDatabase();

    if (successPercentage > 80) {
      if (glepImage) glepImage.src = "glep.gif";

      if (typeof confetti === 'function') {
        setTimeout(() => {
          confetti({ particleCount: 80, angle: 60, spread: 65, origin: { x: 0, y: 0.8 } });
          confetti({ particleCount: 80, angle: 120, spread: 65, origin: { x: 1, y: 0.8 } });
        }, 400); 
      }

      if (winMusic) {
        winMusic.currentTime = 0;
        winMusic.play().catch(() => {});
      }
    } else {
      if (glepImage) glepImage.src = "glep2.png";
    }

    switchScreen('results');
  }

  function sendDataToDatabase() {
    const payload = {
      alias: appState.alias,
      edad: appState.edad,
      scoreTotal: appState.score,
      respuestas: appState.answersLog,
      timestamp: new Date().toISOString()
    };

    fetch(DATABASE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => console.log("Sincronización exitosa:", data))
    .catch(err => console.warn("Modo local activo:", err.message));
  }

  function saveProgress() {
    try {
      localStorage.setItem('smiling_friends_progress', JSON.stringify({
        alias: appState.alias,
        edad: appState.edad,
        score: appState.score,
        completedDays: appState.completedDays,
        answersLog: appState.answersLog,
        startDate: appState.startDate
      }));
    } catch (e) {}
  }

  function loadProgress() {
    try {
      const data = localStorage.getItem('smiling_friends_progress');
      if (data) {
        const parsed = JSON.parse(data);
        appState.alias = parsed.alias || "";
        appState.edad = parsed.edad || "";
        appState.score = typeof parsed.score === 'number' ? parsed.score : 0;
        appState.completedDays = Array.isArray(parsed.completedDays) ? parsed.completedDays : [];
        appState.answersLog = parsed.answersLog || {};
        appState.startDate = parsed.startDate || null;

        if (appState.alias) inputAlias.value = appState.alias;
        if (appState.edad) inputEdad.value = appState.edad;
      }
    } catch (e) {}
  }

  function resetProgressData() {
    clearInterval(timerInterval);
    try {
      localStorage.removeItem('smiling_friends_progress');
    } catch (e) {}
    
    if (winMusic) {
      winMusic.pause();
      winMusic.currentTime = 0;
    }

    inputAlias.value = "";
    inputEdad.value = "";
    
    appState.alias = "";
    appState.edad = "";
    appState.score = 0;
    appState.completedDays = [];
    appState.answersLog = {};
    appState.startDate = null;
    
    checkFormValidation();
    switchScreen('welcome');
  }

})();
