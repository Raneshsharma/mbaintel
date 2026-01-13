// Real-time Filtering Engine for Colleges
let filteredColleges = [...colleges];

// Initialize filters
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderColleges(colleges);
});

function initializeFilters() {
    // Populate location dropdown
    const locationFilter = document.getElementById('locationFilter');
    const locations = getAllLocations();
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });

    // Set fee range defaults
    const minFees = getMinFees();
    const maxFees = getMaxFees();
    document.getElementById('feesMin').placeholder = `Min (${formatCurrency(minFees)})`;
    document.getElementById('feesMax').placeholder = `Max (${formatCurrency(maxFees)})`;

    // Attach event listeners for real-time filtering
    document.getElementById('tierFilter').addEventListener('change', applyFilters);
    document.getElementById('examFilter').addEventListener('change', applyFilters);
    document.getElementById('locationFilter').addEventListener('change', applyFilters);
    document.getElementById('feesMin').addEventListener('input', applyFilters);
    document.getElementById('feesMax').addEventListener('input', applyFilters);
}

function applyFilters() {
    const tierFilter = document.getElementById('tierFilter').value;
    const examFilter = document.getElementById('examFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    const feesMin = document.getElementById('feesMin').value ? parseInt(document.getElementById('feesMin').value) : null;
    const feesMax = document.getElementById('feesMax').value ? parseInt(document.getElementById('feesMax').value) : null;

    filteredColleges = colleges.filter(college => {
        // Tier filter
        if (tierFilter && college.tier !== parseInt(tierFilter)) {
            return false;
        }

        // Entrance exam filter
        if (examFilter && !college.entranceExams.includes(examFilter)) {
            return false;
        }

        // Location filter
        if (locationFilter && college.location !== locationFilter) {
            return false;
        }

        // Fees range filter
        if (feesMin !== null && college.fees < feesMin) {
            return false;
        }
        if (feesMax !== null && college.fees > feesMax) {
            return false;
        }

        return true;
    });

    renderColleges(filteredColleges);
}

function renderColleges(collegesToRender) {
    const collegeList = document.getElementById('collegeList');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.innerHTML = `<strong>${collegesToRender.length} colleges found</strong>`;

    if (collegesToRender.length === 0) {
        collegeList.innerHTML = '<div class="card"><p>No colleges match your filters. Try adjusting your search criteria.</p></div>';
        return;
    }

    collegeList.innerHTML = collegesToRender.map(college => `
        <div class="college-card">
            <div class="college-header">
                <div>
                    <h3 class="college-name">${college.name}</h3>
                    <span class="tier-badge tier-${college.tier}">Tier ${college.tier}</span>
                </div>
            </div>
            <div class="college-details">
                <div class="detail-item">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">${college.location}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Fees</span>
                    <span class="detail-value">${formatCurrency(college.fees)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Avg Salary</span>
                    <span class="detail-value">${formatCurrency(college.avgSalary)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">ROI</span>
                    <span class="detail-value roi-value">${college.roi}%</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Placement Rate</span>
                    <span class="detail-value">${college.placementRate}%</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Min Percentile</span>
                    <span class="detail-value">${college.minPercentile}%</span>
                </div>
            </div>
            <div style="margin-top: 1rem;">
                <span class="detail-label">Entrance Exams:</span>
                <span>${college.entranceExams.join(', ')}</span>
            </div>
            <div style="margin-top: 0.5rem;">
                <span class="detail-label">Top Recruiters:</span>
                <span>${college.topRecruiters.join(', ')}</span>
            </div>
        </div>
    `).join('');
}

function formatCurrency(amount) {
    return '₹' + (amount / 100000).toFixed(2) + ' Lakhs';
}
