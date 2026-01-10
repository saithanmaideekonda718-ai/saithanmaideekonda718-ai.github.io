const products=[
    {
        name:"product 1",
        desc:"This is a sample description",
        price:45,
        imgurl:"https://picsum.photos/id/1/300/300"
    },
    {
        name:"product 2",
        desc:"This is a sample description",
        price:50,
        imgurl:"https://picsum.photos/id/2/300/300"
    },
    {
        name:"product 3",
        desc:"This is a sample description",
        price:55,
        imgurl:"https://picsum.photos/id/3/300/300"
    }
];
function showProducts()
{
    let str=`<div class="row">`;
    products.map(e=>{
        str=str+`
        <div class="box">
        <img src="${e.imgurl}"/>
        <h3>${e.name}</h3>
        <p>${e.desc}</p>
        <h5>${e.price}</h5>
        <p><button>Add to cart</button></p>
        </div>     
        `
    }
    )
    str=str+'</div>';
    root.innerHTML = str;
}
