function loginSeeker() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return db.collection("users").doc(user.uid).get();
    })
    .then((doc) => {
      if (doc.exists && doc.data().role === "seeker") {
        window.location.href = "main-seeker.html";
      } else {
        throw new Error("This account is not registered as a seeker.");
      }
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
}
