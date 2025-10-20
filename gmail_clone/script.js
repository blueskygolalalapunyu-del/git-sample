document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const lists = document.querySelectorAll('.article-list');

  const setActiveTab = (targetId) => {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.target === targetId);
    });
    lists.forEach((list) => {
      list.classList.toggle('active', list.id === targetId);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => setActiveTab(tab.dataset.target));
  });

  const firstActive = document.querySelector('.tab.active');
  if (firstActive) {
    setActiveTab(firstActive.dataset.target);
  }
});
