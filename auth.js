// Detect current page
const isSignup = window.location.pathname.includes('signup');
const isHost = window.location.pathname.includes('host');

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      if (isSignup) {
        // Sign up and store role
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        await db.collection('users').doc(cred.user.uid).set({
          role: isHost ? 'host' : 'seeker'
        });
        redirectByRole(isHost ? 'host' : 'seeker');
      } else {
        // Log in and read role
        const cred = await auth.signInWithEmailAndPassword(email, password);
        const doc = await db.collection('users').doc(cred.user.uid).get();
        if (doc.exists) {
          redirectByRole(doc.data().role);
        } else {
          alert('No role found for this user.');
        }
      }
    } catch (err) {
      alert(err.message);
    }
  });
}

// Redirect to dashboard
function redirectByRole(role) {
  if (role === 'host') {
    window.location.href = 'main-host.html';
  } else if (role === 'seeker') {
    window.location.href = 'main-seeker.html';
  }
}
