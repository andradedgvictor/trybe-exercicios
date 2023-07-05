const fetchRandomUser = async () => {
  const apiUrl = 'https://api.randomuser.me/';
  
  try {
    const response = await fetch(apiUrl);

    if (!response) {
      throw new Error('Sem resposta da API');
    }
    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};

export default fetchRandomUser;
