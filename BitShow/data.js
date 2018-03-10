const dataModule = (() => {
    const constants = {
        baseUrl: "http://api.tvmaze.com/shows"
    }

    // Our entities/models/dto 
    class TvShow {
        constructor(id, name, url) {
            this.id = id
            this.name = name
            this.url = url
        }

        getData() {
            const { id, username } = this
            return `ID: ${id}, UN: ${username}`
        }
    }

    // Exposed functions
    const adaptData = (shows) => {
        const showList = shows.map((show) => {
            const url = show.image.medium;
            const { id, name } = show;
            return new TvShow(id, name, url);
        })

        return showList;
    }

    return {
        constants,
        adaptData
    }


})();