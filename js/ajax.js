
var baseUrl = 'https://api.etsy.com/v2/listings/active.js'
var key = '2osyqrt5uwrcwm48zyag6e6w'
var keyword = 'kitten'
var includes = 'Images,Shop'
var limit = '25'

$.ajax({
  url: `${baseUrl}?api_key=${key}&keywords=${keyword}&includes=${includes}&limit=${limit}`,
  type: 'GET',
  dataType: 'jsonp',
  success: start
});

function start(res){
  console.log(res);

  var source   = document.getElementById("etsy-item").innerHTML;
  // console.log('source', source)
  var template = Handlebars.compile(source);
  // console.log('template', template)
  var context = res;
  // console.log("context", context)
  var html = template(context);
  console.log('html', html);

  $('.items').html(html)


}
