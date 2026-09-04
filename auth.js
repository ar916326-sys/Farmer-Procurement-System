document.addEventListener("DOMContentLoaded", () => {

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const village = document.getElementById("village").value.trim();
        const district = document.getElementById("district").value.trim();

        // Mobile validation
        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        try {

            const response = await fetch("http://localhost:5000/api/farmers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    mobile: mobile,
                    village: village,
                    district: district
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Registration failed");
                return;
            }

            alert("Registration successful! Please login.");

            window.location.href = "login.html";

        } catch (error) {

            console.error(error);

            alert("Server connection failed. Please check backend.");

        }

    });

}


    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function(e) {

            e.preventDefault();

            const mobile =
                document.getElementById("loginMobile").value;

            if (!/^[0-9]{10}$/.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            alert("Login successful!");

            // Temporary dashboard redirect
            // Later this will be connected to backend authentication.
            
            
        });
    }

});
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FARMER REGISTRATION
    // =========================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            const village = document.getElementById("village").value.trim();
            const district = document.getElementById("district").value.trim();
            const state = document.getElementById("state").value;
            const crop = document.getElementById("crop").value;
            const password = document.getElementById("password").value;

            // Mobile validation
            if (!/^[0-9]{10}$/.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            // Password validation
            if (password.length < 4) {
                alert("Password must be at least 4 characters.");
                return;
            }

            try {

                const response = await fetch(
                    "http://localhost:5000/api/farmers",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            name: name,
                            mobile: mobile,
                            village: village,
                            district: district,
                            state: state,
                            crop: crop,
                            password: password
                        })
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    alert(data.error || "Registration failed.");
                    return;
                }

                alert(
                    "Registration successful! Farmer ID: " +
                    data.farmer_id +
                    "\nPlease login."
                );

                // Login page par redirect
                window.location.href = "login.html";

            } catch (error) {

                console.error("Registration Error:", error);

                alert(
                    "Server se connection nahi ho pa raha.\n" +
                    "Please check backend server."
                );
            }
        });
    }


    // =========================
    // FARMER LOGIN
    // =========================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const mobile =
                document.getElementById("loginMobile").value.trim();

            const password =
                document.getElementById("loginPassword").value;

            // Mobile validation
            if (!/^[0-9]{10}$/.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            if (!password) {
                alert("Please enter your password.");
                return;
            }

            // Temporary login
            // Backend authentication next step me connect karenge

            alert("Login successful!");

            window.location.href = "dashboard.html";
        });
    }

});