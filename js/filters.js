const listContainer = document.querySelector(".college-list");
const filters = {
  tier: document.getElementById("tierFilter"),
  exam: document.getElementById("examFilter"),
  fees: document.getElementById("feesFilter"),
  location: document.getElementById("locationFilter")
};

function renderColleges(data) {
  listContainer.innerHTML = data.length 
    ? data.map(college => `
      <div class="college-card">
        <div class="tier-tag ${college.tier.replace(' ', '-').toLowerCase()}">${college.tier}</div>
        <h3>${college.name}</h3>
        <p class="college-meta">${college.city}, ${college.state}</p>
        <div class="stats">
          <p><strong>Fees:</strong> ₹${college.fees}L</p>
          <p><strong>Avg:</strong> ₹${college.avgPackage} LPA</p>
        </div>
        <p class="roi">ROI: ${((college.avgPackage / college.fees) * 100).toFixed(0)}%</p>
        <a href="college-template.html?id=${college.id}" class="btn btn-secondary">View Analysis</a>
      </div>
    `).join('')
    : `<p class="no-results">No colleges match your criteria.</p>`;
}

function applyFilters() {
  let filtered = colleges;

  if (filters.tier.value) filtered = filtered.filter(c => c.tier === filters.tier.value);
  if (filters.exam.value) filtered = filtered.filter(c => c.exams.includes(filters.exam.value));
  if (filters.location.value) filtered = filtered.filter(c => c.city === filters.location.value);
  
  if (filters.fees.value) {
    const [min, max] = filters.fees.value.split('-').map(Number);
    filtered = filtered.filter(c => max ? (c.fees >= min && c.fees <= max) : c.fees >= min);
  }

  renderColleges(filtered);
}

// Event Listeners
Object.values(filters).forEach(f => f?.addEventListener("change", applyFilters));

// Initial Render
renderColleges(colleges);
