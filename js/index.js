var root = Vue.createApp({
    // Data Properties
    data() {
        return {
            info: '',
            item_set: [],
            joke: []

            // id_array: [],
            // name_array: [],
            // image_array: [],
            // ingredients_array: [],
            // cooking_time_array: [],
            // source_url_array: [],
            // instructions: '',
            // servings: '',
            // sourceName: '',
            // sourceUrl: '',
            // title: ''
        }
    },
    methods:{
        
        // Get a Random Joke
        get_joke() {

            console.log("==== START joke ====")
        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random'

            
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{headers})
            .then(response => {
                

                // Prevent Jokes that are too long
                console.log("Joke Length: " + response.data.text.length)
                if(response.data.text.length > 200){
                    this.get_joke()
                } else {
                    console.log(response.data.text)
                    this.joke.push(response.data.text)
                }
                
                
            })

            .catch(error => {
                console.log(error.message)
                })

    },
        // Cake
        c_get_random_recipe() {

            console.log("==== START vegetarian random recipe ====")
        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random'
            
            let params = {
                tags: 'cake', number: '1'
            }
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{params, headers})
            .then(response => {
                console.log(response.data)
                
                let ing_obj = { 
                    rid: response.data.recipes[0].id,
                    name: response.data.recipes[0].title,
                    imge: response.data.recipes[0].image,
                    time: response.data.recipes[0].readyInMinutes,
                    desc: response.data.recipes[0].summary.split(/\s+/).slice(0,20).join(" ")+ "..."
                    
                }

                console.log("C My obj: " + JSON.stringify(ing_obj))

                this.item_set.push(ing_obj)

                console.log("My Arr " + JSON.stringify(this.item_set))

                // localStorage.setItem('v_recipes', JSON.stringify(this.item_set));
                
            })

            .catch(error => {
                console.log(error.message)
                })

    },
        // Vegetarian
        v_get_random_recipe() {

            console.log("==== START vegetarian random recipe ====")
        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random'
            
            let params = {
                tags: 'vegetarian,dessert', number: '3'
            }
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{params, headers})
            .then(response => {
                console.log(response.data)
                
                let ing_obj = { 
                    rid: response.data.recipes[0].id,
                    name: response.data.recipes[0].title,
                    imge: response.data.recipes[0].image,
                    time: response.data.recipes[0].readyInMinutes,
                    desc: response.data.recipes[0].summary.split(/\s+/).slice(0,20).join(" ")+ "..."
                    
                }

                console.log("V My obj: " + JSON.stringify(ing_obj))

                this.item_set.push(ing_obj)

                console.log("My Arr " + JSON.stringify(this.item_set))

                // localStorage.setItem('v_recipes', JSON.stringify(this.item_set));
                

                
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
                
                let ing_obj = { 
                    rid: response.data.recipes[0].id,
                    name: response.data.recipes[0].title,
                    imge: response.data.recipes[0].image,
                    time: response.data.recipes[0].readyInMinutes,
                    desc: response.data.recipes[0].summary.split(/\s+/).slice(0,20).join(" ")+ "..."
                    
                }

                console.log("GF My obj: " + JSON.stringify(ing_obj))

                this.item_set.push(ing_obj)

                console.log("My Arr " + JSON.stringify(this.item_set))

            })

            .catch(error => {
                console.log(error.message)
                })
        }, 

        // Dairy Free
        df_get_random_recipe() {

            console.log("==== START keto random recipe ====")

        
            let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random'
            
            let params = {
                tags: 'dairyFree,dessert', number: '1'
            }
            
            let headers = {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '4260a9f95dmsh6dc9abc8269b1f2p1a259bjsn8787a499d6e1'
            }

            return axios.get(api_url,{params, headers})
            .then(response => {
                console.log(response.data)
                
                let ing_obj = { 
                    rid: response.data.recipes[0].id,
                    name: response.data.recipes[0].title,
                    imge: response.data.recipes[0].image,
                    time: response.data.recipes[0].readyInMinutes,
                    desc: response.data.recipes[0].summary.split(/\s+/).slice(0,20).join(" ")+ "..."
                    
                }

                console.log(" DF My obj: " + JSON.stringify(ing_obj))

                this.item_set.push(ing_obj)

                console.log("My Arr " + JSON.stringify(this.item_set))

            })

            .catch(error => {
                console.log(error.message)
                })
        }
    },

    created: function(){
        this.get_joke()
        this.c_get_random_recipe()
        this.v_get_random_recipe()
        this.gf_get_random_recipe()
        this.df_get_random_recipe()
        
    }
})

root.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>
      
      <div class="owl-carousel owl-theme">
        <div class="item">
          
          <h4>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, laudantium.</h4>
        </div>
        <div class="item"><h4>2</h4></div>
        <div class="item"><h4>3</h4></div>
        <div class="item"><h4>4</h4></div>
        <div class="item"><h4>5</h4></div>
        <div class="item"><h4>6</h4></div>
        <div class="item"><h4>7</h4></div>
        <div class="item"><h4>8</h4></div>
        <div class="item"><h4>9</h4></div>
        <div class="item"><h4>10</h4></div>
        <div class="item"><h4>11</h4></div>
        <div class="item"><h4>12</h4></div>
    </div>`
  })

  

root.mount("#root")
































