$(() => {
  console.log('hello');
  const $doggy = $('.dog');
  const $chest = $('.closedChest');
  const $key = $('.key');
  let key = false;
  const $Wall1 = $('.Wall1');
  const $Wall2 = $('.Wall2');
  const $heading = $('#heading');
  const $color1 = $('#color1');
  const $color2 = $('#color2');
  const $color3 = $('#color3');
  const $colors = $('.colors');




  const backgrounds = [
    '/images/backdrop2.png',
    '/images/backdrop3.png',
    '/images/backdrop4.png',
    '/images/backdrop5.png'
  ];


  let backgroundIndex = 0;


  $chest.click(function(){
    $chest.attr('src', '/images/chest_open.png');
    $key.show();
  });

  let colorPos = 0;

  $color1.click(function(){
    const colorLevel = [
      'pink',
      'blue',
      'orange',
      'green',
      'yellow',
      'red'
    ];
    if(colorPos > [5]){
      colorPos=0;
    }

    console.log('click');
    $color1.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
  });
  $color2.click(function(){
    const colorLevel = [
      'pink',
      'blue',
      'orange',
      'green',
      'yellow',
      'red'
    ];
    if(colorPos > [5]){
      colorPos=0;
    }
    console.log('click');
    $color2.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
  });
  $color3.click(function(){
    const colorLevel = [
      'pink',
      'blue',
      'orange',
      'green',
      'yellow',
      'red'
    ];
    if(colorPos > [5]){
      colorPos=0;
    }
    console.log('click');
    $color3.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
  });

  $(document)
    .keydown(function(e) {
      switch (e.which) {
        case 65:
          if ($doggy.attr('src').match(/png/)){
            $doggy.attr('src',
              '/images/dog_left.gif');
          }
          $doggy.css({left: '-=10' });
          break;
        case 68:
          console.log('lol', $doggy.position().left, key);
          if (!key) {
            if ($doggy.position().left >= 850) {
              return;
            }
            if ($doggy.position().left >= 300){
              $heading.text('Use A and D to move');
              console.log('working');
            }
            if($doggy.position().left >= 750){
              $heading.text('You will encounter puzzles to unlock passage through the game. Try clicking on the chest!');
            }
          }

          $key.click(function(){
            $key.remove();
            console.log('please');
            $Wall1.remove();
            console.log('help');
            key = true;
            $heading.text('Great Job! Walk on down!');
          });
          
          if ($doggy.position().left >= 2000){
            console.log('switching levels', backgrounds, backgroundIndex);
            $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
            $colors.show();
            $Wall2.show();
            $doggy.css({ left: '10px'});
            $doggy.css({ margintop: '350px'});
            backgroundIndex++;
            $chest.remove();
            $heading.text(' ');
          }
          if($doggy.attr('src').match(/png/)) {
            $doggy.attr('src', '/images/dog_right.gif');
          }
          $doggy.css({ left: '+=10' });
          break;
      }
    })

    .keyup(function() {
      const src = $doggy.attr('src').replace('.gif', '.png');
      $doggy.attr('src', src);
    });

  // function checkColors(){
  //   if ($color1 === 'red' && $color2 === 'blue' && $color3 === 'yellow'){
  //     $Wall2.remove();
  //   }
  // }


});
