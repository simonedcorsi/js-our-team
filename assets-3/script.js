const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cardContainer = document.getElementById('cardContainer')

for( i = 0; i < teamMembers.length; i++ ){
  let element = teamMembers[i]

  cardContainer.innerHTML +=
  `         <div class="flex">
                <figure>
                    <img height="90px" src='./${element.img}'' alt="">
                </figure>
                <div class="flex flex-column">
                    <h5>${element.name}</h5>
                    <span>${element.email}</span>
                    <span>${element.role}</span>
                </div>
            </div>
  `
}