const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach(sound => {
    const btn = document.createElement('button');

    btn.classList.add('btn');
    btn.innerHTML = sound;
    btn.addEventListener('click', () => {
        console.log('tiklandi')
        stopSongs();
        document.getElementById(sound).play();
    })


    document.getElementById('buttons').appendChild(btn)
})


let stopBtn = document.createElement('button')
stopBtn.classList.add('btn')
stopBtn.innerHTML ='Stop'
document.getElementById('buttons').appendChild(stopBtn)
stopBtn.addEventListener('click' , stopSongs);
stopBtn.style.backgroundColor = "red"



//  Stop Function
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0
    })
}