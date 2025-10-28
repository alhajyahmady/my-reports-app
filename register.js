// register.js
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("fullName").value;

  // Create user in Firebase Authentication
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save extra user info in Realtime Database
      return database.ref("users/" + user.uid).set({
        fullName: fullName,
        email: email,
        role: "user", // default role
        createdAt: new Date().toISOString()
      });
    })
    .then(() => {
      alert("✅ Registration successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});
