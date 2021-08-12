import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/korudigital/korudigital.github.io.git', // Update to point to your repository
    user: {
      name: 'Glenn Barr', // update to use your name
      email: 'glenn@korudigital.co.uk' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);