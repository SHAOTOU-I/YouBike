// 程式碼寫這裡
document.addEventListener("DOMContentLoaded" , () => {
   
    const api = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
    
    const keyword = document.querySelector("#searchKeyword")
    const form = document.querySelector("#searchForm")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const query = keyword.value.trim();

        if (query != ""){
            fetch(api).then(reponse => {
                return reponse.json()
            })
            .then(site => {
                const siteList = document.querySelector(".siteList")
                siteList.innerHTML = ""
              site.filter (site => {
                return site.ar.includes(query)
               }).forEach (site => {
                const item = ` <li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
                ${site.sna.replace("YouBike2.0_","")} ${site.sbi}<br>
                <small class="text-muted">${site.ar}</small>
              </li>`
              siteList.insertAdjacentHTML("beforeend" , item)
               })  

               
            })
        }
        

    })
})