setInterval(() => {
        const d = new Date();
        const hrsTime = d.getHours();
        const minTime = d.getMinutes();
        const secTime = d.getSeconds();
        const hrotation = 30 * hrsTime + minTime / 2;
        const mrotation = 6 * minTime;
        const srotation = 6 * secTime;
        document.querySelector(".hours").style.transform = `rotate(${hrotation}deg)`;
        document.querySelector(".minutes").style.transform = `rotate(${mrotation}deg)`;
        document.querySelector(".seconds").style.transform = `rotate(${srotation}deg)`;
    }, 1000);
