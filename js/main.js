$(document).ready(function(){
  var dom_ul = $("ul");
  var dom_lis = $("ul li");
  dom_ul.attr("class","list-ordered");
  dom_url.attr({
    "class": "list-ordered",
    "id": "little-list",
  });
  //$(dom_lis[0]).html("Botón por defecto");
  var first_button = $("ul li:first-child button");
  first_button.text("mi primer boton");
  first_button.css("padding",0);
  first_button.css("margin",0);
  first_button.width(500);
  first_button.height("50px");
  dom_lis.each(function(index,element){
    console.log(element);
  });
  var new_li_button = first_button.parent().clone();
//forma de agregar botones
  $("ul").append(new_li_button);
  new_li_button.appendTo($("ul"));
  console.log("siblings", new_li_button.siblings());
  console.log("find",new_li_button.find("button"));
  console.log(new_li_button.find("button").parents());
  console.log(new_li_button.next());
  console.log(new_li_button.prev());
  console.log(new_li_button.prevAll());
  console.log(new_li_button.nextAll());
  //new_button.remove();//remover el botón que se agrego

  //agregar  eventos
  first_button.one("mouseover mouseleave",function(){
    first_button.parent().siblings().toggle(500);
  });
  // first_button.on("mouseover",function(){
  //   first_button.parent().siblings().toggle(500);
  // });
  // first_button.on("mouseleave",function(){
  //   first_button.parent().siblings().toggle(500);
  // });
  // first_button.click({
  //
  // });

  var google_link = $("a");
  google_link.on("click",function(eventObject){
    eventObject.preventDefault();
    eventObject.stopPropagation();
    google_link.hide(1000);
    google_link.show(2000);
    google_link.slideUp(3000).delay(100);
    google_link.slideDown(4000);
  });

  dom_ul.addClass("little-list");
  dom_ul.removeClass("little-list");
});
console.log("before DOM read");
