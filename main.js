const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

  function showTime() {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
    
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
  };
  
  function addZero(n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n;
    
  };
 
  function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();
     
    //switch(hour){
    //  case  hour > 6 && hour < 12 : 
    //    document.body.style.backgroundImage ="url('https://images.wallpaperscraft.ru/image///voshod_tuman_derevia_133599_1280x720.jpg')";
    //    greeting.textContent = 'Доброе утро!';
    //    break;
    //  case hour > 12 && hour < 18 : 
    //    document.body.style.backgroundImage ="url('https://images.wallpaperscraft.ru/image///holmy_zelenyy_leto_svet_solnce_polden_teni_nebo_yasno_spokoystvie_63419_1280x720.//jpg')";
    //    greeting.textContent = 'Добрый день!'; 
    //    break;
    //  case //hour < 6 && hour > 18 :
    //    document.body.style.backgroundImage ="url('https://images.wallpaperscraft.ru/image///noch_les_gory_144768_1280x720.jpg')";
    //    greeting.textContent = 'Добрый вечер!'; 
    //    document.body.style.color = 'white';  
    //};
    if ( hour > 6 && hour < 12) {
      document.body.style.backgroundImage ="url('https://images.wallpaperscraft.ru/image///voshod_tuman_derevia_133599_1280x720.jpg')";
      greeting.textContent = 'Доброе утро!';
    } else if (hour > 12 && hour < 18) {
      document.body.style.backgroundImage ="url('https://images.wallpaperscraft.ru/image///holmy_zelenyy_leto_svet_solnce_polden_teni_nebo_yasno_spokoystvie_63419_1280x720.jpg')//";
      greeting.textContent = 'Добрый день!';
    } else {
      document.body.style.backgroundImage ="url('https://images.wallpaperscraft.ru/image/noch_les_gory_144768_1280x720.jpg')";
      greeting.textContent = 'Добрый вечер!'; 
      document.body.style.color = 'white';
    }           
  }
 
  function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Введите имя]';
    } else {
      name.textContent = localStorage.getItem('name')
    }
  }

  function setName(e) {
    if(e.type === 'keypress'){
      if (e.wich == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerHTML);
        name.blur()
      }
    } else {
      localStorage.setItem('name', e.target.innerHTML);
    }
  }
  
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Введите план]';
    } else {
      focus.textContent = localStorage.getItem('focus')
    }
  } 
 
  function setFocus(e) {
    if(e.type === 'keypress'){
      if (e.wich == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerHTML);
        focus.blur()
      }
    } else {
      localStorage.setItem('focus', e.target.innerHTML);
    }
  }

  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);

  showTime();
  setBgGreet();
  getName();
  getFocus();