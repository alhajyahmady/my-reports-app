// login.js
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("✅ Logged in successfully!");

      // Redirect based on role
      database.ref("users/" + user.uid + "/role").once("value").then(snapshot => {
        const role = snapshot.val();
        if (role === "manager") {
          window.location.href = "manager.html";
        } else {
          window.location.href = "report.html";
        }
      });
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});
