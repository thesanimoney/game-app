import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aee44b4801ef46cebd02cda27a088e51'
    }
})

