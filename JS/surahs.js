let theSurahs=document.querySelector(".surahs");
let surahContent=document.querySelector(".surahContent");
function gettingSurah () {
    // Fetch api surah
    fetch("http://api.alquran.cloud/v1/quran/edition").then((response) => response.json()).then(result => {
        console.log(result);
        // Create all surahs
        for(let i=0; i<result.data.surahs.length; i++) {
            // Create div to carray all surahs;
            let surahsContainer=document.createElement("div");
            surahsContainer.className="surah";

            let arabicSurah=document.createElement('div');
            arabicSurah.className="surahByArabic";

            let div=document.createElement('div');
            div.className="surahdetails";

            let surahdetail=document.createElement("p");
            surahdetail.className="surahArabicName";

            let surahNumber=document.createElement("span");
            surahNumber.innerHTML=` [ ${result.data.surahs[i].number} ] `;

            let surahName=document.createElement("span");
            surahName.textContent=`${result.data.surahs[i].name}`;

            surahdetail.append(surahNumber, surahName);

            let ayahsNumber=document.createElement("p");
            ayahsNumber.textContent=`[ ${result.data.surahs[i].ayahs.length} ]  أيات`;

            div.append(surahdetail, ayahsNumber);

            arabicSurah.append(div);

            // Surah by English
            let EnglishSurah=document.createElement('div');
            EnglishSurah.className="surahByEng";

            let divSurahEng=document.createElement('div');
            divSurahEng.className="surahdetails";

            let surahEngdetail=document.createElement("bdi");
            surahEngdetail.className="surahEngName";

            let surahEngNumber=document.createElement("span");

            surahEngNumber.textContent=` [ ${result.data.surahs[i].number} ] `;
            let surahEngName=document.createElement("span");
            surahEngName.textContent=`${result.data.surahs[i].englishName}`;

            surahEngdetail.append(surahEngNumber, surahEngName);

            let ayahsEngNumber=document.createElement("bdi");
            ayahsEngNumber.className="ayahsNum";
            ayahsEngNumber.textContent=` [ ${result.data.surahs[i].ayahs.length} ] Ayahs `;

            divSurahEng.append(surahEngdetail, ayahsEngNumber);

            EnglishSurah.append(divSurahEng);

            surahsContainer.append(arabicSurah, EnglishSurah);
            theSurahs.append(surahsContainer);

            // By Clicking in each surah the surah will appear directly
            surahsContainer.addEventListener("click", () => {
                theSurahs.classList.add("toggleBtn");
                surahContent.innerHTML="";
                // Create divContainer for surah
                let divSurahContainer=document.createElement("div");
                divSurahContainer.className="surahText";

                let div=document.createElement("div");
                div.className="nameSurahText";

                let surahname=document.createElement("p");
                surahname.className="sname";

                surahname.innerHTML=`${result.data.surahs[i].name}`;
                div.append(surahname);
                surahContent.append(div);
                surahContent.append(divSurahContainer);

                for(let j=0; j<result.data.surahs[i].ayahs.length; j++) {
                    let ayaDiv=document.createElement("div");
                    ayaDiv.className="ayahDiv";
                    ayaDiv.innerHTML=` ${result.data.surahs[i].ayahs[j].text}  [${j+1}] `;
                    divSurahContainer.append(ayaDiv);
                }

                function buttons () {
                    let nextAndPrevious=document.createElement("div");
                    nextAndPrevious.className="nextAndPreviousBtn";

                    let next=document.createElement("i");
                    next.className="fa-solid fa-less-than next";
                    let previos=document.createElement("i");
                    previos.className="fa-solid fa-greater-than previous";

                    nextAndPrevious.append(next, previos);
                    surahContent.append(nextAndPrevious);
                }
                buttons();
                surahContent.addEventListener("click", (e) => {
                    if(e.target.classList.contains("next")) {
                        if(i==113) {
                            i=-1;
                        }
                        i++;
                        surahContent.innerHTML="";
                        // Create divContainer for surah
                        let divSurahContainer=document.createElement("div");
                        divSurahContainer.className="surahText";

                        let div=document.createElement("div");
                        div.className="nameSurahText";

                        let surahname=document.createElement("p");
                        surahname.className="sname";
                        surahname.innerHTML=`${result.data.surahs[i].name}`;
                        console.log(result.data.surahs[i].name);
                        div.append(surahname);
                        divSurahContainer.append(div);
                        surahContent.append(divSurahContainer);

                        for(let k=0; k<result.data.surahs[i].ayahs.length; k++) {
                            // console.log(result.data.surahs[i].ayahs[k].text); 
                            let ayaDiv=document.createElement("div");
                            ayaDiv.className="ayahDiv";
                            ayaDiv.innerHTML=` ${result.data.surahs[i].ayahs[k].text}  [${k+1}] `;
                            divSurahContainer.append(ayaDiv);
                        }
                        buttons();
                        console.log(i);
                    }
                });
                surahContent.addEventListener("click", (e) => {
                    if(e.target.classList.contains("previous")) {
                        if(i==0) {
                            i=114;
                        }
                        i--;
                        surahContent.innerHTML="";
                        // Create divContainer for surah
                        let divSurahContainer=document.createElement("div");
                        divSurahContainer.className="surahText";

                        let div=document.createElement("div");
                        div.className="nameSurahText";

                        let surahname=document.createElement("p");
                        surahname.className="sname";
                        surahname.innerHTML=`${result.data.surahs[i].name}`;
                        console.log(result.data.surahs[i].name);
                        div.append(surahname);
                        divSurahContainer.append(div);
                        surahContent.append(divSurahContainer);

                        for(let k=0; k<result.data.surahs[i].ayahs.length; k++) {
                            // console.log(result.data.surahs[i].ayahs[k].text); 
                            let ayaDiv=document.createElement("div");
                            ayaDiv.className="ayahDiv";
                            ayaDiv.innerHTML=` ${result.data.surahs[i].ayahs[k].text}  [${k+1}] `;
                            divSurahContainer.append(ayaDiv);
                        }
                        buttons();
                        console.log(i);
                    }
                });
            });
        }
    });
}
gettingSurah();

