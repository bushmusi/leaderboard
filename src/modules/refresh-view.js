export default async (scores) => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  scores.forEach((element) => {
    const tr = document.createElement('tr');
    const tdUser = document.createElement('td');
    const tdScore = document.createElement('td');
    tdUser.textContent = element.user;
    tdScore.textContent = element.score;
    [tdUser, tdScore].forEach((element) => tr.appendChild(element));
    tbody.appendChild(tr);
  });
};