// ROI Calculator - Break-even Period Calculation
document.addEventListener('DOMContentLoaded', function() {
    const collegeSelect = document.getElementById('collegeSelect');
    
    // Populate college dropdown
    colleges.forEach(college => {
        const option = document.createElement('option');
        option.value = college.id;
        option.textContent = `${college.name} (Fees: ₹${(college.fees/100000).toFixed(2)}L, Salary: ₹${(college.avgSalary/100000).toFixed(2)}L)`;
        collegeSelect.appendChild(option);
    });

    // Handle college selection
    collegeSelect.addEventListener('change', function() {
        if (this.value) {
            const college = colleges.find(c => c.id === parseInt(this.value));
            document.getElementById('totalFees').value = college.fees;
            document.getElementById('avgSalary').value = college.avgSalary;
        }
    });

    // Handle form submission
    document.getElementById('roiCalculatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculateROI();
    });
});

function calculateROI() {
    const totalFees = parseFloat(document.getElementById('totalFees').value);
    const avgSalary = parseFloat(document.getElementById('avgSalary').value);

    if (!totalFees || !avgSalary || totalFees <= 0 || avgSalary <= 0) {
        alert('Please enter valid values for fees and salary.');
        return;
    }

    // Calculate break-even period
    // Formula: Years = Total Fees / (Average Salary × 0.75)
    const netSalary = avgSalary * 0.75; // 25% for taxes/expenses
    const breakEvenYears = totalFees / netSalary;
    
    // Calculate ROI percentage
    const roiPercentage = ((avgSalary - totalFees) / totalFees * 100).toFixed(2);
    
    // Calculate total earnings over 5 years (net)
    const fiveYearEarnings = (avgSalary * 5 * 0.75) - totalFees;
    
    // Calculate total earnings over 10 years (net)
    const tenYearEarnings = (avgSalary * 10 * 0.75) - totalFees;

    // Display results
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <p><strong>Total Fees:</strong> ${formatCurrency(totalFees)}</p>
            <p><strong>Average Salary:</strong> ${formatCurrency(avgSalary)}</p>
            <p><strong>Net Salary (after 25% deduction):</strong> ${formatCurrency(netSalary)}</p>
        </div>
        <div style="padding: 1rem; background: white; border-radius: 0.5rem; margin: 1rem 0;">
            <h4 style="color: #2563eb; margin-bottom: 0.5rem;">Break-even Period</h4>
            <p style="font-size: 1.5rem; font-weight: 700; color: #1e293b;">${breakEvenYears.toFixed(2)} Years</p>
            <p style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem;">
                You will recover your investment in approximately <strong>${Math.ceil(breakEvenYears)} years</strong>
            </p>
        </div>
        <div style="margin-top: 1rem;">
            <p><strong>ROI:</strong> <span style="color: #2563eb; font-weight: 700;">${roiPercentage}%</span></p>
            <p><strong>Net Earnings (5 years):</strong> ${formatCurrency(fiveYearEarnings)}</p>
            <p><strong>Net Earnings (10 years):</strong> ${formatCurrency(tenYearEarnings)}</p>
        </div>
    `;

    document.getElementById('roiResult').style.display = 'block';
    document.getElementById('roiResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formatCurrency(amount) {
    const sign = amount >= 0 ? '' : '-';
    const absAmount = Math.abs(amount);
    if (absAmount >= 10000000) {
        return sign + '₹' + (absAmount / 10000000).toFixed(2) + ' Crores';
    } else if (absAmount >= 100000) {
        return sign + '₹' + (absAmount / 100000).toFixed(2) + ' Lakhs';
    } else {
        return sign + '₹' + absAmount.toLocaleString('en-IN');
    }
}
