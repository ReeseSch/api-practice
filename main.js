// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const button = document.querySelector('button')
const body = document.querySelector('div')
const errorCallBack = err => console.log(err)
// const app = express();
// app.use(express.json())
// app.use(cors())

const clicked = () => {
    console.log(`You clicked a button! You must be so proud`)
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res) => {
        console.log(res.data)
        let residents = res.data.results[0].residents
        for( let i = 0; i <= residents.length; i++ ) {
            axios.get(residents[i]).then((res) => {
                console.log(res.data.name)
                const nameDisplay = document.createElement('h2')
                let name = res.data.name
            nameDisplay.textContent = `${name} lives on Alderaan! Fascinating!!!`
            body.append(nameDisplay)
        }).catch(errorCallBack)
    }}).catch(errorCallBack)
}   


button.addEventListener('click', clicked)