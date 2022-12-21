
let StateApp =  {
    auth: 
        {
            login: null,
            email: null,
            token: null,
            url: "/login" 
        },
    client:
        {
            login: null,
            email: null,
            token: null,
            url: "/loginClient",
        },
    cart:
        {
            products: [],
            counItem: 0,
            productsObj: [],
            status: "",
        },
    wishList: 
        {
            products: [],
            counItem: 0,
        },
}


export default StateApp;


