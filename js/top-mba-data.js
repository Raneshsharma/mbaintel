const topMbaStates = [
  {
    id: 'delhi',
    name: 'Delhi / NCR',
    description: 'Highly competitive public and private universities with strong consulting and finance placements.',
    colleges: [
      {
        id: 'fms-delhi',
        name: 'Faculty of Management Studies (FMS Delhi)',
        city: 'New Delhi',
        flagshipProgram: 'MBA Full-Time',
        avgCtc: '₹34–36 LPA (recent batches)',
        fees: '≈ ₹2–3 Lakh',
        batchSize: '220–250 students',
        batchProfile: 'Balanced mix of freshers and candidates with 1–4 years of experience.',
        highlights: [
          'Part of University of Delhi with very high ROI because of low fees.',
          'Strong recruitment in consulting, BFSI, FMCG, and technology roles.',
          'Rigorous academic focus with case-based learning and student-led clubs.'
        ]
      },
      {
        id: 'mdi-gurgaon',
        name: 'Management Development Institute (MDI Gurgaon)',
        city: 'Gurgaon',
        flagshipProgram: 'PGDM',
        avgCtc: '₹25–27 LPA (recent batches)',
        fees: '≈ ₹24–26 Lakh',
        batchSize: '350–400 students across flagship programs',
        batchProfile: 'High proportion of candidates with prior work experience.',
        highlights: [
          'Located in a major corporate hub with strong industry interface.',
          'Known for general management, consulting, and marketing roles.',
          'Active alumni network across leading Indian and global companies.'
        ]
      },
      {
        id: 'iift-delhi',
        name: 'Indian Institute of Foreign Trade (IIFT Delhi)',
        city: 'New Delhi',
        flagshipProgram: 'MBA in International Business',
        avgCtc: '₹25–27 LPA (recent batches)',
        fees: '≈ ₹22–24 Lakh',
        batchSize: '250–300 students',
        batchProfile: 'Mix of engineers, commerce, and economics graduates.',
        highlights: [
          'Specialised focus on international business, trade, and export management.',
          'Strong placements in trade, analytics, consulting, and global roles.',
          'Government of India institute with strong policy and research exposure.'
        ]
      },
      {
        id: 'imi-delhi',
        name: 'International Management Institute (IMI New Delhi)',
        city: 'New Delhi',
        flagshipProgram: 'PGDM',
        avgCtc: '₹15–17 LPA (recent batches)',
        fees: '≈ ₹19–21 Lakh',
        batchSize: '250–300 students across programs',
        batchProfile: 'Diverse academic backgrounds with strong corporate exposure.',
        highlights: [
          'Corporate-sponsored institute with strong industry connect.',
          'Good mix of roles in marketing, finance, and analytics.',
          'Central Delhi campus with active corporate engagement and guest sessions.'
        ]
      },
      {
        id: 'fore-delhi',
        name: 'FORE School of Management',
        city: 'New Delhi',
        flagshipProgram: 'PGDM (General Management)',
        avgCtc: '₹14–16 LPA (recent batches)',
        fees: '≈ ₹19–21 Lakh',
        batchSize: '300+ students across flagship programs',
        batchProfile: 'Students from engineering, commerce, and arts backgrounds.',
        highlights: [
          'Known for marketing, finance, and analytics specialisations.',
          'Located in South Delhi with strong corporate accessibility.',
          'Student-driven committees and industry-oriented live projects.'
        ]
      },
      {
        id: 'lbsim-delhi',
        name: 'Lal Bahadur Shastri Institute of Management (LBSIM)',
        city: 'New Delhi',
        flagshipProgram: 'PGDM (General)',
        avgCtc: '₹11–13 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '250–300 students',
        batchProfile: 'Blend of freshers and candidates with IT and finance backgrounds.',
        highlights: [
          'Focus on value-based management education and discipline.',
          'Good presence in BFSI, IT services, and analytics roles.',
          'Modern campus in Dwarka with updated classrooms and labs.'
        ]
      },
      {
        id: 'imt-ghaziabad',
        name: 'IMT Ghaziabad',
        city: 'Ghaziabad',
        flagshipProgram: 'PGDM (General)',
        avgCtc: '₹17–19 LPA (recent batches)',
        fees: '≈ ₹21–23 Lakh',
        batchSize: '400+ students across programs',
        batchProfile: 'Strong representation of engineers and commerce graduates.',
        highlights: [
          'Known for marketing and sales roles with strong corporate connect.',
          'Robust alumni base in FMCG, consumer tech, and BFSI.',
          'Intensive industry projects and case-based pedagogy.'
        ]
      },
      {
        id: 'dms-iit-delhi',
        name: 'Department of Management Studies, IIT Delhi (DMS IIT Delhi)',
        city: 'New Delhi',
        flagshipProgram: 'MBA',
        avgCtc: '₹22–25 LPA (recent batches)',
        fees: '≈ ₹11–13 Lakh',
        batchSize: '110–150 students',
        batchProfile: 'High academic credentials with strong quantitative skills.',
        highlights: [
          'Technology-focused MBA inside a top IIT campus.',
          'Good mix of roles in consulting, analytics, product, and tech management.',
          'Access to IIT Delhi ecosystem, incubators, and research labs.'
        ]
      },
      {
        id: 'iim-rohtak',
        name: 'Indian Institute of Management Rohtak',
        city: 'Rohtak (NCR)',
        flagshipProgram: 'PGP/MBA',
        avgCtc: '₹18–20 LPA (recent batches)',
        fees: '≈ ₹18–20 Lakh',
        batchSize: '350+ students',
        batchProfile: 'Pan-India intake with increasing diversity in background and work experience.',
        highlights: [
          'Established IIM with growing brand in consulting and BFSI.',
          'Modern campus with strong emphasis on analytics and general management.',
          'Multiple integrated programs and focus on research and case studies.'
        ]
      },
      {
        id: 'iim-kashipur',
        name: 'Indian Institute of Management Kashipur',
        city: 'Kashipur (extended NCR)',
        flagshipProgram: 'MBA',
        avgCtc: '₹16–17 LPA (recent batches)',
        fees: '≈ ₹16–18 Lakh',
        batchSize: '280–320 students',
        batchProfile: 'Students from engineering, commerce, and science disciplines.',
        highlights: [
          'Young IIM with steadily improving placements and recruiter base.',
          'Focus on operations, analytics, and general management roles.',
          'Residential campus with vibrant student-run clubs and committees.'
        ]
      }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    description: 'Mumbai and Pune together host several top-tier MBA institutes with strong industry linkages.',
    colleges: [
      {
        id: 'jbims-mumbai',
        name: 'Jamnalal Bajaj Institute of Management Studies (JBIMS)',
        city: 'Mumbai',
        flagshipProgram: 'MMS',
        avgCtc: '₹28–30 LPA (recent batches)',
        fees: 'Relatively low fees compared to peer institutes',
        batchSize: '150–160 students',
        batchProfile: 'High CAT/MAH-CET percentiles with strong academic records.',
        highlights: [
          'Known as the CEO factory with deep alumni presence in leadership roles.',
          'Located in South Mumbai with excellent corporate access.',
          'Strong placements in investment banking, consulting, and corporate finance.'
        ]
      },
      {
        id: 'spjimr-mumbai',
        name: 'SPJIMR Mumbai',
        city: 'Mumbai',
        flagshipProgram: 'PGDM',
        avgCtc: '₹33–35 LPA (recent batches)',
        fees: '≈ ₹22–24 Lakh',
        batchSize: '240–260 students',
        batchProfile: 'Carefully profiled candidates with strong values and leadership potential.',
        highlights: [
          'Pedagogy built around values, experiential learning, and specialisation tracks.',
          'Excellent placements in consulting, strategy, and product roles.',
          'Global immersion, social internships, and strong alumni network.'
        ]
      },
      {
        id: 'nmims-mumbai',
        name: 'NMIMS School of Business Management (Mumbai)',
        city: 'Mumbai',
        flagshipProgram: 'MBA (Core)',
        avgCtc: '₹20–22 LPA (recent batches)',
        fees: '≈ ₹23–25 Lakh',
        batchSize: '600+ students across programs',
        batchProfile: 'Large, diverse batch with representation from many academic streams.',
        highlights: [
          'Strong corporate connect in Mumbai across sectors.',
          'Multiple specialised MBA tracks beyond core program.',
          'Good brand recognition and urban campus with modern facilities.'
        ]
      },
      {
        id: 'iim-mumbai',
        name: 'Indian Institute of Management Mumbai (formerly NITIE)',
        city: 'Mumbai',
        flagshipProgram: 'MBA',
        avgCtc: '₹25–27 LPA (recent batches)',
        fees: '≈ ₹20–22 Lakh',
        batchSize: '400+ students across programs',
        batchProfile: 'Strong quantitative and operations-focused profile.',
        highlights: [
          'Legacy strength in operations, supply chain, and analytics.',
          'Upgraded to IIM status with expanding program portfolio.',
          'Robust recruiter base in manufacturing, e‑commerce, and consulting.'
        ]
      },
      {
        id: 'sjmsom-iitb',
        name: 'Shailesh J. Mehta School of Management, IIT Bombay',
        city: 'Mumbai',
        flagshipProgram: 'MBA',
        avgCtc: '₹25–27 LPA (recent batches)',
        fees: '≈ ₹10–12 Lakh',
        batchSize: '120–150 students',
        batchProfile: 'Tech-oriented candidates with strong analytical aptitude.',
        highlights: [
          'Management school within IIT Bombay campus with strong tech integration.',
          'Good placements in consulting, product management, and analytics.',
          'Access to IIT Bombay\'s research, entrepreneurship, and tech ecosystem.'
        ]
      },
      {
        id: 'sibm-pune',
        name: 'Symbiosis Institute of Business Management (SIBM Pune)',
        city: 'Pune',
        flagshipProgram: 'MBA',
        avgCtc: '₹24–26 LPA (recent batches)',
        fees: '≈ ₹22–24 Lakh',
        batchSize: '230–250 students',
        batchProfile: 'Pan-India intake with strong representation from engineers and commerce graduates.',
        highlights: [
          'Leading private B-school with strong brand recall and campus life.',
          'Placements across FMCG, consulting, BFSI, and technology.',
          'Hilltop campus with vibrant student culture and leadership roles.'
        ]
      },
      {
        id: 'scmhrd-pune',
        name: 'SCMHRD Pune',
        city: 'Pune',
        flagshipProgram: 'MBA',
        avgCtc: '₹19–21 LPA (recent batches)',
        fees: '≈ ₹22–24 Lakh',
        batchSize: '250–300 students',
        batchProfile: 'Students with varied academic backgrounds and work experience.',
        highlights: [
          'Strong reputation in HR, analytics, and general management.',
          'Good recruiter base in consulting, IT, and BFSI.',
          'Focus on leadership development and student-driven initiatives.'
        ]
      },
      {
        id: 'welingkar-mumbai',
        name: 'Welingkar Institute of Management (WeSchool Mumbai)',
        city: 'Mumbai',
        flagshipProgram: 'PGDM',
        avgCtc: '₹11–13 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '400+ students across programs',
        batchProfile: 'Diverse intake with focus on innovation and design thinking.',
        highlights: [
          'Known for innovation, design thinking, and industry-oriented projects.',
          'Good corporate connect in Mumbai across multiple sectors.',
          'Wide choice of specialisations and experiential learning modules.'
        ]
      },
      {
        id: 'pumba-pune',
        name: 'PUMBA (Department of Management Sciences, Savitribai Phule Pune University)',
        city: 'Pune',
        flagshipProgram: 'MBA',
        avgCtc: '₹8–10 LPA (recent batches)',
        fees: 'Moderate, university-structure fees',
        batchSize: '120–180 students',
        batchProfile: 'Students primarily from Maharashtra with varied academic backgrounds.',
        highlights: [
          'Public university department with strong regional brand.',
          'Good ROI because of moderate fee structure.',
          'Balanced placements in marketing, finance, and operations roles.'
        ]
      },
      {
        id: 'nirma-ahmedabad',
        name: 'Institute of Management, Nirma University',
        city: 'Ahmedabad',
        flagshipProgram: 'MBA',
        avgCtc: '₹10–11 LPA (recent batches)',
        fees: '≈ ₹12–14 Lakh',
        batchSize: '240–260 students',
        batchProfile: 'Mix of freshers and candidates with 1–3 years of experience.',
        highlights: [
          'Private university B-school with industry-focused curriculum.',
          'Placements in manufacturing, services, and BFSI across West India.',
          'Modern campus with emphasis on case-based and project-based learning.'
        ]
      }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    description: 'Home to IIM Bangalore and several reputed private B-schools with strong tech and startup exposure.',
    colleges: [
      {
        id: 'iim-bangalore',
        name: 'Indian Institute of Management Bangalore (IIMB)',
        city: 'Bangalore',
        flagshipProgram: 'PGP/MBA',
        avgCtc: '₹35–37 LPA (recent batches)',
        fees: '≈ ₹24–26 Lakh',
        batchSize: '500+ students across flagship programs',
        batchProfile: 'Highly competitive national intake with strong work experience profile.',
        highlights: [
          'One of India\'s top management institutes with global recognition.',
          'Exceptional placements in consulting, PE/VC, product, and leadership roles.',
          'Lush stone campus with rich academic and entrepreneurial ecosystem.'
        ]
      },
      {
        id: 't-a-p-m-i',
        name: 'T. A. Pai Management Institute (TAPMI)',
        city: 'Manipal',
        flagshipProgram: 'PGDM',
        avgCtc: '₹14–16 LPA (recent batches)',
        fees: '≈ ₹17–19 Lakh',
        batchSize: '350+ students',
        batchProfile: 'Diverse mix of freshers and experienced candidates.',
        highlights: [
          'AACSB accredited institute with strong corporate recognition.',
          'Special strength in finance, marketing, and analytics.',
          'Residential campus with strong focus on peer learning and live projects.'
        ]
      },
      {
        id: 'christ-bangalore',
        name: 'Christ University Institute of Management',
        city: 'Bangalore',
        flagshipProgram: 'MBA',
        avgCtc: '₹9–11 LPA (recent batches)',
        fees: '≈ ₹8–10 Lakh',
        batchSize: 'Large multi-campus intake',
        batchProfile: 'Students from across India with varied disciplines.',
        highlights: [
          'Popular choice for candidates seeking Bangalore exposure at moderate fees.',
          'Good placements in services, IT, and BFSI sectors.',
          'Strong emphasis on discipline, academics, and co-curricular activities.'
        ]
      },
      {
        id: 'xime-bangalore',
        name: 'XIME Bangalore',
        city: 'Bangalore',
        flagshipProgram: 'PGDM',
        avgCtc: '₹8–9 LPA (recent batches)',
        fees: '≈ ₹11–13 Lakh',
        batchSize: '180–240 students across campuses',
        batchProfile: 'Students with interest in general management and marketing roles.',
        highlights: [
          'Old private B-school with strong alumni presence in corporates.',
          'Balanced placements in marketing, HR, operations, and systems.',
          'Industry-oriented pedagogy with guest lectures and live projects.'
        ]
      },
      {
        id: 'jagsom-bangalore',
        name: 'Jagdish Sheth School of Management (JAGSoM)',
        city: 'Bangalore',
        flagshipProgram: 'PGDM',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Students inclined towards new-age roles and specialisations.',
        highlights: [
          'Known for new-age specialisations and global collaborations.',
          'Focus on marketing, analytics, and digital business.',
          'Project-based curriculum with industry mentoring.'
        ]
      },
      {
        id: 'alliance-bangalore',
        name: 'Alliance School of Business, Alliance University',
        city: 'Bangalore',
        flagshipProgram: 'MBA',
        avgCtc: '₹8–10 LPA (recent batches)',
        fees: '≈ ₹13–15 Lakh',
        batchSize: 'Large multi-batch intake',
        batchProfile: 'Students from across India with varied academic background.',
        highlights: [
          'Private university with modern campus and infrastructure.',
          'Placements across IT services, BFSI, and emerging sectors.',
          'Focus on soft skills, corporate interactions, and internships.'
        ]
      },
      {
        id: 'isbr-bangalore',
        name: 'ISBR Business School',
        city: 'Bangalore',
        flagshipProgram: 'PGDM',
        avgCtc: '₹7–8 LPA (recent batches)',
        fees: '≈ ₹10–12 Lakh',
        batchSize: 'Medium-sized batch with diverse backgrounds.',
        batchProfile: 'Fresh graduates and early professionals seeking Bangalore exposure.',
        highlights: [
          'Located in Electronic City with access to tech ecosystem.',
          'Industry-oriented curriculum and corporate interactions.',
          'Exposure to live projects and internships.'
        ]
      },
      {
        id: 'nl-dalmia',
        name: 'N. L. Dalmia Institute of Management Studies and Research',
        city: 'Mumbai',
        flagshipProgram: 'PGDM/MMS',
        avgCtc: '₹8–9 LPA (recent batches)',
        fees: 'Moderate fee structure',
        batchSize: 'Medium-sized batch',
        batchProfile: 'Students focused on finance and analytics roles.',
        highlights: [
          'Strong finance-oriented curriculum and recruiter base.',
          'Good ROI with moderate fees and decent placements.',
          'Located in Mumbai with proximity to corporate hubs.'
        ]
      },
      {
        id: 'tapmi-blr-analytics',
        name: 'TAPMI Bengaluru Campus (Analytics and HR focused programs)',
        city: 'Bangalore',
        flagshipProgram: 'Specialised PGDM programs',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹17–19 Lakh',
        batchSize: 'Focused smaller cohorts',
        batchProfile: 'Candidates with strong interest in analytics and HR.',
        highlights: [
          'Specialised analytics and HR programs with corporate tie-ups.',
          'Curriculum aligned to data-driven and people-centric roles.',
          'Backed by TAPMI brand and corporate relationships.'
        ]
      }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    description: 'Chennai, Trichy, Coimbatore, and Vellore host high-ROI MBA options with strong industry links.',
    colleges: [
      {
        id: 'iim-trichy',
        name: 'Indian Institute of Management Tiruchirappalli (IIM Trichy)',
        city: 'Tiruchirappalli',
        flagshipProgram: 'MBA/PGPM',
        avgCtc: '₹17–20 LPA (recent batches)',
        fees: '≈ ₹19–21 Lakh',
        batchSize: '250–300 students across flagship programs',
        batchProfile: 'Highly competitive CAT percentiles with a healthy share of work-ex candidates.',
        highlights: [
          'Top IIM in South India with strong consulting and general management placements.',
          'Option to specialise in areas like strategy, analytics, finance, operations, and HR.',
          'Modern residential campus with active student committees and corporate immersion.'
        ]
      },
      {
        id: 'doms-iit-madras',
        name: 'Department of Management Studies, IIT Madras (DoMS IIT Madras)',
        city: 'Chennai',
        flagshipProgram: 'MBA',
        avgCtc: '₹15–17 LPA (recent batches)',
        fees: '≈ ₹9–11 Lakh',
        batchSize: '100–150 students',
        batchProfile: 'Strong engineering and quantitative backgrounds with interest in tech-led roles.',
        highlights: [
          'MBA program inside a top IIT with close integration of technology and management.',
          'Good mix of roles in consulting, product management, analytics, and operations.',
          'Access to IIT Madras research ecosystem, incubation centre, and alumni network.'
        ]
      },
      {
        id: 'great-lakes-chennai',
        name: 'Great Lakes Institute of Management, Chennai',
        city: 'Chennai',
        flagshipProgram: 'PGDM / PGPM',
        avgCtc: '₹17–20 LPA (recent batches)',
        fees: '≈ ₹17–20 Lakh',
        batchSize: '300+ students across programs',
        batchProfile: 'Blend of freshers and professionals with 1–4 years of experience.',
        highlights: [
          'Known for analytics, consulting, and technology-focused management roles.',
          'Intensive one-year and two-year programs with strong industry interface.',
          'Campus emphasises case-based pedagogy, leadership labs, and corporate mentoring.'
        ]
      },
      {
        id: 'liba-chennai',
        name: 'Loyola Institute of Business Administration (LIBA)',
        city: 'Chennai',
        flagshipProgram: 'PGDM',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹13–15 Lakh',
        batchSize: '200–250 students',
        batchProfile: 'Diverse intake with focus on ethics, values, and leadership.',
        highlights: [
          'Jesuit management institute with strong emphasis on ethics and sustainability.',
          'Good placements in marketing, finance, and analytics roles across sectors.',
          'Located in the heart of Chennai with excellent corporate connectivity.'
        ]
      },
      {
        id: 'bim-trichy',
        name: 'Bharathidasan Institute of Management (BIM Trichy)',
        city: 'Tiruchirappalli',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹11–13 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '230–260 students',
        batchProfile: 'Students with strong academic records and interest in analytics and operations.',
        highlights: [
          'Legacy B-school with close collaboration with large public sector and industrial organisations.',
          'Strengths in operations, analytics, and general management roles.',
          'Case-driven curriculum with focus on problem-solving and data-driven decisions.'
        ]
      },
      {
        id: 'amrita-coimbatore',
        name: 'Amrita School of Business, Coimbatore',
        city: 'Coimbatore',
        flagshipProgram: 'MBA',
        avgCtc: '₹9–11 LPA (recent batches)',
        fees: '≈ ₹12–14 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Pan-India intake from engineering, commerce, and science backgrounds.',
        highlights: [
          'Part of Amrita Vishwa Vidyapeetham with multi-campus presence and accreditations.',
          'Placements across IT services, analytics, manufacturing, and BFSI sectors.',
          'Focus on values-based education, social projects, and global exposure.'
        ]
      },
      {
        id: 'anna-university-doms',
        name: 'Department of Management Studies, Anna University',
        city: 'Chennai',
        flagshipProgram: 'MBA',
        avgCtc: '₹6–9 LPA (recent batches)',
        fees: 'Low, university-structured fees',
        batchSize: '150–200 students',
        batchProfile: 'Good mix of engineering and commerce graduates from Tamil Nadu and beyond.',
        highlights: [
          'Public university department with strong regional brand and affordable fees.',
          'Good ROI with moderate fees supported by decent placement outcomes.',
          'Curriculum aligned to core management skills and local industry requirements.'
        ]
      },
      {
        id: 'nit-trichy-mba',
        name: 'Department of Management Studies, NIT Tiruchirappalli',
        city: 'Tiruchirappalli',
        flagshipProgram: 'MBA',
        avgCtc: '₹8–10 LPA (recent batches)',
        fees: '≈ ₹3–4 Lakh',
        batchSize: '100–120 students',
        batchProfile: 'Students with strong quantitative skills and interest in operations and analytics.',
        highlights: [
          'MBA program within a premier NIT with good technical-management blend.',
          'Placements in IT services, consulting, manufacturing, and BFSI.',
          'Campus environment encourages research projects and corporate interactions.'
        ]
      },
      {
        id: 'psg-im-coimbatore',
        name: 'PSG Institute of Management',
        city: 'Coimbatore',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹7–9 LPA (recent batches)',
        fees: '≈ ₹6–8 Lakh',
        batchSize: '200–250 students',
        batchProfile: 'Regional diversity with many candidates from engineering and commerce.',
        highlights: [
          'Part of the PSG group with strong industry connect in Tamil Nadu.',
          'Balanced placements in marketing, operations, and finance roles.',
          'Known for disciplined campus culture and applied learning.'
        ]
      },
      {
        id: 'vit-vellore-mba',
        name: 'VIT Business School, Vellore',
        city: 'Vellore',
        flagshipProgram: 'MBA',
        avgCtc: '₹7–9 LPA (recent batches)',
        fees: '≈ ₹7–9 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Students aiming for roles in IT services, analytics, and marketing.',
        highlights: [
          'Business school of VIT University with strong IT and analytics orientation.',
          'Industry-linked curriculum with focus on technology-enabled management.',
          'Opportunities for projects and internships through VIT\'s corporate network.'
        ]
      }
    ]
  },
  {
    id: 'telangana',
    name: 'Telangana',
    description: 'Hyderabad-led MBA ecosystem with ISB and several strong private institutes.',
    colleges: [
      {
        id: 'isb-hyderabad',
        name: 'Indian School of Business (ISB Hyderabad)',
        city: 'Hyderabad',
        flagshipProgram: 'PGP in Management (1-year)',
        avgCtc: '₹30–35 LPA (recent batches)',
        fees: '≈ ₹35–40 Lakh',
        batchSize: '800+ across Hyderabad and Mohali',
        batchProfile: 'High-quality work-ex professionals from India and abroad.',
        highlights: [
          'Globally ranked 1-year MBA equivalent with very strong alumni network.',
          'Excellent placements in consulting, product, leadership, and tech roles.',
          'Intense peer learning, international immersion, and practitioner-led courses.'
        ]
      },
      {
        id: 'ibs-hyderabad',
        name: 'ICFAI Business School (IBS Hyderabad)',
        city: 'Hyderabad',
        flagshipProgram: 'MBA/PGPM',
        avgCtc: '₹9–11 LPA (recent batches)',
        fees: '≈ ₹16–18 Lakh',
        batchSize: '1000+ students across programs',
        batchProfile: 'Large, diverse class with candidates from all parts of India.',
        highlights: [
          'One of the largest private B-schools with wide recruiter base.',
          'Specialisations in marketing, finance, HR, operations, and analytics.',
          'Strong focus on case pedagogy and continuous evaluation.'
        ]
      },
      {
        id: 'manage-hyderabad',
        name: 'MANAGE Hyderabad (National Institute of Agricultural Extension Management)',
        city: 'Hyderabad',
        flagshipProgram: 'PGDM (Agri-Business Management)',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹8–10 Lakh',
        batchSize: '120–180 students',
        batchProfile: 'Students interested in agri-business, food, and rural management.',
        highlights: [
          'Specialised agri-business PGDM with strong industry and rural sector linkages.',
          'Placements with agribusiness, FMCG, rural finance, and development organisations.',
          'Curriculum blends core MBA with agriculture, supply chain, and rural marketing.'
        ]
      },
      {
        id: 'imt-hyderabad',
        name: 'IMT Hyderabad',
        city: 'Hyderabad',
        flagshipProgram: 'PGDM',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹15–17 Lakh',
        batchSize: '300+ students',
        batchProfile: 'Students with interest in analytics, finance, and marketing.',
        highlights: [
          'Part of the IMT group with growing brand in South India.',
          'Corporate-focused curriculum and strong emphasis on industry projects.',
          'Modern residential campus on the outskirts of Hyderabad.'
        ]
      },
      {
        id: 'sibm-hyderabad',
        name: 'Symbiosis Institute of Business Management (SIBM Hyderabad)',
        city: 'Hyderabad',
        flagshipProgram: 'MBA',
        avgCtc: '₹9–11 LPA (recent batches)',
        fees: '≈ ₹16–18 Lakh',
        batchSize: '200–250 students',
        batchProfile: 'Candidates from diverse academic and regional backgrounds.',
        highlights: [
          'Symbiosis group institute with focus on holistic development.',
          'Placements largely in services, IT, BFSI, and consulting support roles.',
          'Residential campus with strong emphasis on student-driven activities.'
        ]
      },
      {
        id: 'vjim-hyderabad',
        name: 'Vignana Jyothi Institute of Management (VJIM Hyderabad)',
        city: 'Hyderabad',
        flagshipProgram: 'PGDM',
        avgCtc: '₹7–8.5 LPA (recent batches)',
        fees: '≈ ₹8–10 Lakh',
        batchSize: '180–240 students',
        batchProfile: 'Students targeting middle-management roles across sectors.',
        highlights: [
          'Old private B-school in Hyderabad with stable recruiter relationships.',
          'Balanced curriculum covering core management and emerging areas.',
          'Emphasis on soft skills, PDP, and internships.'
        ]
      },
      {
        id: 'nmims-hyderabad',
        name: 'NMIMS Hyderabad (School of Business Management)',
        city: 'Hyderabad',
        flagshipProgram: 'MBA',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Students from engineering, commerce, and science streams.',
        highlights: [
          'Hyderabad campus of NMIMS with growing corporate visibility.',
          'Curriculum aligned to NMIMS core strengths in marketing and finance.',
          'Access to pan-India NMIMS alumni and recruiter ecosystem.'
        ]
      },
      {
        id: 'gitam-hbs-hyderabad',
        name: 'GITAM Hyderabad Business School',
        city: 'Hyderabad',
        flagshipProgram: 'MBA',
        avgCtc: '₹6–8 LPA (recent batches)',
        fees: '≈ ₹8–10 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Regional mix of students aiming for corporate roles in South India.',
        highlights: [
          'Part of GITAM University with focus on practical business education.',
          'Placements primarily in IT services, BFSI, and emerging sectors.',
          'Case-based teaching with emphasis on communication and teamwork.'
        ]
      },
      {
        id: 'ipe-hyderabad',
        name: 'Institute of Public Enterprise (IPE Hyderabad)',
        city: 'Hyderabad',
        flagshipProgram: 'PGDM',
        avgCtc: '₹7–8.5 LPA (recent batches)',
        fees: '≈ ₹10–12 Lakh',
        batchSize: '250–300 students',
        batchProfile: 'Students interested in public policy, finance, and general management.',
        highlights: [
          'Legacy institute known for research in public enterprises and policy.',
          'Offers multiple PGDM specialisations including finance, marketing, and HR.',
          'Industry, public sector, and government-linked projects enrich learning.'
        ]
      },
      {
        id: 'auroras-bschool-hyderabad',
        name: 'Aurora’s Business School, Hyderabad',
        city: 'Hyderabad',
        flagshipProgram: 'PGDM',
        avgCtc: '₹5–7 LPA (recent batches)',
        fees: '≈ ₹6–8 Lakh',
        batchSize: '120–180 students',
        batchProfile: 'Primarily fresh graduates from commerce, engineering, and sciences.',
        highlights: [
          'Focus on affordable management education with practical exposure.',
          'Placements in entry-level roles across sales, operations, and services.',
          'Emphasis on communication, aptitude building, and mentorship.'
        ]
      }
    ]
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    description: 'Kolkata and Kharagpur host top MBA options led by IIM Calcutta and VGSOM.',
    colleges: [
      {
        id: 'iim-calcutta',
        name: 'Indian Institute of Management Calcutta (IIM Calcutta)',
        city: 'Kolkata',
        flagshipProgram: 'MBA/PGP',
        avgCtc: '₹30–34 LPA (recent batches)',
        fees: '≈ ₹26–28 Lakh',
        batchSize: '450–500 students',
        batchProfile: 'Among the most competitive MBA cohorts in India with strong work-ex.',
        highlights: [
          'Top-ranked Indian B-school with global accreditations and strong brand.',
          'Outstanding placements in strategy consulting, finance, and leadership roles.',
          'Iconic campus with rich peer learning, alumni connects, and global exposure.'
        ]
      },
      {
        id: 'iift-kolkata',
        name: 'Indian Institute of Foreign Trade (IIFT Kolkata)',
        city: 'Kolkata',
        flagshipProgram: 'MBA (International Business)',
        avgCtc: '₹25–28 LPA (recent batches)',
        fees: '≈ ₹21–23 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Students focused on trade, analytics, and global corporate roles.',
        highlights: [
          'Kolkata campus of IIFT with dedicated focus on international business.',
          'Strong placements in trade finance, consulting, analytics, and global roles.',
          'Curriculum blends core MBA with trade, economics, and analytics.'
        ]
      },
      {
        id: 'vg-som-iit-kharagpur',
        name: 'Vinod Gupta School of Management, IIT Kharagpur (VGSoM)',
        city: 'Kharagpur',
        flagshipProgram: 'MBA',
        avgCtc: '₹20–23 LPA (recent batches)',
        fees: '≈ ₹10–11 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Tech-strong batch with high quantitative and analytical skills.',
        highlights: [
          'MBA program at IIT Kharagpur with strong ROI and brand.',
          'Placements across consulting, analytics, product, and operations roles.',
          'Close integration with engineering departments and research labs.'
        ]
      },
      {
        id: 'imi-kolkata',
        name: 'International Management Institute (IMI Kolkata)',
        city: 'Kolkata',
        flagshipProgram: 'PGDM',
        avgCtc: '₹9–10 LPA (recent batches)',
        fees: '≈ ₹13–15 Lakh',
        batchSize: '180–220 students',
        batchProfile: 'Students from varied academic backgrounds targeting corporate careers.',
        highlights: [
          'Part of the IMI group with good corporate linkages in East India.',
          'Placements largely in IT services, analytics, BFSI, and consulting support.',
          'Focus on case discussions, live projects, and industry talks.'
        ]
      },
      {
        id: 'iiswbm-kolkata',
        name: 'Indian Institute of Social Welfare and Business Management (IISWBM)',
        city: 'Kolkata',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹6–8 LPA (recent batches)',
        fees: 'Moderate, university-linked fees',
        batchSize: '150–200 students',
        batchProfile: 'Students with interest in business, social sector, and public systems.',
        highlights: [
          'One of India’s oldest management institutes with strong legacy.',
          'Affordable fees with reasonable placement outcomes and strong alumni in Kolkata.',
          'Programs that combine management with social welfare and public policy dimensions.'
        ]
      },
      {
        id: 'cbs-kolkata',
        name: 'Calcutta Business School',
        city: 'Kolkata',
        flagshipProgram: 'PGDM',
        avgCtc: '₹6–7.5 LPA (recent batches)',
        fees: '≈ ₹7–8 Lakh',
        batchSize: '120–180 students',
        batchProfile: 'Fresh graduates targeting entry-level corporate roles in East India.',
        highlights: [
          'Residential B-school on the outskirts of Kolkata with industry-linked curriculum.',
          'Placements in BFSI, IT services, and emerging sectors.',
          'Emphasis on soft skills, communication, and grooming.'
        ]
      },
      {
        id: 'mdi-murshidabad',
        name: 'MDI Murshidabad',
        city: 'Murshidabad',
        flagshipProgram: 'PGDM',
        avgCtc: '₹11–13 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '180–240 students',
        batchProfile: 'Students from diverse academic streams and regions.',
        highlights: [
          'Offshoot campus of MDI with growing recruiter base and brand.',
          'Curriculum aligned to flagship Gurgaon campus with local adaptations.',
          'Residential campus with emphasis on holistic development and clubs.'
        ]
      },
      {
        id: 'iem-kolkata-mba',
        name: 'Institute of Engineering and Management (IEM Kolkata) – MBA/PGDM',
        city: 'Kolkata',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹5–7 LPA (recent batches)',
        fees: '≈ ₹5–7 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Engineers and commerce graduates targeting IT and service roles.',
        highlights: [
          'Known engineering and management institute with strong regional brand.',
          'Decent ROI with moderate fees and steady placements.',
          'Emphasis on technical plus managerial skills and industry projects.'
        ]
      },
      {
        id: 'techno-india-mba-kolkata',
        name: 'Techno India University – School of Management',
        city: 'Kolkata',
        flagshipProgram: 'MBA',
        avgCtc: '₹4.5–6 LPA (recent batches)',
        fees: '≈ ₹3–5 Lakh',
        batchSize: 'Large multi-campus intake',
        batchProfile: 'Students from across Eastern India seeking affordable MBA options.',
        highlights: [
          'Private university with wide presence in engineering and management education.',
          'Multiple specialisations and campus locations with flexible options.',
          'Focus on employability skills and regional industry needs.'
        ]
      },
      {
        id: 'globsyn-bschool-kolkata',
        name: 'Globsyn Business School, Kolkata',
        city: 'Kolkata',
        flagshipProgram: 'PGDM',
        avgCtc: '₹6–7.5 LPA (recent batches)',
        fees: '≈ ₹7–9 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Students targeting roles in IT, analytics, and services.',
        highlights: [
          'Industry-driven curriculum with emphasis on technology and analytics.',
          'Placements in mid-sized IT, analytics, and services firms.',
          'Experiential learning through projects, labs, and corporate interfaces.'
        ]
      }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    description: 'Ahmedabad, Anand, and Baroda offer high-ROI MBA programs led by IIM Ahmedabad.',
    colleges: [
      {
        id: 'iim-ahmedabad',
        name: 'Indian Institute of Management Ahmedabad (IIM Ahmedabad)',
        city: 'Ahmedabad',
        flagshipProgram: 'MBA/PGP',
        avgCtc: '₹30–32 LPA (recent batches)',
        fees: '≈ ₹24–27 Lakh',
        batchSize: '380–400 students',
        batchProfile: 'One of India’s most competitive MBA cohorts with very strong profiles.',
        highlights: [
          'Consistently top-ranked B-school in India with global recognition.',
          'Exceptional placements across strategy consulting, PE/VC, finance, and leadership roles.',
          'Iconic campus with case-heavy pedagogy and influential alumni.'
        ]
      },
      {
        id: 'mica-ahmedabad',
        name: 'MICA Ahmedabad',
        city: 'Ahmedabad',
        flagshipProgram: 'PGDM (Communications & Marketing)',
        avgCtc: '₹18–20 LPA (recent batches)',
        fees: '≈ ₹22–26 Lakh',
        batchSize: '180–200 students',
        batchProfile: 'Students passionate about marketing, media, and communication roles.',
        highlights: [
          'India’s premier institute for strategic marketing and communications.',
          'Placements in brand management, digital marketing, media, and consulting.',
          'Creative, project-heavy curriculum with strong industry connect.'
        ]
      },
      {
        id: 'irma-anand',
        name: 'Institute of Rural Management Anand (IRMA)',
        city: 'Anand',
        flagshipProgram: 'PGDM (Rural Management)',
        avgCtc: '₹14–16 LPA (recent batches)',
        fees: '≈ ₹15–18 Lakh',
        batchSize: '250–300 students',
        batchProfile: 'Students motivated to work in rural, development, and agri-business sectors.',
        highlights: [
          'Flagship rural management program with strong legacy and alumni.',
          'Placements in agri-business, microfinance, rural consulting, and development.',
          'Immersion programs and village visits integrated into the curriculum.'
        ]
      },
      {
        id: 'nirma-ahmedabad',
        name: 'Institute of Management, Nirma University',
        city: 'Ahmedabad',
        flagshipProgram: 'MBA',
        avgCtc: '₹10–11 LPA (recent batches)',
        fees: '≈ ₹12–14 Lakh',
        batchSize: '240–260 students',
        batchProfile: 'Mix of freshers and candidates with 1–3 years of experience.',
        highlights: [
          'Private university B-school with industry-focused curriculum.',
          'Placements in manufacturing, services, and BFSI across West India.',
          'Modern campus with emphasis on case-based and project-based learning.'
        ]
      },
      {
        id: 'som-pdeu-gandhinagar',
        name: 'School of Petroleum Management, PDEU',
        city: 'Gandhinagar',
        flagshipProgram: 'MBA (Energy & Infrastructure, General Management)',
        avgCtc: '₹8–10 LPA (recent batches)',
        fees: '≈ ₹9–10 Lakh',
        batchSize: '120–180 students',
        batchProfile: 'Students interested in energy, infrastructure, and general management roles.',
        highlights: [
          'Sector-focused institute with strength in energy and infrastructure management.',
          'Placements with energy companies, consulting firms, and diversified corporates.',
          'Curriculum combining core MBA with energy, infrastructure, and sustainability.'
        ]
      },
      {
        id: 'nbs-ahmedabad',
        name: 'Narayana Business School (NBS Ahmedabad)',
        city: 'Ahmedabad',
        flagshipProgram: 'PGDM Dual Specialisation',
        avgCtc: '₹7–8.5 LPA (recent batches)',
        fees: '≈ ₹9–11 Lakh',
        batchSize: '200–250 students',
        batchProfile: 'Students targeting roles in marketing, finance, and analytics.',
        highlights: [
          'Private B-school with focus on contemporary specialisations and skill-building.',
          'Reasonable ROI with corporate placements in mid-sized firms and start-ups.',
          'Experiential pedagogy with simulations, live projects, and case study work.'
        ]
      },
      {
        id: 'fms-baroda',
        name: 'Faculty of Management Studies, MS University of Baroda',
        city: 'Vadodara',
        flagshipProgram: 'MBA',
        avgCtc: '₹7–8 LPA (recent batches)',
        fees: '≈ ₹1–2 Lakh',
        batchSize: '120–150 students',
        batchProfile: 'Regional intake with strong representation from commerce and engineering.',
        highlights: [
          'Public university department known for high ROI and solid placements.',
          'Affordable fees with balanced placements across functions and sectors.',
          'Curriculum rooted in fundamentals with opportunities for projects and internships.'
        ]
      },
      {
        id: 'parul-vadodara-mba',
        name: 'Parul Institute of Management and Research, Vadodara',
        city: 'Vadodara',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹4–5.5 LPA (recent batches)',
        fees: '≈ ₹1.5–2 Lakh',
        batchSize: 'Large university intake',
        batchProfile: 'Students from Gujarat and neighbouring states seeking affordable MBA.',
        highlights: [
          'Part of Parul University with wide program portfolio and specialisations.',
          'Reasonable ROI with placements in regional corporates and services.',
          'Focus on employability skills, soft skills, and industry exposure.'
        ]
      },
      {
        id: 'gujarat-university-mba',
        name: 'Gujarat University – MBA Program',
        city: 'Ahmedabad',
        flagshipProgram: 'MBA',
        avgCtc: '₹6–8 LPA (recent batches)',
        fees: '≈ ₹1–3 Lakh',
        batchSize: 'Multiple affiliated colleges and large seat pool',
        batchProfile: 'Students across Gujarat using common admission routes for MBA.',
        highlights: [
          'State university with several affiliated MBA colleges and specialisations.',
          'High ROI through low fees and reasonable placement outcomes.',
          'Curriculum aligned to state industry and service sector needs.'
        ]
      },
      {
        id: 'edii-gandhinagar',
        name: 'Entrepreneurship Development Institute of India (EDII)',
        city: 'Gandhinagar',
        flagshipProgram: 'PGDM in Business Entrepreneurship',
        avgCtc: '₹6–8 LPA (recent batches)',
        fees: '≈ ₹9–11 Lakh',
        batchSize: 'Small, focused cohorts',
        batchProfile: 'Students keen on entrepreneurship, family business, and start-ups.',
        highlights: [
          'Specialised PGDM in entrepreneurship and family business management.',
          'Strong ecosystem for start-ups, mentoring, and incubation support.',
          'Curriculum emphasises venture creation, scaling, and innovation.'
        ]
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    description: 'Large north Indian state with IIM Lucknow and strong NCR private institutes.',
    colleges: [
      {
        id: 'iim-lucknow',
        name: 'Indian Institute of Management Lucknow (IIM Lucknow)',
        city: 'Lucknow',
        flagshipProgram: 'PGP/MBA',
        avgCtc: '₹30–32 LPA (recent batches)',
        fees: '≈ ₹20–21 Lakh',
        batchSize: '550–600 students across flagship programs',
        batchProfile: 'Highly competitive national intake with strong work-ex representation.',
        highlights: [
          'Top IIM with excellent placements in consulting, finance, product, and leadership roles.',
          'Lush campus with strong peer learning and alumni network.',
          'Multiple specialised programs in agri-business and sustainable management.'
        ]
      },
      {
        id: 'iim-lucknow-noida',
        name: 'IIM Lucknow – Noida Campus (Working Professionals & Specialized Programs)',
        city: 'Noida',
        flagshipProgram: 'MBA for Working Executives / Specialized MBAs',
        avgCtc: 'Typically in the mid-₹20 LPA range for graduating cohorts',
        fees: 'Program-dependent, often in ₹15–25 Lakh band',
        batchSize: 'Smaller cohorts focused on experienced professionals',
        batchProfile: 'Working professionals with several years of experience across industries.',
        highlights: [
          'Executive and specialised management programs in the NCR region.',
          'Strong peer network of mid-career professionals and corporates.',
          'Curriculum tailored to leadership, sustainability, and sectoral needs.'
        ]
      },
      {
        id: 'doms-iit-kanpur',
        name: 'Department of Management Sciences, IIT Kanpur (DoMS IIT Kanpur)',
        city: 'Kanpur',
        flagshipProgram: 'MBA',
        avgCtc: '₹18–20 LPA (recent batches)',
        fees: '≈ ₹2.5–3 Lakh',
        batchSize: '70–90 students',
        batchProfile: 'Tech-strong batch with interests in analytics, operations, and product roles.',
        highlights: [
          'Management department of IIT Kanpur with strong analytics focus.',
          'Excellent ROI due to modest fees and strong placements.',
          'Curriculum blending technology management with core business subjects.'
        ]
      },
      {
        id: 'bimtech-greater-noida',
        name: 'Birla Institute of Management Technology (BIMTECH)',
        city: 'Greater Noida',
        flagshipProgram: 'PGDM',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹13–15 Lakh',
        batchSize: '450+ students across programs',
        batchProfile: 'Diverse class with representation from across India and multiple disciplines.',
        highlights: [
          'Reputed private B-school with strong corporate interface in NCR.',
          'Specialisations in IB, Insurance, Retail, and core PGDM.',
          'Active alumni network and strong emphasis on industry projects.'
        ]
      },
      {
        id: 'fms-bhu-varanasi',
        name: 'Faculty of Management Studies, Banaras Hindu University (FMS BHU)',
        city: 'Varanasi',
        flagshipProgram: 'MBA',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: 'Very low, university-level fees (high ROI)',
        batchSize: '150–200 students',
        batchProfile: 'Students from varied academic streams seeking high-ROI MBA.',
        highlights: [
          'Public university department known for strong ROI.',
          'Decent placements in BFSI, FMCG, and services given low fees.',
          'Academic environment within a large central university campus.'
        ]
      },
      {
        id: 'amity-noida-mba',
        name: 'Amity University, Noida – Amity Business School',
        city: 'Noida',
        flagshipProgram: 'MBA',
        avgCtc: '₹7–9 LPA (recent batches)',
        fees: '≈ ₹12–15 Lakh',
        batchSize: 'Large multi-batch intake',
        batchProfile: 'Students from across India aiming for corporate roles in NCR and beyond.',
        highlights: [
          'Large private university with diverse MBA specialisations.',
          'Widespread corporate linkages and campus placements across sectors.',
          'Strong infrastructure and multiple student clubs and events.'
        ]
      },
      {
        id: 'jaipuria-lucknow',
        name: 'Jaipuria Institute of Management, Lucknow',
        city: 'Lucknow',
        flagshipProgram: 'PGDM',
        avgCtc: '₹8–9 LPA (recent batches)',
        fees: '≈ ₹12–14 Lakh',
        batchSize: '300+ students',
        batchProfile: 'Students looking for careers in marketing, finance, and HR.',
        highlights: [
          'Old campus of Jaipuria group with strong corporate connections.',
          'Placements across IT services, BFSI, FMCG, and analytics.',
          'Curriculum emphasises industry interaction, internships, and PDP.'
        ]
      },
      {
        id: 'jaipuria-noida',
        name: 'Jaipuria Institute of Management, Noida',
        city: 'Noida',
        flagshipProgram: 'PGDM',
        avgCtc: '₹8–9 LPA (recent batches)',
        fees: '≈ ₹12–14 Lakh',
        batchSize: '300+ students',
        batchProfile: 'Students targeting roles in NCR across marketing, finance, and HR.',
        highlights: [
          'Noida campus of Jaipuria close to corporate hubs.',
          'Regular guest lectures, conclaves, and corporate competitions.',
          'Focus on employability skills and practical exposure.'
        ]
      },
      {
        id: 'ims-ghaziabad',
        name: 'Institute of Management Studies (IMS Ghaziabad)',
        city: 'Ghaziabad',
        flagshipProgram: 'PGDM',
        avgCtc: '₹8–9 LPA (recent batches)',
        fees: '≈ ₹9–11 Lakh',
        batchSize: '300+ students',
        batchProfile: 'Students targeting corporate careers in NCR region.',
        highlights: [
          'Well-known private institute in Ghaziabad with strong recruiter ties.',
          'Placements in IT services, BFSI, consulting support, and analytics.',
          'Industry-oriented pedagogy and skill-building workshops.'
        ]
      },
      {
        id: 'amu-aligarh-mba',
        name: 'Aligarh Muslim University (AMU) – Department of Business Administration',
        city: 'Aligarh',
        flagshipProgram: 'MBA',
        avgCtc: '₹4–6 LPA (recent batches)',
        fees: 'Low, public university fee structure',
        batchSize: '120–180 students',
        batchProfile: 'Students largely from North India with varied academic backgrounds.',
        highlights: [
          'Central university department with heritage and academic rigour.',
          'Good ROI due to low fees and reasonable placement outcomes.',
          'Focus on foundational management education and research orientation.'
        ]
      }
    ]
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    description: 'Visakhapatnam, Guntur, and Amaravati offer a mix of public and private MBA options.',
    colleges: [
      {
        id: 'iim-visakhapatnam',
        name: 'Indian Institute of Management Visakhapatnam (IIM Visakhapatnam)',
        city: 'Visakhapatnam',
        flagshipProgram: 'MBA',
        avgCtc: '₹15–16 LPA (recent batches)',
        fees: '≈ ₹18–21 Lakh',
        batchSize: '250–300 students',
        batchProfile: 'Competitive CAT percentile cohort with varied work experience.',
        highlights: [
          'New-generation IIM with rapidly improving rankings and placements.',
          'Placements across consulting, IT services, analytics, and BFSI.',
          'Coastal city campus with growing corporate and start-up ecosystem.'
        ]
      },
      {
        id: 'klu-business-school-guntur',
        name: 'KL Business School, KL University',
        city: 'Guntur/Vaddeswaram',
        flagshipProgram: 'MBA',
        avgCtc: '₹7–8 LPA (recent batches)',
        fees: '≈ ₹5–7 Lakh',
        batchSize: 'Large intake across specialisations',
        batchProfile: 'Students mainly from Andhra Pradesh and neighbouring states.',
        highlights: [
          'Deemed university with strong engineering plus management ecosystem.',
          'Offers multiple specialisations and integrated programs.',
          'Focus on placements in IT services, manufacturing, and BFSI.'
        ]
      },
      {
        id: 'ifmr-gsb-sricity',
        name: 'IFMR Graduate School of Business, Krea University',
        city: 'Sri City (near AP-TN border)',
        flagshipProgram: 'MBA',
        avgCtc: '₹13–15 LPA (recent batches)',
        fees: '≈ ₹14–16 Lakh',
        batchSize: '180–220 students',
        batchProfile: 'Students with strong interest in finance, analytics, and policy.',
        highlights: [
          'Known for strengths in finance, analytics, and quantitative management.',
          'Placements in banks, financial services, consulting, and analytics firms.',
          'Campus in Sri City industrial zone with strong industry exposure.'
        ]
      },
      {
        id: 'gitam-sob-visakhapatnam',
        name: 'GITAM School of Business, Visakhapatnam',
        city: 'Visakhapatnam',
        flagshipProgram: 'MBA',
        avgCtc: '₹5–7 LPA (recent batches)',
        fees: '≈ ₹9–11 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Students targeting mid-level roles in corporates in South and East India.',
        highlights: [
          'Part of GITAM University with industry-linked business programs.',
          'Placements in IT services, pharma, BFSI, and services.',
          'Balanced focus on academics, projects, and corporate exposure.'
        ]
      },
      {
        id: 'vignan-guntur-mba',
        name: 'Vignan’s Foundation for Science, Technology and Research – MBA',
        city: 'Guntur',
        flagshipProgram: 'MBA',
        avgCtc: '₹5–6.5 LPA (recent batches)',
        fees: '≈ ₹3–4 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Regional intake with interest in operations, marketing, and HR.',
        highlights: [
          'Deemed university with engineering and management programs.',
          'Good regional placements with modest fee levels.',
          'Curriculum oriented to practical learning and local industry needs.'
        ]
      },
      {
        id: 'sri-venkateswara-university-mba',
        name: 'Sri Venkateswara University – Department of Management Studies',
        city: 'Tirupati',
        flagshipProgram: 'MBA',
        avgCtc: '₹4–5.5 LPA (recent batches)',
        fees: 'Low public university fees',
        batchSize: '120–180 students',
        batchProfile: 'Students primarily from Andhra Pradesh and nearby regions.',
        highlights: [
          'Public university program with focus on core management education.',
          'High ROI due to low fees and reasonable placements.',
          'Opportunities to engage with local industry and public sector.'
        ]
      },
      {
        id: 'andhra-university-mba',
        name: 'Andhra University, Visakhapatnam – MBA',
        city: 'Visakhapatnam',
        flagshipProgram: 'MBA',
        avgCtc: '₹6–7 LPA (recent batches)',
        fees: '≈ ₹3–4 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Students from diverse academic streams within the state.',
        highlights: [
          'Historic public university with established management department.',
          'Good ROI with modest fees and decent placements.',
          'Campus by the coast with rich academic and cultural environment.'
        ]
      },
      {
        id: 'acharya-nagarjuna-mba',
        name: 'Acharya Nagarjuna University – MBA',
        city: 'Guntur',
        flagshipProgram: 'MBA',
        avgCtc: '₹4–5 LPA (recent batches)',
        fees: 'Very low, public university fees',
        batchSize: 'Large intake including affiliated colleges',
        batchProfile: 'Students seeking affordable MBA with regional opportunities.',
        highlights: [
          'State university with multiple affiliated management institutes.',
          'High ROI through low cost and reasonable local placements.',
          'Curriculum covers core management areas aligned to state economy.'
        ]
      },
      {
        id: 'srm-amaravati-mba',
        name: 'SRM University, Amaravati – School of Management',
        city: 'Amaravati',
        flagshipProgram: 'MBA',
        avgCtc: '₹6–7.5 LPA (recent batches)',
        fees: '≈ ₹10–12 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Students from South India targeting corporate roles and higher studies.',
        highlights: [
          'Newer campus of SRM with modern infrastructure and tech-enabled learning.',
          'Placements across IT, services, and emerging sectors.',
          'Experiential and project-based learning with corporate interactions.'
        ]
      },
      {
        id: 'sanskrithi-sob-puttaparthi',
        name: 'Sanskrithi School of Business',
        city: 'Puttaparthi',
        flagshipProgram: 'MBA',
        avgCtc: '₹4–4.5 LPA (recent batches)',
        fees: '≈ ₹0.7–1 Lakh',
        batchSize: 'Small cohorts',
        batchProfile: 'Students focused on affordable MBA and regional placements.',
        highlights: [
          'Low-fee institute with emphasis on ROI and employability.',
          'Placements in regional corporates and services.',
          'Focus on foundational management skills and personality development.'
        ]
      }
    ]
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    description: 'Indore, Bhopal, and Gwalior anchor MBA education in central India.',
    colleges: [
      {
        id: 'iim-indore',
        name: 'Indian Institute of Management Indore (IIM Indore)',
        city: 'Indore',
        flagshipProgram: 'MBA/PGP',
        avgCtc: '₹25–27 LPA (recent batches)',
        fees: '≈ ₹20–21 Lakh',
        batchSize: '600+ students across flagship programs',
        batchProfile: 'Competitive national intake with strong academic and work profiles.',
        highlights: [
          'Top IIM in central India with excellent placements and global rankings.',
          'Known for finance, consulting, and general management roles.',
          'Scenic hill campus with integrated 5-year IPM and strong alumni network.'
        ]
      },
      {
        id: 'iifm-bhopal',
        name: 'Indian Institute of Forest Management (IIFM Bhopal)',
        city: 'Bhopal',
        flagshipProgram: 'PGDFM / PGDM (Environment & Forestry focused)',
        avgCtc: '₹9–11 LPA (recent batches)',
        fees: '≈ ₹11–13 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Students interested in environment, sustainability, and development sectors.',
        highlights: [
          'Unique management institute focusing on forests, environment, and development.',
          'Placements in consulting, development agencies, corporates, and government-linked bodies.',
          'Programs integrate sustainability, policy, and management.'
        ]
      },
      {
        id: 'iiitm-gwalior',
        name: 'ABV-IIITM Gwalior – School of Management',
        city: 'Gwalior',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹10–12 LPA (recent batches)',
        fees: '≈ ₹3–7 Lakh',
        batchSize: '120–180 students',
        batchProfile: 'Students with strong quantitative skills and IT orientation.',
        highlights: [
          'Information technology and management-focused institute with good ROI.',
          'Placements in IT services, analytics, and consulting.',
          'Curriculum blends technology and business management.'
        ]
      },
      {
        id: 'pimr-indore',
        name: 'Prestige Institute of Management and Research (PIMR Indore)',
        city: 'Indore',
        flagshipProgram: 'MBA/PGDM',
        avgCtc: '₹6–8 LPA (recent batches)',
        fees: '≈ ₹3–4 Lakh',
        batchSize: 'Large intake across specialisations',
        batchProfile: 'Students from central India targeting corporate roles.',
        highlights: [
          'Well-known private B-school in Indore with strong regional recruiter base.',
          'Multiple specialisations and industry-oriented curriculum.',
          'Emphasis on practical training, internships, and soft skills.'
        ]
      },
      {
        id: 'jaipuria-indore',
        name: 'Jaipuria Institute of Management, Indore',
        city: 'Indore',
        flagshipProgram: 'PGDM',
        avgCtc: '₹7–8 LPA (recent batches)',
        fees: '≈ ₹10–12 Lakh',
        batchSize: '200–250 students',
        batchProfile: 'Students keen on marketing, HR, and finance roles.',
        highlights: [
          'Indore campus of Jaipuria group with growing brand in central India.',
          'Placements in IT services, BFSI, FMCG, and analytics.',
          'Strong emphasis on PDP and continuous corporate interactions.'
        ]
      },
      {
        id: 'ims-davv-indore',
        name: 'Institute of Management Studies, Devi Ahilya Vishwavidyalaya (IMS DAVV)',
        city: 'Indore',
        flagshipProgram: 'MBA',
        avgCtc: '₹6–7.5 LPA (recent batches)',
        fees: '≈ ₹1–2 Lakh',
        batchSize: '200+ students',
        batchProfile: 'Students from Madhya Pradesh and neighbouring states.',
        highlights: [
          'Public university department with strong regional reputation.',
          'High ROI through low fees and decent placements.',
          'Curriculum covers core management with opportunities for projects and research.'
        ]
      },
      {
        id: 'amity-gwalior-mba',
        name: 'Amity Business School, Amity University Gwalior',
        city: 'Gwalior',
        flagshipProgram: 'MBA',
        avgCtc: '₹5–6.5 LPA (recent batches)',
        fees: '≈ ₹7–9 Lakh',
        batchSize: '150–200 students',
        batchProfile: 'Students aiming for corporate roles across sectors.',
        highlights: [
          'Campus of Amity University with integrated management and engineering offerings.',
          'Placements in IT services, BFSI, and regional corporates.',
          'Focus on communication skills, internships, and co-curriculars.'
        ]
      },
      {
        id: 'jagran-lakecity-bhopal',
        name: 'Jagran Lakecity University – Jagran Lakecity Business School',
        city: 'Bhopal',
        flagshipProgram: 'MBA',
        avgCtc: '₹4.5–6 LPA (recent batches)',
        fees: '≈ ₹4–5 Lakh',
        batchSize: '120–180 students',
        batchProfile: 'Students from central India targeting corporate roles and entrepreneurship.',
        highlights: [
          'Private university in Bhopal with growing management school.',
          'Industry-linked curriculum with visiting faculty and practitioner sessions.',
          'Focus on entrepreneurship, communication, and practical exposure.'
        ]
      },
      {
        id: 'sage-university-indore-mba',
        name: 'SAGE University, Indore – School of Management',
        city: 'Indore',
        flagshipProgram: 'MBA',
        avgCtc: '₹4–5.5 LPA (recent batches)',
        fees: '≈ ₹2–4 Lakh',
        batchSize: 'Medium-sized cohorts',
        batchProfile: 'Students seeking affordable MBA with local placement opportunities.',
        highlights: [
          'Private university with focus on employability and skill development.',
          'Placements in local and regional corporates across sectors.',
          'Curriculum aligned to practical skills and industry needs.'
        ]
      },
      {
        id: 'oriental-university-indore-mba',
        name: 'Oriental University, Indore – Faculty of Management',
        city: 'Indore',
        flagshipProgram: 'MBA',
        avgCtc: '₹3.5–5 LPA (recent batches)',
        fees: '≈ ₹2–3 Lakh',
        batchSize: 'Medium-sized batches',
        batchProfile: 'Students focused on entry-level management roles in the region.',
        highlights: [
          'Private university offering management along with other disciplines.',
          'Affordable fee structure with regional corporate connections.',
          'Curriculum covers core management with emphasis on internships and projects.'
        ]
      }
    ]
  }
];
