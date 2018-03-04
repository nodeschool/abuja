$(document).ready(function() {

  var listUsers = [
  ]

  // you can also provide an OAuth token to authenticate the requests
  var gh = new GitHub({
    token: '12dcabded067c32781baeccdf397efb978e96fb3'
  });

const inidaname = gh.getUser('inidaname');
inidaname
.getProfile()
.then(({data: members}) => {
  console.log(members);
  $('#inidaname img').attr('src', members.avatar_url);
  $('#inidaname').append('<small class="mt-1 text-center">'+members.bio+'</small>')
  $('#inidaname').append('<p class="text-center">'+members.name+'<br><a href="'+members.html_url+'" target="_blank"><i class="fa fa-github" style="font-size: 15px; color: #000;"></i> '+members.login+'</a>  <a href="https://twitter.com/'+members.login+'" target="_blank"><i class="fa fa-twitter" style="font-size: 15px; color: #000;"></i> '+members.login+'</a></p>')
})

const devamaz = gh.getUser('devamaz');
devamaz
.getProfile()
.then(({data: members}) => {
  console.log(members);
  $('#devamaz img').attr('src', members.avatar_url);
  $('#devamaz').append('<small class="mt-1 text-center">'+members.bio+'</small>')
  $('#devamaz').append('<p class="text-center">'+members.name+'<br><a href="'+members.html_url+'" target="_blank"><i class="fa fa-github" style="font-size: 15px; color: #000;"></i> '+members.login+'</a>  <a href="https://twitter.com/dev_amaz" target="_blank"><i class="fa fa-twitter" style="font-size: 15px; color: #000;"></i> dev_amaz</a></p>')
})

const blackdevelopa = gh.getUser('blackdevelopa');
blackdevelopa
.getProfile()
.then(({data: members}) => {
  console.log(members);
  $('#blackdevelopa img').attr('src', members.avatar_url);
  $('#blackdevelopa').append('<small class="mt-1 text-center">'+members.bio+'</small>')
  $('#blackdevelopa').append('<p class="text-center">'+members.name+'<br><a href="'+members.html_url+'" target="_blank"><i class="fa fa-github" style="font-size: 15px; color: #000;"></i> '+members.login+'</a>  <a href="https://twitter.com/'+members.login+'" target="_blank"><i class="fa fa-twitter" style="font-size: 15px; color: #000;"></i> '+members.login+'</a></p>')
})

const ldbraun = gh.getUser('ldbraun');
ldbraun
.getProfile()
.then(({data: members}) => {
  console.log(members);
  $('#ldbraun img').attr('src', members.avatar_url);
  $('#ldbraun').append('<small class="mt-1 text-center">'+members.bio+'</small>')
  $('#ldbraun').append('<p class="text-center">'+members.name+'<br><a href="'+members.html_url+'" target="_blank"><i class="fa fa-github" style="font-size: 15px; color: #000;"></i> '+members.login+'</a>  <a href="https://twitter.com/'+members.login+'" target="_blank"><i class="fa fa-twitter" style="font-size: 15px; color: #000;"></i> '+members.login+'</a></p>')
})

  listUsers.forEach((item) => {
    console.log(item);
  })


  var homeBT = $('#homeBT')
  menteeBT = $('#menteeBT'),
  eventBT = $('#eventBT'),
  events = $('#events'),
  mentee = $('#mentee'),
  home = $('#home');

  var anArray = [home, events, mentee]

  homeBT.click(function(event) {
    anArray.forEach((item) => {
      if (item.length >= 1) {
        if (item.attr('id') !== 'home') {
          item.fadeOut('slow');
          $('header').removeClass('mobileDE')
          home.delay(500).fadeIn('slow');
        }
      }
    })
  });

  eventBT.click(function(event) {
    anArray.forEach((item) => {
      if (item.length >= 1) {
        if (item.attr('id') !== 'events') {
          item.fadeOut('slow');
          $('header').removeClass('mobileDE')
          events.delay(500).fadeIn('slow');
        }
      }
    })
  });

  menteeBT.click(function(event) {
    anArray.forEach((item) => {
      if (item.length >= 1) {
        if (item.attr('id') !== 'mentee') {
          item.fadeOut('slow');
          $('header').addClass('mobileDE')
          mentee.delay(500).fadeIn('slow');
        }
      }
    })
  });

});
// document.onreadystatechange = function () {
//   if (document.readyState === "interactive") {
//     var homeBT = document.getElementById('homeBT'),
//     menteeBT = document.getElementById('manteeBT'),
//     eventBT = document.getElementById('eventBT'),
//     events = document.getElementById('events'),
//     mantee = document.getElementById('mantee'),
//     home = document.getElementById('home');
//
//     function fade(element) {
//         var op = 1;  // initial opacity
//         var timer = setInterval(function () {
//             if (op <= 0.1){
//                 clearInterval(timer);
//                 // element.style.display = 'none';
//                 element.className = 'd-none'
//             }
//             element.style.opacity = op;
//             element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//             op -= op * 0.1;
//         }, 50);
//     }
//
//     homeBT.onclick = (event) => {
//       var TheList = [home, mantee, events]
//       TheList.forEach(function (item) {
//         if (item !== null) {
//           if (item.getAttribute("id") == 'home' && item.className !== 'd-none') {
//             fade(item)
//           }
//         }
//       })
//     };
//
//   }
// }

