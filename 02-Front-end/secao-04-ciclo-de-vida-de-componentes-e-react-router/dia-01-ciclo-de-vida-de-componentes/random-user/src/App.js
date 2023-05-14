import React from 'react';
import UserInfos from './components/UserInfos';
import fetchRandomUser from './api';

class App extends React.Component {
  state = {
    loading: true,
    userImage: '',
    userName: '',
    userEmail: '',
    userAge: '',
  };

  getUser = async () => {
    try {
      const user = await fetchRandomUser();
      if (!user) {
        throw new Error('Erro na chamada da API')
      }
      this.setState({
        loading: false,
        userImage: user[0].picture.thumbnail,
        userName: user[0].login.username,
        userEmail: user[0].email,
        userAge: user[0].dob.age, 
      })  
    } catch (error) {
      throw error;
    }
  }
  
  async componentDidMount() {
    await this.getUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.userAge < AGE) return true;
  }

  render() {
    const { loading, userImage, userName, userEmail, userAge } = this.state;
    return (
      <div>
        {
          loading ? <p>Carregando...</p> 
          : <UserInfos 
          userImage={ userImage }
          userName={ userName }
          userEmail={ userEmail }
          userAge={ userAge }
          />
        }
      </div>
    )
  }
}

export default App;