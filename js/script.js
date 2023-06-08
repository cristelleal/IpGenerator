function generateIP() {
  const randomNumber = Math.floor(Math.random() * 255);
  const randomNumberTwo = Math.floor(Math.random() * 255);
  const randomNumberThree = Math.floor(Math.random() * 255);
  const randomNumberFour = Math.floor(Math.random() * 255);

  const ip = `${randomNumber}.${randomNumberTwo}.${randomNumberThree}.${randomNumberFour}`;
  return ip;
}

function generateIPs() {
  const inputCount = document.getElementById("inputCount").value;
  const ipList = document.getElementById("ipList");
  const copyBtn = document.querySelector('.copy');
  ipList.innerHTML = ""; 

  for (let i = 0; i < inputCount; i++) {
    const ip = generateIP();
    const listItem = document.createElement("li");
    
    listItem.textContent = ip;
    ipList.appendChild(listItem);
  }

  if (inputCount > 0) {
    ipList.style.padding = '1rem';
    ipList.style.backgroundColor = '#ffffff';
    ipList.style.boxShadow = 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px';
    copyBtn.style.display = 'block';
  } else {
    ipList.style.padding = '0';
    ipList.style.backgroundColor = 'initial';
    ipList.style.boxShadow = 'none';
    copyBtn.style.display = 'none';
  }
}

function copyIPs() {
  const ipList = document.getElementById("ipList");
  const ipText = ipList.innerText;

  navigator.clipboard.writeText(ipText)
    .then(() => {
      const copyBtn = document.getElementById("copyBtn");
      copyBtn.textContent = "Copié ✔️";    
      setTimeout(() => {
        copyBtn.textContent = "Copier 🗎";
      }, 3000);
    })
    .catch((error) => {
      console.error("Erreur lors de la copie des adresses IP :", error);
    });
}

window.onload = function() {
  console.log(generateIP());
}

