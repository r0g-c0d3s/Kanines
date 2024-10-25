window.addEventListener('load', function () {
  if (window.Bandit) {
    // REPLACE API KEY
    const bandit = new window.Bandit.init({apiKey: "3318658376c541479db7537d19149fc2", cluster: "mainnet" });
    bandit.mountCampaign({campaignId: 3175}, 'root');
  } else {
    console.error('Bandit library failed to load.');
  }
});