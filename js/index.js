
var root = Vue.createApp({
    // Data Properties
    data() {
        return {
            info: '',
            titles_array: [],
            image: '',
            ingredients_array: [],
            cooking_time: '',
            instructions: '',
            servings: '',
            sourceName: '',
            sourceUrl: '',
            title: ''
        }
    },
    methods:{
        
        // Vegetarian
        v_get_random_recipe() {

            console.log("==== START vegetarian random recipe ====")
        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random'
            
            let params = {
                tags: 'vegetarian,dessert', number: '1'
            }
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{params, headers})
            .then(response => {
                console.log(response.data)
            })

            .catch(error => {
                console.log(error.message)
                })

    },

        // Gluten Free
        gf_get_random_recipe() {

            console.log("==== START gluten free random recipe ====")

        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random'
            
            let params = {
                tags: 'glutenFree,dessert', number: '1'
            }
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{params, headers})
            .then(response => {
                console.log(response.data)
            })

            .catch(error => {
                console.log(error.message)
                })
        }, 

        // Gluten Free
        f_get_random_recipe() {

            console.log("==== START gluten free random recipe ====")

        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random'
            
            let params = {
                tags: 'glutenFree,dessert', number: '1'
            }
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{params, headers})
            .then(response => {
                console.log(response.data)
            })

            .catch(error => {
                console.log(error.message)
                })
        }
    },

    created: function(){
        this.v_get_random_recipe()
        this.gf_get_random_recipe()
    }
})
root.mount("#root")


































