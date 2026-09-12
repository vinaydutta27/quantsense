(() => {
  const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  window.renderLearning = id => {
    const content = window.LEARNING_CONTENT[id];
    const target = document.getElementById('learning');
    if (!target || !content) return;
    target.innerHTML = `
      <section class="intuition-section" aria-labelledby="intuition-heading">
        <div class="learning-heading"><span class="mini">GO BEYOND THE FORMULA</span><h2 id="intuition-heading">Build the intuition</h2></div>
        <div class="intuition-copy">${content.intuition.map(text => `<p>${escape(text)}</p>`).join('')}</div>
      </section>
      <section class="question-section" aria-labelledby="questions-heading">
        <div class="question-heading"><div><span class="mini">CHECK YOUR UNDERSTANDING</span><h2 id="questions-heading">Ten questions to think through</h2></div><span class="question-badge">10 thought experiments</span></div>
        <p class="question-guide">Answer in your own words, or use the sliders to explore. Open a question to compare your reasoning with a suggested answer.</p>
        <ol class="concept-questions">${content.questions.map(([question, answer], i) => `
          <li><details><summary><span class="question-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><span>${escape(question)}</span><span class="question-toggle" aria-hidden="true">+</span></summary><div class="suggested-answer"><strong>A way to think about it</strong><p>${escape(answer)}</p></div></details></li>`).join('')}
        </ol>
      </section>`;
  };
})();
