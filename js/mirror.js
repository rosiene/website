document.getElementById("urlSend").addEventListener("click", function(event){
  event.preventDefault();
  var str = document.getElementById("urlValue").value;
  var matches = str.match(/v=([^&]*)/);
  console.print(str);
  console.print(matches);
});
