// Ganti URL di bawah dengan URL Web App Google Apps Script Anda
defaultScriptUrl = 'https://script.google.com/macros/s/AKfycbyiy3UELCTHqH1nSo7WbQCiDk2u21hfLQW3AKBC2nMqboIK7cPvnHX0awlJj1fcEkXH/exec';

async function apiRequest(data, scriptUrl) {
  const url = scriptUrl || defaultScriptUrl;
  const form = new FormData();
  for (const key in data) form.append(key, data[key]);
  const res = await fetch(url, {
    method: 'POST',
    body: form
  });
  return await res.json();
} 