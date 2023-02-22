var allData = [
  {
    start_time: "Sat 09:00 AM",
    end_time: "10:00 AM",
    discription: "Registration + Table allocation",
  },
  {
    start_time: "Sat 10:00 AM",
    end_time: "12:15 PM",
    discription: "Code",
  },
  {
    start_time: "Sat 12:15 PM",
    end_time: "12:30 PM",
    discription: "Setup for Inauguration",
  },
  {
    start_time: "Sat 12:30 PM",
    end_time: "01:30 PM",
    discription: "Inauguration",
  },
  {
    start_time: "Sat 01:30 PM",
    end_time: "02:30 PM",
    discription: "Lunch",
  },
  {
    start_time: "Sat 02:30 PM",
    end_time: "05:00 PM",
    discription: "Code",
  },
  {
    start_time: "Sat 05:00 PM",
    end_time: "05:30 PM",
    discription: "Refreshment",
  },
  {
    start_time: "Sat 05:00 PM",
    end_time: "08:30 PM",
    discription: "Code",
  },
  {
    start_time: "Sat 08:30 PM",
    end_time: "09:30 PM",
    discription: "Dinner",
  },
  {
    start_time: "Sat 09:30 PM",
    end_time: "11:00 PM",
    discription: "Code",
  },
  {
    start_time: "Sat 11:00 PM",
    end_time: "11:30 PM",
    discription: "Refreshment",
  },
  {
    start_time: "Sat 11:00 PM",
    end_time: "Sun 02:00 AM",
    discription: "Code",
  },
  {
    start_time: "Sun 02:00 AM",
    end_time: "02:30 AM",
    discription: "Refreshment",
  },
  {
    start_time: "Sun 02:00 AM",
    end_time: "05:00 AM",
    discription: "Code",
  },
  {
    start_time: "Sun 05:00 AM",
    end_time: "05:30 AM",
    discription: "Refreshment",
  },

  {
    start_time: "Sun 05:00 AM",
    end_time: "08:00 AM",
    discription: "Code",
  },
  {
    start_time: "Sun 08:00 AM",
    end_time: "09:00 AM",
    discription: "Breakfast",
  },
  {
    start_time: "Sun 09:00 AM",
    end_time: "10:30 AM",
    discription: "Elimination",
  },
  {
    start_time: "Sun 10:30 AM",
    end_time: "01:30 PM",
    discription: "Code",
  },
  {
    start_time: "Sun 01:30 PM",
    end_time: "02:30 PM",
    discription: "Lunch",
  },
  {
    start_time: "Sun 02:30 PM",
    end_time: "04:15 PM",
    discription: "Code + Final Preparation for Presentation",
  },
  {
    start_time: "Sun 04:00 PM",
    end_time: "04:30 PM",
    discription: "Refreshment",
  },
  {
    start_time: "Sun 04:15 PM",
    end_time: "06:00 PM",
    discription: "Presentation",
  },
  {
    start_time: "Sun 06:00 PM",
    end_time: "06:30 PM",
    discription: "Evaluation",
  },
  {
    start_time: "Sun 06:30 PM",
    end_time: "06:45 PM",
    discription: "Setup for Results and Valediction",
  },
  {
    start_time: "Sun 06:45 PM",
    end_time: "07:15 PM",
    discription: "Result",
  },
  {
    start_time: "Sun 07:15 PM",
    end_time: "08:15 PM",
    discription: "Valediction",
  },
  {
    start_time: "Sun 08:15 PM",
    end_time: "08:45 PM",
    discription: "Disperse",
  },
];

let placeholder = document.querySelector("#data-output");
let out = "";
console.log("hi");

for (let data of allData) {
  console.log(data.start_time);
  out += `<li><div class="time-font" id="data-output"><time> ${data.start_time} <span style="font-size:x-small">&nbspTO &nbsp</span> ${data.end_time} </time>
      <p class="light-para" >${data.discription}</p></div></li>`;
}
console.log(out);
placeholder.innerHTML = out;
