
var button = document.querySelector("#btn")
button.addEventListener("click", CRUD)

var allusers = []
async function CRUD() {

    var text = document.querySelector('#txt').value
    var url = new URL(`https://api-thirukkural.vercel.app/api?num=${text}`);
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    allusers = data

    var tbody = document.querySelector('#tbody')

    Object.entries(allusers).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
        let tr = document.createElement('tr');
        let td1 = document.createElement('td')
        let td2 = document.createElement('td');
        let ul1 = document.createElement('ul')
        let li1 = document.createElement('li')
        let ul2 = document.createElement('ul')
        let li2 = document.createElement('li')
        li1.innerText = `${key}`
        li2.innerText = `${value}`
        ul1.append(li1)
        td1.append(ul1)
        tr.append(td1)
        ul2.append(li2)
        td2.append(ul2)
        tr.append(td2)
        tbody.append(tr)
    }
    );
    button.disabled = true;
}


document.querySelector('#txt').addEventListener("click", clear)
function clear() {
    document.querySelector('#txt').value = "";
    button.disabled = false;
    for (i = 0; i < 15; i++) {
        document.querySelector("tbody").deleteRow(0)
    }
}


//https://cat-fact.herokuapp.com/facts;
//https://alexwohlbruck.github.io/cat-facts/

