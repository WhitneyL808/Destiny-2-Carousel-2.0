/* Data to Show*/
const data = [
    {
     quote: `ARC HUNTER`, 
     icon:  '<img src="assets/classes/Hunter.svg" alt="hunter">', 
     image: `url(assets/arc/H-arc2.jpg)`

    }, 
    {
     quote: `ARC WARLOCK`, 
     icon:  '<img src="assets/classes/Warlock.svg" alt="warlock">' , 
     image: `url(assets/arc/W-arc.jpg)`
    },  
    {
     quote: `“ARC TITAN”`, 
     icon: '<img src="assets/classes/Titan.svg" alt="titan">' , 
     image: `url(assets/arc/T-arc.jpg)`
    },
    {
      quote: `“SOLAR HUNTER”`, 
      icon: '<img src="assets/classes/Hunter.svg" alt="hunter">', 
      image: `url(assets/solar/H-solar.jpg)`
    },
    {
      quote: `“SOLAR WARLOCK”`, 
      icon: '<img src="assets/classes/Warlock.svg" alt="warlock">', 
      image: `url(assets/solar/W-solar.jpg)`
    },
    {
      quote: `“SOLAR TITAN”`, 
      icon: '<img src="assets/classes/Titan.svg" alt="titan">', 
      image: `url(assets/solar/T-solar.png)`
    },
    {
      quote: `“STASIS HUNTER”`, 
      icon: '<img src="assets/classes/Hunter.svg" alt="hunter">', 
      image: `url(assets/stasis/H-stasis.jpg)`
    },
    {
      quote: `“STASIS WARLOCK”`, 
      icon: '<img src="assets/classes/Warlock.svg" alt="warlock">', 
      image: `url(assets/stasis/W-stasis2.jpg)`
    }, 
    {
      quote: `“STASIS TITAN”`, 
      icon: '<img src="assets/classes/Titan.svg" alt="titan">', 
      image: `url(assets/stasis/T-stasis.jpg)`
    }
  ];
  
  /*
  Quote and Emoji
  */
  // blockquote
  const quote = document.querySelector('blockquote');

  // emoji
  const icon = document.querySelector('p');

  // background
  const bgImage = document.querySelector('body');

  
  // Check-Check: change text
  quote.innerHTML = "Hello world!";

  // Check-Check: change emoji text
  icon.innerHTML = '🦅';

  // Check-Check: background image
  bgImage.style.backgroundImage= 'red';


  
  /*
   * Navigate to Items with Event Listeners
   * Track Number of Items
  */
  // initialize item number
  let itemNumber = 0;
  // get next button
  const nextButton = document.querySelector("img.next");
  // get previous button
  const prevButton = document.querySelector("img.back");
  // get random button
  const randButton = document.querySelector("img.random");
  
  // listen for clicks on next button
  nextButton.addEventListener("click", () => {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;
    
    // if at LAST item
    if ( itemNumber > data.length -1 ) {
      // reset counting to first item
      itemNumber = 0;
    }
  
    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    icon.innerHTML = data[itemNumber].icon;
    bgImage.style.backgroundImage = data[itemNumber].image;
    
  });


    
  // listen for clicks on previous button
  prevButton.addEventListener("click", () => {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;
    
    // if at FIRST item
    if ( itemNumber < 0 ) {
      // reset counting to last item
      itemNumber = data.length -1;
    }  
    
    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    icon.innerHTML = data[itemNumber].icon;
    bgImage.style.backgroundImage = data[itemNumber].image;
  });


  
  // listen for clicks on random button
  randButton.addEventListener('click', () => {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );
    
    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    icon.innerHTML = data[randomNumber].icon;
    bgImage.style.backgroundImage = data[randomNumber].image;
    
  });


  
  // listen for keypress next
  document.addEventListener('keyup', (event) => {
    
    // check-check: What key was pressed?
    // console.log(event);
  
    // Next Right Arrow  
    if ( event.key === "ArrowRight" ) {
     
     // update, then increase item number with each click
    itemNumber = itemNumber + 1;
    
    // if at LAST item
    if ( itemNumber > data.length -1 ) {
      // reset counting to first item
      itemNumber = 0;
    }
  
    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
      
    }
    
    // Prev Left Arrow
    if ( event.key === "ArrowLeft" ) {
    
     // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;
    
    // if at FIRST item
    if ( itemNumber < 0 ) {
      // reset counting to last item
      itemNumber = data.length -1;
    }  
    
    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
    }
    
    // Random Spacebar
    if ( event.key === " ") {
      
      // generate random number, for total number, of items (data)
      randomNumber = Math.floor ( Math.random() * data.length );
  
      // display data based random number
      quote.innerHTML = data[randomNumber].quote;
      emoji.innerHTML = data[randomNumber].emoji;
      bgImage.style.backgroundImage = data[randomNumber].image;
    
    }
    
  });