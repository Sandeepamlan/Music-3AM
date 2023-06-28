let http = new XMLHttpRequest();

http.open('get','playlist.json',true);

http.send();

http.onload=function(){

    if(this.readyState==4 && this.status==200){
        let music=JSON.parse(this.responseText);
        console.log(music);

            let output="";
            for(let item of music){
                let t=item.duration;
                  output +=`
                  <div class="musics">
                    <img src="${item.artworkUrl}" alt="">
                    <p class="genre">${item.user.username}</p>
                    <h2 class="title">${item.title}</h2>
                    <p class="year">${item.release_year}</p>
                     
                    </div>
                 `
          }
          console.log(output);
        document.querySelector(".songs").innerHTML=output;
    }
}




