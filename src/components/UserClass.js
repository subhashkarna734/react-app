import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: 'dummy'
            }
        };

    }
    async componentDidMount() {
        let res = await fetch('https://api.github.com/users/subhashkarna734');
        let data = await res.json();
        this.setState({
            userInfo: data
        })
    }
    componentDidUpdate(){
        console.log('component did update')
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }

    render() {
        const { login } = this.state.userInfo
        return (
            <div className="user-cards">
                <h2>Name : {login}</h2>
            </div>
        )
    }
}

export default UserClass