
var baseUrl = 'https://api.etsy.com/v2/listings/active.js'
var key = '2osyqrt5uwrcwm48zyag6e6w'
var keyword = 'kitten'
var includes = 'Images,Shop'
var limit = '25'

$.ajax({
  url: `${baseUrl}?api_key=${key}&keywords=${keyword}&includes=${includes}&limit=${limit}`,
  type: 'GET',
  dataType: 'jsonp',
  success: function(res) {
    console.log(res);
  }

})
