// Arrays and Objects
const bioData = [{
    Curry: {
      firstName: 'Stephen',
      lastName: 'Curry',
      franchise: 'Warriors',
      season: 12,
      record: {
        championship: 4,
        mvp: 1,
        finalsMvp: 1,

      },
    }
  },
  {
    Lebron: {
      firstName: 'Lebron',
      lastName: 'James',
      franchise: 'Lakers',
      season: 20,
      record: {
        championship: 4,
        mvp: 1,
        finalsMvp: 4,

      },
    }
  }
];

// Converting to JSON

const bioDataJSON = JSON.stringify(bioData);
console.log(bioDataJSON);

//For loop & While loop

for(let i = 0; i <= bioData.length; i++) {
  console.log(bioData[i]);
}

const myName = "Fortune";
const myAge = 29;
const nationality = "Nigeria";

const myHtml = `<ul>
    <li>${ myName}</li>
    <li>${myAge}</li>
    <li>${nationality}</li>

    </ul>`;

document.body.innerHTML = myHtml;
console.log(myHtml);
