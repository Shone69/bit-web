const mainModule = ((data, ui) => {
    const init = () => {
        const { baseUrl } = data.constants;
        fetchShows(baseUrl)
    }

    const fetchShows = (url) => {
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }
    $(".search").change(function(){
        alert("The text has been changed.");
    });

    // Our handlers for shows
    const onSuccessHandler = (response) => {
        const shows = response.slice(0, 50);
 
        const adaptedShows = data.adaptData(shows);
        console.log(adaptedShows)

        ui.displayShows(adaptedShows);
    }

    const onErrorHandler = (error) => {
        // console.log(error)
        // ui.displayError(error)
    }

    return {
        init
    }

})(dataModule, uiModule);
