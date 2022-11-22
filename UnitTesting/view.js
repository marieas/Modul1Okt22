updateView()
    
//view
function updateView(){
    let html = ``;
    
    let shoppingList = 'Cart: ';
    for(let item of shoppingCart){
        shoppingList += /*HTML*/ `<div>${item} <button onclick="removeItemFromCart('${item}')">X</button></div>`
    }

    html += /*HTML*/`
    <div class="shoppingItems">
        <div class="items">
        <img alt='bread' src="./images/bread.jpg" onclick="addItemToCart(this)" class="img"> <div>${breadPrice}kr</div>
        </div>
        <div class="items">
        <img alt='butter' src="./images/butter.jpg" onclick="addItemToCart(this)" class="img"> <div>${butterPrice}kr</div>
        </div>
        <div class="items">
        <img alt='milk' src="./images/milk.jpg" onclick="addItemToCart(this)" class="img"> <div>${milkPrice}kr</div>
        </div>
        <div class="items">
        <img alt='salami' src="./images/salami.jpg" onclick="addItemToCart(this)" class="img"> <div>${salamiPrice}kr</div>
        </div>
    </div>
   
    <div>Wallet: ${wallet}kr</div>`;
    
    html += shoppingList + `
    
    <div>Total Price: ${total} kr</div>
    <button onclick="checkOut()">Buy items</button> <div>${checkOutMsg}</div>
    `;
    document.getElementById('app').innerHTML = html;
}
