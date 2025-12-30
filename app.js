async function send() {
  const text = msg.value;
  if (!text) return;

  chat.innerHTML += `<div class="user">${text}</div>`;
  msg.value = "";

  const res = await fetch(
    "https://n8n-oazxlbnc.us-west-1.clawcloudrun.com/webhook/dcf55298-595e-4fe9-9669-176f0ef157dd/chat",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    }
  );

  const data = await res.json();
  chat.innerHTML += `<div class="bot">${data.reply || data}</div>`;
}
