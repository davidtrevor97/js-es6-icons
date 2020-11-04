const icons = [
  {
    icon: "fas fa-cat" ,
    name: "cat" ,
    type: "animal" ,
  },
  {
    icon:  "fad fa-crow",
    name: "crow" ,
    type: "animal"  ,
  },
  {
    icon: "fas fa-dog" ,
    name: "dog" ,
    type: "animal" ,
  },
  {
    icon: "fas fa-dove" ,
    name: "dove" ,
    type: "animal" ,
  },
  {
    icon: "fas fa-dragon" ,
    name: "dragon" ,
    type: "animal" ,
  },
  {
    icon: "fas fa-horse" ,
    name: "horse" ,
    type: "animal" ,
  },
  {
    icon: "fas fa-hippo" ,
    name: "hippo" ,
    type: "animal" ,
  },
  {
    icon: "fas fa-fish" ,
    name: "fish" ,
    type: "animal" ,
  },
  {
    icon: "fas fa-carrot" ,
    name: "carrot" ,
    type: "fruit" ,
  },
  {
    icon: "fas fa-apple-alt" ,
    name: "apple-alt" ,
    type: "fruit" ,
  },
  {
    icon: "fas fa-lemon" ,
    name: "lemon" ,
    type: "fruit" ,
  },
  {
    icon: "fas fa-pepper-hot" ,
    name: "pepper-hot" ,
    type: "fruit" ,
  },
  {
    icon: "fas fa-user-astronaut" ,
    name: "user-astronaut" ,
    type: "user" ,
  },
  {
    icon: "fas fa-user-graduate" ,
    name: "user-graduate" ,
    type: "user" ,
  },
  {
    icon: "fas fa-user-ninja" ,
    name: "user-ninja" ,
    type: "user" ,
  },
  {
    icon: "fas fa-user-secret" ,
    name: "user-secret" ,
    type: "user" ,
  },
];
const htmlArray = [];
icons.forEach((item, i) => {
  icon = item.icon ;
  name = item.name;
  const html =    `
      <div class="icon">
        <i class="${icon}"></i>
        <h5>${name}</h5>
      </div>
      `;
      htmlArray.push(html);

});
 htmlArray.forEach((div, a, ) => {
  $(".principal").append(div);
});
