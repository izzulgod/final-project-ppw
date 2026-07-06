/**
 * Warehouse Inventory System
 * JavaScript Logic with LocalStorage Integration
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Initialization ---
    const defaultData = [
        { sku: "SKU-1001", name: "Laptop ASUS ROG Zephyrus", category: "Elektronik", stock: 24, price: 24500000 },
        { sku: "SKU-1002", name: "Monitor Dell UltraSharp 27\"", category: "Elektronik", stock: 5, price: 8200000 },
        { sku: "SKU-1003", name: "Kursi Ergonomis Herman Miller", category: "Perabotan", stock: 0, price: 18000000 },
        { sku: "SKU-1004", name: "Keyboard Mechanical Keychron", category: "Aksesoris", stock: 45, price: 1500000 },
        { sku: "SKU-1005", name: "Meja Kerja Adjustable IKEA", category: "Perabotan", stock: 12, price: 3500000 }
    ];

    let inventoryData = JSON.parse(localStorage.getItem('nexaInventory'));
    if (!inventoryData) {
        inventoryData = defaultData;
        localStorage.setItem('nexaInventory', JSON.stringify(inventoryData));
    }

    // Helper functions
    const saveToLocalStorage = (data) => {
        localStorage.setItem('nexaInventory', JSON.stringify(data));
        inventoryData = data;
    };

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    };

    const getStatusBadge = (stock) => {
        if (stock === 0) return '<span class="badge badge-danger">Kosong</span>';
        if (stock <= 5) return '<span class="badge badge-warning">Hampir Habis</span>';
        return '<span class="badge badge-success">Tersedia</span>';
    };


    // ---------------------------------------------------------
    // LOGIC 1: Real-time Clock & Dashboard Stats
    // ---------------------------------------------------------
    const clockElement = document.getElementById('realtime-clock');
    const greetingElement = document.getElementById('dynamic-greeting');

    if (clockElement) {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            clockElement.textContent = timeString;

            if (greetingElement) {
                const hour = now.getHours();
                let greeting = 'Selamat Malam';
                if (hour >= 5 && hour < 12) greeting = 'Selamat Pagi';
                else if (hour >= 12 && hour < 15) greeting = 'Selamat Siang';
                else if (hour >= 15 && hour < 18) greeting = 'Selamat Sore';
                
                if(!greetingElement.textContent.includes(greeting)){
                     greetingElement.innerHTML = `${greeting}, <strong>Admin Gudang</strong> 👋`;
                }
            }
        };
        updateClock();
        setInterval(updateClock, 1000);

        // Update Dashboard Stats dynamically
        const statTotal = document.getElementById('statTotal');
        const statSafe = document.getElementById('statSafe');
        const statWarning = document.getElementById('statWarning');
        const statDanger = document.getElementById('statDanger');

        if (statTotal) {
            let total = inventoryData.length;
            let safe = 0, warning = 0, danger = 0;

            inventoryData.forEach(item => {
                if (item.stock === 0) danger++;
                else if (item.stock <= 5) warning++;
                else safe++;
            });

            statTotal.textContent = total.toLocaleString();
            statSafe.textContent = safe.toLocaleString();
            statWarning.textContent = warning.toLocaleString();
            statDanger.textContent = danger.toLocaleString();
        }
    }

    // ---------------------------------------------------------
    // LOGIC 2: Table Rendering, Search, Edit & Delete
    // ---------------------------------------------------------
    const tableBody = document.getElementById('inventoryTableBody');
    const searchInput = document.getElementById('searchItem');
    
    // Edit Modal Elements
    const editModalEl = document.getElementById('editModal');
    let editModalInstance = null;
    if (editModalEl) {
        editModalInstance = new bootstrap.Modal(editModalEl);
    }
    const saveEditBtn = document.getElementById('saveEditBtn');

    const renderTable = (dataToRender) => {
        if (!tableBody) return;
        tableBody.innerHTML = '';
        
        if (dataToRender.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">Data tidak ditemukan.</td></tr>`;
            return;
        }

        dataToRender.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="fw-medium">${item.sku}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>${formatRupiah(item.price)}</td>
                <td>${getStatusBadge(item.stock)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary edit-btn" data-sku="${item.sku}" title="Edit"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger delete-btn" data-sku="${item.sku}" title="Hapus"><i class="bi bi-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        // Re-attach event listeners for newly created buttons
        attachTableActionListeners();
    };

    const attachTableActionListeners = () => {
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const sku = this.getAttribute('data-sku');
                if (confirm(`Apakah Anda yakin ingin menghapus barang dengan SKU ${sku}?`)) {
                    const newData = inventoryData.filter(item => item.sku !== sku);
                    saveToLocalStorage(newData);
                    renderTable(newData);
                }
            });
        });

        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const sku = this.getAttribute('data-sku');
                const item = inventoryData.find(i => i.sku === sku);
                if (item) {
                    document.getElementById('editItemSku').value = item.sku;
                    document.getElementById('editItemName').value = item.name;
                    document.getElementById('editItemCategory').value = item.category;
                    document.getElementById('editItemStock').value = item.stock;
                    document.getElementById('editItemPrice').value = item.price;
                    editModalInstance.show();
                }
            });
        });
    };

    // Initial render
    if (tableBody) {
        renderTable(inventoryData);
    }

    // Search filter logic
    if (searchInput && tableBody) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredData = inventoryData.filter(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.sku.toLowerCase().includes(searchTerm)
            );
            renderTable(filteredData);
        });
    }

    // Save Edit logic
    if (saveEditBtn) {
        saveEditBtn.addEventListener('click', () => {
            const sku = document.getElementById('editItemSku').value;
            const itemIndex = inventoryData.findIndex(i => i.sku === sku);
            
            if (itemIndex > -1) {
                inventoryData[itemIndex].name = document.getElementById('editItemName').value;
                inventoryData[itemIndex].category = document.getElementById('editItemCategory').value;
                inventoryData[itemIndex].stock = parseInt(document.getElementById('editItemStock').value);
                inventoryData[itemIndex].price = parseInt(document.getElementById('editItemPrice').value);
                
                saveToLocalStorage(inventoryData);
                renderTable(inventoryData);
                editModalInstance.hide();
            }
        });
    }

    // ---------------------------------------------------------
    // LOGIC 3: Form Validation & Add to LocalStorage
    // ---------------------------------------------------------
    const addItemForm = document.getElementById('addItemForm');
    
    if (addItemForm) {
        addItemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const itemName = document.getElementById('itemName').value.trim();
            const itemCategory = document.getElementById('itemCategory').value;
            const itemStock = parseInt(document.getElementById('itemStock').value);
            const itemPrice = parseInt(document.getElementById('itemPrice').value);

            let isValid = true;
            let errorMessage = '';

            if (itemName === '') {
                isValid = false;
                errorMessage = 'Nama barang tidak boleh kosong.';
            } else if (itemCategory === '') {
                isValid = false;
                errorMessage = 'Silakan pilih kategori barang.';
            } else if (isNaN(itemStock) || itemStock < 0) {
                isValid = false;
                errorMessage = 'Jumlah stok harus berupa angka dan tidak boleh negatif.';
            } else if (isNaN(itemPrice) || itemPrice <= 0) {
                isValid = false;
                errorMessage = 'Harga barang tidak valid.';
            }

            const alertContainer = document.getElementById('alertContainer');
            
            if (!isValid) {
                alertContainer.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Gagal!</strong> ${errorMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
            } else {
                // Generate next SKU
                const nextSkuNumber = inventoryData.length > 0 
                    ? Math.max(...inventoryData.map(i => parseInt(i.sku.split('-')[1]))) + 1 
                    : 1001;
                const newSku = `SKU-${nextSkuNumber}`;

                const newItem = {
                    sku: newSku,
                    name: itemName,
                    category: itemCategory,
                    stock: itemStock,
                    price: itemPrice
                };

                inventoryData.push(newItem);
                saveToLocalStorage(inventoryData);

                alertContainer.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Berhasil!</strong> Barang "${itemName}" telah ditambahkan dengan ${newSku}. <a href="items.html" class="alert-link">Lihat Daftar Barang</a>.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                addItemForm.reset();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
