module.exports = {
  apps: [
    {
      name: 'Firebase',
      script: 'firebase emulators:start',
      watch: ["build/assets.json"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'Remix',
      script: 'remix watch',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
