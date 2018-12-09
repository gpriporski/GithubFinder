class Github {
  constructor() {
    this.client_id = 'a8fc3bddf9573f8dfe49';
    this.client_secret = '33d656c3d58ebafb10a544afa699b282b09b971a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  //Get User Method || we will have two responses - one for user and one for user repos
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user} ? client_id = ${this.client_id} & client_secret = ${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, //same as profile: profile. When r the same no need of them
      repos
    }
  }
}