# Web Application for NLP :

## Using the state to retrieve the user data and to send it wtih post method to django server:
const Login = () => {
    const propStyle = {padding :20 , height :"70vh" , width :280 , margin :"20px auto"};
    const styleAvatar = {backgroundColor : 'green'};
    const preventDefault = (event) => event.preventDefault();
    const btnStyle ={margin :"8px 0 "};
    let [state , setState] = useState({
        name :"",
        pass:""

    });
    
    function updateInputPass(event){
        setState({
            ...state,
            pass :event.target.value
        });
    }

    function updateInputUser(event){
        setState({
            ...state,
            name :event.target.value
        });
    }

   
   
## Creating a user authentication using Post method:
![image](https://user-images.githubusercontent.com/58775369/146248521-70ee5333-4458-4d5b-b5c7-2d71fa95256b.png)
