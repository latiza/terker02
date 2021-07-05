function szamol() {
    let hossza = parseInt(hossz.value);
    console.log(hossza);
    let szele = parseInt(szel.value);
    console.log(szele);

    document.getElementById("ter").value = hossza * szele;

    document.getElementById("ker").value = (hossza + szele) * 2;

    let elsoszo = elso.value;
    let masodikszo = masodik.value;
    document.getElementById("fuzott").value = elsoszo + " " + masodikszo

}