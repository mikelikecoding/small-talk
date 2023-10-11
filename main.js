

//Added comment

$(document).ready(function(){ 
  
    $body = $('body');
    let catChoice = '', pizzaChoice = '', bookChoice = '', iceCreamChoice, firstKissChioce;
    let message = $('.final-message');
    let auto = $('.auto')

    $body.append('<section class="cat"></section$');
    $cat = $('.cat');
    $cat.before('<h1 class="final-message"></h1>')
    $cat.append('<h1 class="do-you">Do you like cats?</h1>');
    $cat.append('<form class="cat-btn-container"></form>')
    $catForm = $('.cat-btn-container')
    $catForm.append('<button class="yes">Yes</button>');
    $catForm.append('<button class="no">No</button>');
    

    $catForm.on('click', (event) => {
        event.preventDefault()
        console.log(event.target.innerText)
        catChoice += event.target.innerText
        $cat.css('display', 'none')
        $pizza.css('display', 'block')
       
    })
    
    $body.append('<section class="pizza"></section$');
    $pizza = $('.pizza');
    $pizza.append('<h1 class="what-is">What is your favorite pizza?</h1>');
    $pizza.append('<form class="pizza-btn-container"></form>')
    $pizzaForm = $('.pizza-btn-container')
    $pizzaForm.append('<input type="text" class="pinput" placeholder="What is your favorite pizza?"></input>');
    $pizzaForm.append('<button type="submit" class="submit">Submit</button>');
    $pinput = $('.pinput');
    $submit = $('.submit');
    $submit.on('click', (event) => {
       event.preventDefault()
       pizzaChoice += $pinput.val();
       $pizza.css('display', 'none')
       $book.css('display', 'block')
    })

    $body.append('<section class="book"></section>')
    $book = $('.book');
    $book.append('<h1 class="books">What is favorite books and movies?</h1>');
    $book.append('<form class="book-btn-container"></form>')
    $bookForm = $('.book-btn-container')
    $bookForm.append('<input type="text" class="binput" placeholder="Favorite books and movies?"></input>');
    $bookForm.append('<button type="submit" class="sub">Submit</button>');
    $binput = $('.binput');
    $sub = $('.sub');
    $sub.on('click', (event) => {
       event.preventDefault()
       bookChoice += $binput.val();
       $book.css('display', 'none')
       message.text(`You said ${catChoice} to cats.  Your favorite pizza is ${pizzaChoice},
       and your favorite book and movie is ${bookChoice}.`).css({'background-color': 'silver',
       'color': 'black', 'font-size': '2rem', 'text-align': 'center'})
       setTimeout(() => {message.css('display', 'none')},10000)
       setTimeout(() => {$cat.css('display', 'block')},10000)
       
       let count;
       loop = setInterval(start, 30);
       
       function start() {
        delay();
      }

     function delay() {
      setTimeout(function () {
        count++;
        
        window.location.href =
        'file:///Users/michaelcalvinholmes/Desktop/SmallTalk/iceBreaker2.html?'
        
        if (count <= 1000) delay();
    }, 5000);
    
}



});
$body.append('<p class="auto">Auto Refesh</p>')
setTimeout(() => {auto.css('display', 'none')},5000)

})


