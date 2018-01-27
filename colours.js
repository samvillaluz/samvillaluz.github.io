window.onload = (function(){
  var rainbow = [
    '#FF9966', /*peach*/
    '#BAB5AB', /*gray*/
    '#33FF77', /*green*/
    '#75F0C7', /*teal*/
    '#75B2F0', /*blue*/
    '#667FFF',
    '#9494D1',
    '#B1A3F5',
    '#6347EB',
    '#FF33FF',
    '#CC00CC',
    '#CC0066',
    '#EBB447',

  ];

  var links = document.getElementById('links');
  var externalLinks = links.getElementsByTagName('i');

  for ( var i = 0; i < externalLinks.length; i++ ) {
    externalLinks[i].style.backgroundColor = rainbow[ Math.floor(Math.random() * (rainbow.length)) ];
  }

  var me = document.getElementById("me");
  colour = rainbow[ Math.floor(Math.random() * (rainbow.length)) ];
  me.style.color = colour;

})();
