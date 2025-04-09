const imageSources = {
    '1': 'assets/img/choix_cat_1.png',
    '2': 'assets/img/choix_cat_2.png',
    '3': 'assets/img/choix_cat_3.png',
    '4': 'assets/img/choix_cat_4.png',
    '5': 'assets/img/choix_cat_5.png',
    '6': 'assets/img/choix_cat_6.png'
  };
  
  document.querySelectorAll('input[name="select"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.getElementById('choix').src = imageSources[this.value];
    });
  });

  
const imageSources2 = {
    '1': 'assets/img/agenda1.gif',
    '2': 'assets/img/agenda2.gif',
  };
  
  document.querySelectorAll('input[name="select_2"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.getElementById('anda1').src = imageSources2[this.value];
    });
  });


