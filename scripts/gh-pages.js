var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/korudigital/korudigital.github.io.git', // Update to point to your repository
        user: {
            name: 'kiwimind', // update to use your name
            email: 'glenn@dudeshouse.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)