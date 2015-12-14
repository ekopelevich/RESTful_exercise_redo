console.log('This is the app file in the public folder');

$(function () {
  $('.editButton').on('click', function (event) {
    var originalName = $('#originalName').val();
    var name = $('#name').val();
    var breed = $('#type').val();
    var data = {name: name, breed: breed};
    $.ajax('/squirrels/'+ originalName, {
      data: data,
      type: 'PUT'
    })
    .done(function (response) {
      console.log(response);
      window.location = "/squirrels";
    });
  });
});
