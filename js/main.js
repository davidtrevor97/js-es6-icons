const icons = [
  {
    icon: "fas fa-cat" ,
    name: "cat" ,
    type: "animal" ,
  },
  {
    icon:  "fas fa-crow",
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
//confronto i type, a seconda dei tipi aggiungo il valore ( classe ) "color" alla corrispettiva proprietà(key)  icon
//selezione colore
icons.forEach( ( item, i ) =>{
  type = item.type;
  if ( type === "animal") {
    item.icon = (item.icon + " blue");
  }else if ( type === "fruit") {
    item.icon = (item.icon + " orange");
  }else {
    item.icon = (item.icon + " purple");
  }
  console.log(item.icon);
} );
//creazione dell'HTML dinamico in base a classi e nomi delle icone
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
//inserimento dell'HTML già modificato
htmlArray.forEach((div, a, ) => {
 $(".principal").append(div);
});
//filtraggio delle icone a seconda di TYPE
//riconoscere il cambiamento di option e il valore inserito, al cambiare del valore JS filtra gli oggetti in base al corrispettivo TYPE.
//capire il valore di option

let value = "all"

$(function() {
     $("#list").change( function() {
     value = $(this).val();
     console.log(value);
     if ( value === "animal" ) {
       $(".principal").append("CIAOOOOOOOOOOO")
     }
    });

 });
