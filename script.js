// Sample data for dropdown population and shop results
const data = {
  jharkhand: {
    dhanbad: ['Jharia', 'Katras'],
    ranchi: ['Lalpur', 'Kanke']
  },
  delhi: {
    central: ['Connaught Place', 'Karol Bagh'],
    south: ['Saket', 'Hauz Khas']
  },
  kerala: {
    ernakulam: ['Kochi', 'Aluva'],
    trivandrum: ['Kovalam', 'Palayam']
  }
};

// Populate district dropdown
function populateDistricts() {
  const state = document.getElementById("state").value;
  const districtSelect = document.getElementById("district");
  const citySelect = document.getElementById("city");

  districtSelect.innerHTML = "<option value=''>Select District</option>";
  citySelect.innerHTML = "<option value=''>Select City/Block</option>";

  if (data[state]) {
    for (const district in data[state]) {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district.charAt(0).toUpperCase() + district.slice(1);
      districtSelect.appendChild(option);
    }
  }
}

// Populate city/block dropdown
function populateCities() {
  const state = document.getElementById("state").value;
  const district = document.getElementById("district").value;
  const citySelect = document.getElementById("city");

  citySelect.innerHTML = "<option value=''>Select City/Block</option>";

  if (data[state] && data[state][district]) {
    data[state][district].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

// Dummy shop search result
function findShops() {
  const state = document.getElementById("state").value;
  const district = document.getElementById("district").value;
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("shop-results");

  if (state && district && city) {
    resultDiv.innerHTML = `
      <p><strong>Top Shops in ${city}, ${district}, ${state}:</strong></p>
      <ul>
        <li>Cool Soda Point - Coca-Cola, Sprite</li>
        <li>Quick Bites - Chaat, Samosa, Cold Drinks</li>
        <li>Smart PG - For Boys & Girls</li>
      </ul>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">Please select state, district, and city.</p>`;
  }
}

// Shopkeeper login logic (dummy)
function shopLogin(event) {
  event.preventDefault();
  alert("Login succes
