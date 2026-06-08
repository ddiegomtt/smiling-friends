(function () {  'use strict';

  // DATASET COMPLETO DEL CUESTIONARIO SANEADO Y SEGURO
  const QUIZ_DATA = {
    1: {
      title: "Día 1: Rutina Básica",
      questions: [
        {
          id: "d1q1",
          question: "¿Cuánto tiempo debe durar cada sesión de cepillado dental para ser efectiva?",
          options: [
            { key: "A", text: "30 segundos rápidamente" },
            { key: "B", text: "Alrededor de 2 minutos" },
            { key: "C", text: "10 minutos seguidos" }
          ],
          correct: "B",
          errorMsg: "El cepillado debe durar al menos 2 minutos."
        },
        {
          id: "d1q2",
          question: "¿Con qué frecuencia mínima debes cepillarte los dientes cada día?",
          options: [
            { key: "A", text: "Solo una vez por semana" },
            { key: "B", text: "Mínimo 2 veces al día" },
            { key: "C", text: "Solo cuando comes dulces" }
          ],
          correct: "B",
          errorMsg: "Debes cepillarte mínimo 2 veces al día."
        },
        {
          id: "d1q3",
          question: "¿Es necesario lavarse los dientes justo antes de ir a dormir?",
          options: [
            { key: "A", text: "Sí, es obligatorio" },
            { key: "B", text: "No, da lo mismo" },
            { key: "C", text: "Solo si te acuerdas" }
          ],
          correct: "A",
          errorMsg: "En la noche baja el flujo de saliva y aumenta el riesgo de caries."
        }
      ]
    },
    2: {
      title: "Día 2: Técnica y Flúor",
      questions: [
        {
          id: "d2q1",
          question: "¿Debes preocuparte por limpiar todas las zonas de la dentadura?",
          options: [
            { key: "A", text: "Sí, caras internas, externas y de masticación" },
            { key: "B", text: "No, solo los dientes que se ven al sonreír" },
            { key: "C", text: "Solo las muelas de abajo" }
          ],
          correct: "A",
          errorMsg: "Debes limpiar todas las zonas para remover la placa."
        },
        {
          id: "d2q2",
          question: "¿La lengua se debe limpiar durante la higiene bucal?",
          options: [
            { key: "A", text: "Sí, siempre" },
            { key: "B", text: "No, se limpia sola" },
            { key: "C", text: "Solo los fines de semana" }
          ],
          correct: "A",
          errorMsg: "La lengua acumula bacterias y puede causar mal aliento."
        },
        {
          id: "d2q3",
          question: "¿Por qué es importante usar una pasta de dientes que contenga flúor?",
          options: [
            { key: "A", text: "Porque fortalece el esmalte dental" },
            { key: "B", text: "Solo sirve para dar buen sabor" },
            { key: "C", text: "Para cambiar el color del cepillo" }
          ],
          correct: "A",
          errorMsg: "El flúor fortalece el esmalte dental."
        }
      ]
    },
    3: {
      title: "Día 3: Alimentación",
      questions: [
        {
          id: "d3q1",
          question: "¿Qué cantidad de bebidas azucaradas es recomendable consumir para cuidar tus dientes?",
          options: [
            { key: "A", text: "Tres litros diarios" },
            { key: "B", text: "Todo lo que quieras" },
            { key: "C", text: "Nada o casi nada" }
          ],
          correct: "C",
          errorMsg: "El azúcar favorece la aparición de caries."
        },
        {
          id: "d3q2",
          question: "¿Tomar agua de manera regular beneficia a tu salud bucal?",
          options: [
            { key: "A", text: "Sí, favorece la producción de saliva y protege la boca" },
            { key: "B", text: "No, el agua daña el esmalte" },
            { key: "C", text: "Es indiferente" }
          ],
          correct: "A",
          errorMsg: "Tomar agua favorece la saliva y protege tu boca."
        },
        {
          id: "d3q3",
          question: "¿Es saludable comer dulces frecuentemente entre las comidas principales?",
          options: [
            { key: "A", text: "Sí, mantiene limpios los dientes" },
            { key: "B", text: "Depende del clima" },
            { key: "C", text: "No, daña los dientes" }
          ],
          correct: "C",
          errorMsg: "Comer dulces frecuentemente entre comidas daña los dientes."
        }
      ]
    },
    4: {
      title: "Día 4: Herramientas",
      questions: [
        {
          id: "d4q1",
          question: "¿Cuál es la función principal de usar seda dental?",
          options: [
            { key: "A", text: "Limpiar donde el cepillo no alcanza" },
            { key: "B", text: "Reemplazar por completo al cepillo" },
            { key: "C", text: "Sostener los dientes juntos" }
          ],
          correct: "A",
          errorMsg: "La seda dental limpia donde el cepillo no alcanza."
        },
        {
          id: "d4q2",
          question: "¿Cada cuánto tiempo se aconseja cambiar el cepillo de dientes?",
          options: [
            { key: "A", text: "Cada 3 meses por desgaste" },
            { key: "B", text: "Cada 5 años" },
            { key: "C", text: "Nunca se debe cambiar" }
          ],
          correct: "A",
          errorMsg: "Debes cambiar el cepillo cada 3 meses por desgaste."
        },
        {
          id: "d4q3",
          question: "¿Cuál es el momento más crítico para asegurar un cepillado perfecto?",
          options: [
            { key: "A", text: "Antes de dormir" },
            { key: "B", text: "A mitad de la tarde" },
            { key: "C", text: "Apenas te despiertas únicamente" }
          ],
          correct: "A",
          errorMsg: "La noche es el momento más crítico para la higiene bucal."
        }
      ]
    }
  };

  // ESTADO DE LA APLICACIÓN
  let appState = {
    currentDay: 1,
    currentQuestionIndex: 0,
    score: 0,
    completedDays: [],
    answersLog: {}
  };

  // ELEMENTOS DEL DOM
  const screens = {
    welcome: document.getElementById('screen-welcome'),
    dashboard: document.getElementById('screen-dashboard'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results')
  };

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
  
  // Elementos de audio multimedia e imagen dinámica
  const audioCorrect = document.getElementById('audio-correct');
  const audioIncorrect = document.getElementById('audio-incorrect');
  const winMusic = document.getElementById('win-music');
  const glepImage = document.getElementById('glep-image');

  // INICIALIZACIÓN
  window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initEventListeners();
    renderDashboard();
    
    setTimeout(() => {
      screens.welcome.classList.add('fade-in');
    }, 50);
  });

  function initEventListeners() {
    btnStart.addEventListener('click', () => switchScreen('dashboard'));
    btnBackDash.addEventListener('click', () => switchScreen('dashboard'));
    btnResultsBack.addEventListener('click', () => {
      if (winMusic) {
        winMusic.pause();
        winMusic.currentTime = 0;
      }
      switchScreen('dashboard');
    });
    
    btnReset.addEventListener('click', () => {
      if (confirm('¿Seguro que deseas reiniciar tu progreso del reto?')) {
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

  // NAVEGACIÓN ASÍNCRONA CON ANIMACIONES SUAVES
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
      }, 350);
    } else {
      screens[screenKey].classList.add('active');
      void screens[screenKey].offsetWidth;
      screens[screenKey].classList.add('fade-in');
    }
  }

  // LOGICA DASHBOARD
  function renderDashboard() {
    dashScore.textContent = `${appState.score} / 120`;

    let firstIncompleteDay = 1;
    for (let d = 1; d <= 4; d++) {
      if (!appState.completedDays.includes(d)) {
        firstIncompleteDay = d;
        break;
      } else {
        firstIncompleteDay = 5;
      }
    }

    for (let d = 1; d <= 4; d++) {
      const card = document.getElementById(`card-day-${d}`);
      const statusLabel = document.getElementById(`status-day-${d}`);
      const actionBtn = document.getElementById(`btn-day-${d}`);

      card.classList.remove('completed', 'current');
      
      if (appState.completedDays.includes(d)) {
        card.classList.add('completed');
        statusLabel.textContent = "Completado ✨";
        actionBtn.textContent = "Repetir Día";
        actionBtn.disabled = false;
      } else if (d === firstIncompleteDay) {
        card.classList.add('current');
        statusLabel.textContent = "Disponible";
        actionBtn.textContent = "Iniciar";
        actionBtn.disabled = false;
        actionBtn.className = "btn btn-primary btn-day";
      } else {
        statusLabel.textContent = "Bloqueado";
        actionBtn.textContent = "Bloqueado";
        actionBtn.disabled = true;
        actionBtn.className = "btn btn-secondary btn-day";
      }
    }

    if (appState.completedDays.length === 4) {
      dashFooterFinish.classList.remove('hidden-element');
      dashFooterFinish.classList.add('visible-element');
    } else {
      dashFooterFinish.classList.remove('visible-element');
      dashFooterFinish.classList.add('hidden-element');
    }
  }

  // LÓGICA DEL CUESTIONARIO
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

    quizDayTitle.textContent = currentDayData.title;
    quizStepIndicator.textContent = `Pregunta ${appState.currentQuestionIndex + 1} de 3`;
    
    const progressPercent = ((appState.currentQuestionIndex + 1) / 3) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    questionText.textContent = questionData.question;
    optionsGroup.innerHTML = ''; 

    questionData.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${opt.key}. ${opt.text}`;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');
      btn.addEventListener('click', () => evaluateAnswer(opt.key, btn));
      optionsGroup.appendChild(btn);
    });
  }

  function evaluateAnswer(selectedKey, selectedButton) {
    const questionData = QUIZ_DATA[appState.currentDay].questions[appState.currentQuestionIndex];
    
    const allButtons = optionsGroup.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    const isCorrect = (selectedKey === questionData.correct);
    const answerLogKey = `d${appState.currentDay}q${appState.currentQuestionIndex}`;
    const previousWasCorrect = appState.answersLog[answerLogKey] === true;

    if (isCorrect) {
      selectedButton.classList.add('correct-picked');
      feedbackPanel.className = "feedback-panel correct";
      feedbackEmoji.textContent = "😁";
      feedbackTitle.textContent = "¡Excelente!";
      feedbackText.textContent = "¡Respuesta correcta! Sigue así.";
      
      if (!previousWasCorrect) {
        appState.score += 10;
        appState.answersLog[answerLogKey] = true;
      }

      if (audioCorrect) {
        audioCorrect.currentTime = 0;
        audioCorrect.play().catch(() => {});
      }
    } else {
      selectedButton.classList.add('incorrect-picked');
      feedbackPanel.className = "feedback-panel incorrect";
      feedbackEmoji.textContent = "🪥";
      feedbackTitle.textContent = "No es correcto";
      feedbackText.textContent = questionData.errorMsg;
      
      if (previousWasCorrect) {
        appState.score = Math.max(0, appState.score - 10);
      }
      appState.answersLog[answerLogKey] = false;

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
    if (appState.currentQuestionIndex < 3) {
      loadQuestion();
    } else {
      if (!appState.completedDays.includes(appState.currentDay)) {
        appState.completedDays.push(appState.currentDay);
      }
      saveProgress();
      renderDashboard();
      switchScreen('dashboard');
    }
  }

  // PANTALLA FINAL DE RESULTADOS CON DISPARO DE CONFETI, AUDIO Y RECURSO VISUAL DINÁMICO DE GLEP
  function calculateAndShowResults() {
    resultFinalScore.textContent = appState.score;
    const successPercentage = (appState.score / 120) * 100;

    if (appState.score >= 100) {
      resultBadgeEmoji.textContent = "🏆";
      resultRank.textContent = "Excelente / Nivel Oro";
    } else if (appState.score >= 70) {
      resultBadgeEmoji.textContent = "✨";
      resultRank.textContent = "Bueno / Nivel Plata";
    } else {
      resultBadgeEmoji.textContent = "💧";
      resultRank.textContent = "Reforzar / Nivel Bronce";
    }

    // Evaluación del criterio del 80% para la asignación del asset de Glep
    if (successPercentage > 80) {
      if (glepImage) {
        glepImage.src = "glep.gif";
      }

      if (typeof confetti === 'function') {
        setTimeout(() => {
          confetti({
            particleCount: 80,
            angle: 60,
            spread: 65,
            origin: { x: 0, y: 0.8 }
          });
          confetti({
            particleCount: 80,
            angle: 120,
            spread: 65,
            origin: { x: 1, y: 0.8 }
          });
        }, 400); 
      }

      if (winMusic) {
        winMusic.currentTime = 0;
        winMusic.play().catch(err => {
          console.log("El navegador restringió la reproducción de audio automática:", err);
        });
      }
    } else {
      if (glepImage) {
        glepImage.src = "glep2.png";
      }
    }

    switchScreen('results');
  }

  // PERSISTENCIA LOCAL GLOBAL SANEADA
  function saveProgress() {
    try {
      localStorage.setItem('smiling_friends_progress', JSON.stringify({
        score: appState.score,
        completedDays: appState.completedDays,
        answersLog: appState.answersLog
      }));
    } catch (e) {}
  }

  function loadProgress() {
    try {
      const data = localStorage.getItem('smiling_friends_progress');
      if (data) {
        const parsed = JSON.parse(data);
        appState.score = typeof parsed.score === 'number' ? parsed.score : 0;
        appState.completedDays = Array.isArray(parsed.completedDays) ? parsed.completedDays : [];
        appState.answersLog = parsed.answersLog || {};
      }
    } catch (e) {}
  }

  function resetProgressData() {
    try {
      localStorage.removeItem('smiling_friends_progress');
    } catch (e) {}
    
    if (winMusic) {
      winMusic.pause();
      winMusic.currentTime = 0;
    }

    appState.score = 0;
    appState.completedDays = [];
    appState.answersLog = {};
    
    renderDashboard();
    switchScreen('welcome');
  }

})();
