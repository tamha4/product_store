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


let mainBody = document.querySelector("body");
let firsPopup = document.createElement("div");

firsPopup.style.width = "100%";
firsPopup.classList.add("popUp");
firsPopup.style.height = "100hv";
firsPopup.style.backgroundColor = "grey";
firsPopup.style.opacity = "0.5";

/// First pop Up
let imgContainer = document.createElement("div");
imgContainer.style.position = "absolute";
imgContainer.style.left = "50%";
imgContainer.style.top = "50%";
imgContainer.style.transform = "translate(-50%, -50%)";

let images = document.createElement("img");
images.src = products[0].image;
images.style.display = "flex";
images.style.width = "50%";
images.style.margin = "auto";

let firstName = document.createElement("h1");
firstName.textContent = products[0].name;
firstName.style.textAlign = "center";

let productPrice = document.createElement("h2");
productPrice.textContent = "$"+products[0].price;
productPrice.style.textAlign = "center";

imgContainer.appendChild(images);
imgContainer.appendChild(firstName);
imgContainer.appendChild(productPrice);
imgContainer.style.display = "none";
firsPopup.appendChild(imgContainer);

/// Second popUp


let secondContainer = document.createElement("div");
secondContainer.style.position = "absolute";
secondContainer.style.top = "50%";
secondContainer.style.left = "50%";
secondContainer.style.transform = "translate(-50%,-50%)";

let image2 = document.createElement("img");
image2.src = products[1].image;
image2.style.display = "flex";
image2.style.width = "50%";
image2.style.margin = "auto";

let secondName = document.createElement("h1");
secondName.textContent = products[1].name;
secondName.style.textAlign = "center";

let productPrice2 = document.createElement("h2");
productPrice2.textContent = "$"+products[1].price;
productPrice2.style.textAlign = "center";

secondContainer.appendChild(image2);
secondContainer.appendChild(secondName)
secondContainer.appendChild(productPrice2);
secondContainer.style.display = "none";
firsPopup.appendChild(secondContainer);

// Third popUp

let thirdContainer = document.createElement("div");
thirdContainer.style.position = "absolute";
thirdContainer.style.top = "50%";
thirdContainer.style.left = "50%";
thirdContainer.style.transform = "translate(-50%,-50%)";

let image3 = document.createElement("img");
image3.src = products[2].image;
image3.style.display = "flex";
image3.style.width = "50%";
image3.style.margin = "auto";

let thirdName = document.createElement("h1");
thirdName.textContent = products[2].name;
thirdName.style.textAlign = "center";

let productPrice3 = document.createElement("h2");
productPrice3.textContent = "$"+products[2].price;
productPrice3.style.textAlign = "center";

thirdContainer.appendChild(image3);
thirdContainer.appendChild(thirdName);
thirdContainer.appendChild(productPrice3);
thirdContainer.style.display = "none";
firsPopup.appendChild(thirdContainer);
firsPopup.style.display = "none";


mainBody.appendChild(firsPopup);


let newDiv = document.createElement("div");
newDiv.className = ".popUp";
document.body.appendChild(newDiv);
for(obj of products) {
    let innerDiv = document.createElement("div");
    newDiv.append(innerDiv);
    innerDiv.classList.add("product");
    // innerDiv.style.borderColor = obj.color;

    let image = document.createElement("img");
    if (obj.id == 0){
        image.src="https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg";
    }else if(obj.id == 1){
        image.src="https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg";

    }else if(obj.id == 2){
        image.src="https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg";
    }
    innerDiv.append(image);

    innerDiv.onclick = function (e){
        let PopUp = e.path[0];
        if(PopUp.src === images.src){
            firsPopup.style.display= "block";
            imgContainer.style.display = "block";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "none";

        }
        else if(PopUp.src === image2.src){
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "block";
            thirdContainer.style.display = "none";
        }
        else if(PopUp.src === image3.src) {
            firsPopup.style.display = "block";
            imgContainer.style.display = "none";
            secondContainer.style.display = "none";
            thirdContainer.style.display = "block";
        }
    }

    firsPopup.onclick = function () {
        firsPopup.style.display = "none";
        imgContainer.style.display = "none";
        secondContainer.style.display = "none";
        thirdContainer.style.display = "none";
    }



    let productName = document.createElement("p");
    let productPrice = document.createElement("p");
    let text = "Name: " +obj.name;
    let text2 = "Price: $"+obj.price;

    productName.append(text);
    productPrice.append(text2);
    productName.style.color = "black";
    productPrice.style.color = "black";
    innerDiv.append(productName);
    innerDiv.append(productPrice);
    // newDiv.style.display = "none";


}




// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.