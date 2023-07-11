const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const convertValue = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueTexte = document.getElementById('currency-value-texte')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high


    currencyValueTexte.innerHTML = (inputReais / dolar).toFixed(2)
    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        currencyValueTexte.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format((inputReais / dolar).toFixed(2));
    }

    if (select.value === '€ Euro') {
        currencyValueTexte.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format((inputReais / euro).toFixed(2));
    }

    if (select.value === '₿ Bitcoin') {
        currencyValueTexte.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format((inputReais / bitcoin).toFixed(2));
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = './assets/euro.png'
    }

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "US$ Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets//bitcoin.png"
    }

    return convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)

