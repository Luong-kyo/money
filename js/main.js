// const xValues = [2,4,6,8,10,12,14,16];

// new Chart("chart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       data: [8,11,12,10,10,11,12,20,7,2],
//       borderColor: "red",
//       fill: false
//     },{
//       data: [16,17,17,19,20,27,40,20,24,29],
//       borderColor: "green",
//       fill: false
//     }
//     // ,{
//     //   data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
//     //   borderColor: "blue",
//     //   fill: false
//     // }
//     ]
//   },
//   options: {
//     legend: {display: false}
//   }
// });


let ctx = document.getElementById("myChart").getContext("2d");
let ctx2 = document.getElementById("chart").getContext("2d");
let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Seb",
            "Oct",
        ],
        datasets: [
            {
                label: "Tổng chi",
                data: [22, 15, 15, 12, 11, 13],
                backgroundColor: "rgba(190, 42, 42, 0.8)",
            },
            {
                label: "Tổng thu",
                data: [20, 21, 17, 22, 21, 21],
                backgroundColor: "rgba(14, 187, 49, 0.5)",
            },

        ],
    },
});
let chart = new Chart(ctx2, {
    type: "line",
    data: {
        labels: [
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Seb",
            "Oct",
        ],
        datasets: [
            {
                label: "Tổng chi",
                data: [22, 15, 15, 12, 11, 13],
                backgroundColor: "rgba(190, 42, 42, 0.8)",
            },
            // {
            //     label: "Thu nhập",
            //     data: [20, 21, 17, 22, 21, 21],
            //     backgroundColor: "rgba(14, 187, 49, 0.5)",
            // },

        ],
    },
});
  