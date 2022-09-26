// let d=document.createElement("div");
// d.classList.add("two");

// let h=document.createElement("h1");
// h.append("New");

// d.append(h);

// document.querySelector(".one").append(d);

// project js 

let musics=[
    {
        id:14,
        name:"Har kisi ko",
        artist:"Arjit Singh",
        audioSrc:"audios/05 Har Kisi Ko - Boss [PagalWorld.com].mp3",
        imageSrc:"images/thumb-boss-2013-hindi-movie-mp3-songs-300.jpg"
    },
    {
        id:10,
        name:"Pasoori",
        artist:"CokeStudio",
        audioSrc:"audios/Pasoori - Shae Gill.mp3",
        imageSrc:"images/148772-pasoori-mp3-song-300.jpg"
    },
    {
        id:11,
        name:"Jiyein Kyun",
        artist:"Papon",
        audioSrc:"audios/38   Jiyein Kyun (Dum Maaro Dum).mp3",
        imageSrc:"images/Jiyein-Kyun-Dum-Maaro-Dum-500-500.jpg"
    },
    {
        id:12,
        name:"Closer",
        artist:"Taylor Swift",
        audioSrc:"audios/Closer---The-Chainsmokers-ft.-Halsey(pagolworld.nl).mp3",
        imageSrc:"images/2579_6.jpg"
    },
    {
        id:13,
        name:"Duaa",
        artist:"Nandini Srikar",
        audioSrc:"audios/128-Duaa - Shanghai 128 Kbps.mp3",
        imageSrc:"images/128Duaa - Shanghai 128 Kbps.jpg"
    },

    {
        id:1,
        name:"Hymn For The Weekend",
        artist:"Coldplay",
        audioSrc:"audios/Coldplay - Hymn For The Weekend (Official Video).mp3",
        imageSrc:"images/hymn for the weekend.jpg"
    },
    {
        id:2,
        name:"Kyun Mai Jaagoon",
        artist:"Shafqat Amanat Ali",
        audioSrc:"audios/_Kyun Main Jaagoon_ Full Song Patiala House _ Akshay Kumar.mp3",
        imageSrc:"images/kyun mai jagoon.jpg"
    },
    {
        id:3,
        name:"Bad Liar",
        artist:"Imagine Dragons",
        audioSrc:"audios/Imagine Dragons - Bad Liar (Official Music Video).mp3",
        imageSrc:"images/bad liar.jpg"
    },
    {
        id:4,
        name:"Ishq Bhi Kiya",
        artist:"Ali Azmat",
        audioSrc:"audios/Ishq Bhi Kiya Re Maula Full Video Song Jism 2 _ Sunny Leone, Randeep Hooda, Arunnoday Singh.mp3",
        imageSrc:"images/ishq bhi kiya.jpg"
    },
    {
        id:5,
        name:"Mai Jahan Rahoon",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"audios/Main Jahaan Rahoon (Full Audio Song) - Namastey London - Akshay Kumar - Rahat Fateh Ali Khan.mp3",
        imageSrc:"images/mai jahan rahoon.jpg"
    },
    {
        id:6,
        name:"Sugar",
        artist:"Maroon 5",
        audioSrc:"audios/Maroon 5 - Sugar (Official Music Video).mp3",
        imageSrc:"images/sugar.jpg"
    },
    {
        id:7,
        name:"Namo Namo",
        artist:"Amit Trivedi",
        audioSrc:"audios/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3",
        imageSrc:"images/namo namo.webp"
    },
    {
        id:8,
        name:"Blank Space",
        artist:"Taylor Swift",
        audioSrc:"audios/Taylor Swift - Blank Space.mp3",
        imageSrc:"images/blank space.jpg"
    },
    {
        id:9,
        name:"Yaar Ni Mileya",
        artist:"Hardy Sandhu",
        audioSrc:"audios/Yaarr Ni Milyaa (Full Song) Harrdy Sandhu _ B Praak _ Jaani _ Arvindr Khaira _ Punjabi Songs 2018.mp3",
        imageSrc:"images/yaar ni milya.webp"
    }


]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;
    imageSrc.alt="/"

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
//     document.querySelector(".audio").pause();
}
