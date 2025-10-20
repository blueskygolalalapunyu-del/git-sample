// 軽いインタラクション: メニュー押下でサイドバーの表示/非表示
document.addEventListener('DOMContentLoaded', function(){
  const menu = document.querySelector('.menu');
  const sidebar = document.querySelector('.sidebar');
  if(menu && sidebar){
    menu.addEventListener('click', ()=>{
      if(sidebar.style.display === 'none') sidebar.style.display = 'flex';
      else sidebar.style.display = 'none';
    });
  }
  
  // 詳細ペインロジック
  const emails = document.getElementById('emails');
  const detail = document.getElementById('detail');
  const detailClose = document.getElementById('detail-close');

  function openDetail(from, subject, time, content){
    document.getElementById('detail-from').textContent = from;
    document.getElementById('detail-subject').textContent = subject;
    document.getElementById('detail-time').textContent = time;
    document.getElementById('detail-content').textContent = content;
    detail.classList.add('open');
  }

  function closeDetail(){
    detail.classList.remove('open');
  }

  // メール行にクリックハンドラを付与
  if(emails){
    emails.querySelectorAll('.email').forEach(row=>{
      row.addEventListener('click', function(e){
        // チェックボックスやスタークリックは無視
        if(e.target.tagName.toLowerCase() === 'input' || e.target.classList.contains('star')) return;
        const from = row.querySelector('.from')?.textContent || '不明な送信者';
        const subject = row.querySelector('.subject')?.textContent || '（件名なし）';
        const time = row.querySelector('.time')?.textContent || '';
        const content = subject + '\n\n' + 'これはサンプルのメール本文です。実際の本文をここに表示します。';
        openDetail(from, subject, time, content);
      });
    });
  }

  if(detailClose){
    detailClose.addEventListener('click', closeDetail);
  }
});