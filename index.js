const { use } = require("react");

async function getProducts() {
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json()
    console.log(data.products);


let {products} = data;
let cards = document.getElementById('cards');
products.map(products => {
   let {title , price, images,} = products;
    cards.innerHTML += `
          <div class="card">
            <img src="${images[0]}" height="200" width="200" alt="${title}">
            <h2>${title}</h2>
            <p class="price">$${price}</p>
           <div class="card-actions">
            <button class="btn">Add to Cart</button>
            <button class="btn">Buy Now</button>
            </div>
    </div>
    `;
   
});
}
getProducts();


class person {
    fullName
    email
    password
    constructor(fullName , email , password){
        this.fullName = fullName;
        this.email=email;
        this.password = password;
    }
}

let users = JSON.parse(localStorage.getItem("users")) || [];
function LoginForm(event) {
     event.preventDefault()
  document.getElementById("loginModal").style.display = "block";
  let usersFromStorage = JSON.parse(localStorage.getItem("users")) ;
let email =  document.getElementById("email")
    let password = document.getElementById("password")
  let savedUser = usersFromStorage.find((element) => element.email === email.value)
if (savedUser?.email === email.value && savedUser?.password === password.value) {
        alert("you have logged in successfully!")
        localStorage.setItem("loggedinUser" , JSON.stringify(savedUser))
        userName.innerHTML = savedUser.fullName
        userEmail.innerHTML = savedUser.email
    } else {
        alert("Invalid credientials")
    }

        // console.log(email, password);
        email.value = ""
        password.value = ""
}
function RegisterForm(event) {
     event.preventDefault()
  document.getElementById("registerModal").style.display = "block";
  let fullName = document.getElementById("new-username")
    let email = document.getElementById("new-email")
    let password = document.getElementById("new-password")

    let usersFromStorage = JSON.parse(localStorage.getItem("users"))
    let savedUser = usersFromStorage.find((element) => element.email === email.value)
    if (savedUser) {
        alert("User already exists")
        return;
    }else if (email.value === "" || password.value === "" || fullName.value === "") {
        alert("Please fill all fields")
        return;
    }else if (password.value.length < 6) {
        alert("Password must be at least 6 characters long")
        return;
    }
else{
     let newUser = new person (fullName.value, email.value, password.value)
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
}

   
console.log(fullName, email, password);
    fullName.value = ""
    email.value = ""
    password.value = ""
}