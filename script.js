const backendUrl = 'https://backend-for-git-bot-deployment.onrender.com'; // Replace with your backend URL

document.getElementById('deployForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const repoLink = document.getElementById('repoLink').value;

  const response = await fetch(`${backendUrl}/deploy`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ repo: repoLink }),
  });

  const data = await response.json();
  if (response.ok) {
    alert(`Bot deployed successfully! Session ID: ${data.sessionId}`);
  } else {
    alert(`Error: ${data.message || 'Failed to deploy bot'}`);
  }
});