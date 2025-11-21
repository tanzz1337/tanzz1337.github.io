// Fungsi pencarian item
function searchItem() {
    const searchId = document.getElementById('searchId').value.trim();
    const searchName = document.getElementById('searchName').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('errorMsg');

    // Reset tampilan
    resultDiv.classList.remove('show');
    resultsDiv.classList.remove('show');
    errorDiv.classList.remove('show');

    // Validasi input
    if (!searchId && !searchName) {
        showError('Silakan masukkan ID atau Nama item!');
        return;
    }

    // Cari item
    let foundItems = [];
    
    if (searchId) {
        // Cari berdasarkan ID dengan berbagai kemungkinan
        foundItems = items.filter(item => {
            const itemIdStr = item.id.toString();
            const searchIdStr = searchId.toString();
            
            return itemIdStr === searchIdStr || 
                   itemIdStr === '8700' + searchIdStr ||
                   itemIdStr.endsWith(searchIdStr);
        });
    } else if (searchName) {
        // Cari berdasarkan nama (partial match)
        foundItems = items.filter(item => item.name.toLowerCase().includes(searchName));
    }

    // Tampilkan hasil
    if (foundItems.length > 0) {
        if (foundItems.length === 1) {
            // Jika hanya 1 hasil, tampilkan detail lengkap
            displayItem(foundItems[0]);
        } else {
            // Jika lebih dari 1 hasil, tampilkan daftar
            displayMultipleItems(foundItems);
        }
    } else {
        showError('Periksa kembali ID atau nama item yang Anda masukkan.');
    }
}

// Fungsi menampilkan 1 item (detail lengkap)
function displayItem(item) {
    document.getElementById('itemId').textContent = item.id;
    document.getElementById('itemName').textContent = item.name;
    document.getElementById('itemImageName').textContent = item.image;
    document.getElementById('itemCategory').textContent = item.category;
    
    const imgElement = document.getElementById('itemImage');
    // Path ke folder images
    imgElement.src = `images/${item.image}`;
    imgElement.alt = item.name;
    
    // Jika gambar tidak ditemukan, gunakan placeholder
    imgElement.onerror = function() {
        this.onerror = null; // Prevent infinite loop
        this.src = `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(item.name)}`;
    };

    document.getElementById('result').classList.add('show');
}

// Fungsi menampilkan multiple items (daftar)
function displayMultipleItems(foundItems) {
    const resultsDiv = document.getElementById('results');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = foundItems.length;
    resultsContainer.innerHTML = '';
    
    foundItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.onclick = () => {
            // Scroll ke atas dan tampilkan detail
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                document.getElementById('results').classList.remove('show');
                displayItem(item);
            }, 300);
        };
        
        itemCard.innerHTML = `
            <img src="images/${item.image}" 
                 alt="${item.name}"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/150x150/667eea/ffffff?text=${encodeURIComponent(item.name)}'">
            <div class="item-card-info">
                <div class="item-card-id">ID: ${item.id}</div>
                <div class="item-card-name">${item.name}</div>
                <div class="item-card-category">${item.category}</div>
            </div>
        `;
        
        resultsContainer.appendChild(itemCard);
    });
    
    resultsDiv.classList.add('show');
}

// Fungsi menampilkan error
function showError(message) {
    const errorDiv = document.getElementById('errorMsg');
    const errorMessage = errorDiv.querySelector('.error-message');
    errorMessage.textContent = message;
    errorDiv.classList.add('show');
}

// Enter key untuk search
document.getElementById('searchId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchItem();
});

document.getElementById('searchName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchItem();
});

// Clear search saat input berubah
document.getElementById('searchId').addEventListener('input', function() {
    if (this.value.trim()) {
        document.getElementById('searchName').value = '';
    }
});

document.getElementById('searchName').addEventListener('input', function() {
    if (this.value.trim()) {
        document.getElementById('searchId').value = '';
    }
});