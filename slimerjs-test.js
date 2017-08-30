var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.open('https://developer.mozilla.org/')
    .then(function(status){
         if (status === 'success') {
           console.log(page.title);

           page.evaluate(function() {
             if(document.title === 'Mozilla Developer Network') {
               console.log('Test passed');
             } else {
               console.log('Test failed');
             }
           });
         }
         else {
             console.log('Sorry, the page is not loaded');
         }
         page.close();
         slimer.exit();
    });
