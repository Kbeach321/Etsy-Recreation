var source   = document.getElementById("etsy-item").innerHTML;
// console.log('source', source)
var template = Handlebars.compile(source);
// console.log('template', template)
var context = {title: "My New Post", body: "This is my first post!"};
console.log("context", context)
var html    = template(context);
