
      var splide = new Splide("#main-slider", {
        width: "70%", // El slider ocupará el 90% del ancho de la ventana
        height: "70vh", // El slider ocupará el 50% de la altura de la ventana
        pagination: false,
        cover: true
      });

      var thumbnails = document.getElementsByClassName("thumbnail");
      var current;

      for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
      }

      function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener("click", function () {
          splide.go(index);
        });
      }

      splide.on("mounted move", function () {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
          if (current) {
            current.classList.remove("is-active");
          }

          thumbnail.classList.add("is-active");
          current = thumbnail;
        }
      });

      splide.mount();
    

      
