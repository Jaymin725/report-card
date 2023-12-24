const subject_name = ["maths", "physics", "chemistry"];

const students = [
  {
    name: "Jaymin Bhavsar",
    rollno: 725,
    marks: {
      maths: 65,
      physics: 57,
      chemistry: 45,
    }
  },
  {
    name: "Tony Stark",
    rollno: 3000,
    marks: {
      maths: 100,
      physics: 100,
      chemistry: 100,
    }
  },
  {
    name: "Bruce Wayne",
    rollno: "???",
    marks: {
      maths: "???",
      physics: "???",
      chemistry: "???",
    }
  }
];

function total(student) {
  let total = null;

  for (let i = 0; i < subject_name.length; i++)
    total += Number(student.marks[subject_name[i]]);

  return (isNaN(total)) ? ("???") : (total);
}

const cards = document.querySelectorAll(".card");

for (let j = 0; j < cards.length; j++) {
  const card_header = cards[j].querySelector(".card-header");
  const card_title = cards[j].querySelector(".card-title");
  const card_table = cards[j].querySelector("table");

  card_header.textContent += students[j].rollno;
  card_title.textContent = students[j].name;

  for (let i = 0; i < subject_name.length; i++) {
    card_table.querySelector("#" + subject_name[i]).textContent = students[j].marks[subject_name[i]];
  }

  const result_total = cards[j].querySelector("#total");
  result_total.textContent = total(students[j]);
}