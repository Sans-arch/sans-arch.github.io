import fs from 'fs';

async function fetchRepos() {
 const response = await fetch('https://api.github.com/users/Sans-arch/repos');
 const repos = await response.json();

  fs.writeFileSync('public/repos.json', JSON.stringify(repos, null, 2));
}

fetchRepos();
