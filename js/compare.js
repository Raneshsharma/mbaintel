const select1 = document.getElementById("college1");
const select2 = document.getElementById("college2");
const select3 = document.getElementById("college3");
const table = document.getElementById("compareTable");

/* Populate dropdowns */
[college1, college2, college3].forEach(() => {});

function populateDropdown(select) {
  select.innerHTML = `<option value="">Select College</option>`;
  colleges.forEach(college => {
    const opt = document.createElement("option");
    opt.value = college.id;
    opt.textContent = college.name;
    select.appendChild(opt);
  });
}

populateDropdown(select1);
populateDropdown(select2);
populateDropdown(select3);

/* Compare logic */
function compareColleges() {
  const ids = [
    parseInt(select1.value),
    parseInt(select2.value),
    parseInt(select3.value)
  ].filter(Boolean);

  if (ids.length < 2) {
    alert("Please select at least 2 colleges to compare.");
    return;
  }

  const selected = colleges.filter(c => ids.includes(c.id));
  renderTable(selected);
}

function renderTable(selected) {
  table.innerHTML = "";

  const headers = ["Parameter", ...selected.map(c => c.name)];
  const rows = [
    { label: "Fees (₹L)", key: "fees", better: "lower" },
    { label: "Avg Package (LPA)", key: "avgPackage", better: "higher" },
    { label: "Median Package (LPA)", key: "medianPackage", better: "higher" },
    { label: "Tier", key: "tier" },
    { label: "Exams", key: "exams" },
    { label: "Location", key: "city" }
  ];

  /* Header row */
  const headerRow = document.createElement("tr");
  headers.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  /* Data rows */
  rows.forEach(row => {
    const tr = document.createElement("tr");

    const labelTd = document.createElement("td");
    labelTd.textContent = row.label;
    tr.appendChild(labelTd);

    const values = selected.map(c => c[row.key]);

    selected.forEach((college, index) => {
      const td = document.createElement("td");
      let value = college[row.key];

      if (Array.isArray(value)) value = value.join(", ");

      if (row.better) {
        const best =
          row.better === "lower"
            ? Math.min(...values)
            : Math.max(...values);

        if (college[row.key] === best) td.className = "good";
        else td.className = "bad";
      } else {
        td.className = "neutral";
      }

      td.textContent = value;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
}
