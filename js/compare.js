// Side-by-Side College Comparison
let selectedColleges = [null, null, null];

document.addEventListener('DOMContentLoaded', function() {
    initializeCompareSelectors();
    
    // Attach event listeners
    document.getElementById('college1').addEventListener('change', handleCollegeSelection);
    document.getElementById('college2').addEventListener('change', handleCollegeSelection);
    document.getElementById('college3').addEventListener('change', handleCollegeSelection);
});

function initializeCompareSelectors() {
    const select1 = document.getElementById('college1');
    const select2 = document.getElementById('college2');
    const select3 = document.getElementById('college3');

    // Populate dropdowns
    colleges.forEach(college => {
        const option = document.createElement('option');
        option.value = college.id;
        option.textContent = college.name;
        
        select1.appendChild(option.cloneNode(true));
        select2.appendChild(option.cloneNode(true));
        select3.appendChild(option.cloneNode(true));
    });
}

function handleCollegeSelection(event) {
    const selectId = event.target.id;
    const index = parseInt(selectId.replace('college', '')) - 1;
    const collegeId = parseInt(event.target.value);

    if (collegeId) {
        selectedColleges[index] = colleges.find(c => c.id === collegeId);
    } else {
        selectedColleges[index] = null;
    }

    updateComparison();
}

function updateComparison() {
    const selected = selectedColleges.filter(c => c !== null);
    
    if (selected.length === 0) {
        document.getElementById('comparisonContainer').style.display = 'none';
        return;
    }

    document.getElementById('comparisonContainer').style.display = 'block';
    
    // Update headers
    const headers = ['col1Header', 'col2Header', 'col3Header'];
    const headerRow = document.querySelector('.comparison-table thead tr');
    const headerCells = headerRow.querySelectorAll('th');
    
    headers.forEach((headerId, index) => {
        const header = document.getElementById(headerId);
        const cellIndex = index + 1; // +1 because first column is "Metric"
        
        if (selected[index]) {
            header.textContent = selected[index].name;
            if (headerCells[cellIndex]) {
                headerCells[cellIndex].style.display = 'table-cell';
            }
        } else {
            header.textContent = '';
            if (headerCells[cellIndex]) {
                headerCells[cellIndex].style.display = 'none';
            }
        }
    });

    // Find Value King (highest ROI)
    const valueKingIndex = selected.reduce((maxIndex, college, index) => {
        return parseFloat(college.roi) > parseFloat(selected[maxIndex].roi) ? index : maxIndex;
    }, 0);

    // Generate comparison rows
    const comparisonBody = document.getElementById('comparisonBody');
    const metrics = [
        { label: 'Tier', getValue: c => `Tier ${c.tier}`, compare: false },
        { label: 'Location', getValue: c => c.location, compare: false },
        { label: 'Total Fees', getValue: c => formatCurrency(c.fees), compare: true, lowerIsBetter: true },
        { label: 'Average Salary', getValue: c => formatCurrency(c.avgSalary), compare: true, lowerIsBetter: false },
        { label: 'ROI %', getValue: c => `${c.roi}%`, compare: true, lowerIsBetter: false },
        { label: 'Placement Rate', getValue: c => `${c.placementRate}%`, compare: true, lowerIsBetter: false },
        { label: 'Min Percentile Required', getValue: c => `${c.minPercentile}%`, compare: false },
        { label: 'Entrance Exams', getValue: c => c.entranceExams.join(', '), compare: false },
        { label: 'Top Recruiters', getValue: c => c.topRecruiters.join(', '), compare: false },
        { label: 'Break-even Period (Years)', getValue: c => calculateBreakEven(c), compare: true, lowerIsBetter: true }
    ];

    comparisonBody.innerHTML = metrics.map(metric => {
        let row = '<tr>';
        row += `<td><strong>${metric.label}</strong></td>`;
        
        for (let i = 0; i < 3; i++) {
            if (selected[i]) {
                const college = selected[i];
                let cellClass = '';
                
                // Value King highlighting for ROI
                if (metric.label === 'ROI %' && i === valueKingIndex) {
                    cellClass = 'value-king';
                }
                
                row += `<td class="${cellClass}">${metric.getValue(college)}</td>`;
            } else {
                row += '<td style="display: none;"></td>';
            }
        }
        
        row += '</tr>';
        return row;
    }).join('');
}

function calculateBreakEven(college) {
    // Break-even = Total Fees / (Average Salary * 0.75)
    // Assuming 25% for taxes/expenses
    const netSalary = college.avgSalary * 0.75;
    const years = college.fees / netSalary;
    return years.toFixed(2);
}

function formatCurrency(amount) {
    return '₹' + (amount / 100000).toFixed(2) + ' Lakhs';
}
