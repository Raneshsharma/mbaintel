/* =====================================================
   MBAIntel – College Database (NIRF 2025 Based)
   Source: User provided PDF
   ===================================================== */

const colleges = [

  /* ================= TIER I ================= */

  {
    id: 1,
    name: "IIM Ahmedabad",
    tier: "Tier I",
    city: "Ahmedabad",
    state: "Gujarat",
    ownership: "Government",
    fees: 28,
    avgPackage: 31,
    medianPackage: 30,
    exams: ["CAT"],
    bestFor: ["Consulting", "Finance", "Strategy"]
  },
  {
    id: 2,
    name: "IIM Bangalore",
    tier: "Tier I",
    city: "Bangalore",
    state: "Karnataka",
    ownership: "Government",
    fees: 28,
    avgPackage: 32.5,
    medianPackage: 31,
    exams: ["CAT"],
    bestFor: ["Consulting", "Product", "General Management"]
  },
  {
    id: 3,
    name: "IIM Calcutta",
    tier: "Tier I",
    city: "Kolkata",
    state: "West Bengal",
    ownership: "Government",
    fees: 28,
    avgPackage: 30,
    medianPackage: 29,
    exams: ["CAT"],
    bestFor: ["Finance", "Consulting"]
  },
  {
    id: 4,
    name: "XLRI Jamshedpur",
    tier: "Tier I",
    city: "Jamshedpur",
    state: "Jharkhand",
    ownership: "Private",
    fees: 27,
    avgPackage: 28,
    medianPackage: 27,
    exams: ["XAT", "GMAT"],
    bestFor: ["HR", "Consulting"]
  },
  {
    id: 5,
    name: "SPJIMR Mumbai",
    tier: "Tier I",
    city: "Mumbai",
    state: "Maharashtra",
    ownership: "Private",
    fees: 27,
    avgPackage: 31.5,
    medianPackage: 29,
    exams: ["CAT", "XAT", "GMAT"],
    bestFor: ["Operations", "Marketing", "Consulting"]
  },
  {
    id: 6,
    name: "MDI Gurgaon",
    tier: "Tier I",
    city: "Gurgaon",
    state: "Haryana",
    ownership: "Private",
    fees: 28,
    avgPackage: 26,
    medianPackage: 25,
    exams: ["CAT"],
    bestFor: ["Marketing", "Consulting"]
  },
  {
    id: 7,
    name: "IIFT Delhi",
    tier: "Tier I",
    city: "New Delhi",
    state: "Delhi",
    ownership: "Government",
    fees: 24,
    avgPackage: 25,
    medianPackage: 24,
    exams: ["CAT"],
    bestFor: ["International Business", "Trade"]
  },
  {
    id: 8,
    name: "IIM Lucknow",
    tier: "Tier I",
    city: "Lucknow",
    state: "Uttar Pradesh",
    ownership: "Government",
    fees: 22,
    avgPackage: 30,
    medianPackage: 28,
    exams: ["CAT"],
    bestFor: ["Consulting", "Finance"]
  },

  /* ================= TIER II ================= */

  {
    id: 9,
    name: "IMT Ghaziabad",
    tier: "Tier II",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    ownership: "Private",
    fees: 18,
    avgPackage: 14,
    medianPackage: 13,
    exams: ["CAT", "CMAT", "GMAT"],
    bestFor: ["Marketing", "Sales"]
  },
  {
    id: 10,
    name: "TAPMI Manipal",
    tier: "Tier II",
    city: "Manipal",
    state: "Karnataka",
    ownership: "Private",
    fees: 20,
    avgPackage: 13,
    medianPackage: 12,
    exams: ["CAT", "NMAT", "GMAT"],
    bestFor: ["Finance", "Marketing"]
  },
  {
    id: 11,
    name: "IMI Delhi",
    tier: "Tier II",
    city: "New Delhi",
    state: "Delhi",
    ownership: "Private",
    fees: 17,
    avgPackage: 14,
    medianPackage: 13,
    exams: ["CAT", "GMAT", "CMAT"],
    bestFor: ["Finance", "Consulting"]
  },
  {
    id: 12,
    name: "GIM Goa",
    tier: "Tier II",
    city: "Goa",
    state: "Goa",
    ownership: "Private",
    fees: 22,
    avgPackage: 15,
    medianPackage: 14,
    exams: ["CAT", "GMAT", "NMAT"],
    bestFor: ["Consulting", "IT"]
  },
  {
    id: 13,
    name: "Great Lakes Chennai",
    tier: "Tier II",
    city: "Chennai",
    state: "Tamil Nadu",
    ownership: "Private",
    fees: 18,
    avgPackage: 15,
    medianPackage: 14,
    exams: ["CAT", "GMAT"],
    bestFor: ["Analytics", "Product"]
  },
  {
    id: 14,
    name: "FORE School of Management",
    tier: "Tier II",
    city: "New Delhi",
    state: "Delhi",
    ownership: "Private",
    fees: 15,
    avgPackage: 14,
    medianPackage: 13,
    exams: ["CAT", "XAT", "CMAT"],
    bestFor: ["Marketing", "Finance"]
  },
  {
    id: 15,
    name: "KJ Somaiya Institute of Management",
    tier: "Tier II",
    city: "Mumbai",
    state: "Maharashtra",
    ownership: "Private",
    fees: 20,
    avgPackage: 15,
    medianPackage: 14,
    exams: ["CAT", "XAT", "GMAT"],
    bestFor: ["Marketing", "Operations"]
  },

  /* ================= TIER III ================= */

  {
    id: 16,
    name: "Jaipuria Institute of Management, Noida",
    tier: "Tier III",
    city: "Noida",
    state: "Uttar Pradesh",
    ownership: "Private",
    fees: 12,
    avgPackage: 7,
    medianPackage: 6.5,
    exams: ["CAT", "CMAT"],
    bestFor: ["General Management"]
  },
  {
    id: 17,
    name: "BIMTECH Greater Noida",
    tier: "Tier III",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    ownership: "Private",
    fees: 18,
    avgPackage: 8,
    medianPackage: 7,
    exams: ["CAT", "XAT", "CMAT"],
    bestFor: ["Finance", "Marketing"]
  },
  {
    id: 18,
    name: "Christ University",
    tier: "Tier III",
    city: "Bangalore",
    state: "Karnataka",
    ownership: "Private",
    fees: 10,
    avgPackage: 7,
    medianPackage: 6,
    exams: ["CAT", "CMAT"],
    bestFor: ["General Management"]
  },
  {
    id: 19,
    name: "UPES Dehradun",
    tier: "Tier III",
    city: "Dehradun",
    state: "Uttarakhand",
    ownership: "Private",
    fees: 16,
    avgPackage: 6,
    medianPackage: 5.5,
    exams: ["CAT", "CMAT", "XAT"],
    bestFor: ["Operations", "Logistics"]
  },
  {
    id: 20,
    name: "Amity University Noida",
    tier: "Tier III",
    city: "Noida",
    state: "Uttar Pradesh",
    ownership: "Private",
    fees: 9,
    avgPackage: 6,
    medianPackage: 5,
    exams: ["CMAT"],
    bestFor: ["General Management"]
  }

  /* More colleges can be appended without changing logic */
];
