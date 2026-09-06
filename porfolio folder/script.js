// Wait for the DOM to fully load before running any code
document.addEventListener("DOMContentLoaded", () => {

    // 1. Smooth scrolling for internal links (if you add any # links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 2. Highlight the current page's nav link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("header nav ul li a").forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // 3. Simple fade-in animation for sections on page load
    const sections = document.querySelectorAll("main section");
    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 200 * (index + 1));
    });

    // 4. Dynamic footer year (so you never have to update it manually)
    const footerText = document.querySelector("footer p");
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, currentYear);
    }

});