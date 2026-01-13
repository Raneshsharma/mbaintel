const chatWindow = document.getElementById("chat-window");
const input = document.getElementById("chat-input");

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    const reply = getBotResponse(message.toLowerCase());
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `chat-message ${sender}`;
  div.innerHTML = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(msg) {

  /* CAT percentile logic */
  if (msg.includes("85") && msg.includes("cat")) {
    const matches = colleges.filter(
      c => c.exams.includes("CAT") && c.tier !== "Tier I"
    );
    return `
      With ~85 CAT percentile, target these colleges:<br>
      ${matches.slice(0,5).map(c => c.name).join("<br>")}
      <br><br>
      👉 See full list: <a href="colleges.html">Colleges Hub</a>
    `;
  }

  /* ROI logic */
  if (msg.includes("roi")) {
    const bestROI = colleges
      .filter(c => c.fees <= 20 && c.avgPackage >= 14)
      .slice(0,5);

    return `
      Colleges with strong ROI include:<br>
      ${bestROI.map(c => `${c.name} (₹${c.fees}L → ₹${c.avgPackage} LPA)`).join("<br>")}
      <br><br>
      👉 Compare them here: <a href="compare.html">Compare Colleges</a>
    `;
  }

  /* Tier comparison */
  if (msg.includes("tier 2") && msg.includes("tier 3")) {
    return `
      Tier 2 colleges usually offer:<br>
      • Better roles<br>
      • Higher ROI<br>
      • Stronger alumni<br><br>
      Many Tier 2 colleges outperform Tier 3 significantly.
    `;
  }

  return `
    I can help with:<br>
    • College shortlisting<br>
    • ROI comparison<br>
    • Exam-based eligibility<br><br>
    Try asking: “Best colleges for CMAT” or “Good ROI MBA colleges”.
  `;
}
