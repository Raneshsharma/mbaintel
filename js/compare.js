let compareList = [];

function addToCompare(college) {
  if (compareList.length < 3 && !compareList.includes(college)) {
    compareList.push(college);
    alert(`${college.name} added to compare`);
  }
}
