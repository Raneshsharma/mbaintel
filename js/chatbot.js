// AI Admissions Assistant - Conversational Chatbot with Context Memory
let userProfile = {
    percentile: null,
    exam: null,
    budget: null,
    location: null,
    tier: null,
    conversationStarted: false
};

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Display user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process and respond
    setTimeout(() => {
        hideTypingIndicator();
        const response = processQuery(message);
        addMessage(response, 'bot');
    }, 800);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.style.animation = 'fadeInUp 0.3s ease-out';
    
    // Convert text to HTML (handle line breaks and lists)
    let html = text;
    if (sender === 'bot') {
        // Convert markdown-style lists to HTML
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.split('\n').map(line => {
            if (line.trim().startsWith('- ')) {
                return '<li>' + line.trim().substring(2) + '</li>';
            }
            return line;
        }).join('');
        if (html.includes('<li>')) {
            html = '<ul style="margin-left: 1.5rem; margin-top: 0.5rem;">' + html + '</ul>';
        }
    }
    
    messageDiv.innerHTML = `<p>${html}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'message bot typing-indicator';
    typingDiv.innerHTML = '<p>💭 Thinking...</p>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function processQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    // Handle greetings
    if (isGreeting(lowerQuery)) {
        userProfile.conversationStarted = true;
        return handleGreeting();
    }
    
    // Extract user information from query
    extractUserInfo(query);
    
    // Handle personalized recommendations
    if (hasMultipleCriteria(query)) {
        return handlePersonalizedRecommendation(query);
    }
    
    // Pattern matching for different query types
    if (lowerQuery.includes('best roi') || lowerQuery.includes('highest roi')) {
        return handleROIQuery(query);
    } else if (lowerQuery.includes('percentile')) {
        return handlePercentileQuery(query);
    } else if (lowerQuery.includes('compare') || lowerQuery.includes('tier')) {
        return handleCompareQuery(query);
    } else if (lowerQuery.includes('location') || hasLocation(lowerQuery)) {
        return handleLocationQuery(query);
    } else if (lowerQuery.includes('fees') || lowerQuery.includes('cost') || lowerQuery.includes('price') || lowerQuery.includes('budget') || lowerQuery.includes('lakh')) {
        return handleFeesQuery(query);
    } else if (lowerQuery.includes('cat') || lowerQuery.includes('xat') || lowerQuery.includes('gmat') || lowerQuery.includes('cmat') || lowerQuery.includes('nmat')) {
        return handleExamQuery(query);
    } else if (lowerQuery.includes('fore') || lowerQuery.includes('imt') || lowerQuery.includes('iim')) {
        return handleCollegeSpecificQuery(query);
    } else if (lowerQuery.includes('placement') || lowerQuery.includes('salary')) {
        return handlePlacementQuery(query);
    } else if (lowerQuery.includes('shortlist') || lowerQuery.includes('recommend') || lowerQuery.includes('suggest')) {
        return handlePersonalizedRecommendation(query);
    } else {
        return handleGeneralQuery(query);
    }
}

function isGreeting(query) {
    const greetings = ['hey', 'hi', 'hello', 'good morning', 'good afternoon', 'good evening', 'greetings', 'what\'s up', 'sup'];
    return greetings.some(greeting => query.includes(greeting));
}

function handleGreeting() {
    if (!userProfile.conversationStarted) {
        userProfile.conversationStarted = true;
        return `👋 Hello! I'm your AI Admissions Assistant. I'm here to help you find the perfect MBA college!\n\n` +
               `To give you the best recommendations, I'd like to know:\n` +
               `- Your entrance exam percentile (CAT/XAT/GMAT/CMAT/NMAT)\n` +
               `- Your budget/fees range\n` +
               `- Preferred location (if any)\n\n` +
               `You can tell me all at once, like: "I scored 95 percentile in CAT and my budget is 15 lakhs"`;
    } else {
        return `Hello again! How can I help you today?`;
    }
}

function extractUserInfo(query) {
    const lowerQuery = query.toLowerCase();
    
    // Extract percentile
    const percentileMatch = query.match(/(\d+(?:\.\d+)?)\s*percentile/i);
    if (percentileMatch) {
        userProfile.percentile = parseFloat(percentileMatch[1]);
    }
    
    // Extract exam
    const exams = ['CAT', 'XAT', 'GMAT', 'CMAT', 'NMAT'];
    for (const exam of exams) {
        if (lowerQuery.includes(exam.toLowerCase())) {
            userProfile.exam = exam;
            break;
        }
    }
    
    // Extract budget/fees
    const budgetPatterns = [
        /(\d+)\s*lakh/i,
        /budget.*?(\d+)/i,
        /fees.*?(\d+)/i,
        /(\d+)\s*l/i
    ];
    for (const pattern of budgetPatterns) {
        const match = query.match(pattern);
        if (match) {
            userProfile.budget = parseInt(match[1]) * 100000; // Convert to rupees
            break;
        }
    }
    
    // Extract location
    const locations = ['delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 'pune', 'hyderabad', 'ahmedabad', 'gurgaon', 'noida', 'ghaziabad', 'jamshedpur', 'manipal', 'indore', 'lucknow', 'goa', 'kochi', 'coimbatore'];
    for (const location of locations) {
        if (lowerQuery.includes(location)) {
            userProfile.location = location;
            break;
        }
    }
    
    // Extract tier
    const tierMatch = query.match(/tier\s*([i1-4]+)/i);
    if (tierMatch) {
        const tierStr = tierMatch[1].toLowerCase();
        const tierMap = { 'i': 1, 'ii': 2, 'iii': 3, 'iv': 4, '1': 1, '2': 2, '3': 3, '4': 4 };
        userProfile.tier = tierMap[tierStr];
    }
}

function hasMultipleCriteria(query) {
    const lowerQuery = query.toLowerCase();
    let criteriaCount = 0;
    
    if (lowerQuery.match(/\d+\s*percentile/i)) criteriaCount++;
    if (lowerQuery.match(/(cat|xat|gmat|cmat|nmat)/i)) criteriaCount++;
    if (lowerQuery.match(/(\d+)\s*(lakh|l)/i) || lowerQuery.includes('budget') || lowerQuery.includes('fees')) criteriaCount++;
    if (hasLocation(lowerQuery)) criteriaCount++;
    
    return criteriaCount >= 2;
}

function hasLocation(query) {
    const locations = ['delhi', 'mumbai', 'bangalore', 'chennai', 'kolkata', 'pune', 'hyderabad', 'ahmedabad', 'gurgaon', 'noida', 'ghaziabad', 'jamshedpur', 'manipal', 'indore', 'lucknow', 'goa', 'kochi', 'coimbatore'];
    return locations.some(loc => query.includes(loc));
}

function handlePersonalizedRecommendation(query) {
    extractUserInfo(query);
    
    let filtered = [...colleges];
    let filtersApplied = [];
    
    // Apply filters based on user profile
    if (userProfile.percentile) {
        filtered = filtered.filter(c => c.minPercentile <= userProfile.percentile);
        filtersApplied.push(`Percentile: ${userProfile.percentile}%`);
    }
    
    if (userProfile.exam) {
        filtered = filtered.filter(c => c.entranceExams.includes(userProfile.exam));
        filtersApplied.push(`Exam: ${userProfile.exam}`);
    }
    
    if (userProfile.budget) {
        filtered = filtered.filter(c => c.fees <= userProfile.budget);
        filtersApplied.push(`Budget: ₹${(userProfile.budget/100000).toFixed(0)}L`);
    }
    
    if (userProfile.location) {
        filtered = filtered.filter(c => c.location.toLowerCase().includes(userProfile.location.toLowerCase()));
        filtersApplied.push(`Location: ${userProfile.location}`);
    }
    
    if (userProfile.tier) {
        filtered = filtered.filter(c => c.tier === userProfile.tier);
        filtersApplied.push(`Tier: ${userProfile.tier}`);
    }
    
    // Sort by ROI
    filtered.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    
    if (filtered.length === 0) {
        let response = `I couldn't find colleges matching all your criteria:\n\n`;
        filtersApplied.forEach(filter => response += `- ${filter}\n`);
        response += `\nWould you like me to:\n`;
        response += `- Relax some criteria?\n`;
        response += `- Show colleges with slightly higher fees?\n`;
        response += `- Consider a different location?`;
        return response;
    }
    
    const topColleges = filtered.slice(0, 8);
    
    let response = `Based on your profile, here are **${topColleges.length} recommended colleges**:\n\n`;
    response += `**Your Criteria:**\n`;
    filtersApplied.forEach(filter => response += `- ${filter}\n`);
    response += `\n**Top Recommendations:**\n\n`;
    
    topColleges.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - ROI: ${college.roi}% | Tier: ${college.tier}\n`;
        response += `   - Fees: ₹${(college.fees/100000).toFixed(2)}L | Salary: ₹${(college.avgSalary/100000).toFixed(2)}L\n`;
        response += `   - Location: ${college.location} | Placement: ${college.placementRate}%\n`;
        response += `   - Break-even: ${calculateBreakEven(college)} years\n\n`;
    });
    
    response += `💡 **Tip:** Use the Compare tool to see these colleges side-by-side!`;
    
    return response;
}

function handleROIQuery(query) {
    extractUserInfo(query);
    
    let filtered = [...colleges];
    
    if (userProfile.percentile) {
        filtered = filtered.filter(c => c.minPercentile <= userProfile.percentile);
    }
    
    filtered.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    const top5 = filtered.slice(0, 5);
    
    if (top5.length === 0) {
        return "I couldn't find any colleges matching your criteria. Try adjusting your percentile requirement.";
    }
    
    let response = `Here are the **top ${top5.length} colleges with highest ROI**:\n\n`;
    top5.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - ROI: ${college.roi}%\n`;
        response += `   - Fees: ₹${(college.fees/100000).toFixed(2)}L | Salary: ₹${(college.avgSalary/100000).toFixed(2)}L\n`;
        response += `   - Tier: ${college.tier} | Location: ${college.location}\n`;
        response += `   - Min Percentile: ${college.minPercentile}%\n\n`;
    });
    
    return response;
}

function handlePercentileQuery(query) {
    extractUserInfo(query);
    
    if (!userProfile.percentile) {
        const percentileMatch = query.match(/(\d+)\s*percentile/i);
        if (!percentileMatch) {
            return "I can help you find colleges based on your percentile. Please mention your percentile score (e.g., 'Best colleges for 85 percentile').";
        }
        userProfile.percentile = parseInt(percentileMatch[1]);
    }
    
    const filtered = colleges.filter(c => c.minPercentile <= userProfile.percentile)
                             .sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi))
                             .slice(0, 5);
    
    if (filtered.length === 0) {
        return `No colleges found for ${userProfile.percentile} percentile. You may need to improve your score or consider Tier IV colleges.`;
    }
    
    let response = `Here are **top colleges you can target with ${userProfile.percentile} percentile**:\n\n`;
    filtered.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - ROI: ${college.roi}%\n`;
        response += `   - Break-even: ${calculateBreakEven(college)} years\n`;
        response += `   - Location: ${college.location}\n\n`;
    });
    
    return response;
}

function handleCompareQuery(query) {
    extractUserInfo(query);
    
    const tierMatch = query.match(/tier\s*([i1-4]+)/i);
    const locationMatch = query.match(/(delhi|mumbai|bangalore|chennai|kolkata|pune|hyderabad|ahmedabad|gurgaon|noida|ghaziabad)/i);
    
    let filtered = [...colleges];
    
    if (userProfile.tier || tierMatch) {
        if (!userProfile.tier && tierMatch) {
            const tierStr = tierMatch[1].toLowerCase();
            const tierMap = { 'i': 1, 'ii': 2, 'iii': 3, 'iv': 4, '1': 1, '2': 2, '3': 3, '4': 4 };
            userProfile.tier = tierMap[tierStr];
        }
        if (userProfile.tier) {
            filtered = filtered.filter(c => c.tier === userProfile.tier);
        }
    }
    
    if (userProfile.location || locationMatch) {
        if (!userProfile.location && locationMatch) {
            userProfile.location = locationMatch[1];
        }
        if (userProfile.location) {
            filtered = filtered.filter(c => c.location.toLowerCase().includes(userProfile.location.toLowerCase()));
        }
    }
    
    filtered.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    const top5 = filtered.slice(0, 5);
    
    if (top5.length === 0) {
        return "No colleges found matching your criteria. Try different filters.";
    }
    
    let response = `Here are **top ${top5.length} colleges** matching your criteria:\n\n`;
    top5.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - ROI: ${college.roi}% | Placement: ${college.placementRate}%\n`;
        response += `   - Fees: ₹${(college.fees/100000).toFixed(2)}L | Salary: ₹${(college.avgSalary/100000).toFixed(2)}L\n\n`;
    });
    
    return response;
}

function handleLocationQuery(query) {
    extractUserInfo(query);
    
    if (!userProfile.location) {
        const locationMatch = query.match(/(delhi|mumbai|bangalore|chennai|kolkata|pune|hyderabad|ahmedabad|gurgaon|noida|ghaziabad|jamshedpur|manipal|indore|lucknow)/i);
        if (!locationMatch) {
            return "Please mention a specific location (e.g., Delhi, Mumbai, Bangalore).";
        }
        userProfile.location = locationMatch[1];
    }
    
    let filtered = colleges.filter(c => c.location.toLowerCase().includes(userProfile.location.toLowerCase()));
    
    if (userProfile.percentile) {
        filtered = filtered.filter(c => c.minPercentile <= userProfile.percentile);
    }
    
    filtered.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    const top5 = filtered.slice(0, 5);
    
    if (top5.length === 0) {
        return `No colleges found in ${userProfile.location}. Try another location.`;
    }
    
    let response = `Here are **top colleges in ${userProfile.location}**:\n\n`;
    top5.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - ROI: ${college.roi}% | Tier: ${college.tier}\n`;
        response += `   - Min Percentile: ${college.minPercentile}%\n\n`;
    });
    
    return response;
}

function handleFeesQuery(query) {
    extractUserInfo(query);
    
    if (!userProfile.budget) {
        const numberMatches = query.match(/\d+/g);
        if (!numberMatches || numberMatches.length === 0) {
            return "Please mention a fees range (e.g., 'colleges under 15 lakhs').";
        }
        userProfile.budget = parseInt(numberMatches[0]) * 100000;
    }
    
    let filtered = colleges.filter(c => c.fees <= userProfile.budget);
    
    if (userProfile.percentile) {
        filtered = filtered.filter(c => c.minPercentile <= userProfile.percentile);
    }
    
    filtered.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    const top5 = filtered.slice(0, 5);
    
    if (top5.length === 0) {
        return `No colleges found under ₹${(userProfile.budget/100000).toFixed(0)} lakhs. Try increasing your budget.`;
    }
    
    let response = `Here are **top colleges under ₹${(userProfile.budget/100000).toFixed(0)} lakhs**:\n\n`;
    top5.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - Fees: ₹${(college.fees/100000).toFixed(2)}L | ROI: ${college.roi}%\n`;
        response += `   - Salary: ₹${(college.avgSalary/100000).toFixed(2)}L\n\n`;
    });
    
    return response;
}

function handleExamQuery(query) {
    extractUserInfo(query);
    
    if (!userProfile.exam) {
        const exams = ['CAT', 'XAT', 'GMAT', 'CMAT', 'NMAT'];
        const mentionedExam = exams.find(exam => query.toUpperCase().includes(exam));
        if (!mentionedExam) {
            return "Please mention an entrance exam (CAT, XAT, GMAT, CMAT, or NMAT).";
        }
        userProfile.exam = mentionedExam;
    }
    
    let filtered = colleges.filter(c => c.entranceExams.includes(userProfile.exam));
    
    if (userProfile.percentile) {
        filtered = filtered.filter(c => c.minPercentile <= userProfile.percentile);
    }
    
    filtered.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    const top5 = filtered.slice(0, 5);
    
    let response = `Here are **top colleges accepting ${userProfile.exam}**:\n\n`;
    top5.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - ROI: ${college.roi}% | Min Percentile: ${college.minPercentile}%\n`;
        response += `   - Location: ${college.location}\n\n`;
    });
    
    return response;
}

function handleCollegeSpecificQuery(query) {
    const matchedCollege = colleges.find(c => 
        query.toLowerCase().includes(c.name.toLowerCase().split(' ')[0]) ||
        query.toLowerCase().includes(c.name.toLowerCase().split('(')[0].trim())
    );
    
    if (!matchedCollege) {
        return "I couldn't identify the college you mentioned. Please try mentioning the full name or use the search filters.";
    }
    
    const breakEven = calculateBreakEven(matchedCollege);
    
    let response = `**${matchedCollege.name}**\n\n`;
    response += `- **Tier:** ${matchedCollege.tier}\n`;
    response += `- **Location:** ${matchedCollege.location}\n`;
    response += `- **Fees:** ₹${(matchedCollege.fees/100000).toFixed(2)}L\n`;
    response += `- **Average Salary:** ₹${(matchedCollege.avgSalary/100000).toFixed(2)}L\n`;
    response += `- **ROI:** ${matchedCollege.roi}%\n`;
    response += `- **Break-even Period:** ${breakEven} years\n`;
    response += `- **Placement Rate:** ${matchedCollege.placementRate}%\n`;
    response += `- **Min Percentile:** ${matchedCollege.minPercentile}%\n`;
    response += `- **Entrance Exams:** ${matchedCollege.entranceExams.join(', ')}\n`;
    response += `- **Top Recruiters:** ${matchedCollege.topRecruiters.join(', ')}\n`;
    
    return response;
}

function handlePlacementQuery(query) {
    const filtered = colleges.sort((a, b) => b.placementRate - a.placementRate).slice(0, 5);
    
    let response = `Here are **colleges with highest placement rates**:\n\n`;
    filtered.forEach((college, index) => {
        response += `${index + 1}. **${college.name}**\n`;
        response += `   - Placement Rate: ${college.placementRate}%\n`;
        response += `   - Avg Salary: ₹${(college.avgSalary/100000).toFixed(2)}L\n`;
        response += `   - ROI: ${college.roi}%\n\n`;
    });
    
    return response;
}

function handleGeneralQuery(query) {
    if (userProfile.percentile || userProfile.budget || userProfile.exam) {
        let response = `I have some information about you:\n\n`;
        if (userProfile.percentile) response += `- Percentile: ${userProfile.percentile}%\n`;
        if (userProfile.exam) response += `- Exam: ${userProfile.exam}\n`;
        if (userProfile.budget) response += `- Budget: ₹${(userProfile.budget/100000).toFixed(0)}L\n`;
        if (userProfile.location) response += `- Location: ${userProfile.location}\n`;
        response += `\nWould you like me to recommend colleges based on this? Or you can ask:\n`;
        response += `- "Show me colleges" - to get personalized recommendations\n`;
        response += `- "Best ROI colleges" - to see top ROI options\n`;
        response += `- "Compare colleges" - to see comparison options`;
        return response;
    }
    
    return `I can help you with:\n\n` +
           `- Finding best ROI colleges for your percentile\n` +
           `- Comparing colleges by tier, location, or fees\n` +
           `- Getting information about specific colleges\n` +
           `- Analyzing placement data\n\n` +
           `**To get started, tell me:**\n` +
           `- Your percentile (e.g., "I scored 95 percentile in CAT")\n` +
           `- Your budget (e.g., "My budget is 15 lakhs")\n` +
           `- Or both together: "95 percentile in CAT, budget 15 lakhs"`;
}

function calculateBreakEven(college) {
    const netSalary = college.avgSalary * 0.75;
    const years = college.fees / netSalary;
    return years.toFixed(2);
}
