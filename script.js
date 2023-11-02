infoBox = document.createElement('div');
h1Title = document.createElement('h1');
h2Average = document.createElement('h2');
h1Subtotle = document.createElement('h1');
listBox = document.createElement('div');
listBoxHeaders = document.createElement('h2');
olFreelancers = document.createElement('ol');
liTag = document.createElement('li');

h1Title.innerHTML = "Freelancer Forum";
h2Average.innerHTML = "The average starting price is $30.";
h1Subtotle.innerHTML = "Available Freelancers";
listBox.innerHTML = "Available Freelancers test";
olFreelancers.innerHTML = "Available Freelancers test";
//listBox.innerHTML = "Available Freelancers test";




document.body.appendChild(infoBox);
document.body.appendChild(listBox);
infoBox.appendChild(h1Title);
infoBox.appendChild(h2Average);
infoBox.appendChild(h1Subtotle);
listBox.appendChild(listBoxHeaders);
listBox.appendChild(olFreelancers);