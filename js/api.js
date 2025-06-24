// Ganti URL di bawah dengan URL Web App Google Apps Script Anda
defaultScriptUrl = 'https://script.google.com/macros/s/AKfycbw_tf9zJYsL20b5fyJ6bCbza7V3Kt-Z9R5Nz_9OBRW5x_UBKG2jLF8DZEFK4B5kRdaK/exec';

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