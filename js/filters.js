const listContainer = document.querySelector(".college-list");

function renderColleges(data) {
  listContainer.innerHTML = "";

  data.forEach(college => {
    const card = document.createElement("div");
    card.className = "college-card";

    card.innerHTML = `
      <h3>${college.name}</h3>
      <p class="college-meta">${college.tier} | ${college.location}</p>
      <p>Fees: ₹${college.fees}L</p>
      <p>Avg Package: ₹${college.avgPackage} LPA</p>
      <p>Exams: ${college.exams.join(", ")}</p>
      <a href="college-template.html" class="btn btn-secondary">View Details</a>
    `;

    listContainer.appendChild(card);
  });
}

renderColleges(colleges);
