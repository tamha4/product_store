let products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body


let newDiv = document.createElement("div");
newDiv.className = ".popUp";
document.body.appendChild(newDiv);
for(obj of products) {
    let innerDiv = document.createElement("div");
    newDiv.append(innerDiv);
    innerDiv.classList.add("product");

    let image = document.createElement("img");
    if (obj.id == 0){
        image.src="https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg";
    }else if(obj.id == 1){
        image.src="https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg";

    }else if(obj.id == 2){
        image.src="https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg";
    }
    innerDiv.append(image);


    let prodctName = document.createElement("p");
    let productPrice = document.createElement("p");
    let text = "Name: " +obj.name;
    let text2 = "Price: $"+obj.price;

    prodctName.append(text);
    productPrice.append(text2);
    innerDiv.append(prodctName);
    innerDiv.append(productPrice);


}
    // let popup = document.querySelector(".popUp");
    // popup.onclick=function (){
    //     popup.style.display="block";
    // }




// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.