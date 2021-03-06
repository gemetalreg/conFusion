'use strict';

;
(function() {
  $(document).ready(function() {

    $("#mycarousel").carousel({
      interval: 2000
    });
    // Make Carousel move faster

    $("#carousel-button").click(function() {

      if ($("#carousel-button").children("span").hasClass("fa-pause")) {

        $("#mycarousel").carousel('pause');

        $("#carousel-button").children("span").removeClass("fa-pause");
        $("#carousel-button").children("span").addClass("fa-play");

        $("#carousel-button").removeClass("btn-danger");
        $("#carousel-button").addClass("btn-success");


      } else if ($("#carousel-button").children("span").hasClass("fa-play")) {

        $("#mycarousel").carousel('cycle');

        $("#carousel-button").children("span").removeClass("fa-play");
        $("#carousel-button").children("span").addClass("fa-pause");

        $("#carousel-button").removeClass("btn-success");
        $("#carousel-button").addClass("btn-danger");

      }

    });
    // Activate Pause-Play Carousel Button

    $("#loginModalOpen").click(function() {
      $("#loginModal").modal('show');
    });
    // Open loginModal

    $("#reserveModalOpen").click(function() {
      $("#reserveModal").modal('show');
    });
    // Open reserveModal


  });
})();
