const app = Vue.createApp({
    data() {
        return {
           valueInput: '',
           confirmedValue: '', 
           valueInput2: '',
           confirmedValue2: '',
           visible: false,
        }
    },
    computed: {
        paragrafClass() {
            if(this.confirmedValue === "user1") {
                return "user1";
            }
            if(this.confirmedValue === "user2") {
                return "user2";
            }
        },
        paragrafClass2() {
            return `background-color: ${this.confirmedValue2};`
        }
    },
    methods: {
        addValueInput() {
            this.confirmedValue = this.valueInput;
            this.valueInput = '';
            return this.confirmedValue;
        },
        addValueInput2() {
            this.confirmedValue2 = this.valueInput2;
            this.valueInput2 = '';
            return this.confirmedValue2;
        },
        toggleButton() {
           return this.visible = !this.visible;
            
        }
    }
    });
    
    app.mount('#assignment');