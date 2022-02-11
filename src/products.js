var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];
$(document).ready(function(){
    display(products)
});
function display(products){
    var html = "";
    for(var i=0;i<products.length;i++){
        
    html +=	'<div id="product-'+products[i].id+'" class="product">\
    <img src="images/'+products[i].image+'">\
    <h3 class="title"><a href="#">'+products[i].name+'</a></h3>\
    <span>Price: $'+products[i].price+'</span>\
    <a class="add-to-cart" id="'+products[i].id+'href="#">Add To Cart</a></div>';
    // console.log("ashutosh");
}
$('#products').html(html);
}