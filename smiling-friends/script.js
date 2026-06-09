(function () {  'use strict';

  const DATABASE_API_URL = "/api/save-results";

  // DATASET COMPLETO DEL CUESTIONARIO SANEADO Y SEGURO
  const QUIZ_DATA = {
    1: {
      title: "Día 1: Hábitos de cepillado",
      questions: [
        {
          id: "d1q1",
          question: "¿Cuánto tiempo te demoras en cepillarte los dientes?",
          options: [
            { key: "A", text: "40–50 segundos" },
            { key: "B", text: "2–3 minutos" },
            { key: "C", text: "3–5 minutos" }
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
