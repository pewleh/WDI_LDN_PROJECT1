$(() => {
  console.log('hello');
  const $doggy = $('.dog');
  const $chest = $('.closedChest');
  const $key = $('.key');
  let key = false;
  const $wall = $('.wall');
  const $heading = $('#heading');


  //original animation run.


  // function move(e) {
  //   const key = e.keyCode;
  //   $('body').off('keypress');
  //   console.log('hello');
  //   if (key === 68) $doggy.html('<img src="/images/dog_right.gif" alt="Doggy">') && $doggy.
  //
  //     $('body').off('keypress');
  //   if (key === 65) $doggy.html('<img src="/images/dog_left.gif" alt="Doggy">');
  // }
  // function stop(e) {
  //   const key = e.keyCode;
  //   $('body').on('keypress');
  //   if (key === 68) $doggy.html('<img src="/images/dog_right.png" alt="Doggy">');
  //   $('body').on('keypress');
  //   if (key === 65) $doggy.html('<img src="/images/dog_left.png" alt="Doggy">');
  // }

  // $('body').keydown(move);
  // $('body').keyup(stop);
  $chest.click(function(){
    $chest.attr('src', '/images/chest_open.png');
    $key.show();
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
          if (!key) {
            if ($doggy.position().left >= 850) {
              return;
            }if ($doggy.position().left >= 300){
              $heading.text('Use A and D to move');
              console.log('working');
            }if($doggy.position().left >= 800){
              $heading.text('You will encounter puzzles to unlock passage through the game. Try clicking on the chest!');
            }
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

  $key.click(function(){
    $key.remove();
    console.log('please');
    $wall.remove();
    console.log('help');
    key = true;
    $heading.text('Great Job! Walk on down!');
  });

});
