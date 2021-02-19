$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  }

  //Post
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: `Publicado el dia: ${moment().day()} de ${moment().format(
          "MMMM"
        )} del ${moment().format("YYYY")}`,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada enim et diam pretium, in imperdiet sapien posuere.",
      },
      {
        title: "Prueba de titulo 2",
        date: `Publicado el dia: ${moment().day()} de ${moment().format(
          "MMMM"
        )} del ${moment().format("YYYY")}`,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada enim et diam pretium, in imperdiet sapien posuere.",
      },
      {
        title: "Prueba de titulo 3",
        date: `Publicado el dia: ${moment().day()} de ${moment().format(
          "MMMM"
        )} del ${moment().format("YYYY")}`,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada enim et diam pretium, in imperdiet sapien posuere.",
      },
      {
        title: "Prueba de titulo 4",
        date: `Publicado el dia: ${moment().day()} de ${moment().format(
          "MMMM"
        )} del ${moment().format("YYYY")}`,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada enim et diam pretium, in imperdiet sapien posuere.",
      },
      {
        title: "Prueba de titulo 5",
        date: `Publicado el dia: ${moment().day()} de ${moment().format(
          "MMMM"
        )} del ${moment().format("YYYY")}`,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada enim et diam pretium, in imperdiet sapien posuere.",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
       <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="" class="button-more">Leer mas</a>
       </article>
     `;
      $("#posts").append(post);
    });
  }
  // Selector de temas
  var theme = $("#theme");

  $("#ligth").click(function () {
    theme.attr("href", "css/ligth.css");
  });

  $("#dark").click(function () {
    theme.attr("href", "css/stylesTheme.css");
  });

  // Scroll up
  $(".up").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  // Login falso
  $("#login").submit(function () {
    var nombre = $("#name").val();
    localStorage.setItem("name", nombre);
  });

  var campo_nombre = localStorage.getItem("name");

  if (
    campo_nombre != null &&
    campo_nombre.length > 0 &&
    campo_nombre != undefined
  ) {
    var about_parrafo = $("#about p");
    about_parrafo.html(`<hr> Bienvenido <strong> ${campo_nombre} </strong>`);
    about_parrafo.append(`<a href="#" id="logout"><p>Cerrar sesion</p></a>`);
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  } else {
    $("#login").show();
  }

  // Acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  // Relog
  if (window.location.href.indexOf("relog") > -1) {
    setInterval(function () {
      var relog = moment().format("h:mm:ss");
      $("#relog").html(relog);
    }, 1000);
  }

  // Validacion
  if (window.location.href.indexOf("contact") > -1) {
    $.validate({
      lang:"es"
    })
  }

});
 