(() => {
  const goals = document.querySelector('.qs-goals');
  if (goals) {
    const choices = [...goals.querySelectorAll('[data-goal-choice]')];
    const panels = [...goals.querySelectorAll('[data-goal]')];
    const placement = goals.dataset.placement;
    goals.querySelector('.qs-goal-choices').setAttribute('role', 'tablist');
    choices.forEach(choice => {
      choice.setAttribute('role', 'tab');
      choice.setAttribute('aria-controls', `goal-${choice.dataset.goalChoice}`);
    });
    panels.forEach(panel => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `choose-goal-${panel.dataset.goal}`);
      panel.tabIndex = 0;
      const focus = panel.querySelector('[data-goal-focus]');
      if (focus) focus.closest('label').hidden = false;
    });
    const selectRoute = (panel, routeId) => {
      const routes = [...panel.querySelectorAll('[data-goal-route]')];
      const selected = routes.find(route => route.dataset.goalRoute === routeId) || routes[0];
      routes.forEach(route => { route.hidden = route !== selected; });
      const focus = panel.querySelector('[data-goal-focus]');
      if (focus) focus.value = selected.dataset.goalRoute;
      return selected;
    };
    panels.forEach(panel => selectRoute(panel));
    const selectGoal = (id, routeId) => {
      const selected = panels.find(panel => panel.dataset.goal === id) || panels[0];
      panels.forEach(panel => { panel.hidden = panel !== selected; });
      choices.forEach(choice => {
        const active = choice.dataset.goalChoice === selected.dataset.goal;
        choice.setAttribute('aria-selected', String(active));
        choice.tabIndex = active ? 0 : -1;
      });
      if (routeId) selectRoute(selected, routeId);
      return selected;
    };
    const fromHash = () => {
      const id = location.hash.slice(1);
      const panel = panels.find(panel => panel.id === id || [...panel.querySelectorAll('[id]')].some(node => node.id === id));
      if (!panel) return;
      const route = [...panel.querySelectorAll('[data-goal-route]')].find(route => route.id === id);
      selectGoal(panel.dataset.goal, route?.dataset.goalRoute);
    };
    const updateHash = panel => {
      const route = panel.querySelector('[data-goal-route]:not([hidden])');
      history.replaceState(history.state, '', `#${route.id || panel.id}`);
    };
    selectGoal(choices[0].dataset.goalChoice);
    fromHash();
    window.addEventListener('hashchange', fromHash);
    choices.forEach((choice, index) => {
      choice.addEventListener('click', event => {
        event.preventDefault();
        const panel = selectGoal(choice.dataset.goalChoice);
        updateHash(panel);
        window.QSAnalytics?.track('career_goal_select', {goal_id:panel.dataset.goal, placement});
      });
      choice.addEventListener('keydown', event => {
        const next = {ArrowRight:(index+1)%choices.length, ArrowLeft:(index+choices.length-1)%choices.length, Home:0, End:choices.length-1}[event.key];
        if (next === undefined) return;
        event.preventDefault();
        choices[next].focus();
        choices[next].click();
      });
    });
    goals.addEventListener('change', event => {
      if (!event.target.matches('[data-goal-focus]')) return;
      const panel = event.target.closest('[data-goal]');
      const route = selectRoute(panel, event.target.value);
      updateHash(panel);
      window.QSAnalytics?.track('career_goal_focus_select', {goal_id:panel.dataset.goal, path_id:route.dataset.goalRoute, placement});
    });
    goals.addEventListener('click', event => {
      const link = event.target.closest('[data-goal-step]');
      if (!link) return;
      window.QSAnalytics?.track('career_path_step', {
        goal_id:link.closest('[data-goal]').dataset.goal,
        path_id:link.closest('[data-goal-route]').dataset.goalRoute,
        module_id:link.dataset.module,
        step:Number(link.dataset.goalStep),
        placement
      });
    });
  }
  const form = document.getElementById('package-filters');
  if (form) {
    const cards = [...document.querySelectorAll('#all-packages .qs-card[data-package]')];
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
