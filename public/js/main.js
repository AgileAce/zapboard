setTimeout(function () {
    $('.progress-bar-animate').each(function () {
        var progressBar = $(this);
        var perc = progressBar.attr("data-percentage");
        var current_perc = 0;
        var progress = setInterval(function () {
            if (current_perc >= perc) {
                clearInterval(progress);
            } else {
                current_perc += 1;
                progressBar.css('width', (current_perc) + '%');
            }
        }, 0);
    });
}, 0);