$(() => {
  //Stored variables
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


  //Background imagesand starting point.

  const backgrounds = [
    '/images/backdrop2.png',
    '/images/backdrop3.png',
    '/images/backdrop4.png',
    '/images/backdrop5.png'
  ];

  let backgroundIndex = 0;


  //color Array and 3 colour functions

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


  //First level Chest Click function.

  $chest.click(function(){
    $chest.attr('src', '/images/chest_open.png');
    $key.show();
  });

  // Doggies Move Logic.
  $(document).keydown(startDoggy);
  $(document).keyup(stopDoggy);
  $key.click(getKey);

  // New level changes
  function changeLevel() {
    backgroundIndex++;
    console.log('switching levels', backgrounds, backgroundIndex);
    if (backgroundIndex === 1) {
      level1Prompts();
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $colors.show();
      $Wall2.show();
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
      $chest.remove();
      $heading.text(' ');
    } else if (backgroundIndex === 2) {
      // level 3 stuff
    }
  }

  function getKey() {
    $key.remove();
    console.log('please');
    $Wall1.remove();
    console.log('help');
    key = true;
    $heading.text('Great Job! Walk on down!');
  }

  function startDoggy(e) {
    switch (e.which) {
      case 65:
        moveDoggyLeft();
        break;
      case 68:
        moveDoggyRight();
        break;
    }
  }

  function moveDoggyLeft(){
    if ($doggy.attr('src').match(/png/)){
      $doggy.attr('src',
        '/images/dog_left.gif');
    }
    $doggy.css({left: '-=10' });
  }

  function moveDoggyRight(){
    // level1Prompts returns true(move) or false(don't move)
    if (level1Prompts()) {
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
      console.log('lol', $doggy.position().left, key);
    }
    if ($doggy.position().left >= 2000) changeLevel();
  }

  function stopDoggy() {
    const src = $doggy.attr('src').replace('.gif', '.png');
    $doggy.attr('src', src);
  }

  function level1Prompts(){
    if (!key) {
      if ($doggy.position().left >= 850) {
        // is at the wall with no key = don't move
        return false;
      }
      if ($doggy.position().left >= 300){
        $heading.text('Use A and D to move');
        console.log('working');
      }
      if($doggy.position().left >= 750){
        $heading.text('You will encounter puzzles to unlock passage through the game. Try clicking on the chest!');
      }
      // not at the wall - with no key = move
      return true;
    }
    // has key = move
    return true;
  }
  // function checkColors(){
  //   if ($color1 === 'red' && $color2 === 'blue' && $color3 === 'yellow'){
  //     $Wall2.remove();
  //   }
  // }


});
