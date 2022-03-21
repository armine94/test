const imageAPI = {

    async getImages(search) {
        var url = new URL(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PATH}`)

        var params = {
                        query: search,
                        client_id: process.env.REACT_APP_ACCESS_KEY,
                        per_page: process.env.REACT_APP_PER_PAGE,
                        page: process.env.REACT_APP_PAGE
                    }

        url.search = new URLSearchParams(params).toString();

        let result = await fetch(url)

        return await result.json()
    }
}

export default imageAPI;
