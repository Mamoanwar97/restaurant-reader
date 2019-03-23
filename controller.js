if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('Registration worked!');
  }).catch(function() {
    console.log('Registration failed!');
  });
}
/*it may has an error in serviceWorker but i cant solve it. i searched
a lot and checked my code several times. it is exactly what we got in the course
and nothing wrong with it but still got unknown error messages that i cant solve*/
