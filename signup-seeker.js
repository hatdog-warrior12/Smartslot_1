function signUpSeeker() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return db.collection("users").doc(user.uid).set({
        role: "seeker",
        email: user.email
      });
    })
    .then(() => {
      window.location.href = "main-seeker.html";
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
}
