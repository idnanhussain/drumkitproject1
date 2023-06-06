
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }
  
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
  
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }
  
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
  
    const soundButtons = Array.from(document.querySelectorAll('.sound-button'));
    soundButtons.forEach(button => button.addEventListener('click', handleButtonClick));

    
    function handleButtonClick(event) {
      const key = event.target.parentNode;
      const keyCode = key.getAttribute('data-key');
      playSound({ keyCode });
    }