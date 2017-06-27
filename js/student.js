function addStudents(data) {
  $.each(data, function (i, e) {
    $('#list').append('<li>' +e.name +'</li>');
    console.log(e.name);
  })
}

$.get('http://laboratoria.cuadra.co:9339/api/v1/students/', function (data) {
  console.log(data);
  if(data != null){
    addStudents(data);
  }
});

