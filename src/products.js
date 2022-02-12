var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];
cart=products;
emptCart=[];
for(var i=0;i<products.length;i++){
    cart[i].quantity=1;
}
// var quant = 1;
$(document).ready(function(){
    display(products);
})
function display(products){
    var html = "";
    for(var i=0;i<products.length;i++){
        
    html +=	'<div id="product-'+products[i].id+'" class="product">\
    <img src="images/'+products[i].image+'">\
    <h3 class="title"><a href="#">'+products[i].name+'</a></h3>\
    <span>Price: $'+products[i].price+'</span>\
    <a class="add-to-cart" data-icart="'+products[i].id+'" id="'+products[i].id+'href="#">Add To Cart</a></div>';
    // console.log("ashutosh");
}
$('#products').html(html);
}
$(document).ready(function(){
    var prods;
    temp =[];
    $(document).on('click','.add-to-cart', function(){
       prods= $(this).data('icart');
       for(var i=0;i<products.length;i++){
        
           if(products[i].id==prods){
               if(temp.includes(products[i])){
                 
                   temp[i].quantity+= 1;
                   console.log("ashuo")
               }else{
                temp.push(products[i]);
                // console.log(products);
               }
           }
       }
       emptCart=temp;
       cartDisplay(temp);
        // console.log("cedcoss");
    });
});

function cartDisplay(pod){
    // var html1 ="";
    var html1 ='<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Update</th><th>Delete</th></tr>'
    var total =0;
    for(var i=0;i<pod.length;i++){

        var pprice=0;
        pprice=pod[i].quantity*pod[i].price;
        total += pprice;
        html1+='<tr>\
        <td>'+pod[i].id+'</td>\
        <td>'+pod[i].name+'</td>\
        <td>'+pprice+'</td>\
        <td><input type="text" id="var" value="'+pod[i].quantity+'"</td><td><input type="button" id="Update" data-pod="'+i+'" value="Update"</td>\
        <td>\
           <a href="#" id="delete" data-del="'+pod[i].id+'">Delete</a>\
        </tr>';
    }
    html1+='<tr><td></td><td>Sum</td><td>'+total+'</td><td></td></table>'
    html1+='<input typr="button" value="Cart Empty" onclick="cartEmpt()" id="emp">'
    $("#cart").html(html1);
    
    // console.log("ashutosh");
}
$(document).ready(function(){
    var ival;;
    $(document).on('click','#Update', function(){
      var pqua=$('#var').val();
      ival=$(this).data('pod');
      emptCart[ival].quantity=pqua;
    //   console.log(12778)
      cartDisplay(emptCart)
    })
})
