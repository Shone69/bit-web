const uiModule = (($) => {

    const $dataElement = $(".data")

    const displayShows = (shows) => {
        const $container = $(".row");

        shows.forEach(show => {
            const { url, name } = show
            const div = `
                <div class=" col-sm-4 col-md-4 "  >
                    <img src="${url}" alt="${name}">
                    <h4>${name}</h4>
                </div>
            `   
             $container.append(div);
        });
    }

    const createShow = (show) => {
        const { url, name } = show

        return $(`
            <div>
                <img src="${url}" alt="${name}" style="">
                <h4>${name}</h4>
            </div>
        `)
    }


    const displayError = (error) => {
        $dataElement.innerHTML = "<h3>Error</h3>"
    }

    return {
        displayShows,
        displayError
    }

})(jQuery);