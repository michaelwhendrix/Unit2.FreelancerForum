const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  const trTableArray =[];
  const thNameArray =[];
  const thOccupationArray =[];
  const thPriceArray =[];

  const calcAverage =() => {
    let sumAllFreelancers = 0;
    let count = 0;
    for(let i = 0; i < freelancers.length; i++) {
        sumAllFreelancers += freelancers[i].price;
        count++;
    }
    return sumAllFreelancers / count;
}


const infoBox = document.createElement('div');
const h1Title = document.createElement('h1');
const h2Average = document.createElement('h2');
const h1Subtotle = document.createElement('h1');
const tableBox = document.createElement('table');
const tableBoxRow = document.createElement('tr');
const thName = document.createElement('th');
const thOccupation = document.createElement('th');
const thPrice = document.createElement('th');

for(let i =0; i < freelancers.length; i++) {
    trTableArray[i] =document.createElement('tr');
    thNameArray[i] = document.createElement('th');
    thOccupationArray[i] = document.createElement('th');
    thPriceArray[i] = document.createElement('th');
}

h1Title.innerHTML = "Freelancer Forum";
h2Average.innerHTML = `The average starting price is $${calcAverage()}.`;
h1Subtotle.innerHTML = "Available Freelancers";




document.body.appendChild(infoBox);
document.body.appendChild(tableBox);
infoBox.appendChild(h1Title);
infoBox.appendChild(h2Average);
infoBox.appendChild(h1Subtotle);

document.body.setAttribute("style", "display:flex; flex-direction:column");
infoBox.setAttribute("style", "border:3px solid black; display:flex; flex-direction:column; align-items:center");


for(let i =0; i < freelancers.length; i++) {
    const element = freelancers[i];
    thNameArray[i].innerText = element.name;
    thOccupationArray[i].innerText = element.occupation;
    thPriceArray[i].innerText = `$${element.price}`;

    tableBox.appendChild(trTableArray[i]);
    tableBox.appendChild(thNameArray[i]);
    tableBox.appendChild(thOccupationArray[i]);
    tableBox.appendChild(thPriceArray[i]);
}
