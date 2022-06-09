const currentyear = new Date().getFullYear();
        const currentdate = new Date().getDate()

        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");
        const countDown = document.getElementById("countdown");
        const currentYear = new Date().getFullYear();
        const newYearTime = new Date(`July 2 2022 00:00:00`);
        document.getElementById("year").innerHTML = "2022 | MFarelS"
        document.getElementById("currentyear").innerHTML = "2022"


        function updateCountDown() {
            const currentTime = new Date();
            diff = newYearTime - currentTime;
            const d = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h = Math.floor(diff / 1000 / 60 / 60) % 24;
            const m = Math.floor(diff / 1000 / 60) % 60;
            const s = Math.floor(diff / 1000) % 60;
            days.innerHTML = d;
            hours.innerHTML = h < 10 ? "0" + h : h;
            minutes.innerHTML = m < 10 ? "0" + m : m;
            seconds.innerHTML = s < 10 ? "0" + s : s;
        }
        setInterval(updateCountDown, 1000);
