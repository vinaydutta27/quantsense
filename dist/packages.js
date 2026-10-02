(() => {
  const form = document.getElementById('package-filters');
  if (form) {
    const cards = [...document.querySelectorAll('.qs-card[data-package]')];
    const filter = () => {
      const query = form.elements.search.value.trim().toLowerCase();
      const group = form.elements.group.value;
      let count = 0;
      cards.forEach(card => {
        card.hidden = Boolean((group && card.dataset.group !== group) || (query && !card.textContent.toLowerCase().includes(query)));
        if (!card.hidden) count++;
      });
      document.getElementById('package-count').textContent = `${count} ${count === 1 ? 'package' : 'packages'} available`;
      document.getElementById('no-packages').hidden = count !== 0;
    };
    form.addEventListener('input', filter);
    form.addEventListener('submit', event => event.preventDefault());
    document.getElementById('reset-packages').addEventListener('click', () => { form.reset(); filter(); form.elements.search.focus(); });
    filter();
  }
  document.addEventListener('change', event => {
    if (!event.target.matches('.qs-checks input')) return;
    const container = event.target.closest('.qs-readiness');
    const inputs = [...container.querySelectorAll('.qs-checks input')];
    const count = inputs.filter(input => input.checked).length;
    container.querySelector('[role="status"]').textContent = count === inputs.length
      ? 'You recognise the starting concepts. Explore the preview and contents to decide whether this package fits your goal.'
      : `${count} of ${inputs.length} starting concepts checked. Use the free lessons to refresh any unfamiliar ideas, then revisit the preview.`;
    window.QSAnalytics?.track('package_readiness_check', {package_id:container.dataset.package, concepts_checked:count, placement:container.dataset.placement || 'product'});
  });
})();
