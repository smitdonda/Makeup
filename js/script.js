//Create and Build and HTML element
document.body.innerHTML=`
<div  class="heading-container">
        <h3>MAKEUP BRAND</h3>
        <img src="https://post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-732x549-thumbnail.jpg" class = "main_img">
</div>
<div id ="makeup" class="main-container "></div>`;

let makeupdata = async () => {
    try{
        const url = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")    
        const getdata = await url.json();

        makeup.innerHTML="";
        getdata.forEach((data)=>{
            displaydata(data)
        });

    }
    catch (error){
        console.log(error);
    }
}
makeupdata();

const displaydata = (data) => {
    makeup.innerHTML += `
    <div id = "main_div" class= "container" >
        <img src="${data.image_link}" class = "img-responsive"> 
        <h5 class = "name"><b>Brand: </b><span>${data.brand}</span></h5>
        <p class = "name"><b>Name : </b><span>${data.name}</span></p>
        <p class = "name"><b>Price : </b><span>${data.price}</span></p>
        <p class = "name"><b>Link : </b> <a href="${data.product_link}" target="_blank" ></a></p>
        <p class = "name"><b>Description : </b><span>${data.description}</span></p
    </div>
    `;
}