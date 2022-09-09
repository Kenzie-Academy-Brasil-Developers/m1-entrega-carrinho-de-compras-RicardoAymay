



const productsCart = [
 
    {
        id: 2,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 3,
        name: "Vinho do Porto",
        price: 274.99
    },
    {
        id: 4,
        name: "Arroz Caldas novas",
        price: 10.90
    },
    {
        id: 5,
        name: "Feijão Tio Marcos",
        price: 12.25
    },
    {
        id: 6,
        name: "Balde",
        price: 7.99
    },
    {
        id: 7,
        name: "Pêssego em calda",
        price: 44.99
    },
    {
        id: 8,
        name: "Chinelo Havaianas",
        price: 18.99
    },
    {
        id: 9,
        name: "Frigideira Açobom",
        price: 78.99
    },
    {
        id: 10,
        name: "Pacote de bala Nariquita",
        price: 6.99
    },
    
]
//_____________________________________________________________________________________________________

//1- seleção
let tagBody = document.querySelector("body")


//2- elementos básicos criados
let tagMain = document.createElement("main")
let tagUl = document.createElement("ul")
let tagBtn = document.createElement("button")

//3-elementos do primeiro card com os nomes "Item" e "Valor"
let tagInicial = document.createElement("li")
let tagItem = document.createElement("p")
let tagValor = document.createElement("p")

//4-alimentando tags
tagItem.innerText = "Item"
tagValor.innerText = "Valor"
tagInicial.className = "itemValor"
tagBtn.innerText = "Finalizar Compra"

//5-pendurando elementos prévios à função
tagBody.appendChild(tagMain)
tagMain.appendChild(tagUl)
tagUl.appendChild(tagInicial)
tagInicial.append(tagItem,tagValor)



//6-função que cria os cards com os produtos
function mercado(arr) {
    let somaMercado = 0
    //7-inserção dos cards do array
    for (let i = 0; i < arr.length; i++) {
        
        let tagLi = document.createElement("li")
        let tagPNome = document.createElement("p")
        let tagPValor = document.createElement("p")


        tagPNome.innerHTML = arr[i].name
        tagPValor.innerHTML = `R$${arr[i].price}`
        somaMercado += arr[i].price
        
        tagUl.append(tagLi)
        tagLi.append(tagPNome, tagPValor)
     
}
    //8-inserção do card final com o total
    tagResultado = document.createElement("li")
    tagTotal = document.createElement("p")
    tagValorfinal = document.createElement("p")
    
    //alimentando
    tagTotal.innerText = "Total"

    //calculando o valor final
    tagValorfinal = `R$${somaMercado.toFixed(2)}`


    tagUl.appendChild(tagResultado)
    tagResultado.append(tagTotal, tagValorfinal)
    
}
mercado(productsCart)
tagMain.appendChild(tagBtn)
//adicionando o botão


