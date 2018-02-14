$(() => {
  //Stored variables
  console.log('hello');
  const $doggy = $('.dog');
  const $chest = $('.closedChest');
  const $key = $('.key');
  let key = false;
  const $Wall1 = $('.Wall1');
  const $Wall2 = $('.Wall2');
  const $heading = $('.heading');
  const $color1 = $('#color1');
  const $color2 = $('#color2');
  const $color3 = $('#color3');
  const $colors = $('.colors');
  // const wall = false;


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
      'rgb(0,128,0)',
      'yellow',
      'red'
    ];
    if(colorPos > [5]){
      colorPos=0;
    }

    $color1.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
    checkColors();
  });

  $color1.hover((e) => {
    $(e.target).html('The sun');
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
    $color2.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
    checkColors();
  });
  $color2.hover((e) => {
    $(e.target).html('The sky');
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
    $color3.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
    checkColors();
  });
  $color3.hover((e) => {
    $(e.target).html('The trees');
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
    // level 2 settings:
    if (backgroundIndex === 1) {
      level1Prompts();
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $colors.show();
      $Wall2.show();
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
      $chest.remove();
      $heading.text('Try hovering your mouse over the circles in the sky');
      checkColors();
      level2Prompts();



      // level 3 settings:
    } else if (backgroundIndex === 2) {
      level2Prompts();
      console.log('level 3!');
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $colors.remove();
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
      //level 4 settings:
    }else if (backgroundIndex === 3) {
      console.log('level 4!');
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});

      //level 5 settings:
    }else if (backgroundIndex === 4) {
      console.log('level 3!');
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
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
      $doggy.attr('src', '/images/dog_left.gif');
    }
    $doggy.css({left: '-=10' });
  }

  function moveDoggyRight(){
    if (level1Prompts()) {
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
      console.log('lol', $doggy.position().left, key);
    }
    if ($doggy.position().left >= 2000) changeLevel();

    if(level2Prompts()){
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });

    }
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
  function level2Prompts(){
    if ($Wall2){
      if ($doggy.position().left >= 1000){
        return false;
      }
      console.log('working');
    }
  }




  function checkColors(){
    console.log('checking');
    console.log($color1.css('background-color'));
    if ($color1.css('background-color') === 'rgb(255, 255, 0)' && $color2.css('background-color') === 'rgb(0, 0, 255)' && $color3.css('background-color') === 'rgb(0, 128, 0)'){
      console.log('correct colors');
      $Wall2.remove();
    }return false;
  }


});
