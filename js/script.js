var formulario = document.getElementById('formulario')
        var nombreTarjeta = document.getElementById('nombreTarjeta')

        formulario.addEventListener("submit", function(event){
            event.preventDefault();
            var nombre = document.getElementById('nombre').value
    
            nombreTarjeta.textContent = nombre
            
            tarjeta.style.display = 'block'

            document.getElementById('nombre').value = ''
            document.getElementById('email').value = ''
            document.getElementById('asunto').value = ''
            document.getElementById('mensaje').value = ''
            

        });
var formularioGalletasAmigos = document.getElementById('formulario-galletas-amigos');
var galletasTarjeta = document.getElementById('galletasTarjeta');
var amigosTarjeta = document.getElementById('amigosTarjeta');
var tarjetaGalletasAmigos = document.getElementById('tarjeta-galletas-amigos');

formularioGalletasAmigos.addEventListener("submit", function(event) {
  event.preventDefault();

  var numGalletas = parseInt(document.getElementById('galletas').value);
  var numAmigos = parseInt(document.getElementById('amigos').value);

  if (!isNaN(numGalletas) && !isNaN(numAmigos)) {
    var resultado = numGalletas / numAmigos;

    galletasTarjeta.textContent = numGalletas;
    amigosTarjeta.textContent = numAmigos;
    resultadoTarjeta.textContent = resultado.toFixed(2); // Muestra el resultado con 2 decimales

    tarjetaGalletasAmigos.style.display = 'block';

    // Limpiar los campos del formulario
    document.getElementById('galletas').value = '';
    document.getElementById('amigos').value = '';
  }
});
var formularioGalletasAmigos = document.getElementById('formulario-galletas-amigos');
var galletasTarjeta = document.getElementById('galletasTarjeta');
var amigosTarjeta = document.getElementById('amigosTarjeta');
var resultadoTarjeta = document.getElementById('resultadoTarjeta'); // Nuevo elemento <p>
var tarjetaGalletasAmigos = document.getElementById('tarjeta-galletas-amigos');

formularioGalletasAmigos.addEventListener("submit", function(event) {
  event.preventDefault();

  var numGalletas = parseInt(document.getElementById('galletas').value);
  var numAmigos = parseInt(document.getElementById('amigos').value);

  if (!isNaN(numGalletas) && !isNaN(numAmigos) && numAmigos !== 0) {
    var resultado = numGalletas / numAmigos;

    galletasTarjeta.textContent = numGalletas;
    amigosTarjeta.textContent = numAmigos;
    resultadoTarjeta.textContent = resultado.toFixed(1);

    tarjetaGalletasAmigos.style.display = 'block';

    document.getElementById('galletas').value = '';
    document.getElementById('amigos').value = '';
  }
});

// Obtén el formulario por su ID
document.getElementById('formulario-ropa').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener los valores de los campos
  var zapatos = parseInt(document.getElementById('zapatos').value);
  var pantalones = parseInt(document.getElementById('pantalones').value);
  var poleras = parseInt(document.getElementById('poleras').value);

  // Calcular la multiplicación
  var resultado = zapatos * pantalones * poleras;

  // Mostrar el resultado
  document.getElementById('resultadoOutfit').textContent = resultado;

  // Mostrar el contenedor del resultado
  document.getElementById('tarjeta-ropa').style.display = 'block';

  document.getElementById('zapatos').value = '';
    document.getElementById('pantalones').value = '';
    document.getElementById('poleras').value = '';
    
});




