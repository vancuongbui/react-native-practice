1. npm run eject:
    which kind of app: react-native
    text: practice-1
    android/ios: react-native   (rncource)

2. Handle Previous State
    constructor(props) {
      super(props)
    
      this.state = {
        placeName: '',     //set the input default value=''
        places: [],
        };
    };
    onAddBtnHandler = () => {
        if (this.state.placeName.trim() ==='') {
            return;
        }
        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            };
        });
    }

