import './App.css'
import React from 'react'
import BackToTopBtn from './BackToTopBtn'

const Vuokrausehdot = () => {
    return(
        <div className='divEhdot'>           
            <h2 className='titleName'>VUOKRAUSEHDOT</h2>
            <div className='flexbox-container'>
                <div className='flexbox-item'>
                    <section>
                    <h5>1. KULJETTAJA</h5>
                        <p>Vuokraaja sitoutuu itse kuljettamaan autoa. Vuokraajalta eli kuljettajalta edellytetään vähintään 21 vuoden ikää 
                        ja B-luokan ajokorttia.
                        Autoa noudettaessa vuokraajan on esitettävä voimassa oleva ajokortti ja henkilöllisyystodistus (passi).</p>
                        <h5>2. TUPAKOINTI, LEMMIKIT, FESTARIT</h5>
                        <p>Tupakointi on ehdottomasti kielletty. Laiminlyönnistä peritään 500 € lisämaksu.<br/>
                        Eläinten päästäminen autoon on kielletty. Laiminlyönnistä peritään siivousmaksu 250 €.<br/>
                        Autoa ei vuokrata festarikäyttöön.</p>
                        <h5>3. MATKAILUAUTON VIEMINEN SUOMEN RAJOJEN ULKOPUOLELLE</h5>
                        <p>Matkailuauton vieminen Suomen valtakunnan rajojen ulkopuolelle ilman vuokraamon lupaa on kielletty.
                        Matkailuauton vieminen ulkomaille sovitaan aina tapauskohtaisesti ja lupa auton ulkomaille viemiseen kirjataan vuokrasopimukseen.</p>
                        <h5>4. VARAAMINEN</h5>
                        <p>Vuokra-aika alkaa matkailuauton luovutushetkestä, tai erikseen kirjallisesti sovitusta muusta ajankohdasta.<br/>
                        Vuokrasopimus allekirjoitetaan auton noudon yhteydessä.
                        Kesäaikana 1.6 - 31.8 ja talvella 20.12 - 10.01 lyhin vuokrausaika on yksi viikko mutta aina voi kysyä jos kalenterissa on vapaita aikoja. Kesäajan ulkopuolella minimi vuokrausaika on 2 päivää. 
                        Vuokra-aika alkaa yleensä klo 17:00 ja päättyy klo 13:00.<br/>
                        Oman auton voi jättää säilytykseen vuokrauksen ajaksi vuokraamon pihaan. Alueella on kameravalvonta.</p>
                        <h5>5. VARAUSMAKSU / PANTTI</h5>
                        <p>Varausmaksu eli pantti on 300 €. Varausmaksun lasku lähetettään varauksen jälkeen sähköpostitse ja se on maksettavissa heti. 
                        Mikäli varausmaksu ei ole suoritettu kolmen päivän kuluessa varaus purkautuu. Varausmaksu toimii samalla panttina, joka maksetaan vuokraajalle takaisin,
                        kun auto on palautettu sovittuna aikana siivottuna, astiat tiskattuna, tankattuna, kaasupullot täytettynä ja muutoinkin siinä kunnossa, 
                        kun auto oli asiakkaalle vuokra-ajan alussa luovutushetkellä.</p>
                        <h5>6. VUOKRAN MAKSU</h5>
                        <p>Vuokran maksu lähetettään sähköpotissa sen jälkeen kuin varausmaksu on maksettu. Koko vuokrasumma tulee olla maksettuna ja 
                        näkyä vuokranantajan pankkitilillä viimeistään 14 päivää ennen vuokra-ajan alkamista.<br/> 
                        Mikäli varausajankohta on vähemmän kuin 14 vrk ennen vuokra-ajan alkamista, tulee varausmaksu ja vuokra maksaa heti. 
                        Mikäli vuokraus ei toteudu ja siitä ilmoitetaan yli 14 vrk ennen vuokrauksen alkamista, varausmaksu 300 euroa palautetaan vuokraajalle vähennettynä 100 € järjestelykululla. 
                        Mikäli vuokraa ei ole maksettu määräaikaan mennessä, varaus peruuntuu eikä varausmaksua ei palauteta.</p>
                        <h5>7. VARAUKSEN PURKAMINEN</h5>
                        <p>Vuokranantajalla on oikeus purkaa sopimus välittömästi, jos käy ilmi, että vuokraaja rikkoo olennaisesti sopimusehtoja. 
                        Vuokraaja on tällöin velvollinen välittömästi palauttamaan auton kaikkine varusteineen sovittuun palautuspaikkaan. 
                        Kumpi tahansa osapuoli voi purkaa sopimuksen, mikäli auto varastetaan tai autoon tulee vuokraajan vastuulla oleva auton käytön estävä vika.<br/>
                        Vuokranantaja pidättää itsellään oikeuden perua varaus ilman korvausvelvollisuutta milloin tahansa ennen sovittua autonvuokrausta, 
                        jos autoa ei voida luovuttaa vuokranantajasta riippumattomasta syystä, esimerkiksi kuin auto on vaurioitunut liikennekelvottomaan kuntoon.</p>                    
                        <h5>8. VUOKRAAN SISÄLTYY</h5>
                        <p>Auton käyttö vuokra-ajaksi. Käytönopastus, sovittu ajokilometrimäärä, tankit täydetty (disel, AdBlue), wc-kemikaalit, yksi täysi kaasupullo, täysi vesitankki, auton vakuutus 700€ omavastuulla, 
                        auton ulkopesu (AUTOA EI SAA PESTÄ ITSE), sähköliityntäjohto adapterilla, ruokailuvälineet, astiasto 6 henkilölle, ruoanlaittovälineet.<br/>
                        Lisäksi autossa olevat käyttötavarat ja laitteet vuokraajan käyttöön koko vuokra-ajaksi. Tarvittaessa tuen matkasi aikana.<br/>
                        Polttoaine ei sisälly hintaan.</p>
                        <h5>9. LISÄPALVELUT (voi ostaa varauksen yhteydessä)</h5>
                        <p>
                        - Loppusiivous 75 €<br/>
                        - WC-kasetin ja harmaavesisäiliön tyhjennys 70 €<br/>
                        - Taittopöytä + tuolit (4kpl) 35 €<br/>
                        - Retkituolit 6€/kpl <br />
                        - Kaasugrilli + kaasupullo 45 €<br/>
                        - Pidennetty viikonloppu 100 €<br/>
                        - Toimitus kotiovelle 1.50€/km (kuitenkin vähintään 50 €)<br/>
                        - Sähköpotkulauta 10€/ vrk 
                        </p>
                        <h5>10. VAKUUTUKSET JA VASTUUT</h5>
                        <p>Matkailuautossa on liikenne- ja kaskovakuutus. Täyskasko korvaa matkailuauton vahingot törmäysonnettomuudessa. 
                        Lisäksi täyskasko korvaa vaunu-, eläin-, ilkivalta-, palo- ja varkausvahingot. Matkailuautossa on myös lasivakuutus.<br/>
                        Vuokraajan omavastuu kussakin vahinkotapauksessa on 700 €. Mikäli autolle sattuu vahinko auton vuokra-aikana, 
                        maksetaan omavastuuosuus 700 € seitsemän päivän kuluessa vuokra-ajan päättymisestä. Panttimaksu voidaan käyttää osasuorituksena vakuutuksen omavastuuosuudesta.
                        Jos matkailuautolle koituneet vahingot johtuvat vuokraajan tahallisuudesta, huolimattomuudesta, tai matkailuauton väärinkäytöstä tai 
                        jos kuljettaja on vahingon sattuessa alkoholin tai huumaavien aineiden vaikutuksen alainen, tai jos vakuutusyhtiö ei suostu korvaamaan matkailuautolle sattunutta vahinkoa, 
                        tulee vuokralaisen korvata kaikki aiheutuneet vahingot kokonaisuudessaan välittömästi vahinkojen euromääräisen summa tultua ilmoitetuksi vuokraajalle.<br/>
                        Vuokraaja on velvollinen maksamaan kaikkine kustannuksineen vuokra-aikana asuntoauton käyttämisestä aiheutuvat pysäköinti- ja pysäköintivirhemaksut, ylinopeussakot, 
                        rangaistusvaatimukset, ylikuormamaksut sekä muut haltijavastuun perusteella vuokranantajalle määrätyt maksut.</p>
                        <h5>11. HENKILÖTIEDOJEN KERÄÄMINEN</h5>
                        <p>Vuokraaja hyväksy henkilötietojen keräämisen ja säilyttämisen. 
                        Vuokranantaja ei jaa henkilötietoja ulkopuolisille, paitsi kuin vakuutuksiin liittyvissä tai oikeudellisen perinnän tapauksissa viranomaisille, jotka hoitavat liikenne-, pysäköinti- tai vastaavia rikkomuksia.</p>
                    </section>                   
                </div>

                <div className='flexbox-item'>
                    <section>
                        <h5>12. MATKAILUAUTON LUOVUTUS VUOKRAAJALLE</h5>
                        <p>Vuokranantaja luovuttaa matkailuauton vuokraajalle vuokrasopimuksessa mainittuna aikana vuokranantajan ilmoittamassa paikassa. 
                        Ennen matkailuauton luovutusta vuokranantaja ja vuokraaja tarkistavat yhdessä auton ja merkitsevät ylös mahdolliset puutteet, vauriot tai rikkoutuneet osat.<br/>
                        Vuokranantaja huolehtii siitä, että auton raikasvesisiäiliö on täynnä ja harmaavesisäiliö sekä Wc-kasetti ovat tyhjennettynä vuokraajan ottaessa auton haltuunsa.
                        Vuokranantaja ei ole vastuussa matkan viivästymisen tai peruuntumisen aiheuttamista kustannuksista tai mistään muistakaan välittömistä tai välillisistä vuokraajalle aiheutuneista kustannuksista. 
                        Vuokranantaja voi hyvittää osan vuokrahinnasta viivästyksen ajalta suhteessa koko vuokra-ajan hintaan.</p>
                        <h5>13. MATKAILUAUTON KÄYTTÖ</h5>
                        <p>Vuokraaja sitoutuu käyttämään asuntoautoa vain sille tarkoitetulla tavanomaisella tavalla. Vuokraaja noudattaa ajaessaan erityistä varovaisuutta ja huolellisuutta. 
                        Peruuttamistilanteissa on edettävä hyvin hitaasti ja tilannetta tulee tarkkailla myös auton ulkopuolelta törmäyksen välttämiseksi.<br/>
                        Vuokraaja on vuokra-aikana velvollinen huolehtimaan matkailuauton normaaleista tarkistuksista, kuten rengaspaineista, öljyn ja jäähdytysnesteen määrästä yms. 
                        Vuokraajan on käytettävä sähkölaitteita niin, etteivät auton akut pääse täysin tyhjenemään. Jos auton starttiakku on tyhjentynyt vuokraajan omasta huolimattomuudesta, 
                        silloin on vuokraaja velvollinen itse hoitamaan auton käynnistyksen/ akkujen lataamisen niin, että auto saadaan käyntiin. 
                        Vuokraajaa suositellaan kytkemään auto leiriytyessä verkkovirtaan, jolloin voidaan parhaiten varmistaa auton sähkölaitteiden toimivuus ja akkujen latautuminen.<br/>
                        Autossa on lähtiessä täysi tankki dieselpolttoainetta ja se palautetaan tankki täytenä. Autoon saa tankata vain dieselpolttoainetta. 
                        Vuokraaja on korvausvelvollinen väärän polttoaineen aiheuttamista kustannuksista ja siitä johtuvan auton seisonta-ajan vuokrasta enintään 30pv saakka.<br/>
                        Vuokraaja lukitsee asuntoauton aina poistuessaan sen läheisyydestä. Autoa ei saa pysäköidä paikkaan, jossa se on alttiina ilkivallalle.<br/>
                        Vuokraaja perehtyy auton käyttöohjeisiin, jotka löytyvät ohjekansiosta.<br/>
                        Vuokraajan on aina liikkeelle lähdettäessä varmistettava, että kaikki kaapit, ikkunat, ovet ja kattoluukut on suljettu, sähköinen porras on nostettu yläasentoon ja 
                        ettei mitään tavaraa ole pöytätasoilla tai paikassa, josta ne voisivat esim. äkkijarrutuksen tai törmäyksen voimasta lentää pois ja vahingoittaa auton matkustajia, 
                        muita sivullisia tai autoa. Auton kattoikkunat on pidettävä suljettuina ajettaessa ja sateella.<br/>
                        Matkailuauton käyttäminen lainvastaisiin tarkoituksiin, kilpailuihin tai niiden harjoituksiin, ajo-opetukseen sekä jäällä ajamiseen virallisesti merkittyjen jääteiden ulkopuolella on kielletty.<br/>
                        Vuokraajalla ei ole oikeutta vuokrata autoa edelleen kolmannelle henkilölle.</p>
                        <h5>14. AUTON PALAUTTAMINEN</h5>
                        <p>Auto palautetaan vuokrasopimuksessa sovittuun paikkaan vuokrasopimuksessa mainittuun palautusajankohtaan mennessä. Auto palautetaan huolellisesti siivottuna, tankki täynnä dieseliä,
                        kasetti-wc sekä vesisäiliö tyhjennettynä, ja muutoinkin sellaisessa kunnossa kuin auto oli luovutushetkellä. Auton on oltava tyhjennetty, siivottu ja luovutuskunnossa vuokrasopimukseen merkittyyn palautusaikaan mennessä. 
                        Paitsi jos on ostettu vastaava lisäpalvelu tai sovittu kirjallisesti.<br/>
                        Siivous käsittää: <br/>
                        -	omien tavaroiden ja roskien poisviennin <br/>
                        -	roska-astiat tulee olla tyhjennetty ja siistit <br/>
                        -	astioiden ja ruokailuvälineiden tulee olla pestynä ja paikoillaan <br/>
                        -	jääkaapin, lavuaarin, lieden ja pöytien pyyhkimisen <br/>
                        -	lattian lakaisun <br/>
                        -	WC:n likasäiliön tyhjennyksen ja puhdistuksen <br/>
                        <br />
                        Vuokra-aikaan kuluvien kilometrien ylittyessä, maksetaan ylimenevät kilometrit 0,35€ /km palautuksen yhteydessä.<br/>
                        Tankkauksesta on esitettävä kuitti autoa palauttaessa.<br/>
                        Vuokranantaja ei hyvitä käyttämättä jäänyttä kaasua vuokraajalle.<br/>
                        Autoa palautettaessa vuokralle antaja ja vuokralainen tarkistavat auton yhdessä. Tässä tarkistuksessa havaituista vioista ja puutteista, joita ei ole ollut vuokra-ajan alkaessa ja 
                        jotka eivät ole tavanomaista kulumista, on vuokralainen vahingonkorvausvastuussa vuokranantajalle.<br/>
                        Vuokranantajalla on oikeus periä vuokraajan ilmoittamatta jättämät vahingot ja puutteet myös jälkikäteen, vaikka niitä ei olisikaan huomattu heti lopputarkastuksen yhteydessä.
                        Mikäli auto palautetaan myöhässä sovitusta ajankohdasta, on vuokranantajalla oikeus periä korvaus vuokrasopimuksen laiminlyönnistä seuraavasti: <br/>
                        -	100€ jos auto on myöhässä 0,5h-3h sovitusta palautusajankohdasta <br/>
                        -	400€ jos auto on myöhässä yli 3h sovitusta palautusajankohdasta <br/>
                        Jos matkailuautoa ei ole palautettu vuokra-ajan päättyessä eikä vuokra-ajan pidentämisestä ole sovittu etukäteen, asia ilmoitetaan viranomaisille ja 
                        vuokralainen on tämän lisäksi velvollinen maksamaan vuokranantajalle myöhästymiskorvausta 500€/päivä.<br/>
                        Jos vuokraaja palauttaa matkailuauton ennen sovitun vuokra-ajan päättymistä, vuokra määräytyy koko sovitun vuokra-ajan mukaan 
                        eikä vuokranantaja ole velvoitettu palauttamaan osaa vuokrasta vuokraajalle.<br/>
                        Autoa ei saa palauttaa omatoimisesti ilman vuokralle antajan läsnäoloa. Vuokraaja ilmoittaa vuokralle antajalle kaikista sattuneista vahingoista ja 
                        havaitsemistaan puutteista viimeistään palautuksen yhteydessä.<br/>
                        Vuokranantajalla on oikeus periä mm. seuraavat kustannukset vuokralaiselta, mikäli vuokralainen on laiminlyönyt vuokrasopimuksessa esitetyt asiat: <br/>
                        -	sisäsiivous 170 € <br/>
                        -	harmaavesisäiliön tyhjennys 50 € <br/>
                        -	wc-kasetin tyhjennys 60 € <br/>
                        -	auton tankkaus 200 € <br/>
                        Vuokrasopimuksen laiminlyönneistä lähetetään lasku vuokraajalle korvaamaan edellä mainitut kulut vuokranantajalle, 7 päivän maksuajalla.
                        </p>
                        <h5>15. JÄLKILASKUTUS</h5>
                        <p>Vuokrasopimuksen allekirjoituksella vuokraaja hyväksyy myös mahdollisen jälkilaskutuksen, mikäli auto ei palautettaessa täytä sopimuksen mukaisia ehtoja tai mikäli vuokra-aikana on tapahtunut sellainen vahinko, 
                        josta vuokrasopimuksen perusteella syntyy vuokraamolle saatavia. Siksi on tärkeää, että vuokraaja tarkistaa auton kunnon huolellisesti vuokraushetkellä.</p>
                        <h5>16. VUOKRASOPIMUSTA KOSKEVAT ERIMIELISYYDET</h5>
                        <p>Erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla. Mikäli erimielisyys saatettaisiin tuomioistuimen ratkaistavaksi, asian ratkaisee vuokranantajan kotipaikan käräjäoikeus.</p>       
                    </section>

                    <a href='Vuokrausehdot.pdf' download='Vuokrausehdot.pdf'>
                        <button className='ehdotBtn'>Vuokrausehdot PDF</button>
                    </a>
                </div>
            </div>
            <BackToTopBtn/>
        </div>
    )
}

export default Vuokrausehdot
