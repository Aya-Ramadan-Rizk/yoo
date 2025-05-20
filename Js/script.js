var buy_now = document.querySelectorAll('.product .section-2-product .card-body #buy_now')
var all_products = document.querySelector('#all_products')
var all_price = document.getElementById('all_price')
var show_price = document.getElementById('show_price')
var clear = document.getElementById('clear')

var total_price = 0

show_price.addEventListener('click' , () =>{
    if(total_price >= 200){
        alert("You Get Discount 20%")
        total_price -= parseInt(total_price*(20/100))
    }
    all_price.innerHTML = total_price
})


buy_now.forEach(function(item){
    item.onclick = function(){
        all_products.innerHTML += item.getAttribute("title_product") + "&nbsp;_&nbsp;" + item.getAttribute("price") +"<hr/>"
        total_price += parseFloat(item.getAttribute("price"))
        if(all_products.innerHTML != ""){
            show_price.style.display = "block"
            clear.style.display = "block"
        }
    }
})


clear.addEventListener('click' , () =>{
    all_products.innerHTML = ""
    all_price.innerHTML = ""
    show_price.style.display = "none"
    clear.style.display = "none"
    all_price.innerHTML = total_price = 0
})


var search_1 = document.getElementById("search_1")
var search_2 = document.getElementById("search_2")
var products = document.querySelectorAll(".seaction-2-product")
var not_found = document.getElementById("not_found")

search_1.addEventListener('input' , () =>{
    var value = search_1.value.toLowerCase()
    var anyvisible = false

products.forEach((item) => {
    if(item.textContent.toLowerCase().includes(value)){
        item.style.display = "block"
        anyvisible = true
    }else{
        item.style.display = "none"
    }
})
not_found.style.display = anyvisible ? "none" : "block"
})


search_2.addEventListener('input' , () =>{
        var value = search_2.value.toLowerCase()
        var anyvisible = false
        
 products.forEach((item) => {
         if(item.textContent.toLowerCase().includes(value)){
        item.style.display = "block"
        anyvisible = true
    }else{
        item.style.display = "none"
    }
 })
 not_found.style.display = anyvisible ? "none" : "block"
})







    

    
