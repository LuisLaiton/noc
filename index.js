// Obtén una referencia al elemento canvas
var ctx = document.getElementById('miGrafica').getContext('2d');

// Define los datos de tu gráfica
var data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
  datasets: [{
    label: 'Tickets Mensuales',
    data: [12, 19, 15, 17, 20, 14, 18, 19],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
};

// Configura y dibuja la gráfica
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});





function compararDatos() {
  const getData = async () => {
    try {
      const res = await fetch('https://raw.githubusercontent.com/LuisLaiton/API-json/main/usuarios.json');
      const usuarios = await res.json();

      let user = document.getElementById("user").value;
      let password = document.getElementById("password").value;

      const usuarioEncontrado = usuarios.find((usuario) => {
        return usuario.email === user && usuario.password === password;
      });

      if (usuarioEncontrado) {
        window.location.href = "paginaPrincipal.html"
      } else {
        var divElement = document.createElement("div");
        divElement.className = "alert alert-danger";
        divElement.textContent = "Datos incorrectos";
        var logo = document.getElementById("img-login");
        logo.parentNode.insertBefore(divElement, logo.nextSibling);

      }
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
      }, 1000)
    }
  }
  getData()
}
