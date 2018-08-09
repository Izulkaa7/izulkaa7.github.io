function odliczanie()
{
    var odliczanieDo = new Date("8 Oct, 2018 15:37:25").getTime();
    var teraz = new Date().getTime();

    var odstepCzasu = odliczanieDo - teraz;

    var myDate = new Date(odstepCzasu);

    var dzien = myDate.getDate();

    var godzina = myDate.getHours();
    if (godzina<10) godzina = "0"+godzina;

    var minuta = myDate.getMinutes();
    if (minuta<10) minuta = "0"+minuta;

    var sekunda = myDate.getSeconds();
    if (sekunda<10) sekunda = "0"+sekunda;

    document.getElementById("dzien").innerHTML = dzien;
    document.getElementById("godzina").innerHTML = godzina;
    document.getElementById("minuta").innerHTML = minuta;
    document.getElementById("sekunda").innerHTML = sekunda;

  

    setTimeout(odliczanie,1000);
}

odliczanie();