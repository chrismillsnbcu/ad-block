<script>
  // MPS ad blocker detection.
  var adBlockEnabled = true;
  var adBlockTimer = 0;
  // MPS Adblock.
  mps._adBlock = function() {

    adBlockTimer = adBlockTimer + 1000;

    if(adBlockEnabled === true || mps._gptError === true) {
      // Omniture ad blocking variables.
      _satellite.setVar('ad blocker enabled', 'ads blocked');
      _satellite.track('ad blocker enabled');
    }

    // GPT not loaded async, recheck in 1s.
    if(mps._gptError === undefined && adBlockTimer < 11000) {
      debugmode.log && console.log('mps._gptError is undefined, check again.  Try ' + adBlockTimer / 1000 + ' of 10.');
      setTimeout(mps._adBlock, 1000);
      return false;
    }

  };

  // Ad blockers will block this file.
  var ads = document.createElement('script');
  ads.src = '//'+mpsopts.host+'/js/advertising/ads.js';
  ads.type = 'text/javascript';
  ads.async = false;
  ads.onload = function() { setTimeout(mps._adBlock, 500);},
  ads.onerror = function() { setTimeout(mps._adBlock, 500);},
  document.getElementsByTagName('head')[0].appendChild(ads);
</script>