// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});


// Chart: Distribución por diagnóstico
var ctx = document.getElementById("chartDistribucion");
if (ctx) {
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Planta sana", "Mancha angular", "Roya"],
      datasets: [{
        data: [58, 24, 18], // valores de ejemplo
        backgroundColor: ["#198754", "#ffc107", "#9acd32"], // verde, amarillo, verde lima
        hoverBackgroundColor: ["#157347", "#e0a800", "#7fbf26"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: '55%'
    },
  });
}
