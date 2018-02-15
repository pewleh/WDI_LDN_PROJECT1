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
  let $Wall4 = $('.Wall4');
  const $heading = $('.heading');
  const $color1 = $('#color1');
  const $color2 = $('#color2');
  const $color3 = $('#color3');
  const $colors = $('.colors');
  const $clicker = $('.clicker');
  const $explore = $('.explore');
  const $guide = $('.dude');



  //backgrounds
  const backgrounds = [
    '/images/backdrop2.png',
    '/images/backdrop3.png',
    '/images/backdrop4.png',
    '/images/backdrop5.png'
  ];

  let backgroundIndex = 0;


  //color Array and 3 colour functions

  let colorPos = 0;

  const colorLevel = [
    'pink',
    'blue',
    'orange',
    'rgb(0,128,0)',
    'yellow',
    'red'
  ];


  $color1.click(function(){
    $('.tinyClick').get(0).currentTime = (0);
    $('.tinyClick').get(0).play();
    //if color array reaches the final color, order position to start.
    if(colorPos > [5]){
      colorPos=0;
    }
    $color1.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
    checkColors();
  });



  $color2.click(function(){
    $('.tinyClick').get(0).currentTime = (0);
    $('.tinyClick').get(0).play();
    if(colorPos > [5]){
      colorPos=0;
    }
    $color2.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
    checkColors();

  });

  $color3.click(function(){
    $('.tinyClick').get(0).currentTime = (0);
    $('.tinyClick').get(0).play();
    if(colorPos > [5]){
      colorPos=0;
    }
    $color3.css({'background-color': `${colorLevel[colorPos]}`});
    colorPos += 1;
    checkColors();
  });




  //First level Chest Click function.
  $chest.on('mouseover', ()=>{
    $('#help').text('Have a click!');
  });
  $chest.click(function(){
    $chest.attr('src', '/images/chest_open.png');
    $key.show();
    $('.chest').get(0).play();

  });

  // Doggies Move Logic.
  $(document).keydown(startDoggy);
  $(document).keyup(stopDoggy);

  //GUIDE COMMANDS
  function guideTalk(){
    $('.guide').attr('src', '/images/guidetalk.png');

  }
  function guideShut(){
    $('.guide').attr('src', '/images/guide.png');
  }
  $guide.on('mouseover', () => {
    console.log('hover');
    $('.speech').get(0).play();
    guideTalk();
    guideText();

  });
  $guide.on('mouseleave', () => {
    guideShut('...');
  });

  function guideText(){
    if(backgroundIndex === 0){
      $('#help').text('Use A and D to move!');
    }
    if(backgroundIndex === 1){
      $('#help').text('♪♪I see the sun, I see the sky, I see the grass and trees go by   ♪♪.');
    }
    if(backgroundIndex === 2){
      $('#help').text('It\'s important to be observant if you want to be the best explorer');
    }
    if(backgroundIndex === 3){
      $('#help').text('You\'ve had a great first day! Just one puzzle left to solve.');
      guideShut();
    }
  }

  //Close the introduction

  $explore.on('click', () => {
    console.log('clicked');
    $('.introduction').remove();
  });



  //LEVEL 1 WIN SETTINGS

  $key.click(getKey);

  function getKey() {
    $key.remove();
    console.log('please');
    $Wall1.remove();
    console.log('help');
    key = true;
    $heading.text('Great Job! Walk on down!');
    $('.door').get(0).play();
    $('#help').text(' ');
  }

  // New level changes
  function changeLevel() {
    backgroundIndex++;
    console.log('switching levels', backgrounds, backgroundIndex);


    // lEVEL 2 START SETTINGS:
    if (backgroundIndex === 1) {
      level1Prompts();
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $colors.show();
      $('.insect').show();
      $Wall2.show();
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});
      $chest.remove();
      $heading.text('Find the correct colour code');
      checkColors();
      level2Prompts();


      // LEVEL 3 START SETTINGS
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
      $heading.text('Walk in the World');
      $clicker.remove();
      $('.insect').remove();
      $Wall4.show();

      //level 5 settings:
    }else if (backgroundIndex === 4) {
      console.log('level 5!');
      $('body').css('background-image', `url(${backgrounds[backgroundIndex]})`);
      $doggy.css({ left: '10px'});
      $doggy.css({ margintop: '350px'});

    }
  }
  //DOG MOVE LOGIC

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
    $('.walking').get(0).play();
  }

  function moveDoggyRight(){
    if (level1Prompts() && backgroundIndex === 0) {

      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
      $('.walking').get(0).play();
      console.log('lol', $doggy.position().left, key);
    }

    if(level2Prompts() && backgroundIndex === 1){
      console.log('lol', $doggy.position().left, key);
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
    }

    if (level3Prompts() && backgroundIndex === 2){
      if($doggy.attr('src').match(/png/)) {
        $doggy.attr('src', '/images/dog_right.gif');
      }
      $doggy.css({ left: '+=10' });
      $('#help').text('');
    }

    if (level4Prompts() && backgroundIndex === 3){
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
    $('.walking').get(0).pause();
  }
  //LEVEL 1 STOP POINTS:
  function level1Prompts(){
    if (!key) {
      if ($doggy.position().left >= 850) {
        // is at the wall with no key = don't move
        return false;
      }
      if ($doggy.position().left >= 300){
        $heading.text('Hover over a guide for help!');
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

  //LEVEL 2 STOP POINTS
  function level2Prompts(){
    if ($Wall2) {
      if ($doggy.position().left >= 1350){
        // at the wall
        return false;
      }
      // wall up, but not there
      return true;
    }
    // no wall
    $('#help').text('');
    return true;
  }
  //LEVEL 3 STOP POINTS
  function level3Prompts(){
    if ($Wall3){
      if ($doggy.position().left >= 1450){
        return false;
      }
      return true;
    }
    return true;
  }
  function level4Prompts(){
    if ($Wall4){
      if ($doggy.position().left >= 1650){
        return false;
      }
      return true;
    }
    return true;
  }


  //Level 3 logic


  $('.bttns').on('click', checkNumber);


  function checkColors(){
    console.log('checking');
    console.log($color1.css('background-color'));
    if ($color1.css('background-color') === 'rgb(255, 255, 0)' && $color2.css('background-color') === 'rgb(0, 0, 255)' && $color3.css('background-color') === 'rgb(0, 128, 0)'){
      console.log('correct colors');
      $Wall2.remove();
      $Wall2 = false;
      $('.door').get(0).play();
      console.log('wall gone');
    }return true;
  }

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
});
