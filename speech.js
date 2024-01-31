
  const recognition = new  window.webkitSpeechRecognition();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.body.style.background=transcript; 
  };

  const startButton = document.getElementById('startButton'); 
  startButton.addEventListener('click', () => {
    recognition.start();
  });
