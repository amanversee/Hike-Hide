(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})





const searchInput = document.getElementById("liveSearch");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchValue = this.value.toLowerCase();
        const cards = document.querySelectorAll(".listing-item");

        cards.forEach(card => {
            const title = card.dataset.title;

            if (title.includes(searchValue)) {
                card.classList.remove("d-none");
            } else {
                card.classList.add("d-none");
            }
        });
    });
}


const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
    filter.addEventListener("click", () => {

        const category = filter.dataset.category;
        const trending = filter.dataset.trending;

        if (trending === "true") {
            window.location.href = "/listings?trending=true";
        } 
        else if (category) {
            window.location.href = `/listings?category=${encodeURIComponent(category)}`;
        }
    });
});


//
const suggestionsBox = document.getElementById("suggestionsBox");

if (searchInput && suggestionsBox) {

    searchInput.addEventListener("input", async function () {

        const value = this.value.trim();

        if (!value) {
            suggestionsBox.style.display = "none";
            suggestionsBox.innerHTML = "";
            return;
        }

        try {
            const res = await fetch(`/listings/suggestions?q=${encodeURIComponent(value)}`);
            const data = await res.json();

            suggestionsBox.innerHTML = "";

            if (data.length === 0) {
                suggestionsBox.style.display = "none";
                return;
            }

            data.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("suggestion-item");
                div.textContent = item.title;

                div.addEventListener("click", () => {
                    window.location.href = `/listings?q=${encodeURIComponent(item.title)}`;
                });

                suggestionsBox.appendChild(div);
            });

            suggestionsBox.style.display = "block";

        } catch (err) {
            console.error("Suggestion fetch error:", err);
        }
    });

   
    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = "none";
        }
    });
}


