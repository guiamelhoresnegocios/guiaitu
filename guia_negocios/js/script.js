// Buscador de Anúncios
document.getElementById('searchInput').addEventListener('keyup', filterResults);
document.getElementById('categoryFilter').addEventListener('change', filterResults);
document.getElementById('districtFilter').addEventListener('change', filterResults);

function filterResults() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let category = document.getElementById('categoryFilter').value.toLowerCase();
    let district = document.getElementById('districtFilter').value.toLowerCase();

    let items = document.querySelectorAll('.business-item');
    items.forEach(function(item) {
        let name = item.querySelector('.business-name').textContent.toLowerCase();
        let itemCategory = item.querySelector('.business-category').textContent.toLowerCase();
        let itemDistrict = item.querySelector('.business-district').textContent.toLowerCase();

        if (
            name.includes(searchTerm) &&
            (category === "" || itemCategory.includes(category)) &&
            (district === "" || itemDistrict.includes(district))
        ) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
