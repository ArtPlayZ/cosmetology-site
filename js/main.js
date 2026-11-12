document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger) burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('active');
  });

  const filters = document.querySelectorAll('#filters .filter');
  if (filters.length) {
    filters.forEach(f => f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      const key = f.dataset.filter;
      document.querySelectorAll('#productGrid .product-card').forEach(card => {
        const match = key === 'all' || card.dataset.skin === key || card.dataset.concern === key;
        card.style.display = match ? '' : 'none';
      });
    }));
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.tabs');
      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const target = document.querySelector('#' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  const consultForm = document.querySelector('#consultForm');
  if (consultForm) consultForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Заявка отправлена. Мы свяжемся с вами в течение 24 часов.');
    consultForm.reset();
  });

  const bookingForm = document.querySelector('#bookingForm');
  if (bookingForm) bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Вы записаны. Подтверждение придёт на почту и по SMS.');
    bookingForm.reset();
  });

  const adminForm = document.querySelector('#adminForm');
  const adminList = document.querySelector('#adminList');
  if (adminForm && adminList) {
    const render = () => {
      const items = JSON.parse(localStorage.getItem('cosmo_products') || '[]');
      adminList.innerHTML = items.map((p,i) => (
        '<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:1rem">' +
          '<div><strong>' + p.name + '</strong><br><small>' + p.brand + ' · ' + p.price + ' руб.</small></div>' +
          '<button class="btn btn-sm" onclick="removeProduct(' + i + ')">Удалить</button>' +
        '</div>'
      )).join('') || '<p style="color:var(--muted)">Пока пусто</p>';
    };
    window.removeProduct = i => {
      const items = JSON.parse(localStorage.getItem('cosmo_products') || '[]');
      items.splice(i,1);
      localStorage.setItem('cosmo_products', JSON.stringify(items));
      render();
    };
    adminForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(adminForm);
      const items = JSON.parse(localStorage.getItem('cosmo_products') || '[]');
      items.push({name:fd.get('name'),brand:fd.get('brand'),price:fd.get('price')});
      localStorage.setItem('cosmo_products', JSON.stringify(items));
      adminForm.reset();
      render();
    });
    render();
  }
});