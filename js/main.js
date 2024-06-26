`use strict`
const { createApp } = Vue;

createApp({
    data() {
        return {
            items: [],
            
        }
    },
    created() {
        this.dischSpotify();
    },
    methods: {
        // API
        async dischSpotify() {
            try {
                const response = await axios.get('http://localhost/php-dischi-json/API/dischi.json');
                this.items = response.data;
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        }
        
    },
}).mount('#app')