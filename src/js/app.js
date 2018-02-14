$(() => {
  //Stored variables
  console.log('hello');
  const $doggy = $('.dog');
  const $chest = $('.closedChest');
  const $key = $('.key');
  let key = false;
  const $Wall1 = $('.Wall1');
  let $Wall2 = $('.Wall2');
  let $Wall3 = $('.Wall3');
  const $heading = $('.heading');
  const $color1 = $('#color1');
  const $color2 = $('#color2');
  const $color3 = $('#color3');
  const $colors = $('.colors');
  const $clicker = $('.clicker');
  // let clickedButton = null;
  // const $button6 = $('.6');
  // const $button4 = $('.4');
  // const $button10 = $('.10');
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
      $('.insect').show();
      $Wall2.show();
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
      $chest.remove();
      $heading.text('Try hovering your mouse over the circles in the sky');
      checkColors();
      level2Prompts();


      // level 3 settings:
    } else if (backgroundIndex === 2) {
      level2Prompts();     console.log('level 3!');
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $colors.remove();
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
      $heading.text('How many blue flowers can you see?');
      $Wall3.show();
      $clicker.show();


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
    if (level1Prompts() && backgroundIndex === 0) {
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
      console.log('lol', $doggy.position().left, key);
    }

    if(level2Prompts() && backgroundIndex === 1){
      console.log('lol', $doggy.position().left, key);
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
    }
    //(level3Prompts() &&
    if (level3Prompts() && backgroundIndex === 2){
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
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


  function level2Prompts(){
    if ($Wall2) {
      if ($doggy.position().left >= 900){
        // at the wall
        return false;
      }
      // wall up, but not there
      return true;
    }
    // no wall
    return true;
  }

  function level3Prompts(){
    if ($Wall3){
      if ($doggy.position().left >= 1450){
        return false;
      }
      return true;
    }
    return true;
  }


  $clicker.one('mouseover', () => {
    ($heading).html('Take the time to look around');
  });
  $heading.mouseleave(function() {

  });

  $('button').on('click', checkNumber);

  let answer1 = false;
  let answer2 = false;
  let answer3 = false;
  let answer4 = false;
  const incorrect = 'Not quite! Have another look!';

  function checkNumber(e) {
    console.log('heading:', $heading.text());
    console.log('clickedButton', $(e.target).html());
    const clickedButton = $(e.target).html();
    if (!answer1) {
      if (clickedButton === '5') {
        answer1 = true;
        $heading.text('Great! What about purple flowers?');
      } else {
        $heading.text(incorrect);
      }
    } else if (!answer2) {
      if (clickedButton === '3') {
        answer2 = true;
        $heading.text('If you add those together, what do you get?');
      } else {
        $heading.text(incorrect);
      }
    } else if (!answer3) {
      if (clickedButton === '8') {
        answer3 = true;
        $heading.text('Do you see any insects?');
      } else {
        $heading.text(incorrect);
      }
    } else if (!answer4) {
      if (clickedButton === '1') {
        answer4 = true;
        $heading.text('Amazing job. You\'re a real explorer');
      }

    }
    if (answer1 && answer2 && answer3 && answer4)  {
      $Wall3.remove();
      $Wall3 = false;
    }
  }


  function checkColors(){
    console.log('checking');
    console.log($color1.css('background-color'));
    if ($color1.css('background-color') === 'rgb(255, 255, 0)' && $color2.css('background-color') === 'rgb(0, 0, 255)' && $color3.css('background-color') === 'rgb(0, 128, 0)'){
      console.log('correct colors');
      $Wall2.remove();
      $Wall2 = false;
      console.log('wall gone');
    }return true;
  }



});
