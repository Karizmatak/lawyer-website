
window.onload = function() {
  const animations = document.getElementById('animations');
  animations.style.animation = 'moveAndRotate 2s';
  const opacity = document.getElementById('opacity');
  opacity.style.animation = 'opacity 2s';
};

function hukuk(id) {
  const texts = document.getElementById(id);

  if(texts){
    if (texts.style.display === 'block') {
      texts.style.transition = 'all 0.3s';
      texts.style.display = 'none';
    } else {
      texts.style.transition = 'all 0.3s';
      texts.style.display = 'block';
    }
  }
}

function danismanlik(id) {
  const texts = document.getElementById(id);

  if(texts){
    if (texts.style.display === 'block') {
      texts.style.transition = 'all 0.3s';
      texts.style.display = 'none';
    } else {
      texts.style.transition = 'all 0.3s';
      texts.style.display = 'block';
    }
  }
}

function basari(id) {
  const texts = document.getElementById(id);

  if(texts){
    if (texts.style.display === 'block') {
      texts.style.transition = 'all 0.3s';
      texts.style.display = 'none';
    } else {
      texts.style.transition = 'all 0.3s';
      texts.style.display = 'block';
    }
  }
}

