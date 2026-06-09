(function () {  'use strict';

  const DATABASE_API_URL = "/api/save-results";

  // DATASET COMPLETO DEL CUESTIONARIO (ENFOQUE DE CONOCIMIENTO OBJETIVO)
  const QUIZ_DATA = {
    1: {
      title: "Día 1: Hábitos de cepillado",
      questions: [
        {
          id: "d1q1",
          question: "¿Cuánto tiempo debe durar un cepillado dental para remover la placa de forma efectiva?",
          options: [
            { key: "A", text: "Con 40–50 segundos rápidos es suficiente" },
            { key: "B", text: "Entre 2 y 3 minutos" },
            { key: "C", text: "Mínimo 5 minutos por reloj" }
          ],
          correct: ["B"],
          errorMsg: "El estándar de oro para remover bien la placa bacteriana es de 2 a 3 minutos."
        },
        {
          id: "d1q2",
          question: "¿Qué características debe tener el cepillo de dientes ideal para no dañar tu boca?",
          options: [
            { key: "A", text: "Cabezal grande con cerdas duras para raspar mejor" },
            { key: "B", text: "Cabezal pequeño para llegar al fondo y cerdas suaves" },
            { key: "C", text: "Cabezal mediano con cerdas súper rígidas" }
          ],
          correct: ["B"],
          errorMsg: "Lo ideal es un cabezal pequeño para llegar a todos los rincones y cerdas suaves para no erosionar el esmalte ni retraer las encías."
        },
        {
          id: "d1q3",
          question: "¿Por qué es obligatorio incluir la lengua en tu rutina de higiene?",
          options: [
            { key: "A", text: "Porque ahí se esconden las bacterias que causan mal aliento" },
            { key: "B", text: "No es obligatorio, se limpia sola con la saliva" },
            { key: "C", text: "Solo sirve para sentir mejor los sabores" }
          ],
          correct: ["A"],
          errorMsg: "La lengua actúa como una esponja que retiene muchísimas bacterias. Cepillarla es la clave contra el mal aliento."
        },
        {
          id: "d1q4",
          question: "¿Cuál es el protocolo correcto si comes algo justo antes de irte a dormir?",
          options: [
            { key: "A", text: "Esperar unos 30 minutos y luego cepillarme" },
            { key: "B", text: "Cepillarme inmediatamente para irme a la cama rápido" },
            { key: "C", text: "Enjuagarme solo con agua porque ya es muy tarde" }
          ],
          correct: ["A"],
          errorMsg: "Debes esperar 30 minutos para permitir que la saliva neutralice los ácidos de la comida; si te cepillas de inmediato, frotas el ácido contra el esmalte."
        }
      ]
    },
    2: {
      title: "Día 2: Técnicas de cepillado",
      questions: [
        {
          id: "d2q1",
          question: "¿Cuál es el movimiento más efectivo que debes hacer con el cepillo?",
          options: [
            { key: "A", text: "Hacer círculos muy rápidos y con fuerza" },
            { key: "B", text: "Frotar de lado a lado (horizontalmente)" },
            { key: "C", text: "Colocar el cepillo entre la encía y el diente y hacer un barrido hacia afuera" }
          ],
          correct: ["C"],
          errorMsg: "El movimiento de barrido (de la encía hacia el diente) es el único que logra expulsar los restos de comida que se esconden en el borde."
        },
        {
          id: "d2q2",
          question: "¿Qué zonas de los dientes son las más críticas y NUNCA debes olvidar?",
          options: [
            { key: "A", text: "Solo las partes de adelante que se ven al sonreír" },
            { key: "B", text: "Todas las caras, especialmente la línea pegada a la encía" },
            { key: "C", text: "Solo las muelas de atrás porque con ellas se mastica" }
          ],
          correct: ["B"],
          errorMsg: "La placa bacteriana se esconde principalmente en las caras internas y justo en la línea donde el diente se junta con la encía."
        },
        {
          id: "d2q3",
          question: "Al momento de limpiar la zona de las encías, ¿cuál es la técnica correcta?",
          options: [
            { key: "A", text: "Evitar tocarlas con el cepillo para no lastimarlas" },
            { key: "B", text: "Pasar el cepillo suavemente masajeando la unión diente-encía" },
            { key: "C", text: "Frotar con fuerza para sacar toda la suciedad atrapada" }
          ],
          correct: ["B"],
          errorMsg: "Debes masajear la encía suavemente. Si frotas con fuerza bruta, puedes retraerla y exponer la raíz del diente."
        },
        {
          id: "d2q4",
          question: "¿Cada cuánto tiempo es obligatorio cambiar tu cepillo por uno nuevo?",
          options: [
            { key: "A", text: "Solo cuando las cerdas se ven destruidas o abiertas" },
            { key: "B", text: "Cada 3 meses aproximadamente (o después de enfermarse)" },
            { key: "C", text: "Puede durar todo el año si lo enjuago bien" }
          ],
          correct: ["B"],
          errorMsg: "La vida útil técnica de un cepillo es de 3 meses máximo. Después de eso, no limpia bien a nivel microscópico."
        }
      ]
    },
    3: {
      title: "Día 3: Colutorio y seda dental",
      questions: [
        {
          id: "d3q1",
          question: "¿Qué opinan los dentistas sobre el uso del hilo dental?",
          options: [
            { key: "A", text: "Es opcional, el cepillo saca todo" },
            { key: "B", text: "Solo sirve cuando te queda carne atrapada" },
            { key: "C", text: "Es obligatorio todos los días para limpiar entre los dientes" }
          ],
          correct: ["C"],
          errorMsg: "El cepillo no llega al espacio entre los dientes. El hilo dental diario es obligatorio para evitar caries ocultas (interproximales)."
        },
        {
          id: "d3q2",
          question: "¿Cuál es la técnica correcta para usar el hilo dental sin lastimarte?",
          options: [
            { key: "A", text: "Meterlo y sacarlo rápido haciendo fuerza hacia abajo" },
            { key: "B", text: "Deslizarlo suavemente abrazando cada diente en forma de 'C'" },
            { key: "C", text: "Pasarlo por encima de las muelas" }
          ],
          correct: ["B"],
          errorMsg: "Debes abrazar el diente formando una 'C' con el hilo para raspar la placa pegada a las paredes sin cortar la encía."
        },
        {
          id: "d3q3",
          question: "¿Cuál es la función real del enjuague bucal (colutorio)?",
          options: [
            { key: "A", text: "Reemplazar al cepillo cuando tienes prisa" },
            { key: "B", text: "Actuar como un complemento extra de protección" },
            { key: "C", text: "Solo para tener buen aliento por 5 minutos" }
          ],
          correct: ["B"],
          errorMsg: "El enjuague no reemplaza al cepillo ni al hilo, es solo un complemento final (un 'buff' extra) para la protección de tu boca."
        }
      ]
    },
    4: {
      title: "Día 4: Molestias y cuidado de la boca",
      questions: [
        {
          id: "d4q1",
          question: "Si las encías de una persona sangran un poco al cepillarse, ¿qué significa?",
          options: [
            { key: "A", text: "Es normal, significa que se cepilló con buena fuerza" },
            { key: "B", text: "A veces pasa por culpa de la marca de la pasta" },
            { key: "C", text: "No es normal, es señal de inflamación (gingivitis)" }
          ],
          correct: ["C"],
          errorMsg: "Una encía sana NUNCA sangra. Si sangra, hay bacterias acumuladas inflamando la zona."
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
          question: "Si empiezas a sentir una molestia constante o un dolor punzante en un diente, ¿cuál es la mejor decisión táctica?",
          options: [
            { key: "A", text: "Esperar un par de semanas a ver si se pasa solo" },
            { key: "B", text: "Ignorarlo y masticar por el otro lado de la boca" },
            { key: "C", text: "Avisar e ir al dentista de inmediato antes de que empeore" }
          ],
          correct: ["C"],
          errorMsg: "El dolor dental nunca se cura solo. Ignorarlo ahora solo hará que el tratamiento futuro sea más complejo y doloroso."
        }
      ]
    },
    5: {
      title: "Día 5: Compromiso y Hábitos Avanzados",
      questions: [
        {
          id: "d5q1",
          question: "Después de estos días, ¿te has lavado los dientes aproximadamente 2–3 minutos?",
          options: [
            { key: "A", text: "Sí, algunas veces", feedback: "¡Buen esfuerzo! Trata de que sea la regla general. Esos minutos extra hacen toda la diferencia." },
            { key: "B", text: "No, casi nunca", feedback: "Reconocerlo es el primer paso. Intenta ponerte una alarma o una canción de 3 minutos para guiarte." },
            { key: "C", text: "Sí, siempre", feedback: "¡Disciplina pura! Esa constancia te ahorrará muchísimos problemas en el futuro." }
          ],
          correct: ["A", "C"],
          errorMsg: "Puedes mejorar esto para cuidar mejor tus dientes. La constancia es lo más importante."
        },
        {
          id: "d5q2",
          question: "Después de estos días, ¿has comenzado a cuidar más tu lengua, usar hilo dental o colutorio?",
          options: [
            { key: "A", text: "No, sigo igual", feedback: "La boca es un ecosistema. Si lavas los dientes pero omites la lengua o el hilo, dejas el trabajo a la mitad." },
            { key: "B", text: "Sí, a veces", feedback: "¡Es un gran avance! Incorporar un hábito nuevo cuesta, mantén el ritmo y pronto será automático." },
            { key: "C", text: "Sí, todos los días", feedback: "¡Nivel Experto desbloqueado! Esa rutina completa mantendrá tu salud bucal impecable." }
          ],
          correct: ["B", "C"],
          errorMsg: "Tu boca es un ecosistema. Si solo lavas los dientes y dejas la lengua sucia, las bacterias volverán."
        },
        {
          id: "d5q3",
          question: "Después de comer algo dulce o ácido, ¿esperas unos 30 minutos antes de cepillarte los dientes?",
          options: [
            { key: "A", text: "No, me cepillo inmediatamente", feedback: "Cuidado: el ácido debilita el esmalte temporalmente y el cepillo lo raya. ¡Ponte el reto de esperar 30 minutos!" },
            { key: "B", text: "A veces", feedback: "Es un hábito engañoso, pero esperar esos 30 minutos salva tu esmalte a largo plazo." },
            { key: "C", text: "Sí, siempre", feedback: "¡Excelente táctica! Dejar que la saliva neutralice los ácidos primero es un detalle clave." }
          ],
          correct: ["B", "C"],
          errorMsg: "Es mejor esperar 30 minutos para proteger el esmalte, ya que el ácido lo debilita temporalmente."
        },
        {
          id: "d5q4",
          question: "¿Qué parte de tu higiene bucal crees que debes mejorar más a partir de hoy?",
          options: [
            { key: "A", text: "Cepillado (tiempo o técnica)", feedback: "Dominar la técnica de barrido y los 2 minutos transformará por completo tu sonrisa. ¡A darle con todo!" },
            { key: "B", text: "Uso de hilo dental o colutorio", feedback: "El hilo dental limpia ese 40% del diente que el cepillo no toca. Es una excelente meta para subir de nivel." },
            { key: "C", text: "Tener un hábito de higiene de todos los días", feedback: "La constancia vence a la perfección. Fija un recordatorio en tu teléfono para no fallar ninguna noche." }
          ],
          correct: ["A", "B", "C"],
          errorMsg: "" // Fallback
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
