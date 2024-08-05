function tampil(buttonId, elementId, plusId) {
    const button = document.getElementById(buttonId);
    const element = document.getElementById(elementId);
    const plus = document.getElementById(plusId);
    
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('visible');
      plus.innerHTML = '-';
    } else {
      element.classList.remove('visible');
      element.classList.add('hidden');
      plus.innerHTML = '+';
    }
  }
  