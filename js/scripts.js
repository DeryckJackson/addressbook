$(document).ready(function() {
  $("form#inputs").submit(function(event) {
    event.preventDefault();

    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const address = $("#address").val();
    const phoneNumber = $("#phoneNumber").val();
    const company = $("#company").val();
    const email = $("#email").val();

    $("#person").append(`<option value="${firstName}${lastName}">${firstName} ${lastName}</option>`);
  });
});