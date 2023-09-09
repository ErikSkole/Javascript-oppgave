checkPassword = (passord) => {
    if (passord.length < 10){
        return "Passordet må være minst 10 tegn"
    } else if (!/[a-å]/.test(passord)) {
        return "Passordet må ha minst én liten bokstav"
    } else if (!/[A-Å]/.test(passord)) {
        return "Passordet må ha minst én stor bokstav"
    } else if (!/[0-9]/.test(passord)) {
        return "Passordet må ha minst ett tall"
    } else if (!/[@#$%^/&+=!]/.test(passord)) {
        return "Passordet må ha minst ett spesialtegn"
    } 
};

clearForm = () => {
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    document.getElementById('input4').value = "";
    document.getElementById('input5').value = "";
    document.getElementById('input6').value = "";
    document.getElementById('input7').value = "";
};

getInfo = () => {
    let passord = document.getElementById('input7').value

    const passordError = checkPassword(passord)

    if (passordError) {
        document.getElementById("errorMessage").innerHTML = passordError
    } else {
        document.getElementById("errorMessage").innerHTML = ""
        
        const personInfo = [
            document.getElementById('input1').value,
            document.getElementById('input2').value,
            document.getElementById('input3').value,
            document.getElementById('input4').value,
            document.getElementById('input5').value,
            document.getElementById('input6').value,
            document.getElementById('input7').value,
        ]
        console.log(personInfo)

        clearForm()

        document.getElementById("personInfoForm").style.display="none"
        document.getElementById("resultat").style.display="flex"
        document.getElementById("tilbakeKnapp").style.display="flex"
        
        let sluttResultat

        for (let i = 0; i < personInfo.length;) {
            if (i == 0) {
                sluttResultat = `Fornavn: ${personInfo[i]} <br/>`
            } else if (i == 1) {
                sluttResultat += `Etternavn: ${personInfo[i]} <br/>`
            } else if (i == 2) {
                sluttResultat += `Adresse: ${personInfo[i]} <br/>`
            } else if (i == 3) {
                sluttResultat += `Postnummer: ${personInfo[i]} <br/>`
            } else if (i == 4) {
                sluttResultat += `Poststed: ${personInfo[i]} <br/>`
            } else if (i == 5) {
                sluttResultat += `Tlf: ${personInfo[i]} <br/>`
            } else if (i == 6) {
                sluttResultat += `Passord: ${personInfo[i]} <br/>`
            } 
            i++;
        }  

        document.getElementById("resultatTekst").innerHTML = sluttResultat

        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => document.getElementById("resultatTekst").innerHTML += data.ip)
    }
};

draTilbake = () => {
    document.getElementById("personInfoForm").style.display="flex"
    document.getElementById("resultat").style.display="none"
    document.getElementById("tilbakeKnapp").style.display="none"
};

