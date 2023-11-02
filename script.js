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
  let sumAllFreelancers = 0;
  const liArray =[];


const infoBox = document.createElement('div');
const h1Title = document.createElement('h1');
const h2Average = document.createElement('h2');
const h1Subtotle = document.createElement('h1');
const listBox = document.createElement('div');
const listBoxHeaders = document.createElement('h2');
const olFreelancers = document.createElement('ol');
for(let i =0; i < freelancers.length; i++) {
    liArray[i] = document.createElement('li');
}
//const liTag = document.createElement('li');
//const brTag = document.createElement('br');

h1Title.innerHTML = "Freelancer Forum";
h2Average.innerHTML = "The average starting price is $30.";
h1Subtotle.innerHTML = "Available Freelancers";
listBox.innerHTML = "Available Freelancers test";




document.body.appendChild(infoBox);
document.body.appendChild(listBox);
infoBox.appendChild(h1Title);
infoBox.appendChild(h2Average);
infoBox.appendChild(h1Subtotle);
listBox.appendChild(listBoxHeaders);
listBox.appendChild(olFreelancers);

for(let i =0; i < freelancers.length; i++) {
    const element = freelancers[i];
    console.log(element);
    sumAllFreelancers += element.price;
    liArray[i].innerHTML = `${element.name}    ${element.occupation}     ${element.price} `;
    olFreelancers.appendChild(liArray[i]);
}
