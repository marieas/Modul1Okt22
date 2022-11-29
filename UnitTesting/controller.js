
    
    //controller
    
    function addCost(newItemCost)
    {
        return total + newItemCost;
    }

    function removeCost(itemCost)
    {
        return total - itemCost;
    }

    function addItemToCart(itemToAdd)
    {   
        //shoppingCart.push(itemToAdd.alt);
        shoppingCart.push(itemToAdd);    
        total = addCost(getItemCost(itemToAdd));      
        updateView();
    }

    function getItemCost(itemName)
    {
        if(itemName == 'bread')
        {
            return breadPrice;
        }
        else if(itemName == 'milk')
        {
           return milkPrice;
        }
        else if(itemName == 'salami')
        {
            return salamiPrice;
        }
       
        return butterPrice;       
    }

    function addMoneyToWallet(moneyToAdd)
    {
        wallet = wallet + moneyToAdd;
        updateView();
    }

    function checkOut()
    {
        if(hasEnoughFunds())
        {
            buyItems();
        } 
        else 
        {
            checkOutMsg = 'Not enough cash - remove items!';
        }
        updateView();
    }

    function buyItems()
    {
        wallet = wallet - total;
        resetStore();
    }

    function hasEnoughFunds()
    {
        return wallet >= total;
    }

    function resetStore()
    {
        checkOutMsg = 'Items Bought'
        shoppingCart = [];
        total = 0;
    }

    function removeItemFromCart(itemToRemove)
    {   
        shoppingCart = arrayRemove(shoppingCart,itemToRemove);
        total = removeCost(getItemCost(itemToRemove));       
        updateView();
    }

    function arrayRemove(arr, value) 
    {     
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    function addAllToShoppingcart(item1, item2, item3, item4) 
    {
        let shoppingCart = [item1, item2, item3,item4];
        return shoppingCart;       
    }
